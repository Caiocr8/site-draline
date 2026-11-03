import type { ReactNode } from "react";
import Image from "next/image";
import { Cabecalho } from "@/components/Cabecalho";
import { FormularioContato } from "@/components/FormularioContato";
import {
  IconeBalanca,
  IconeCoracaoMao,
  IconeEmail,
  IconeEscudo,
  IconeEstrategia,
  IconeFamilia,
  IconeInstagram,
  IconeLivro,
  IconeLocal,
  IconeMonitor,
  IconePrevidencia,
  IconeRelogio,
  IconeSaude,
  IconeTrabalho,
  IconeWhatsApp,
} from "@/components/icons";
import { areas, instagramLink, site, whatsappLink, type AreaId } from "@/lib/site";

const iconeDaArea: Record<AreaId, typeof IconeFamilia> = {
  familia: IconeFamilia,
  previdenciario: IconePrevidencia,
  saude: IconeSaude,
  trabalho: IconeTrabalho,
};

const etapas = [
  {
    titulo: "Escuta atenta",
    texto:
      "Pelo WhatsApp ou pelo formulário, você relata a sua situação. Tudo começa pela compreensão do que está acontecendo.",
  },
  {
    titulo: "Análise responsável",
    texto:
      "Na consulta, presencial ou online, os documentos e as particularidades do caso são estudados com rigor técnico.",
  },
  {
    titulo: "Orientação clara",
    texto:
      "Você conhece os caminhos jurídicos possíveis, com prazos e honorários definidos por escrito antes de qualquer decisão.",
  },
  {
    titulo: "Acompanhamento individualizado",
    texto:
      "Cada etapa é conduzida pessoalmente pela advogada, e você é informado de toda movimentação relevante.",
  },
];

const essencia = [
  {
    icone: IconeLivro,
    titulo: "Excelência técnica",
    texto: "Para estudar cada situação com rigor jurídico.",
  },
  {
    icone: IconeCoracaoMao,
    titulo: "Olhar humano",
    texto: "Para compreender as pessoas além dos processos.",
  },
  {
    icone: IconeEstrategia,
    titulo: "Atuação estratégica",
    texto: "Para identificar os caminhos juridicamente adequados.",
  },
  {
    icone: IconeEscudo,
    titulo: "Compromisso ético",
    texto: "Para conduzir cada demanda com responsabilidade e transparência.",
  },
];

const titulo2 =
  "font-display text-[2.4rem] font-semibold leading-[1.08] text-vinho sm:text-[3rem]";
const sobretitulo =
  "text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-ouro";

export default function Home() {
  return (
    <>
      <Cabecalho />

      <main id="inicio" className="flex-1">
        {/* ───────────── Abertura ───────────── */}
        <section className="relative isolate overflow-hidden bg-vinho text-papel">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_30%,#6b1426_0%,transparent_60%)]"
          />
          <svg
            className="fio-dourado pointer-events-none absolute inset-0 -z-10 h-full w-full"
            viewBox="0 0 1440 760"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <path
              d="M-40 740 C 300 700, 600 780, 820 620 S 1080 120, 1480 60"
              pathLength={1}
              fill="none"
              stroke="#dcb983"
              strokeOpacity="0.35"
              strokeWidth="1.2"
            />
          </svg>

          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 md:grid-cols-[1.15fr_1fr] md:gap-14 md:pb-24 md:pt-20">
            <div className="surgir">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.3em] text-ouro-claro">
                {site.descricaoMarca}
              </p>
              <h1 className="mt-6 font-display text-[3rem] font-semibold leading-[1.04] text-papel sm:text-[4rem] lg:text-[4.35rem]">
                Excelência técnica.
                <span className="block italic text-ouro-claro">Olhar humano.</span>
              </h1>
              <p className="mt-7 max-w-xl text-[1.15rem] leading-relaxed text-papel/90">
                O Direito exige conhecimento. A defesa de direitos exige também
                compreender pessoas.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-ouro-claro px-7 py-4 font-semibold text-vinho-escuro transition-colors hover:bg-papel"
                >
                  <IconeWhatsApp className="h-5 w-5" />
                  Agendar uma consulta
                </a>
                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center rounded-sm border border-papel/40 px-7 py-4 font-medium text-papel transition-colors hover:border-papel hover:bg-papel/10"
                >
                  Conheça a trajetória
                </a>
              </div>

              <ul className="mt-10 grid gap-3 border-t border-papel/15 pt-6 text-[0.95rem] text-papel/85 sm:grid-cols-2">
                <li className="flex items-center gap-3">
                  <IconeLocal className="h-5 w-5 shrink-0 text-ouro-claro" />
                  {site.cidade} · presencial e online
                </li>
                <li className="flex items-center gap-3">
                  <IconeMonitor className="h-5 w-5 shrink-0 text-ouro-claro" />
                  Atendimento em todo o Brasil
                </li>
              </ul>
            </div>

            <figure className="surgir relative mx-auto w-full max-w-[22rem] [animation-delay:0.25s] md:max-w-[27rem]">
              <div
                aria-hidden="true"
                className="absolute -inset-2 translate-x-2 translate-y-2 border sm:-inset-3 sm:translate-x-4 sm:translate-y-4 border-ouro-claro/50"
              />
              <Image
                src="/dra-aline.jpg"
                alt="Dra. Aline Maria Freire da Rocha Almeida em seu escritório"
                width={654}
                height={818}
                priority
                sizes="(min-width: 768px) 27rem, 22rem"
                className="relative h-auto w-full shadow-[0_30px_60px_-25px_rgba(10,0,3,0.8)]"
              />
              <figcaption className="absolute -bottom-6 left-0 right-6 bg-papel px-5 py-4 text-tinta shadow-[0_18px_40px_-20px_rgba(10,0,3,0.6)] sm:-left-6 sm:right-auto">
                <span className="block font-display text-[1.35rem] font-semibold leading-tight text-vinho">
                  {site.nome}
                </span>
                <span className="mt-0.5 block text-[0.8rem] font-medium uppercase tracking-[0.18em] text-ouro">
                  {site.titulo} · {site.oab}
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ───────────── Faixa das áreas ───────────── */}
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
                    className="group flex h-full flex-col items-center gap-3 px-3 py-8 text-center"
                  >
                    <Icone className="h-10 w-10 text-ouro transition-transform group-hover:-translate-y-0.5" />
                    <span className="font-display text-[1.2rem] font-semibold leading-tight text-vinho group-hover:text-bordo">
                      {a.titulo}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ───────────── Sobre ───────────── */}
        <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.45fr] md:gap-16">
            <aside className="flex flex-col gap-8 self-start md:sticky md:top-28">
              <Image src="/monograma.png" alt="" width={746} height={398} className="w-48 sm:w-60" />
              <div className="border-l-2 border-ouro pl-5">
                <p className="font-display text-[1.65rem] font-semibold leading-snug text-vinho">
                  {site.nomeCompleto}
                </p>
                <p className="mt-1 text-[0.95rem] font-medium text-tinta-suave">{site.oab}</p>
              </div>
              <ul className="space-y-3">
                {site.qualificacoes.map((q) => (
                  <li key={q} className="flex items-center gap-3 font-medium text-tinta">
                    <span className="h-[6px] w-[6px] shrink-0 rotate-45 bg-ouro" aria-hidden="true" />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="border-t border-linha pt-6 font-display text-[1.45rem] italic leading-snug text-bordo">
                “{site.slogan}”
              </p>
            </aside>

            <div>
              <p className={sobretitulo}>Sobre</p>
              <h2 className={`${titulo2} mt-4`}>
                Uma trajetória dedicada à escuta, ao acolhimento e à defesa de direitos
              </h2>
              <div className="mt-8 space-y-5 text-[1.08rem] leading-[1.85] text-tinta">
                <p>
                  Há quase duas décadas, dedico minha trajetória profissional à
                  escuta, ao acolhimento e à defesa de direitos.
                </p>
                <p>
                  Como advogada, assistente social e mestre em Serviço Social,
                  construí uma atuação fundamentada na compreensão de que os
                  conflitos jurídicos vão além de documentos e processos:
                  envolvem histórias, relações familiares, projetos de vida e
                  expectativas de proteção.
                </p>
                <p>
                  A experiência em instituições públicas, na área da saúde e no
                  contexto militar me proporcionou uma visão ampla das
                  realidades sociais e dos desafios enfrentados por pessoas e
                  famílias.
                </p>
                <p>
                  Hoje, essa trajetória se integra à formação jurídica para
                  oferecer uma advocacia estratégica, personalizada e
                  comprometida com a dignidade humana.
                </p>
              </div>

              <dl className="mt-10 grid border-y border-linha sm:grid-cols-3">
                {[
                  ["Conhecimento", "para orientar."],
                  ["Estratégia", "para atuar."],
                  ["Sensibilidade", "para compreender."],
                ].map(([termo, def], i) => (
                  <div
                    key={termo}
                    className={`py-5 sm:px-5 ${i > 0 ? "border-t border-linha sm:border-l sm:border-t-0" : "sm:pl-0"}`}
                  >
                    <dt className="font-display text-[1.5rem] font-semibold leading-tight text-vinho">
                      {termo}
                    </dt>
                    <dd className="font-display text-[1.3rem] italic text-ouro">{def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ───────────── Como atuo ───────────── */}
        <section id="atendimento" className="bg-papel">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
              <div>
                <p className={sobretitulo}>Como atuo</p>
                <h2 className={`${titulo2} mt-4`}>Uma advocacia que reconhece a sua história</h2>
              </div>
              <div className="space-y-4 text-tinta-suave">
                <p>
                  Acredito que a atuação jurídica começa com uma escuta atenta e
                  uma análise responsável. Cada demanda tem particularidades que
                  precisam ser compreendidas antes da definição dos caminhos
                  jurídicos possíveis.
                </p>
                <p>
                  Por isso, meu compromisso é oferecer orientação clara,
                  fundamentação técnica e acompanhamento individualizado,
                  respeitando a singularidade de cada cliente.
                </p>
              </div>
            </div>

            <ol className="mt-14 grid gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-0">
              {etapas.map((e, i) => (
                <li key={e.titulo} className="lg:pr-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ouro font-display text-xl font-semibold text-vinho">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < etapas.length - 1 && (
                      <span className="hidden h-px flex-1 bg-linha lg:block" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-[1.55rem] font-semibold leading-tight text-vinho">
                    {e.titulo}
                  </h3>
                  <p className="mt-2 text-tinta-suave">{e.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── Áreas de atuação ───────────── */}
        <section id="atuacao" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <div className="grid gap-5 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
            <div>
              <p className={sobretitulo}>Áreas de atuação</p>
              <h2 className={`${titulo2} mt-4`}>Onde posso ajudar</h2>
            </div>
            <p className="text-tinta-suave">
              Em todas as áreas, o compromisso é o mesmo: análise
              individualizada, responsabilidade profissional e respeito à
              dignidade humana.
            </p>
          </div>

          <div className="mt-12 border-t-2 border-vinho">
            {areas.map((a) => {
              const Icone = iconeDaArea[a.id];
              return (
                <article
                  key={a.id}
                  id={a.id}
                  className="grid gap-6 border-b border-linha py-11 md:grid-cols-[3.5rem_1.15fr_1fr] md:gap-10"
                >
                  <Icone className="h-11 w-11 text-ouro" />
                  <div>
                    <h3 className="font-display text-[1.95rem] font-semibold leading-tight text-vinho">
                      {a.titulo}
                    </h3>
                    <p className="mt-3 font-display text-[1.3rem] italic leading-snug text-bordo">
                      {a.chamada}
                    </p>
                    <div className="mt-4 space-y-3 text-tinta-suave">
                      {a.texto.map((t) => (
                        <p key={t}>{t}</p>
                      ))}
                    </div>
                  </div>
                  <div className="md:pt-2">
                    <ul className="space-y-2.5">
                      {a.casos.map((c) => (
                        <li key={c} className="flex gap-3 text-tinta">
                          <span className="mt-[0.72em] h-[5px] w-[5px] shrink-0 rotate-45 bg-ouro" aria-hidden="true" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink(
                        `Olá, Dra. Aline! Vim pelo site e gostaria de uma orientação em ${a.curto}.`,
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

        {/* ───────────── Essência profissional ───────────── */}
        <section id="essencia" className="relative isolate overflow-hidden bg-vinho text-papel">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_0%,#6b1426_0%,transparent_55%)]"
          />
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <Ornamento />
            <h2 className="mt-6 text-center font-display text-[2.4rem] font-semibold leading-[1.08] sm:text-[3rem]">
              Minha essência profissional
            </h2>

            <ul className="mt-14 grid gap-px overflow-hidden border border-papel/15 bg-papel/15 sm:grid-cols-2 lg:grid-cols-4">
              {essencia.map(({ icone: Icone, titulo, texto }) => (
                <li key={titulo} className="bg-vinho p-8">
                  <Icone className="h-10 w-10 text-ouro-claro" />
                  <h3 className="mt-6 font-display text-[1.6rem] font-semibold leading-tight text-papel">
                    {titulo}
                  </h3>
                  <p className="mt-2 text-papel/80">{texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────── Contato ───────────── */}
        <section id="contato">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.35fr] md:gap-14 md:py-28">
            <div>
              <p className={sobretitulo}>Contato</p>
              <h2 className={`${titulo2} mt-4`}>
                Sua história importa.
                <span className="block italic text-ouro">Seus direitos também.</span>
              </h2>
              <p className="mt-6 max-w-md text-tinta-suave">
                A orientação jurídica adequada começa pela compreensão da sua
                realidade. Agende uma consulta e receba atendimento jurídico
                individualizado.
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
                  icone={<IconeLocal className="h-5 w-5" />}
                  rotulo="Atendimento"
                  valor={`Presencial em ${site.cidade} e online para todo o Brasil`}
                />
                <Contato
                  icone={<IconeRelogio className="h-5 w-5" />}
                  rotulo="Horário"
                  valor={site.horario}
                />
              </ul>
            </div>

            <div className="border border-linha bg-papel p-6 shadow-[0_24px_50px_-35px_rgba(74,14,26,0.45)] sm:p-9">
              <h3 className="font-display text-[1.75rem] font-semibold text-vinho">
                Envie sua mensagem
              </h3>
              <p className="mb-7 mt-1 text-[0.95rem] text-tinta-suave">
                O retorno é feito em até um dia útil.
              </p>
              <FormularioContato />
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── Rodapé ───────────── */}
      <footer className="bg-vinho-escuro text-papel/85">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
          <div>
            <p className="font-display text-[1.9rem] font-semibold leading-tight text-papel">
              {site.marca}
            </p>
            <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-ouro-claro">
              {site.descricaoMarca}
            </p>
            <p className="mt-4 text-[0.95rem]">{site.qualificacoes.join(" | ")}</p>
            <p className="text-[0.95rem]">{site.oab}</p>
            <p className="mt-4 font-display text-[1.3rem] italic text-ouro-claro">{site.slogan}</p>
          </div>
          <div className="text-[0.95rem] leading-relaxed">
            <p className="font-medium text-papel">{site.cidadeExtenso}</p>
            <p>Atendimento presencial e online</p>
            <p className="mt-3">{site.whatsappExibicao}</p>
            <p className="break-all">{site.email}</p>
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
          <p className="mx-auto max-w-6xl px-5 py-6 text-[0.8rem] leading-relaxed text-papel/65 sm:px-8">
            Conteúdo informativo: a análise jurídica depende das
            particularidades de cada caso e não substitui uma consulta.
            Publicidade em conformidade com o Código de Ética e Disciplina da
            OAB e o Provimento nº 205/2021 do CFOAB.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
      />
    </>
  );
}

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: `${site.nome} — ${site.descricaoMarca}`,
  alternateName: site.nomeCompleto,
  slogan: site.slogan,
  url: site.url,
  image: `${site.url}/dra-aline.jpg`,
  telephone: `+${site.whatsapp}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Parnamirim",
    addressRegion: "RN",
    addressCountry: "BR",
  },
  areaServed: "BR",
  knowsAbout: areas.map((a) => a.titulo),
  sameAs: [instagramLink],
};

function Ornamento() {
  return (
    <div className="flex items-center justify-center gap-4 text-ouro-claro" aria-hidden="true">
      <span className="h-px w-16 bg-current opacity-60 sm:w-28" />
      <IconeBalanca className="h-9 w-9" />
      <span className="h-px w-16 bg-current opacity-60 sm:w-28" />
    </div>
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
      <span className="flex min-w-0 flex-col leading-snug">
        <span className="text-sm font-medium text-tinta-suave">{rotulo}</span>
        <span className="break-words font-medium text-tinta group-hover:text-bordo">{valor}</span>
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
