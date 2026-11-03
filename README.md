# Site — Dra. Aline Maria Freire da Rocha Almeida

Site institucional em Next.js 16 + Tailwind CSS 4, com a identidade visual da logo (bordô, dourado e marfim).

## O que tem

- Abertura com a logo, botão de WhatsApp e atalho para o formulário
- As quatro áreas de atuação, cada uma com um botão de WhatsApp que já abre com o assunto escrito
- Seções "Sobre mim" e "Como funciona o atendimento"
- Formulário de contato que envia e-mail automático para a advogada (com resposta direta ao cliente)
- Links de WhatsApp, Instagram e e-mail; botão flutuante de WhatsApp em todas as telas
- Aviso de conformidade com o Provimento 205/2021 do CFOAB no rodapé

## Antes de publicar: o que editar

Todos os dados de contato ficam em **`lib/site.ts`** — troque os campos marcados com `TODO`:

| Campo | Exemplo |
|---|---|
| `oab` | `"OAB/RN 00.000"` |
| `whatsapp` | `"5584999999999"` (DDI + DDD + número, só dígitos) |
| `whatsappExibicao` | `"(84) 99999-9999"` |
| `instagram` | usuário sem o `@` |
| `email` | e-mail mostrado no site |
| `cidade` | cidade do atendimento presencial |
| `url` | endereço final do site |

Os textos das áreas também estão em `lib/site.ts`. O texto "Sobre mim" fica em `app/page.tsx` (procure por `TODO`).

## Configurar o envio de e-mail (Resend)

1. Crie uma conta grátis em [resend.com](https://resend.com) **com o e-mail que vai receber as mensagens**.
2. Em *API Keys*, crie uma chave.
3. Copie `.env.example` para `.env.local` e preencha `RESEND_API_KEY` e `CONTACT_TO_EMAIL`.
4. Na Vercel, cadastre as mesmas variáveis em *Settings → Environment Variables*.

Sem domínio verificado, o Resend só entrega para o e-mail dono da conta — por isso o passo 1. Quando tiver um domínio próprio, verifique-o no Resend e preencha `CONTACT_FROM_EMAIL`.

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
- `public/` — logo (medalhão), monograma e ícone do site
