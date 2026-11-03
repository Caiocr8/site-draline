// Envia um e-mail de teste com as mesmas variáveis do site.
// Uso: npm run email:teste   (lê o arquivo .env.local)

const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
const de = CONTACT_FROM_EMAIL?.trim() || "Site Dra. Aline Maria <onboarding@resend.dev>";
const para = (CONTACT_TO_EMAIL ?? "").split(",").map((e) => e.trim()).filter(Boolean);

if (!RESEND_API_KEY?.startsWith("re_")) {
  console.error("✗ RESEND_API_KEY ausente ou inválida no .env.local (deve começar com re_).");
  process.exit(1);
}
if (para.length === 0) {
  console.error("✗ CONTACT_TO_EMAIL ausente no .env.local.");
  process.exit(1);
}

console.log(`Enviando teste\n  de:   ${de}\n  para: ${para.join(", ")}`);

const resposta = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: de,
    to: para,
    subject: "Teste de envio do site",
    text: "Se você recebeu este e-mail, o formulário de contato do site está configurado corretamente.",
  }),
});

const corpo = await resposta.text();
if (resposta.ok) {
  console.log(`✓ Enviado! ${corpo}\n  Confira a caixa de entrada (e o spam) e o painel resend.com/emails.`);
} else {
  console.error(`✗ Resend respondeu ${resposta.status}: ${corpo}`);
  if (/only send testing emails/i.test(corpo))
    console.error("  → Sem domínio verificado, só dá para enviar ao e-mail dono da conta Resend.");
  if (/not verified/i.test(corpo))
    console.error("  → O domínio do remetente ainda não foi verificado em resend.com/domains.");
  process.exit(1);
}
