export default function Contact({ t, locale }: { t: (k: string) => string; locale: string }) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center font-display text-slate-900 dark:text-white">
        {t("cta.title")}
      </h2>
      <p className="text-center mt-2 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
        {t("cta.subtitle")}
      </p>
      <div className="mt-8 grid gap-4 bg-slate-100 dark:bg-slate-800/30 p-6 rounded-2xl">
        <p className="text-center text-sm sm:text-base text-slate-700 dark:text-slate-300">
          {locale === "pt" ? "Enquanto isso, fale com a gente por e-mail: " : "Meanwhile, reach us via email: "}
          <a href="mailto:tmendes.dev@gmail.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline break-all transition-colors font-medium">
            tmendes.dev@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
