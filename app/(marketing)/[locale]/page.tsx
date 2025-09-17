import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n";
import ptMessages from "@/messages/pt.json";
import enMessages from "@/messages/en.json";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSwitch from "./components/LanguageSwitch";
import FadeIn from "./components/FadeIn";
import HoverLift from "./components/HoverLift";

type ServiceItem = { title: string; desc: string };

// Fallbacks embutidos (garante texto mesmo se o JSON estiver incompleto)
const FALLBACK: Record<Locale, Record<string, string>> = {
  pt: {
    "nav.services": "Serviços",
    "nav.partners": "Sócios",
    "nav.contact": "Contato",

    "hero.title": "Arquitetura de Software & Inteligência Artificial para gerar resultado",
    "hero.subtitle": "Consultoria sênior em TI, AI/ML e BI — da estratégia ao delivery.",
    "hero.cta": "Solicitar diagnóstico",

    "services.title": "O que fazemos",

    "partners.title": "Sócios",
    "partners.rene.role": "AI, ML e BI",
    "partners.rene.bio": "Especialista em IA/ML aplicado, MLOps e BI. Conecta dados, modelos e produto para gerar impacto real.",
    "partners.thomas.role": "Arquitetura & Engenharia de Software",
    "partners.thomas.bio": "Arquitetura .NET, microsserviços e alta performance. Foco em escalabilidade, observabilidade e DX.",

    "cta.title": "Pronto para o próximo nível?",
    "cta.subtitle": "Conte seu desafio. Enviamos um diagnóstico em 2 dias úteis.",
    "cta.button": "Falar com a ArchAItechs",

    "form.name": "Nome",
    "form.email": "Email",
    "form.message": "Conte sobre seu desafio",

    "alert.sent": "Mensagem enviada! Obrigado.",
    "footer.madeWith": "Feito com Next.js"
  },
  en: {
    "nav.services": "Services",
    "nav.partners": "Partners",
    "nav.contact": "Contact",

    "hero.title": "Software Architecture & AI that drive outcomes",
    "hero.subtitle": "Senior consulting in IT, AI/ML and BI — from strategy to delivery.",
    "hero.cta": "Request an assessment",

    "services.title": "What we do",

    "partners.title": "Partners",
    "partners.rene.role": "AI, ML & BI",
    "partners.rene.bio": "Expert in applied AI/ML, MLOps and BI. Connects data, models and product to drive real impact.",
    "partners.thomas.role": "Architecture & Software Engineering",
    "partners.thomas.bio": ".NET architecture, microservices and high performance. Focus on scalability, observability and DX.",

    "cta.title": "Ready for the next level?",
    "cta.subtitle": "Tell us your challenge. We’ll send an assessment within 2 business days.",
    "cta.button": "Talk to ArchAItechs",

    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Tell us about your challenge",

    "alert.sent": "Message sent! Thank you.",
    "footer.madeWith": "Made with Next.js"
  }
};

// Lê nested "a.b.c", cai para flat "a.b.c", senão devolve fallback; se nem fallback, retorna a própria chave
function tKey(messages: any, key: string, locale: Locale): string {
  const parts = key.split(".");
  let cur: any = messages;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) cur = cur[p];
    else { cur = undefined; break; }
  }
  if (typeof cur === "string") return cur;
  if (typeof messages?.[key] === "string") return messages[key];
  if (FALLBACK[locale][key]) return FALLBACK[locale][key];
  return key;
}

function getServices(messages: any): ServiceItem[] {
  const nested = messages?.services?.items;
  if (Array.isArray(nested)) return nested as ServiceItem[];
  const flat = messages?.["services.items"];
  if (Array.isArray(flat)) return flat as ServiceItem[];
  if (flat && typeof flat === "object") return Object.values(flat) as ServiceItem[];
  return [];
}

function getBadges(messages: any, locale: Locale): string[] {
  const nested = messages?.hero?.badges;
  if (Array.isArray(nested)) return nested as string[];
  const flat = messages?.["hero.badges"];
  if (Array.isArray(flat)) return flat as string[];
  // usa fallback se existir
  const b = FALLBACK[locale]["hero.badges"];
  if (b) {
    try { return JSON.parse(b); } catch {}
  }
  return [];
}

export default async function Page({
  params,
  searchParams
}: {
  params: { locale: string };
  searchParams?: { sent?: string };
}) {
  const locale: Locale = getLocale(params.locale);
  const messages: any = locale === "pt" ? (ptMessages as any) : (enMessages as any);

  const services = getServices(messages);
  const badges = getBadges(messages, locale);
  const sent = searchParams?.sent === "1";

  return (
    <main>
      {/* Header responsivo */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="ArchAItechs" width={28} height={28} priority />
            <span className="font-semibold">ArchAItechs</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#services" className="hover:underline">{tKey(messages, "nav.services", locale)}</a>
            <a href="#partners" className="hover:underline">{tKey(messages, "nav.partners", locale)}</a>
            <a href="#contact" className="rounded-xl px-4 py-2 bg-blue-600 text-white hover:opacity-90">
              {tKey(messages, "nav.contact", locale)}
            </a>
            <div className="h-5 w-px bg-slate-300 dark:bg-slate-700" />
            <LanguageSwitch current={locale} />
            <ThemeToggle />
          </nav>

          {/* Mobile nav (sem JS extra) */}
          <details className="md:hidden">
            <summary className="list-none rounded-xl border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm cursor-pointer">
              Menu
            </summary>
            <div className="mt-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-lg">
              <div className="flex flex-col gap-2 text-sm">
                <a href={`/${locale}#services`} className="py-1">{tKey(messages, "nav.services", locale)}</a>
                <a href={`/${locale}#partners`} className="py-1">{tKey(messages, "nav.partners", locale)}</a>
                <a href={`/${locale}#contact`} className="py-1 rounded-lg bg-blue-600 text-white text-center">
                  {tKey(messages, "nav.contact", locale)}
                </a>
                <div className="h-px bg-slate-200 dark:bg-slate-800 my-2" />
                <div className="flex items-center justify-between">
                  <LanguageSwitch current={locale} />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-8 items-center">
          <FadeIn>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-display">
                {tKey(messages, "hero.title", locale)}
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
                {tKey(messages, "hero.subtitle", locale)}
              </p>
              <HoverLift>
                <a
                  href="#contact"
                  className="inline-block mt-6 rounded-xl px-5 sm:px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-cyan-500"
                >
                  {tKey(messages, "hero.cta", locale)}
                </a>
              </HoverLift>

              {badges.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {badges.map((b, i) => (
                    <li key={i} className="rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Image
              src="/images/hero.webp"
              alt="AI & Architecture"
              width={800}
              height={520}
              className="rounded-2xl shadow-[0_6px_30px_-12px_rgba(0,0,0,0.25)] w-full h-auto"
              priority
            />
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold font-display">{tKey(messages, "services.title", locale)}</h2>
        </FadeIn>
        <div className="mt-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {services.length > 0 ? (
            services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm dark:bg-slate-900">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">{s.desc}</p>
                </article>
              </FadeIn>
            ))
          ) : (
            <p className="text-slate-500 dark:text-slate-400">
              {locale === "pt"
                ? "Configuração de serviços não encontrada. Verifique messages/pt.json → services.items."
                : "Services configuration not found. Check messages/en.json → services.items."}
            </p>
          )}
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold font-display">{tKey(messages, "partners.title", locale)}</h2>
          </FadeIn>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
            <FadeIn delay={0.05}>
              <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 dark:bg-slate-900">
                <h3 className="font-semibold">
                  René Mendes — {tKey(messages, "partners.rene.role", locale)}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  {tKey(messages, "partners.rene.bio", locale)}
                </p>
                <a className="text-blue-600 underline break-all" href="https://github.com/reneamendes" target="_blank" rel="noreferrer">
                  github.com/reneamendes
                </a>
              </article>
            </FadeIn>
            <FadeIn delay={0.1}>
              <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 dark:bg-slate-900">
                <h3 className="font-semibold">
                  Thomas Mendes — {tKey(messages, "partners.thomas.role", locale)}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  {tKey(messages, "partners.thomas.bio", locale)}
                </p>
                <a className="text-blue-600 underline break-all" href="https://github.com/tmendes-dev" target="_blank" rel="noreferrer">
                  github.com/tmendes-dev
                </a>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-center font-display">{tKey(messages, "cta.title", locale)}</h2>
          <p className="text-center mt-2 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            {tKey(messages, "cta.subtitle", locale)}
          </p>
        </FadeIn>

        {sent && (
          <div className="mx-auto mt-4 max-w-2xl rounded-xl bg-green-600/10 text-green-600 px-4 py-3 text-sm">
            {tKey(messages, "alert.sent", locale)}
          </div>
        )}

        <FadeIn delay={0.05}>
          <form method="post" action="/api/contact" className="mt-8 grid gap-3 sm:gap-4">
            {/* honeypot anti-spam */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
            <input
              required
              name="name"
              placeholder={tKey(messages, "form.name", locale)}
              className="border rounded-xl p-3 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-sm sm:text-base"
            />
            <input
              required
              type="email"
              name="email"
              placeholder={tKey(messages, "form.email", locale)}
              className="border rounded-xl p-3 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-sm sm:text-base"
            />
            <textarea
              required
              name="message"
              placeholder={tKey(messages, "form.message", locale)}
              className="border rounded-xl p-3 min-h-[120px] bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-sm sm:text-base"
            />
            <HoverLift>
              <button className="rounded-xl px-5 sm:px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-cyan-500">
                {tKey(messages, "cta.button", locale)}
              </button>
            </HoverLift>
          </form>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between text-sm">
          <span>© {new Date().getFullYear()} ArchAItechs</span>
          <span>{tKey(messages, "footer.madeWith", locale)}</span>
        </div>
      </footer>
    </main>
  );
}
