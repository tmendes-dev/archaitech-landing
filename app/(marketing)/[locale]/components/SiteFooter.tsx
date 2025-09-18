

import FadeIn from "./FadeIn";
import Image from "next/image";
import dynamic from "next/dynamic";
const BackToTopLink = dynamic(() => import("./BackToTopLink"), { ssr: false });

export default function SiteFooter({ t }: { t: (k: string) => string }) {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-auto">
      <FadeIn delay={0.1}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="ArchAItechs company logo" width={24} height={24} priority />
            <span>© {new Date().getFullYear()} ArchAItechs</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <span>{t("footer.madeWith")}</span>
            <span className="hidden md:block">•</span>
            <a
              href="https://www.linkedin.com/company/archaitechs-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors"
              aria-label="ArchAItechs LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <span className="hidden md:block">•</span>
            <span>{t("footer.rights")}</span>
            <span className="hidden md:block">•</span>
            <BackToTopLink />
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
