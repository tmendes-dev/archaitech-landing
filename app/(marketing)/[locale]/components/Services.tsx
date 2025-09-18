
import FadeIn from "./FadeIn";
import HoverLift from "./HoverLift";
import SectionSkeleton from "./SectionSkeleton";
import Spinner from "./Spinner";
type ServiceItem = { title: string; desc: string };

export default function Services({
  t, services
}: { t: (k: string) => string; services: ServiceItem[] }) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">{t("services.title")}</h2>
      </FadeIn>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services === undefined || services === null ? (
          <div className="flex justify-center items-center h-40 col-span-full"><Spinner /></div>
        ) : services?.length ? services.map((s, i) => {
          // Pick an icon for each service by index (customize as needed)
          const icons = [
            "\ud83d\udee0\ufe0f", // 🛠️ Architecture & Engineering
            "\u2601\ufe0f",        // ☁️ Cloud & Infrastructure
            "\ud83e\uddea",        // 🧪 AI & Machine Learning
            "\ud83d\udcca"         // 📊 Business Intelligence
          ];
          const icon = icons[i] || "\ud83d\udcbb";
          return (
            <FadeIn key={i} delay={i * 0.08}>
              <HoverLift>
                <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm dark:bg-slate-900 bg-white hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none transition-shadow">
              <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span aria-hidden="true">{icon}</span>{s.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">{s.desc}</p>
            </article>
                </HoverLift>
              </FadeIn>
          );
        }) : (
          <p className="text-slate-500 dark:text-slate-400 col-span-full text-center py-8">
            {t("services.empty") || "No services configured."}
          </p>
        )}
      </div>
    </section>
  );
}
