export default function SiteFooter({ t }: { t: (k: string) => string }) {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="ArchAItechs" width={24} height={24} />
          <span>© {new Date().getFullYear()} ArchAItechs</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
          <span>{t("footer.madeWith")}</span>
          <span className="hidden md:block">•</span>
          <span>{t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
}
