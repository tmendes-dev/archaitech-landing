type Step = { title: string; desc: string };

export default function Process({
  t, steps
}: { t: (k: string) => string; steps: Step[] }) {
  return (
    <section id="process" className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white text-center mb-4">{t("process.title")}</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
