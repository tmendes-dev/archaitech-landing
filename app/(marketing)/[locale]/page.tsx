import Link from "next/link";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {locales, getLocale} from "@/lib/i18n";

export default function Page({params}:{params:{locale:string}}) {
  const t = useTranslations();
  const locale = getLocale(params.locale);
  return (
    <main>
      <header className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image src="/images/logo.svg" alt="ArchAItechs" width={36} height={36} priority />
          <span className="font-semibold">ArchAItechs</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#services">{t("nav.services")}</a>
          <a href="#partners">{t("nav.partners")}</a>
          <a href="#contact" className="rounded-xl px-4 py-2 bg-blue-600 text-white">{t("nav.contact")}</a>
          {locales.map(l => (
            <Link key={l} href={`/${l}`} prefetch className={l===locale?"font-bold":""}>
              {l.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{t("hero.title")}</h1>
            <p className="mt-4 text-slate-600">{t("hero.subtitle")}</p>
            <a href="#contact" className="inline-block mt-6 rounded-xl bg-blue-600 text-white px-6 py-3">
              {t("hero.cta")}
            </a>
            <ul className="mt-6 flex gap-6 text-xs text-slate-500">
              <li>Core Web Vitals</li><li>SEO técnico</li><li>Entrega sênior</li>
            </ul>
          </div>
          <Image src="/images/hero.webp" alt="AI & Architecture" width={800} height={520} className="rounded-2xl" priority />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{t("services.title")}</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {t.raw("services.items").map((s: any, i: number) => (
            <article key={i} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">{t("partners.title")}</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border p-6">
              <h3 className="font-semibold">René Mendes — {t("partners.rene.role")}</h3>
              <p className="mt-2 text-slate-600">AI/ML aplicado, MLOps e BI.</p>
              <a className="text-blue-600 underline" href="https://github.com/reneamendes" target="_blank" rel="noreferrer">
                github.com/reneamendes
              </a>
            </article>
            <article className="rounded-2xl border p-6">
              <h3 className="font-semibold">Thomas Mendes — {t("partners.thomas.role")}</h3>
              <p className="mt-2 text-slate-600">Arquitetura .NET, microsserviços e alta performance.</p>
              <a className="text-blue-600 underline" href="https://github.com/tmendes-dev" target="_blank" rel="noreferrer">
                github.com/tmendes-dev
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center">{t("cta.title")}</h2>
        <p className="text-center mt-2 text-slate-600">{t("cta.subtitle")}</p>
        <form method="post" action="/api/contact" className="mt-8 grid gap-4">
          <input required name="name" placeholder="Nome / Name" className="border rounded-xl p-3" />
          <input required type="email" name="email" placeholder="Email" className="border rounded-xl p-3" />
          <textarea required name="message" placeholder="Conte sobre seu desafio" className="border rounded-xl p-3 min-h-[120px]"></textarea>
          <button className="rounded-xl bg-blue-600 text-white px-6 py-3">{t("cta.button")}</button>
        </form>
      </section>

      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 flex justify-between text-sm">
          <span>© {new Date().getFullYear()} ArchAItechs</span>
          <span>Made with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
