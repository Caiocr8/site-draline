"use client";

import { useActionState, type ReactNode } from "react";
import { enviarContato, type EstadoContato } from "@/app/actions";
import { areas, whatsappLink } from "@/lib/site";
import { IconeWhatsApp } from "./icons";

const inicial: EstadoContato = { status: "inicial" };

const campo =
  "w-full rounded-sm border border-linha bg-papel px-4 py-3 text-tinta placeholder:text-tinta-suave/55 transition-colors focus:border-ouro focus:outline-none focus:ring-2 focus:ring-ouro/25 aria-[invalid=true]:border-bordo";
const rotulo = "mb-1.5 block text-[0.95rem] font-medium text-tinta";

export function FormularioContato() {
  const [estado, acao, enviando] = useActionState(enviarContato, inicial);

  if (estado.status === "enviado") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center gap-4 border border-ouro/40 bg-papel p-8 sm:p-10"
      >
        <svg viewBox="0 0 48 48" className="h-12 w-12 text-ouro" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M15 24.5l6 6 12-13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="font-display text-3xl font-semibold text-vinho">Mensagem enviada</h3>
        <p className="max-w-md text-tinta-suave">
          Recebemos seu contato. A resposta será enviada pelo e-mail ou
          telefone informado em até um dia útil.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-bordo underline decoration-ouro underline-offset-4 hover:text-vinho"
        >
          <IconeWhatsApp className="h-4 w-4" />
          Se for urgente, chame no WhatsApp
        </a>
      </div>
    );
  }

  const v = estado.valores ?? {};
  const e = estado.erros ?? {};

  return (
    <form action={acao} noValidate className="grid gap-5">
      {/* armadilha para robôs: invisível para pessoas */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Não preencha este campo
          <input type="text" name="site" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="nome" className={rotulo}>
          Nome completo
        </label>
        <input
          id="nome"
          name="nome"
          autoComplete="name"
          required
          defaultValue={v.nome}
          aria-invalid={!!e.nome}
          aria-describedby={e.nome ? "erro-nome" : undefined}
          className={campo}
        />
        {e.nome && <Erro id="erro-nome">{e.nome}</Erro>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={rotulo}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={v.email}
            aria-invalid={!!e.email}
            aria-describedby={e.email ? "erro-email" : undefined}
            className={campo}
          />
          {e.email && <Erro id="erro-email">{e.email}</Erro>}
        </div>
        <div>
          <label htmlFor="telefone" className={rotulo}>
            WhatsApp ou telefone{" "}
            <span className="font-normal text-tinta-suave">(opcional)</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            defaultValue={v.telefone}
            aria-invalid={!!e.telefone}
            aria-describedby={e.telefone ? "erro-telefone" : undefined}
            className={campo}
          />
          {e.telefone && <Erro id="erro-telefone">{e.telefone}</Erro>}
        </div>
      </div>

      <div>
        <label htmlFor="area" className={rotulo}>
          Assunto
        </label>
        <div className="relative">
          <select
            id="area"
            name="area"
            defaultValue={v.area ?? ""}
            className={`${campo} appearance-none pr-10`}
          >
            <option value="">Ainda não sei / outro assunto</option>
            {areas.map((a) => (
              <option key={a.id} value={a.id}>
                {a.titulo}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ouro"
          >
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className={rotulo}>
          Conte brevemente o que está acontecendo
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          defaultValue={v.mensagem}
          aria-invalid={!!e.mensagem}
          aria-describedby={e.mensagem ? "erro-mensagem" : undefined}
          className={`${campo} resize-y`}
        />
        {e.mensagem && <Erro id="erro-mensagem">{e.mensagem}</Erro>}
      </div>

      {estado.status === "erro" && estado.mensagem && (
        <p role="alert" className="border-l-2 border-bordo bg-bordo/5 px-4 py-3 text-sm text-bordo">
          {estado.mensagem}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={enviando}
          className="inline-flex items-center justify-center rounded-sm bg-vinho cursor-pointer px-8 py-3.5 font-semibold text-papel transition-colors hover:bg-bordo disabled:cursor-wait disabled:opacity-70"
        >
          {enviando ? "Enviando…" : "Enviar mensagem"}
        </button>
        <p className="text-[0.8rem] leading-relaxed text-tinta-suave sm:max-w-[16rem]">
          Seus dados são usados apenas para responder ao seu contato e ficam
          protegidos pelo sigilo profissional.
        </p>
      </div>
    </form>
  );
}

function Erro({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-bordo">
      {children}
    </p>
  );
}