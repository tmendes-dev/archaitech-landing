import Image from "next/image";

export default function Hero({
  t, badges
}: { t: (k: string) => string; badges: string[] }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-display text-slate-900 dark:text-white">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <a href="#contact" className="inline-block mt-6 rounded-xl px-5 sm:px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg font-medium">
            {t("hero.cta")}
          </a>

          {badges?.length ? (
            <ul className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {badges.map((b, i) => (
                <li key={i} className="rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">{b}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="relative">
          <Image src="/images/hero.webp" alt="AI & Architecture" width={800} height={520}
                 className="rounded-2xl shadow-[0_6px_30px_-12px_rgba(0,0,0,0.25)] w-full h-auto" priority />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
