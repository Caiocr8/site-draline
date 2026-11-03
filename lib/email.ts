
/*
 * Envio de e-mail pelo Resend (resend.com) via API HTTP.
 * Não precisa de pacote extra: é um único POST em https://api.resend.com/emails.
 *
 * Variáveis de ambiente (ver .env.example):
 *   RESEND_API_KEY      chave "re_..." criada em resend.com/api-keys
 *   CONTACT_TO_EMAIL    quem recebe as mensagens (vários separados por vírgula)
 *   CONTACT_FROM_EMAIL  remetente de um domínio verificado no Resend
 *   CONTACT_CONFIRMACAO "sim" para enviar ao cliente um e-mail de confirmação
 */

const REMETENTE_TESTE = "Site Dra. Aline Maria <onboarding@resend.dev>";

export type ConfigEmail = {
  apiKey: string;
  para: string[];
  de: string;
  dominioProprio: boolean;
  confirmacao: boolean;
};

export function lerConfigEmail(): ConfigEmail | { erro: string } {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const para = (process.env.CONTACT_TO_EMAIL ?? "")
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
  const de = process.env.CONTACT_FROM_EMAIL?.trim() || REMETENTE_TESTE;

  if (!apiKey) return { erro: "RESEND_API_KEY não foi definida." };
  if (!apiKey.startsWith("re_"))
    return { erro: 'RESEND_API_KEY inválida: ela deve começar com "re_".' };
  if (para.length === 0) return { erro: "CONTACT_TO_EMAIL não foi definido." };

  const dominioProprio = !de.includes("@resend.dev");
  return {
    apiKey,
    para,
    de,
    dominioProprio,
    // Só é possível escrever para o cliente com um domínio verificado.
    confirmacao: dominioProprio && process.env.CONTACT_CONFIRMACAO?.trim().toLowerCase() === "sim",
  };
}

export type Email = {
  para: string[];
  assunto: string;
  html: string;
  texto: string;
  responderPara?: string;
  chave?: string; // Idempotency-Key: evita e-mail duplicado em clique duplo
};

export async function enviarEmail(config: ConfigEmail, email: Email) {
  const resposta = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
      ...(email.chave ? { "Idempotency-Key": email.chave } : {}),
    },
    body: JSON.stringify({
      from: config.de,
      to: email.para,
      subject: email.assunto,
      html: email.html,
      text: email.texto,
      ...(email.responderPara ? { reply_to: email.responderPara } : {}),
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(15_000),
  });

  if (resposta.ok) return (await resposta.json()) as { id: string };

  const corpo = await resposta.text();
  throw new Error(`Resend ${resposta.status}: ${corpo}\n→ ${diagnosticar(resposta.status, corpo)}`);
}

/** Traduz os erros mais comuns do Resend para uma dica de correção nos logs. */
function diagnosticar(status: number, corpo: string) {
  if (status === 401 || (status === 403 && /api key/i.test(corpo)))
    return "A chave RESEND_API_KEY está errada ou foi revogada. Gere outra em resend.com/api-keys.";
  if (/only send testing emails/i.test(corpo))
    return "Sem domínio verificado, o Resend só entrega no e-mail dono da conta. Use esse e-mail em CONTACT_TO_EMAIL ou verifique um domínio e preencha CONTACT_FROM_EMAIL.";
  if (/domain is not verified|not verified/i.test(corpo))
    return "O domínio de CONTACT_FROM_EMAIL ainda não foi verificado em resend.com/domains (confira os registros DNS).";
  if (status === 422)
    return 'Algum campo foi recusado. Confira o formato de CONTACT_FROM_EMAIL: "Nome <contato@alinemariaalmeida.adv.br>".';
  if (status === 429) return "Limite de envios do Resend atingido. Aguarde alguns minutos.";
  return "Veja a mensagem acima e o painel resend.com/emails.";
}
