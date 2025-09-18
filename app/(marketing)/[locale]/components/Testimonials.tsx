import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Lucas Silva",
    role: "CTO, FinTech Startup",
    text: "ArchAItechs delivered our MVP on time with a world-class architecture. Their senior team made the difference!",
  },
  {
    name: "Maria Oliveira",
    role: "Product Owner, HealthTech",
    text: "The expert network gave us access to top talent for every need. We shipped faster and with higher quality.",
  },
  {
    name: "João Souza",
    role: "Engineering Manager, SaaS",
    text: "From backend to QA, their professionals integrated seamlessly and raised our engineering bar.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-center text-slate-900 dark:text-white mb-8">What Our Clients Say</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.1}>
            <blockquote className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow hover:shadow-md transition-shadow h-full flex flex-col justify-between">
              <p className="text-slate-700 dark:text-slate-300 text-base mb-4">“{t.text}”</p>
              <footer className="mt-auto text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">{t.name}</span><br/>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
