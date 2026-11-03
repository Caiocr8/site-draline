import type { ReactNode } from "react";
import Image from "next/image";
import { Cabecalho } from "@/components/Cabecalho";
import { FormularioContato } from "@/components/FormularioContato";
import {
  IconeEmail,
  IconeFamilia,
  IconeInstagram,
  IconeLocal,
  IconePrevidencia,
  IconeRelogio,
  IconeSaude,
  IconeTrabalho,
  IconeWhatsApp,
} from "@/components/icons";
import { areas, instagramLink, site, whatsappLink, type AreaId } from "@/lib/site";

const iconeDaArea: Record<AreaId, typeof IconeFamilia> = {
  familia: IconeFamilia,
  saude: IconeSaude,
  previdenciario: IconePrevidencia,
  trabalho: IconeTrabalho,
};

const etapas = [
  {
    titulo: "Primeiro contato",
    texto: "Pelo WhatsApp ou pelo formulário, você descreve brevemente a sua situação.",
  },
  {
    titulo: "Consulta",
    texto: "Presencial ou por videochamada, com análise dos documentos e explicação dos seus direitos.",
  },
  {
    titulo: "Proposta",
    texto: "Você recebe a estratégia indicada para o caso, com prazos e honorários definidos por escrito.",
  },
  {
    titulo: "Acompanhamento",
    texto: "Todas as etapas são conduzidas pela advogada, e você é informado de cada movimentação relevante.",
  },
];

const titulo2 = "font-display text-4xl font-semibold leading-[1.1] text-vinho sm:text-[2.9rem]";

export default function Home() {
  return (
    <>
      <Cabecalho />

      <main id="inicio" className="flex-1">
        {/* Abertura */}
        <section className="relative isolate overflow-hidden bg-vinho text-papel">
          <svg
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
            viewBox="0 0 1440 720"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <path
              d="M-40 712 C 260 690, 560 760, 780 610 S 1060 110, 1480 70"
              fill="none"
              stroke="#dcb983"
              strokeOpacity="0.28"
              strokeWidth="1.2"
            />
          </svg>

          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-[1.2fr_1fr] md:pb-24 md:pt-20">
            <div>
              <p className="text-[0.95rem] font-medium text-ouro-claro">
                {site.nomeCompleto}
                <span className="mx-2 text-ouro-claro/50">|</span>
                {site.oab}
              </p>
              <h1 className="mt-5 font-display text-[2.7rem] font-semibold leading-[1.04] text-papel sm:text-6xl lg:text-[4.1rem]">
                Advocacia em Família, Saúde, Previdência e Trabalho
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-papel/90">
                Atendimento presencial e online, com orientação clara desde a
                primeira consulta até a conclusão do seu caso.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-ouro-claro px-7 py-4 font-semibold text-vinho-escuro transition-colors hover:bg-papel"
                >
                  <IconeWhatsApp className="h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-sm border border-papel/40 px-7 py-4 font-medium text-papel transition-colors hover:border-papel hover:bg-papel/10"
                >
                  Enviar mensagem
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[21rem] md:max-w-[26rem]">
              <Image
                src="/logo-medalhao.png"
                alt="Logotipo da Dra. Aline Maria Freire da Rocha Almeida, advogada"
                width={900}
                height={900}
                priority
                sizes="(min-width: 768px) 26rem, 21rem"
                className="rounded-full shadow-[0_24px_60px_-20px_rgba(20,0,5,0.75)]"
              />
            </div>
          </div>
        </section>

        {/* Faixa com as quatro áreas, como no rodapé da logo */}
        <nav aria-label="Áreas de atuação" className="border-b border-linha bg-papel">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
            {areas.map((a, i) => {
              const Icone = iconeDaArea[a.id];
              return (
                <li
                  key={a.id}
                  className={`border-linha ${i % 2 === 1 ? "border-l" : ""} ${i > 0 ? "md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""}`}
                >
                  <a
                    href={`#${a.id}`}
                    className="group flex flex-col items-center gap-3 px-3 py-7 text-center"
                  >
                    <Icone className="h-10 w-10 text-ouro" />
                    <span className="font-display text-[1.2rem] font-semibold leading-tight text-vinho group-hover:text-bordo">
                      {a.titulo}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Áreas de atuação */}
        <section id="atuacao" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <div className="grid gap-5 md:grid-cols-[1fr_1.4fr] md:items-end">
            <h2 className={titulo2}>Áreas de atuação</h2>
            <p className="max-w-xl text-tinta-suave">
              Se a sua situação não estiver listada, entre em contato mesmo
              assim. Você recebe uma resposta objetiva sobre a possibilidade de
              atuação no seu caso.
            </p>
          </div>

          <div className="mt-12 border-t-2 border-vinho">
            {areas.map((a) => {
              const Icone = iconeDaArea[a.id];
              return (
                <article
                  key={a.id}
                  id={a.id}
                  className="grid gap-5 border-b border-linha py-10 md:grid-cols-[3.5rem_1fr_1.2fr] md:gap-10"
                >
                  <Icone className="h-11 w-11 text-ouro" />
                  <div>
                    <h3 className="font-display text-[1.85rem] font-semibold leading-tight text-vinho">
                      {a.titulo}
                    </h3>
                    <p className="mt-3 max-w-md text-tinta-suave">{a.resumo}</p>
                  </div>
                  <div>
                    <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                      {a.casos.map((c) => (
                        <li key={c} className="flex gap-3 text-[1rem] text-tinta">
                          <span className="mt-[0.72em] h-[5px] w-[5px] shrink-0 rotate-45 bg-ouro" aria-hidden="true" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink(
                        `Olá, Dra. Aline! Vim pelo site e gostaria de falar sobre ${a.curto}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-bordo underline decoration-ouro underline-offset-[5px] hover:text-vinho"
                    >
                      <IconeWhatsApp className="h-4 w-4" />
                      Falar sobre {a.curto}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Sobre */}
        {/* TODO: substituir o texto abaixo pela biografia real (formação, pós-graduação, tempo de atuação). */}
        <section id="sobre" className="bg-papel">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.3fr] md:py-28">
            <div className="flex flex-col gap-8 self-start md:sticky md:top-28">
              <Image src="/monograma.png" alt="" width={746} height={398} className="w-52 sm:w-64" />
              <div className="border-l-2 border-ouro pl-5">
                <p className="font-display text-[1.6rem] font-semibold leading-snug text-vinho">
                  {site.nomeCompleto}
                </p>
                <p className="mt-1 font-medium text-tinta-suave">
                  {site.titulo}, {site.oab}
                </p>
              </div>
            </div>

            <div>
              <h2 className={titulo2}>Sobre a advogada</h2>
              <div className="mt-7 space-y-5 text-[1.08rem] leading-[1.8] text-tinta">
                <p>
                  A Dra. Aline Maria Freire da Rocha Almeida atua nas áreas de
                  Direito de Família e Sucessões, Direito da Saúde, Direito
                  Previdenciário e Direito do Trabalho.
                </p>
                <p>
                  O atendimento é feito pessoalmente pela advogada, do primeiro
                  contato ao encerramento do caso. Cada cliente recebe uma
                  análise individual da sua situação e informações claras sobre
                  prazos, riscos e honorários antes de qualquer decisão.
                </p>
                <p>
                  As consultas podem ser presenciais, em {site.cidade}, ou
                  online, por videochamada, para clientes de qualquer região do
                  país.
                </p>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2.5 rounded-sm bg-vinho px-6 py-3.5 font-medium text-papel transition-colors hover:bg-bordo"
              >
                <IconeWhatsApp className="h-5 w-5" />
                Agendar uma consulta
              </a>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="atendimento" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <h2 className={titulo2}>Como funciona o atendimento</h2>

          <ol className="mt-12 grid gap-y-10 md:grid-cols-4">
            {etapas.map((e, i) => (
              <li key={e.titulo} className="md:pr-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-vinho font-display text-xl font-semibold text-papel">
                    {i + 1}
                  </span>
                  {i < etapas.length - 1 && (
                    <span className="hidden h-px flex-1 bg-linha md:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-5 font-display text-[1.6rem] font-semibold text-vinho">{e.titulo}</h3>
                <p className="mt-2 text-tinta-suave">{e.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contato */}
        <section id="contato" className="border-t border-linha bg-papel">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.35fr] md:py-28">
            <div>
              <h2 className={titulo2}>Contato</h2>
              <p className="mt-5 max-w-md text-tinta-suave">
                Envie sua mensagem pelo formulário ou fale diretamente pelo
                WhatsApp. O retorno é feito em até um dia útil.
              </p>

              <ul className="mt-9 space-y-5">
                <Contato
                  href={whatsappLink()}
                  icone={<IconeWhatsApp className="h-5 w-5" />}
                  rotulo="WhatsApp"
                  valor={site.whatsappExibicao}
                />
                <Contato
                  href={instagramLink}
                  icone={<IconeInstagram className="h-5 w-5" />}
                  rotulo="Instagram"
                  valor={`@${site.instagram}`}
                />
                <Contato
                  href={`mailto:${site.email}`}
                  icone={<IconeEmail className="h-5 w-5" />}
                  rotulo="E-mail"
                  valor={site.email}
                />
                <Contato
                  icone={<IconeRelogio className="h-5 w-5" />}
                  rotulo="Horário"
                  valor={site.horario}
                />
                <Contato
                  icone={<IconeLocal className="h-5 w-5" />}
                  rotulo="Atendimento"
                  valor={`Presencial em ${site.cidade} e online`}
                />
              </ul>
            </div>

            <div className="border border-linha bg-marfim p-6 sm:p-9">
              <h3 className="mb-6 font-display text-[1.7rem] font-semibold text-vinho">
                Envie sua mensagem
              </h3>
              <FormularioContato />
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-vinho-escuro text-papel/85">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-papel">{site.nome}</p>
            <p className="mt-1 text-[0.95rem]">
              {site.nomeCompleto}, {site.oab}
            </p>
          </div>
          <div className="flex gap-3">
            <Social href={whatsappLink()} rotulo="WhatsApp">
              <IconeWhatsApp className="h-5 w-5" />
            </Social>
            <Social href={instagramLink} rotulo="Instagram">
              <IconeInstagram className="h-5 w-5" />
            </Social>
            <Social href={`mailto:${site.email}`} rotulo="E-mail">
              <IconeEmail className="h-5 w-5" />
            </Social>
          </div>
        </div>
        <div className="border-t border-papel/15">
          <p className="mx-auto max-w-6xl px-5 py-6 text-[0.8rem] leading-relaxed text-papel/70 sm:px-8">
            As informações deste site têm caráter informativo e não substituem
            uma consulta jurídica. Publicidade em conformidade com o Código de
            Ética e Disciplina da OAB e o Provimento nº 205/2021 do CFOAB.
          </p>
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.45)] transition-transform hover:scale-105"
      >
        <IconeWhatsApp className="h-7 w-7" />
      </a>
    </>
  );
}

function Contato({
  href,
  icone,
  rotulo,
  valor,
}: {
  href?: string;
  icone: ReactNode;
  rotulo: string;
  valor: string;
}) {
  const conteudo = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vinho text-ouro-claro">
        {icone}
      </span>
      <span className="flex flex-col leading-snug">
        <span className="text-sm font-medium text-tinta-suave">{rotulo}</span>
        <span className="font-medium text-tinta group-hover:text-bordo">{valor}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group flex items-center gap-4"
        >
          {conteudo}
        </a>
      ) : (
        <div className="flex items-center gap-4">{conteudo}</div>
      )}
    </li>
  );
}

function Social({ href, rotulo, children }: { href: string; rotulo: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={rotulo}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-ouro-claro/50 text-ouro-claro transition-colors hover:bg-ouro-claro hover:text-vinho-escuro"
    >
      {children}
    </a>
  );
}