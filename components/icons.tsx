import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const linha = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Ícones das áreas — traço fino, no mesmo desenho dos ícones da logo */

export function IconeFamilia(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <circle cx="14" cy="11" r="4.5" />
        <circle cx="34" cy="11" r="4.5" />
        <path d="M5 34v-6a9 9 0 0 1 14-7.5" />
        <path d="M43 34v-6a9 9 0 0 0-14-7.5" />
        <circle cx="24" cy="22" r="3.5" />
        <path d="M24 41s-7-4.2-7-9a3.6 3.6 0 0 1 7-1.4A3.6 3.6 0 0 1 31 32c0 4.8-7 9-7 9z" />
      </g>
    </svg>
  );
}

export function IconeSaude(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <path d="M24 27s-10-5.8-10-12.4A5.6 5.6 0 0 1 24 11a5.6 5.6 0 0 1 10 3.6C34 21.2 24 27 24 27z" />
        <path d="M24 14.5v7M20.5 18h7" />
        <path d="M4 36l7-5.5a6 6 0 0 1 4-1.5h9a3 3 0 0 1 0 6h-6" />
        <path d="M18 35h9l11-7a3 3 0 0 1 3.5 4.8L30 41H12l-4 3" />
      </g>
    </svg>
  );
}

export function IconePrevidencia(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <path d="M30 8h4a3 3 0 0 1 3 3v8" />
        <path d="M18 8h-4a3 3 0 0 0-3 3v29a3 3 0 0 0 3 3h12" />
        <rect x="18" y="5" width="12" height="6" rx="1.5" />
        <path d="M16 19h14M16 25h10M16 31h7" />
        <path d="M37 25l7 2.5v5.5c0 4.6-3 8-7 9.5-4-1.5-7-4.9-7-9.5v-5.5z" />
        <path d="M34 33.5l2 2 4-4" />
      </g>
    </svg>
  );
}

export function IconeTrabalho(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <rect x="5" y="14" width="38" height="27" rx="3" />
        <path d="M17 14v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
        <path d="M5 25h38" />
        <rect x="21" y="22" width="6" height="6" rx="1" />
      </g>
    </svg>
  );
}

/* Ícones de contato */

export function IconeWhatsApp(props: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.93.96-3.49-.23-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.21 4.25-9.46 9.48-9.46a9.4 9.4 0 0 1 6.7 2.78 9.4 9.4 0 0 1 2.77 6.69c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.52A11.32 11.32 0 0 0 12.04.65C5.76.65.65 5.75.65 12.03c0 2 .52 3.96 1.52 5.69L.55 23.6l6.02-1.58a11.36 11.36 0 0 0 5.47 1.39h.01c6.27 0 11.38-5.1 11.39-11.38 0-3.04-1.18-5.9-3.34-8.05z" />
    </svg>
  );
}

export function IconeInstagram(props: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
      </g>
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function IconeEmail(props: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
      </g>
    </svg>
  );
}

export function IconeRelogio(props: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </g>
    </svg>
  );
}

export function IconeLocal(props: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </g>
    </svg>
  );
}

/* Balança — usada como ornamento entre fios dourados, como nas artes */
export function IconeBalanca(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <path d="M24 6v34M16 42h16M24 6l-1.5 2.5h3z" />
        <path d="M9 13h30" />
        <path d="M12 13l-5.5 12h11zM36 13l-5.5 12h11z" />
        <path d="M6.5 25a5.5 4 0 0 0 11 0M30.5 25a5.5 4 0 0 0 11 0" />
      </g>
    </svg>
  );
}

/* Pilares da "essência profissional" */
export function IconeLivro(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <path d="M24 13c-4-3-10-3.5-16-2.5v26c6-1 12-.5 16 2.5 4-3 10-3.5 16-2.5v-26c-6-1-12-.5-16 2.5z" />
        <path d="M24 13v26" />
      </g>
    </svg>
  );
}

export function IconeCoracaoMao(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <path d="M24 25s-8-4.6-8-10a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5.4-8 10-8 10z" />
        <path d="M5 31l6-3.5c2-1.2 4-1.2 6 0l4 2.2h6a2.5 2.5 0 0 1 0 5h-8" />
        <path d="M27 34.7l9.5-5a2.6 2.6 0 0 1 3 4.2L29 41.5a5 5 0 0 1-4 .9L15 40l-5 2.5" />
      </g>
    </svg>
  );
}

export function IconeEstrategia(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="9" />
        <circle cx="24" cy="24" r="2" />
        <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
      </g>
    </svg>
  );
}

export function IconeEscudo(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <path d="M24 5l15 5.5v11c0 9.5-6.4 17.4-15 21-8.6-3.6-15-11.5-15-21v-11z" />
        <path d="M17 24l5 5 9-10" />
      </g>
    </svg>
  );
}

export function IconeMonitor(props: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <g {...linha}>
        <rect x="6" y="9" width="36" height="24" rx="2" />
        <path d="M18 41h12M24 33v8" />
      </g>
    </svg>
  );
}
