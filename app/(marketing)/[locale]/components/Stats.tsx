
import FadeIn from "./FadeIn";
import HoverLift from "./HoverLift";

export default function Stats({ t }: { t: (k: string) => string }) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <FadeIn delay={0.1}>
          <HoverLift>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">{t("stats.clients")}</div>
            </div>
          </HoverLift>
        </FadeIn>
        <FadeIn delay={0.2}>
          <HoverLift>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">{t("stats.projects")}</div>
            </div>
          </HoverLift>
        </FadeIn>
        <FadeIn delay={0.3}>
          <HoverLift>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">6+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">{t("stats.years")}</div>
            </div>
          </HoverLift>
        </FadeIn>
      </div>
    </section>
  );
}
