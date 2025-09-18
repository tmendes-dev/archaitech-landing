
import FadeIn from "./FadeIn";
import HoverLift from "./HoverLift";
import SectionSkeleton from "./SectionSkeleton";
import Spinner from "./Spinner";

type Pillar = { name: string; icon: string; items: string[] };

export default function Tech({
  t, pillars
}: { t: (k: string) => string; pillars: Pillar[] }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white text-center">{t("tech.title")}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300 text-lg text-center">{t("tech.subtitle")}</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars === undefined || pillars === null ? (
            <div className="flex justify-center items-center h-40 col-span-full"><Spinner /></div>
          ) : pillars.map((p, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <HoverLift>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{p.name}</h3>
                  <ul className="space-y-2">{p.items.map((it, j) => (
                    <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />{it}
                    </li>
                  ))}</ul>
                </div>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
