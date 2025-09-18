import type { Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n";

import enMessages from "./messages/en.json";
import ptMessages from "./messages/pt.json";

import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Tech from "./components/Tech";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import SiteFooter from "./components/SiteFooter";

function tFactory(messages: any) {
  return (key: string): string => {
    const parts = key.split(".");
    let cur: any = messages;
    for (const p of parts) {
      if (cur && typeof cur === "object" && p in cur) cur = cur[p];
      else return key; // fallback: echo the key if missing
    }
    return typeof cur === "string" ? cur : key;
  };
}

export default async function Page({ params }: { params: { locale: string } }) {
  const locale: Locale = getLocale(params.locale);
  const messages: any = locale === "pt" ? ptMessages : enMessages;
  const t = tFactory(messages);

  const services = messages?.services?.items ?? [];
  const steps = messages?.process?.steps ?? [];
  const cases = messages?.cases?.items ?? [];
  const techPillars = messages?.tech?.pillars ?? [];
  const badges = messages?.hero?.badges ?? [];

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader locale={locale} t={t} />
      <Hero t={t} badges={badges} />
      {/* <Stats t={t} /> */}
      <Services t={t} services={services} />
      <Process t={t} steps={steps} />
      <CaseStudies t={t} items={cases} />
      <Tech t={t} pillars={techPillars} />
      <Partners
        t={t}
        rene={{ role: t("partners.rene.role"), bio: t("partners.rene.bio") }}
        thomas={{ role: t("partners.thomas.role"), bio: t("partners.thomas.bio") }}
      />
      <Contact t={t} locale={locale} />
      <SiteFooter t={t} />
    </main>
  );
}
