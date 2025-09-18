
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader({
  locale, t
}: { locale: string; t: (k: string) => string }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">

        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-shadow hover:shadow-md"
          aria-label="ArchAItechs Home"
        >
          <Image
            src="/images/logo.svg"
            alt="ArchAItechs"
            width={28}
            height={28}
            priority
            className="transition-transform group-hover:scale-110"
          />
          <span className="font-semibold text-slate-800 dark:text-slate-200">ArchAItechs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a
            href="#services"
            className="hover:underline hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors text-slate-700 dark:text-slate-300"
          >
            {t("nav.services")}
          </a>
          <a
            href="#process"
            className="hover:underline hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors text-slate-700 dark:text-slate-300"
          >
            {t("nav.process")}
          </a>
          <a
            href="#cases"
            className="hover:underline hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors text-slate-700 dark:text-slate-300"
          >
            {t("nav.cases")}
          </a>
          <a
            href="#tech"
            className="hover:underline hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors text-slate-700 dark:text-slate-300"
          >
            {t("nav.tech")}
          </a>
          <a
            href="#engagement"
            className="hover:underline hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors text-slate-700 dark:text-slate-300"
          >
            {t("nav.engagement")}
          </a>
          <a
            href="#partners"
            className="hover:underline hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors text-slate-700 dark:text-slate-300"
          >
            {t("nav.partners")}
          </a>
          <a
            href="#contact"
            className="rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none transition-colors shadow-md hover:shadow-lg"
          >
            {t("nav.contact")}
          </a>
          <a
            href="#faq"
            className="hover:underline hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none rounded transition-colors text-slate-700 dark:text-slate-300"
          >
            {t("nav.faq")}
          </a>
        </nav>
      </div>
    </header>
  );
}
