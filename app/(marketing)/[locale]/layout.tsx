import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getLocale} from "@/lib/i18n";
import {getMessages} from "next-intl/server";
import "../globals.css";

export async function generateMetadata({params}:{params:{locale:string}}): Promise<Metadata> {
  const locale = getLocale(params.locale);
  const title = locale === "pt"
    ? "ArchAItechs — Consultoria em TI, Arquitetura de Software, AI/ML e BI"
    : "ArchAItechs — IT Consulting, Software Architecture, AI/ML & BI";
  const description = locale === "pt"
    ? "Consultoria sênior em arquitetura de software, inteligência artificial, machine learning e business intelligence."
    : "Senior consulting in software architecture, artificial intelligence, machine learning, and business intelligence.";
  return {
    title,
    description,
    metadataBase: new URL("http://localhost:3000"),
    alternates: {
      canonical: `/${locale}`,
      languages: {"pt-BR": "/pt", "en-US": "/en"}
    },
    openGraph: { title, description, url: `/${locale}`, type: "website", images: ["/images/hero.webp"] },
    twitter: { card: "summary_large_image", title, description, images: ["/images/hero.webp"] }
  };
}

export default async function LocaleLayout({children, params}: any) {
  const locale = getLocale(params.locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify({
              "@context":"https://schema.org",
              "@type":"Organization",
              "name":"ArchAItechs",
              "url":"https://www.archaitech.com.br",
              "logo":"/images/logo.svg",
              "sameAs":[
                "https://github.com/reneamendes",
                "https://github.com/tmendes-dev"
              ],
              "member":[
                {"@type":"Person","name":"René Mendes","url":"https://github.com/reneamendes"},
                {"@type":"Person","name":"Thomas Mendes","url":"https://github.com/tmendes-dev"}
              ]
            })}}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
