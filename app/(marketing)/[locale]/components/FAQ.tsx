
import FadeIn from "./FadeIn";

// Server Component
type FaqItem = { q: string; a: string };

export default function FAQ({
  title,
  items,
}: {
  title: string;
  items: FaqItem[];
}) {
  const faqLdJson = items?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      }
    : null;

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-center">{title}</h2>

      {faqLdJson && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLdJson) }} />
      )}

      <div className="mt-8 divide-y divide-slate-200 dark:divide-slate-800">
        {items?.map((it, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.1}>
            <details className="py-4 group">
              <summary className="cursor-pointer font-medium list-none">{it.q}</summary>
              <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">{it.a}</p>
            </details>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
