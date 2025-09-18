

import FadeIn from "./FadeIn";
import AssessmentForm from "./AssessmentForm";

export default function Contact({ t, locale }: { t: (k: string) => string; locale: string }) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <FadeIn delay={0.1}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center font-display text-slate-900 dark:text-white">
          {t("cta.title")}
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-center mt-2 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {t("cta.subtitle")}
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="mt-8 grid gap-4 bg-slate-100 dark:bg-slate-800/30 p-6 rounded-2xl">
          <AssessmentForm email="tmendes.dev@gmail.com" />
        </div>
      </FadeIn>
    </section>
  );
}
