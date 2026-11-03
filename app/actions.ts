"use server";

import { areas } from "@/lib/site";

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
    .replace(/"/g, "&quot;");

export async function enviarContato(
  _anterior: EstadoContato,
  formData: FormData,
): Promise<EstadoContato> {
  // Campo invisível: robôs costumam preenchê-lo, pessoas não.
  if (String(formData.get("site") ?? "").trim() !== "") {
    return { status: "enviado" };
  }

  const valores = {
    nome: String(formData.get("nome") ?? "").trim().slice(0, 120),
    email: String(formData.get("email") ?? "").trim().slice(0, 160),
    telefone: String(formData.get("telefone") ?? "").trim().slice(0, 30),
    area: String(formData.get("area") ?? "").trim(),
    mensagem: String(formData.get("mensagem") ?? "").trim().slice(0, 4000),
  };

  const erros: EstadoContato["erros"] = {};
  if (valores.nome.length < 2) erros.nome = "Informe seu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valores.email))
    erros.email = "Informe um e-mail válido, como nome@exemplo.com.";
  if (valores.telefone && valores.telefone.replace(/\D/g, "").length < 10)
    erros.telefone = "Inclua o DDD, como (84) 99999-9999.";
  if (valores.mensagem.length < 10)
    erros.mensagem = "Conte um pouco mais sobre o seu caso.";

  if (Object.keys(erros).length > 0) {
    return {
      status: "erro",
      mensagem: "Confira os campos destacados.",
      erros,
      valores,
    };
  }

  // Envio pelo Resend (resend.com) via HTTP — não precisa de pacote extra.
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error(
      "[contato] Configure RESEND_API_KEY e CONTACT_TO_EMAIL nas variáveis de ambiente.",
    );
    return {
      status: "erro",
      mensagem:
        "O envio por e-mail está indisponível no momento. Fale com a Dra. Aline pelo WhatsApp.",
      valores,
    };
  }

  const area =
    areas.find((a) => a.id === valores.area)?.titulo ?? "Não informada";

  const linhas: [string, string][] = [
    ["Nome", valores.nome],
    ["E-mail", valores.email],
    ["Telefone", valores.telefone || "Não informado"],
    ["Área", area],
  ];

  try {
    const corpo = {
      from: CONTACT_FROM_EMAIL || "Site Dra. Aline Maria <onboarding@resend.dev>",
      to: CONTACT_TO_EMAIL.split(",").map((e) => e.trim()),
      reply_to: valores.email,
      subject: `Novo contato pelo site: ${valores.nome} (${area})`,
      text: [
        ...linhas.map(([k, v]) => `${k}: ${v}`),
        "",
        "Mensagem:",
        valores.mensagem,
        "",
        "Responda este e-mail para falar diretamente com o cliente.",
      ].join("\n"),
      html: `
        <div style="font-family:Georgia,serif;max-width:560px;margin:auto;color:#2b171b">
          <div style="border-top:4px solid #4a0e1a;padding:24px 0 8px">
            <p style="margin:0;color:#b0814a;font-size:13px;letter-spacing:2px">NOVO CONTATO PELO SITE</p>
            <h1 style="margin:6px 0 0;font-weight:normal;color:#4a0e1a">${escapar(valores.nome)}</h1>
          </div>
          <table style="width:100%;border-collapse:collapse;margin:16px 0;font-family:Arial,sans-serif;font-size:14px">
            ${linhas
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:8px 0;color:#6a5257;width:110px;border-bottom:1px solid #e3d3bd">${k}</td><td style="padding:8px 0;border-bottom:1px solid #e3d3bd">${escapar(v)}</td></tr>`,
              )
              .join("")}
          </table>
          <p style="font-family:Arial,sans-serif;font-size:14px;color:#6a5257;margin-bottom:4px">Mensagem</p>
          <p style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;white-space:pre-wrap;margin-top:0">${escapar(valores.mensagem)}</p>
          <p style="font-family:Arial,sans-serif;font-size:12px;color:#6a5257;border-top:1px solid #e3d3bd;padding-top:12px">Responda este e-mail para falar diretamente com o cliente.</p>
        </div>`,
    };

    const resposta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(corpo),
      cache: "no-store",
    });

    if (!resposta.ok) {
      throw new Error(`Resend ${resposta.status}: ${await resposta.text()}`);
    }

    return { status: "enviado" };
  } catch (e) {
    console.error("[contato] Falha ao enviar e-mail:", e);
    return {
      status: "erro",
      mensagem:
        "A mensagem não foi enviada. Tente de novo em alguns minutos ou fale pelo WhatsApp.",
      valores,
    };
  }
}
