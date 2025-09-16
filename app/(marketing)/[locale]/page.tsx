// app/(marketing)/[locale]/page.tsx
import Link from "next/link";
import Image from "next/image";
import {getLocale, locales} from "@/lib/i18n";
import ptMessages from "@/messages/pt.json";
import enMessages from "@/messages/en.json";
import ThemeToggle from "./components/ThemeToggle";
import FadeIn from "./components/FadeIn";
import HoverLift from "./components/HoverLift";

type ServiceItem = { title: string; desc: string };

// Same helpers from before (works for nested or flat JSON)
function tKey(messages: any, key: string): string {
  const parts = key.split(".");
  let cur: any = messages;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) cur = cur[p];
    else { cur = undefined; break; }
  }
  if (typeof cur === "string") return cur;
  if (typeof messages?.[key] === "string") return messages[key];
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

export default async function Page({params}:{params:{locale:string}}) {
  const locale = getLocale(params.locale);
  const messages: any = locale === "pt" ? (ptMessages as any) : (enMessages as any);
  const services = getServices(messages);

  return (
    <main>
      {/* Header (sticky, blurred, dark-aware) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="ArchAItechs" width={32} height={32} priority />
            <span className="font-semibold">ArchAItechs</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#services" className="hover:underline">{tKey(messages, "nav.services")}</a>
            <a href="#partners" className="hover:underline">{tKey(messages, "nav.partners")}</a>
            <a href="#contact" className="rounded-xl px-4 py-2 bg-blue-600 text-white hover:opacity-90">
              {tKey(messages, "nav.contact")}
            </a>
            <div className="h-5 w-px bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`px-2 py-1 rounded ${l === locale ? "font-bold underline" : "opacity-80"}`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero (dark surface) */}
      <section className="bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <FadeIn>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight font-display">
                {tKey(messages, "hero.title")}
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{tKey(messages, "hero.subtitle")}</p>
              <HoverLift>
                <a
                  href="#contact"
                  className="inline-block mt-6 rounded-xl px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-cyan-500"
                >
                  {tKey(messages, "hero.cta")}
                </a>
              </HoverLift>
              <ul className="mt-6 flex gap-6 text-xs text-slate-500 dark:text-slate-400">
                <li>Core Web Vitals</li><li>SEO</li><li>Senior delivery</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Image
              src="/images/hero.webp"
              alt="AI & Architecture"
              width={800}
              height={520}
              className="rounded-2xl shadow-soft"
              priority
            />
          </FadeIn>
        </div>
      </section>

      {/* Services (cards on dark) */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold font-display">{tKey(messages, "services.title")}</h2>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.length > 0 ? (
            services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:bg-slate-900">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{s.desc}</p>
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
        <div className="mx-auto max-w-6xl px-4 py-16">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold font-display">{tKey(messages, "partners.title")}</h2>
          </FadeIn>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <FadeIn delay={0.05}>
              <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 dark:bg-slate-900">
                <h3 className="font-semibold">
                  René Mendes — {tKey(messages, "partners.rene.role")}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">AI/ML aplicado, MLOps e BI.</p>
                <a className="text-blue-600 underline" href="https://github.com/reneamendes" target="_blank" rel="noreferrer">
                  github.com/reneamendes
                </a>
              </article>
            </FadeIn>
            <FadeIn delay={0.1}>
              <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 dark:bg-slate-900">
                <h3 className="font-semibold">
                  Thomas Mendes — {tKey(messages, "partners.thomas.role")}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Arquitetura .NET, microsserviços e alta performance.</p>
                <a className="text-blue-600 underline" href="https://github.com/tmendes-dev" target="_blank" rel="noreferrer">
                  github.com/tmendes-dev
                </a>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-4 py-16">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-center font-display">{tKey(messages, "cta.title")}</h2>
          <p className="text-center mt-2 text-slate-600 dark:text-slate-300">{tKey(messages, "cta.subtitle")}</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <form method="post" action="/api/contact" className="mt-8 grid gap-4">
            <input required name="name" placeholder="Nome / Name" className="border rounded-xl p-3 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" />
            <input required type="email" name="email" placeholder="Email" className="border rounded-xl p-3 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" />
            <textarea required name="message" placeholder="Conte sobre seu desafio" className="border rounded-xl p-3 min-h-[120px] bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" />
            <HoverLift>
              <button className="rounded-xl px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-cyan-500"> {tKey(messages, "cta.button")} </button>
            </HoverLift>
          </form>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 flex justify-between text-sm">
          <span>© {new Date().getFullYear()} ArchAItechs</span>
          <span>Made with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
