"use client";

import Image from "next/image";
import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { IconeWhatsApp } from "./icons";

const links = [
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#atendimento", rotulo: "Como atuo" },
  { href: "#atuacao", rotulo: "Áreas de atuação" },
  { href: "#contato", rotulo: "Contato" },
];

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-linha/70 bg-marfim/95 backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setAberto(false)}>
          <Image
            src="/monograma.png"
            alt=""
            width={746}
            height={398}
            className="h-9 w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.35rem] font-semibold text-vinho">{site.marca}</span>
            <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-ouro">
              Advogada · {site.oab}
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.95rem] font-medium text-tinta transition-colors hover:text-bordo"
            >
              {l.rotulo}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-vinho px-4 py-2.5 text-sm font-medium text-papel transition-colors hover:bg-bordo"
          >
            <IconeWhatsApp className="h-4 w-4" />
            Agendar consulta
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-vinho lg:hidden"
          aria-expanded={aberto}
          aria-controls="menu-movel"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((a) => !a)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            {aberto ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {aberto && (
        <nav
          id="menu-movel"
          aria-label="Principal"
          className="border-t border-linha bg-marfim px-5 pb-6 pt-2 lg:hidden"
        >
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAberto(false)}
                  className="block border-b border-linha/60 py-3.5 font-display text-xl font-semibold text-vinho"
                >
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-vinho px-4 py-3.5 font-medium text-papel"
          >
            <IconeWhatsApp className="h-5 w-5" />
            Agendar consulta
          </a>
        </nav>
      )}
    </header>
  );
}