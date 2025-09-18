export default function Stats({ t }: { t: (k: string) => string }) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6">
          <div className="text-4xl font-bold mb-2">25+</div>
          <div className="text-sm uppercase tracking-wider opacity-90">{t("stats.clients")}</div>
        </div>
        <div className="p-6">
          <div className="text-4xl font-bold mb-2">40+</div>
          <div className="text-sm uppercase tracking-wider opacity-90">{t("stats.projects")}</div>
        </div>
        <div className="p-6">
          <div className="text-4xl font-bold mb-2">10+</div>
          <div className="text-sm uppercase tracking-wider opacity-90">{t("stats.years")}</div>
        </div>
      </div>
    </section>
  );
}
