# Site — Dra. Aline Maria Freire da Rocha Almeida

Site institucional em Next.js 16 + Tailwind CSS 4, com a identidade visual da logo (bordô, dourado e marfim).

## O que tem

- Abertura com o slogan "Excelência técnica. Olhar humano.", foto da Dra. e botão de WhatsApp
- Seções "Sobre" (trajetória), "Como atuo", "Áreas de atuação" e "Minha essência profissional"
- As quatro áreas de atuação, cada uma com um botão de WhatsApp que já abre com o assunto escrito
- Formulário de contato que envia e-mail automático para a advogada (com resposta direta ao cliente)
- Links de WhatsApp, Instagram e e-mail; botão flutuante de WhatsApp em todas as telas
- Aviso de conformidade com o Provimento 205/2021 do CFOAB no rodapé

## Antes de publicar: o que editar

Todos os dados de contato ficam em **`lib/site.ts`** — troque os campos marcados com `TODO`:

| Campo | Exemplo |
|---|---|
| `whatsapp` | `"5584999999999"` (DDI + DDD + número, só dígitos) |
| `whatsappExibicao` | `"(84) 99999-9999"` |
| `instagram` | usuário sem o `@` |
| `email` | e-mail mostrado no site |
| `cidade` | cidade do atendimento presencial |
| `url` | endereço final do site |

Os textos das áreas também estão em `lib/site.ts`. Os textos de "Sobre", "Como atuo" e
"Minha essência profissional" ficam em `app/page.tsx`. A foto da abertura é `public/dra-aline.jpg`
— para trocar por uma foto em alta resolução, mantenha a proporção retrato 4:5.

## Configurar o envio de e-mail (Resend)

O formulário envia as mensagens pelo [Resend](https://resend.com). O código já está pronto
(`lib/email.ts` e `app/actions.ts`); falta só a configuração. Há dois modos:

### Modo 1 — rápido, sem domínio próprio

Serve para colocar o site no ar agora. O remetente será `onboarding@resend.dev`, e o Resend
**só entrega no e-mail dono da conta**.

1. Crie a conta em [resend.com/signup](https://resend.com/signup) **usando o e-mail que vai
   receber as mensagens** (ex.: `alinemariaralmeida.adv@gmail.com`) e confirme o cadastro.
2. Em [API Keys](https://resend.com/api-keys) → *Create API Key*: nome `site`, permissão
   **Sending access**. Copie a chave (`re_...`) — ela só aparece uma vez.
3. No computador, copie `.env.example` para `.env.local` e preencha:
   ```env
   RESEND_API_KEY=re_sua_chave
   CONTACT_TO_EMAIL=alinemariaralmeida.adv@gmail.com
   CONTACT_FROM_EMAIL=
   CONTACT_CONFIRMACAO=nao
   ```
4. Teste: `npm run email:teste`. Deve aparecer `✓ Enviado!` e o e-mail chega (olhe também o spam).
5. Na Vercel: *Project → Settings → Environment Variables*, cadastre as mesmas variáveis
   (ambientes Production e Preview) e faça um novo deploy (*Deployments → Redeploy*).

### Modo 2 — profissional, com domínio próprio (recomendado)

Com um domínio (ex.: `alinemariaalmeida.adv.br`), o e-mail sai de `contato@seudominio`,
pode ir para qualquer caixa e cai menos no spam. Também habilita a confirmação automática
para o cliente.

1. Em [Domains](https://resend.com/domains) → *Add Domain*, informe o domínio e escolha a
   região **São Paulo (sa-east-1)**.
2. O Resend mostra registros DNS. Cadastre-os **exatamente como aparecem** no painel onde
   o domínio foi registrado (Registro.br, Hostinger, Cloudflare…). Normalmente são:

   | Tipo | Nome | Para que serve |
   |---|---|---|
   | TXT | `resend._domainkey` | DKIM (assinatura) |
   | MX | `send` | retorno de envio (SPF) |
   | TXT | `send` | SPF (`v=spf1 include:amazonses.com ~all`) |
   | TXT | `_dmarc` | DMARC — recomendado: `v=DMARC1; p=none;` |

   > Não apague registros MX que já existam no domínio raiz (eles são do seu e-mail atual).
   > O registro MX do Resend fica no subdomínio `send`.
3. Clique em *Verify DNS Records* e aguarde ficar **Verified** (minutos a algumas horas).
4. Atualize as variáveis (no `.env.local` e na Vercel):
   ```env
   CONTACT_FROM_EMAIL="Dra. Aline Maria <contato@seudominio.com.br>"
   CONTACT_CONFIRMACAO=sim
   ```
   O endereço `contato@` não precisa existir como caixa de e-mail: as respostas vão para
   o e-mail do cliente (campo *Responder para*), e a confirmação ao cliente responde para
   `CONTACT_TO_EMAIL`.
5. Rode `npm run email:teste` de novo e faça um redeploy na Vercel.

### Como funciona o envio

- A Dra. recebe um e-mail com nome, e-mail, telefone, área e mensagem. Basta clicar em
  **Responder** para escrever direto ao cliente.
- Clique duplo no botão não gera e-mail repetido (cabeçalho `Idempotency-Key`).
- Se `CONTACT_CONFIRMACAO=sim`, o cliente recebe a confirmação “Recebemos sua mensagem”.
- Se algo falhar, o visitante vê um aviso para usar o WhatsApp, e o motivo aparece nos
  logs (Vercel → *Logs*) com uma dica de correção, por exemplo:

| Erro nos logs | O que fazer |
|---|---|
| `E-mail não configurado` | Faltam variáveis na Vercel, ou não houve redeploy depois de criá-las |
| `401` / `API key is invalid` | Gere uma nova chave e atualize `RESEND_API_KEY` |
| `You can only send testing emails…` | Modo 1: `CONTACT_TO_EMAIL` precisa ser o e-mail da conta Resend |
| `domain is not verified` | Termine a verificação DNS do Modo 2 |

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Arquivos principais

- `app/page.tsx` — a página inteira
- `app/actions.ts` — validação do formulário e envio do e-mail
- `components/` — cabeçalho, formulário e ícones
- `lib/site.ts` — dados de contato e áreas de atuação
- `lib/email.ts` — envio pelo Resend
- `scripts/testar-email.mjs` — teste de envio (`npm run email:teste`)
- `public/` — foto, logo (medalhão), monograma e ícone do site
