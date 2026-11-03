"use server";

import { createHash } from "node:crypto";
import { after } from "next/server";
import { enviarEmail, lerConfigEmail } from "@/lib/email";
import { areas, site, whatsappLink } from "@/lib/site";

export type EstadoContato = {
  status: "inicial" | "enviado" | "erro";
  mensagem?: string;
  erros?: Partial<Record<CampoContato, string>>;
  valores?: Partial<Record<CampoContato, string>>;
};

type CampoContato = "nome" | "email" | "telefone" | "area" | "mensagem";

const escapar = (t: string) =>
  t
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Remove quebras de linha que poderiam ser usadas para injetar cabeçalhos.
const umaLinha = (t: string) => t.replace(/[\r\n]+/g, " ");

export async function enviarContato(
  _anterior: EstadoContato,
  formData: FormData,
): Promise<EstadoContato> {
  // Campo invisível: robôs costumam preenchê-lo, pessoas não.
  if (String(formData.get("site") ?? "").trim() !== "") {
    return { status: "enviado" };
  }

  const valores = {
    nome: umaLinha(String(formData.get("nome") ?? "").trim()).slice(0, 120),
    email: String(formData.get("email") ?? "").trim().toLowerCase().slice(0, 160),
    telefone: umaLinha(String(formData.get("telefone") ?? "").trim()).slice(0, 30),
    area: String(formData.get("area") ?? "").trim(),
    mensagem: String(formData.get("mensagem") ?? "").trim().slice(0, 4000),
  };

  const erros: EstadoContato["erros"] = {};
  if (valores.nome.length < 2) erros.nome = "Informe seu nome.";
  if (!/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]{2,}$/.test(valores.email))
    erros.email = "Informe um e-mail válido, como nome@exemplo.com.";
  if (valores.telefone && valores.telefone.replace(/\D/g, "").length < 10)
    erros.telefone = "Inclua o DDD, como (84) 99999-9999.";
  if (valores.mensagem.length < 10)
    erros.mensagem = "Conte um pouco mais sobre o seu caso.";

  if (Object.keys(erros).length > 0) {
    return { status: "erro", mensagem: "Confira os campos destacados.", erros, valores };
  }

  const config = lerConfigEmail();
  if ("erro" in config) {
    console.error(`[contato] E-mail não configurado: ${config.erro} Veja o README.`);
    return {
      status: "erro",
      mensagem:
        "O envio por e-mail está indisponível no momento. Fale com a Dra. Aline pelo WhatsApp.",
      valores,
    };
  }

  const area = areas.find((a) => a.id === valores.area)?.titulo ?? "Não informada";
  const linhas: [string, string][] = [
    ["Nome", valores.nome],
    ["E-mail", valores.email],
    ["Telefone", valores.telefone || "Não informado"],
    ["Área", area],
  ];

  const chave = createHash("sha256")
    .update([valores.nome, valores.email, valores.mensagem].join("|"))
    .digest("hex");

  try {
    await enviarEmail(config, {
      para: config.para,
      responderPara: valores.email,
      assunto: `Novo contato pelo site: ${valores.nome} (${area})`,
      chave: `contato-${chave}`,
      texto: [
        ...linhas.map(([k, v]) => `${k}: ${v}`),
        "",
        "Mensagem:",
        valores.mensagem,
        "",
        "Responda este e-mail para falar diretamente com o cliente.",
      ].join("\n"),
      html: moldura(
        "Novo contato pelo site",
        escapar(valores.nome),
        `
        <table role="presentation" style="width:100%;border-collapse:collapse;margin:8px 0 20px;font-size:14px">
          ${linhas
            .map(
              ([k, v]) =>
                `<tr><td style="padding:9px 0;color:#6a5257;width:110px;border-bottom:1px solid #e3d3bd">${k}</td><td style="padding:9px 0;border-bottom:1px solid #e3d3bd">${escapar(v)}</td></tr>`,
            )
            .join("")}
        </table>
        <p style="font-size:13px;color:#6a5257;margin:0 0 4px">Mensagem</p>
        <p style="font-size:15px;line-height:1.6;white-space:pre-wrap;margin:0">${escapar(valores.mensagem)}</p>`,
        "Responda este e-mail para falar diretamente com o cliente.",
      ),
    });
  } catch (e) {
    console.error("[contato] Falha ao enviar e-mail:", e);
    return {
      status: "erro",
      mensagem:
        "A mensagem não foi enviada. Tente de novo em alguns minutos ou fale pelo WhatsApp.",
      valores,
    };
  }

  // Confirmação ao cliente (opcional, exige domínio verificado).
  // Roda depois da resposta: se falhar, o contato principal já foi entregue.
  if (config.confirmacao) {
    after(async () => {
      try {
        const primeiroNome = escapar(valores.nome.split(" ")[0]);
        await enviarEmail(config, {
          para: [valores.email],
          responderPara: config.para[0],
          assunto: `Recebemos sua mensagem — ${site.nome}`,
          chave: `confirmacao-${chave}`,
          texto: [
            `Olá, ${valores.nome.split(" ")[0]}!`,
            "",
            "Sua mensagem foi recebida e será respondida em até um dia útil.",
            `Se o assunto for urgente, fale pelo WhatsApp: ${site.whatsappExibicao}.`,
            "",
            `${site.nome} — ${site.titulo}, ${site.oab}`,
            site.slogan,
          ].join("\n"),
          html: moldura(
            "Mensagem recebida",
            `Olá, ${primeiroNome}!`,
            `
            <p style="font-size:15px;line-height:1.7;margin:0 0 14px">Sua mensagem foi recebida e será respondida em até um dia útil, pelo e-mail ou telefone informado.</p>
            <p style="font-size:15px;line-height:1.7;margin:0">Se o assunto for urgente, <a href="${whatsappLink()}" style="color:#74182a">fale pelo WhatsApp ${site.whatsappExibicao}</a>.</p>`,
            "Seus dados são usados apenas para responder ao seu contato e ficam protegidos pelo sigilo profissional.",
          ),
        });
      } catch (e) {
        console.error("[contato] Falha ao enviar confirmação ao cliente:", e);
      }
    });
  }

  return { status: "enviado" };
}

/** Layout comum dos e-mails, com a identidade do site (bordô e dourado). */
function moldura(sobretitulo: string, titulo: string, corpo: string, rodape: string) {
  return `<!doctype html>
<html lang="pt-BR"><body style="margin:0;padding:24px 12px;background:#f7f1e8">
  <div style="max-width:560px;margin:auto;background:#fffdf9;border:1px solid #e3d3bd;font-family:Arial,Helvetica,sans-serif;color:#2b171b">
    <div style="background:#4a0e1a;padding:22px 28px">
      <p style="margin:0;font-family:Georgia,serif;font-size:20px;color:#fffdf9">${escapar(site.nome)}</p>
      <p style="margin:4px 0 0;font-size:11px;letter-spacing:2px;color:#dcb983">ADVOGADA · ${escapar(site.oab)}</p>
    </div>
    <div style="padding:26px 28px 8px">
      <p style="margin:0;color:#9a6d36;font-size:12px;letter-spacing:2px;text-transform:uppercase">${sobretitulo}</p>
      <h1 style="margin:6px 0 16px;font-family:Georgia,serif;font-weight:normal;font-size:26px;color:#4a0e1a">${titulo}</h1>
      ${corpo}
    </div>
    <p style="margin:20px 28px 0;padding:14px 0 22px;border-top:1px solid #e3d3bd;font-size:12px;line-height:1.5;color:#6a5257">${rodape}<br><em style="font-family:Georgia,serif;color:#9a6d36">${escapar(site.slogan)}</em></p>
  </div>
</body></html>`;
}
