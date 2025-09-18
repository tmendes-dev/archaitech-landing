
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero({
  t, badges
}: { t: (k: string) => string; badges: string[] }) {
  return (
    <section className="relative bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Decorative SVG background shape */}
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 opacity-30 dark:opacity-20" width="900" height="400" viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="450" cy="200" rx="400" ry="120" fill="url(#hero-bg)" />
        <defs>
          <linearGradient id="hero-bg" x1="0" y1="0" x2="900" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-8 items-center">
  <FadeIn>
  <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-display text-slate-900 dark:text-white">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 rounded-xl px-6 sm:px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-all shadow-lg hover:shadow-xl"
            aria-label={t("hero.cta")}
          >
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
  </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative">
            <Image src="/images/hero.webp" alt="AI & Architecture" width={800} height={520}
                   className="rounded-2xl shadow-[0_6px_30px_-12px_rgba(0,0,0,0.25)] w-full h-auto" priority />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 pointer-events-none" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
