export default function Partners({
  t, rene, thomas
}: {
  t: (k: string) => string;
  rene: { role: string; bio: string };
  thomas: { role: string; bio: string };
}) {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">{t("partners.title")}</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
        <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 dark:bg-slate-900 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-slate-900 dark:text-white">René Mendes — {rene.role}</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{rene.bio}</p>
          <a className="mt-3 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline break-all text-sm transition-colors"
             href="https://github.com/reneamendes" target="_blank" rel="noopener noreferrer">github.com/reneamendes</a>
        </article>
        <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 dark:bg-slate-900 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-slate-900 dark:text-white">Thomas Mendes — {thomas.role}</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{thomas.bio}</p>
          <a className="mt-3 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline break-all text-sm transition-colors"
             href="https://github.com/tmendes-dev" target="_blank" rel="noopener noreferrer">github.com/tmendes-dev</a>
        </article>
      </div>
    </section>
  );
}
