
import FadeIn from "./FadeIn";
import HoverLift from "./HoverLift";

// Server Component
type EngagementItem = { title: string; desc: string };

export default function EngagementModels({
  title,
  items,
}: {
  title: string;
  items: EngagementItem[];
}) {
  return (
    <section id="engagement" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold font-display">{title}</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items?.map((it, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.1}>
            <HoverLift>
              <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{it.desc}</p>
              </article>
            </HoverLift>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
