import type {Metadata} from "next";
import {getLocale} from "@/lib/i18n";
import "@/styles/globals.css";

// Fonts
import { Inter, Space_Grotesk } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export async function generateMetadata({params}:{params:{locale:string}}): Promise<Metadata> {
  const locale = getLocale(params.locale);
  const title =
    locale === "pt"
      ? "ArchAItechs — Consultoria em TI, Arquitetura de Software, AI/ML e BI"
      : "ArchAItechs — IT Consulting, Software Architecture, AI/ML & BI";
  const description =
    locale === "pt"
      ? "Consultoria sênior em arquitetura de software, IA/ML e BI."
      : "Senior consulting in software architecture, AI/ML and BI.";

  return {
    title,
    description,
    openGraph: { title, description, url: `/${locale}`, type: "website", images: ["/images/hero.webp"] },
    twitter: { card: "summary_large_image", title, description, images: ["/images/hero.webp"] }
  };
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const locale = getLocale(params.locale);

  return (
    <html lang={locale} className={`${inter.variable} ${display.variable}`}>
      <head>
        {/* Favicon SVG */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* No-FOUC: aplica dark cedo (cookie/localStorage ou prefers-color-scheme) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try{
    var t = localStorage.getItem("theme");
    var d = t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if(d) document.documentElement.classList.add("dark");
  }catch(e){}
})();`,
          }}
        />
      </head>
      <body className="font-sans bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
