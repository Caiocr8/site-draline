import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const descricao =
  "Dra. Aline Maria Freire da Rocha Almeida, advogada (OAB/RN 24.650), assistente social e mestre em Serviço Social. Direito de Família e Sucessões, Previdenciário, Saúde e Trabalho. Atendimento presencial em Parnamirim/RN e online em todo o Brasil.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome} | Advogada em Parnamirim/RN`,
    template: `%s | ${site.nome}`,
  },
  description: descricao,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.nome} | ${site.slogan}`,
    description: descricao,
    locale: "pt_BR",
    type: "website",
    siteName: `${site.nome} — ${site.descricaoMarca}`,
    images: [{ url: "/logo-medalhao.png", width: 900, height: 900 }],
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#4A0E1A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jost.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}