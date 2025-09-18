type ServiceItem = { title: string; desc: string };

export default function Services({
  t, services
}: { t: (k: string) => string; services: ServiceItem[] }) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">{t("services.title")}</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services?.length ? services.map((s, i) => (
          <article key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm dark:bg-slate-900 bg-white hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-slate-900 dark:text-white">{s.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{s.desc}</p>
          </article>
        )) : (
          <p className="text-slate-500 dark:text-slate-400 col-span-full text-center py-8">
            {t("services.empty") || "No services configured."}
          </p>
        )}
      </div>
    </section>
  );
}
