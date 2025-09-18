type CaseStudy = { title: string; challenge: string; solution: string; result: string };

export default function CaseStudies({
  t, items
}: { t: (k: string) => string; items: CaseStudy[] }) {
  return (
    <section id="cases" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">{t("cases.title")}</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300 text-lg">{t("cases.subtitle")}</p>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items?.length ? items.map((c, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">{c.title}</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-1">{t("cases.labels.challenge") || "Challenge"}</h4>
                <p className="text-slate-600 dark:text-slate-400">{c.challenge}</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-1">{t("cases.labels.solution") || "Solution"}</h4>
                <p className="text-slate-600 dark:text-slate-400">{c.solution}</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-1">{t("cases.labels.result") || "Result"}</h4>
                <p className="text-slate-600 dark:text-slate-400">{c.result}</p>
              </div>
            </div>
          </div>
        )) : (
          <p className="text-slate-500 dark:text-slate-400 col-span-full text-center py-8">{t("cases.empty") || "Case studies not found."}</p>
        )}
      </div>
    </section>
  );
}
