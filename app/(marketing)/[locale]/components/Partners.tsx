
import FadeIn from "./FadeIn";
import HoverLift from "./HoverLift";

export default function Partners({
  t, rene, thomas
}: {
  t: (k: string) => string;
  rene: { role: string; bio: string };
  thomas: { role: string; bio: string };
}) {
  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">{t("partners.title")}</h2>
      <div className="mt-8 grid sm:grid-cols-3 gap-4 sm:gap-6">
        <FadeIn delay={0.1}>
          <HoverLift>
            <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 dark:bg-slate-900 bg-white hover:shadow-md transition-shadow flex flex-col items-center">
              <img
                src="/images/rene.jpg"
                alt="René Mendes photo"
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 mb-4 shadow"
                width={96}
                height={96}
                loading="lazy"
              />
              <h3 className="font-semibold text-slate-900 dark:text-white text-center">René Mendes — {rene.role}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-center">{rene.bio}</p>
              <div className="mt-3 flex gap-3 justify-center">
                <a
                  href="https://github.com/reneamendes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors"
                  aria-label="René Mendes GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/renemendes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors"
                  aria-label="René Mendes LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </article>
          </HoverLift>
        </FadeIn>
        <FadeIn delay={0.2}>
          <HoverLift>
            <article className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 dark:bg-slate-900 bg-white hover:shadow-md transition-shadow flex flex-col items-center">
              <img
                src="/images/thomas.jpg"
                alt="Thomas Mendes photo"
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 mb-4 shadow"
                width={96}
                height={96}
                loading="lazy"
              />
              <h3 className="font-semibold text-slate-900 dark:text-white text-center">Thomas Mendes — {thomas.role}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-center">{thomas.bio}</p>
              <div className="mt-3 flex gap-3 justify-center">
                <a
                  href="https://github.com/tmendes-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors"
                  aria-label="Thomas Mendes GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/thomasmendes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors"
                  aria-label="Thomas Mendes LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </article>
          </HoverLift>
        </FadeIn>
        {/* New Partner: Expert Network */}
        <FadeIn delay={0.3}>
          <HoverLift>
            <article className="rounded-2xl border-2 border-dashed border-blue-400 dark:border-blue-700 p-5 sm:p-6 bg-gradient-to-br from-blue-50/80 via-white/80 to-blue-100/60 dark:from-blue-900/40 dark:via-slate-900/80 dark:to-blue-950/40 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 rounded-full bg-blue-200 dark:bg-blue-900 flex items-center justify-center mb-4 shadow">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="#38bdf8" fillOpacity="0.2"/>
                  <path d="M24 14a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 14c5.33 0 10 2.24 10 5v3H14v-3c0-2.76 4.67-5 10-5z" fill="#2563eb"/>
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-center">Expert Network</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-center">
                <span className="font-medium text-blue-700 dark:text-blue-300">Senior Developers, SDETs, PMs, POs</span><br/>
                A pool of highly experienced professionals—backend, frontend, QA, and product—ready to join your project and deliver big products on time. For all needs, we have the right contact.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2 w-full">
                <a
                  href="#contact"
                  className="inline-block rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold shadow hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-colors text-center w-full"
                >
                  Contact for Talent
                </a>
                <span className="text-xs text-slate-500 dark:text-slate-400 text-center">Available for all project needs</span>
              </div>
            </article>
          </HoverLift>
        </FadeIn>
      </div>
    </section>
  );
}
