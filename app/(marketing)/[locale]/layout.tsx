import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n";
import "@/styles/globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || undefined;
const LINKEDIN_URL = "https://www.linkedin.com/company/archaitechs-solutions";

const SUPPORTED_LANGS: Record<string, string> = {
  en: SITE_URL ? `${SITE_URL}/en` : "/en",
  pt: SITE_URL ? `${SITE_URL}/pt` : "/pt",
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = getLocale(params.locale);

  const title =
    locale === "pt"
      ? "ArchAItechs — Consultoria em TI, Arquitetura de Software, AI/ML e BI"
      : "ArchAItechs — IT Consulting, Software Architecture, AI/ML & BI";

  const description =
    locale === "pt"
      ? "Consultoria sênior em arquitetura de software, IA/ML e BI."
      : "Senior consulting in software architecture, AI/ML and BI.";

  const ogImagePath = "/images/hero.webp";
  const ogImage = SITE_URL ? `${SITE_URL}${ogImagePath}` : ogImagePath;

  return {
    ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
    title,
    description,
    alternates: {
      canonical: SITE_URL ? `${SITE_URL}/${locale}` : `/${locale}`,
      languages: SUPPORTED_LANGS,
    },
    openGraph: {
      type: "website",
      locale,
      url: `/${locale}`,
      title,
      description,
      images: [{ url: ogImage }],
      siteName: "ArchAItechs",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = getLocale(params.locale);

  // JSON-LD só quando houver domínio configurado (evita dados parciais)
  const orgLdJson = SITE_URL
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ArchAItechs Solutions",
        "url": SITE_URL,
        "logo": `${SITE_URL}/images/logo.svg`,
        "sameAs": [LINKEDIN_URL],
      }
    : null;

  const siteLdJson = SITE_URL
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ArchAItechs",
        "url": SITE_URL,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }
    : null;

  return (
    <html lang={locale} className={`${inter.variable} ${display.variable}`}>
      <head>
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
        {orgLdJson && (
          <script
            type="application/ld+json"
            // @ts-expect-error: JSON-LD literal
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLdJson) }}
          />
        )}
        {siteLdJson && (
          <script
            type="application/ld+json"
            // @ts-expect-error: JSON-LD literal
            dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLdJson) }}
          />
        )}
      </head>
      <body className="font-sans bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
