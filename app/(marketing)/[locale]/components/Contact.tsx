
import FadeIn from "./FadeIn";

export default function Contact({ t, locale }: { t: (k: string) => string; locale: string }) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn delay={0.1}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center font-display text-slate-900 dark:text-white">
          {t("cta.title")}
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-center mt-2 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {t("cta.subtitle")}
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="mt-8 grid gap-4 bg-slate-100 dark:bg-slate-800/30 p-6 rounded-2xl">
          <p className="text-center text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {locale === "pt" ? "Enquanto isso, fale com a gente por e-mail: " : "Meanwhile, reach us via email: "}
          </p>
          <div className="flex justify-center mt-2">
            <a
              href="mailto:tmendes.dev@gmail.com"
              className="inline-block rounded-xl px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-all shadow-md hover:shadow-lg"
              aria-label="Email tmendes.dev@gmail.com"
            >
              tmendes.dev@gmail.com
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
