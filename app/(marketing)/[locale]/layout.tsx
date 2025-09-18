import type { Metadata } from "next";
import dynamic from "next/dynamic";
// Dynamically import ScrollToTopButton to avoid SSR issues
const ScrollToTopButton = dynamic(() => import("./components/ScrollToTopButton"), { ssr: false });
const Testimonials = dynamic(() => import("./components/Testimonials"), { ssr: false });
const Analytics = dynamic(() => import("./components/Analytics"), { ssr: false });
const FeedbackWidget = dynamic(() => import("./components/FeedbackWidget"), { ssr: false });
import { getLocale } from "@/lib/i18n";
import "@/styles/globals.css";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import ThemeAndFontClassFixer from "./components/ThemeAndFontClassFixer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || undefined;
const LINKEDIN_URL = "https://www.linkedin.com/company/archaitechs-solutions";

const SUPPORTED_LANGS: Record<string, string> = {
  en: SITE_URL ? `${SITE_URL}/en` : "/en",
  pt: SITE_URL ? `${SITE_URL}/pt` : "/pt",
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
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

  // Social meta variables
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

  const orgLdJson = SITE_URL
    ? {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ArchAItechs Solutions",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.svg`,
        sameAs: [LINKEDIN_URL],
      }
    : null;

  const siteLdJson = SITE_URL
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "ArchAItechs",
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }
    : null;

  // Pré-serializa JSON-LD
  const orgLd = orgLdJson ? JSON.stringify(orgLdJson) : null;
  const siteLd = siteLdJson ? JSON.stringify(siteLdJson) : null;

  return (
  <html lang={locale} className={`${inter.variable} ${display.variable} ${mono.variable}`}>
      <head>
        {/* Open Graph & Twitter meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={SITE_URL ? `${SITE_URL}/${locale}` : `/${locale}`} />
        <meta property="og:site_name" content="ArchAItechs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Theme is handled client-side for hydration safety */}
        {orgLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: orgLd }}
          />
        )}
        {siteLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: siteLd }}
          />
        )}
        {/* ⚠️ Não defina meta CSP aqui; os headers já cuidam da CSP */}
      </head>
      <body className="font-sans bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
        <ThemeAndFontClassFixer>
          <Analytics />
          {children}
          <Testimonials />
          <FeedbackWidget />
          <ScrollToTopButton />
        </ThemeAndFontClassFixer>
      </body>
    </html>
  );
}
