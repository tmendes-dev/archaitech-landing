/**
 * The main landing page component for the marketing site, supporting internationalization.
 *
 * This page loads locale-specific message bundles, deeply merges them with default English messages,
 * and provides a translation function `t` to all child components. It renders the full marketing
 * site layout, including header, hero, stats, services, process, engagement models, case studies,
 * technology pillars, FAQ, partners, contact, and footer sections.
 *
 * @param params - Route parameters, including the `locale` string (e.g., "en", "pt").
 * @returns The fully rendered marketing landing page as a React component.
 *
 * @remarks
 * - Uses a custom `deepMerge` function to overlay partial locale JSONs onto the default message schema.
 * - The translation function `t` is a simple dot-path resolver for nested message keys.
 * - All content sections receive localized strings and data via props.
 */
// app/(marketing)/[locale]/page.tsx
import type { Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n";

import type { Messages } from "./messages/schema";
import { DEFAULT_MESSAGES_EN } from "./messages/defaults-en";
import { DeepPartial } from "./messages/types";

import enMessagesJson from "./messages/en.json";
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
import EngagementModels from "./components/EngagementModels";
import FAQ from "./components/FAQ";
// ...existing code...

// Deep merge two objects, where `override` can be a DeepPartial of `base`
// Arrays are replaced, not merged
// Primitives in `override` replace those in `base`

function deepMerge<T>(base: T, override: DeepPartial<T>): T {
  if (override === undefined) {
    return base;
  }
  if (Array.isArray(base)) {
    // if override is an array, use it; else keep base
    return (Array.isArray(override) ? (override as any) : (base as any)) as T;
  }
  if (typeof base === "object" && base && typeof override === "object" && override) {
    const out: any = { ...base };
    // merge keys from base
    for (const k of Object.keys(base as any)) {
      const bv = (base as any)[k];
      const ov = (override as any)[k];
      out[k] =
        ov === undefined
          ? bv
          : typeof bv === "object" && bv !== null
            ? deepMerge(bv, ov as any)
            : ov;
    }
    for (const k of Object.keys(override as any)) {
      if (!(k in out)) out[k] = (override as any)[k];
    }
    return out;
  }
  return ((override as any) ?? base) as T;
}

function tFactory(messages: Messages) {
  return (key: string): string => {
    const parts = key.split(".");
    let cur: any = messages;
    for (const p of parts) {
      if (cur && typeof cur === "object" && p in cur) cur = cur[p];
      else return key;
    }
    return typeof cur === "string" ? cur : key;
  };
}
function mergeWithFallback(en: Messages, raw: Partial<Messages> | undefined): Messages {
  const r = raw ?? {};

  return {
    nav: { ...en.nav, ...(r.nav ?? {}) },

    hero: { ...en.hero, ...(r.hero ?? {}) },

    stats: { ...en.stats, ...(r.stats ?? {}) },

    services: {
      title: r.services?.title ?? en.services.title,
      items: r.services?.items ?? en.services.items,
    },

    process: {
      title: r.process?.title ?? en.process.title,
      steps: r.process?.steps ?? en.process.steps,
    },

    engagement: {
      title: r.engagement?.title ?? en.engagement.title,
      items: r.engagement?.items ?? en.engagement.items,
    },

    cases: {
      title: r.cases?.title ?? en.cases.title,
      subtitle: r.cases?.subtitle ?? en.cases.subtitle,
      items: r.cases?.items ?? en.cases.items,
    },

    tech: {
      title: r.tech?.title ?? en.tech.title,
      subtitle: r.tech?.subtitle ?? en.tech.subtitle,
      pillars: r.tech?.pillars ?? en.tech.pillars,
    },

    faq: {
      title: r.faq?.title ?? en.faq.title,
      items: r.faq?.items ?? en.faq.items,
    },

    partners: {
      title: r.partners?.title ?? en.partners.title,
      rene: {
        role: r.partners?.rene?.role ?? en.partners.rene.role,
        bio: r.partners?.rene?.bio ?? en.partners.rene.bio,
      },
      thomas: {
        role: r.partners?.thomas?.role ?? en.partners.thomas.role,
        bio: r.partners?.thomas?.bio ?? en.partners.thomas.bio,
      },
    },

    contact: {
      title: r.contact?.title ?? en.contact.title,
      subtitle: r.contact?.subtitle ?? en.contact.subtitle,
      button: r.contact?.button ?? en.contact.button,
    },

    footer: {
      madeWith: r.footer?.madeWith ?? en.footer.madeWith,
      rights: r.footer?.rights ?? en.footer.rights,
    },
  };
}
export default async function Page({ params }: { params: { locale: string } }) {
  const locale: Locale = getLocale(params.locale);

  // Treat JSONs as DeepPartial so nested keys can be missing safely
  const enPartial = enMessagesJson as unknown as DeepPartial<Messages>;
  // Always use English messages only
  const merged: Messages = deepMerge<Messages>(DEFAULT_MESSAGES_EN, enPartial);

  const t = tFactory(merged);

  const engagement = merged.engagement.items ?? [];
  const faq = merged.faq.items ?? [];
  const services = merged.services.items ?? [];
  const steps = merged.process.steps ?? [];
  const cases = merged.cases.items ?? [];
  const techPillars = merged.tech.pillars ?? [];
  const badges = merged.hero.badges ?? [];
 

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader locale={locale} t={t} />
  <Hero t={t} badges={badges} />
  <div className="h-6 sm:h-10 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900 w-full" />
  <Stats t={t} />
  <div className="h-6 sm:h-10 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-white dark:to-slate-950 w-full" />
  <Services t={t} services={services} />
  <div className="h-6 sm:h-10 bg-gradient-to-b from-white dark:from-slate-950 to-slate-50 dark:to-slate-900 w-full" />
  <Process t={t} steps={steps} />
  <div className="h-6 sm:h-10 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-white dark:to-slate-950 w-full" />
  <CaseStudies
        title={t("cases.title")}
        subtitle={t("cases.subtitle")}
        empty={t("cases.empty") || "Case studies not found."}
        challengeLabel={t("cases.labels.challenge") || "Challenge"}
        solutionLabel={t("cases.labels.solution") || "Solution"}
        resultLabel={t("cases.labels.result") || "Result"}
        items={cases}
      />
  <Tech t={t} pillars={techPillars} />
  <div className="h-6 sm:h-10 bg-gradient-to-b from-white dark:from-slate-950 to-slate-50 dark:to-slate-900 w-full" />
  <EngagementModels title={merged.engagement?.title ?? ''} items={engagement} />
  <div className="h-6 sm:h-10 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-white dark:to-slate-950 w-full" />
  <Partners
        t={t}
        rene={{ role: t("partners.rene.role"), bio: t("partners.rene.bio") }}
        thomas={{ role: t("partners.thomas.role"), bio: t("partners.thomas.bio") }}
      />
      {/* What Our Clients Say section removed */}
  <Contact t={t} locale={locale} />
  <div className="h-6 sm:h-10 bg-gradient-to-b from-white dark:from-slate-950 to-slate-50 dark:to-slate-900 w-full" />
  <FAQ title={merged.faq.title} items={faq} />
  <SiteFooter t={t} />
    </main>
  );
}
