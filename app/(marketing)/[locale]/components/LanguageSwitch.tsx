

import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitch({ current }: { current: Locale }) {
  const router = useRouter();

  function setLocale(l: Locale) {
    try {
      document.cookie = `NEXT_LOCALE=${l}; Path=/; Max-Age=31536000`;
    } catch {}
    router.push(`/${l}`);
  }

  return (
    <div className="flex items-center gap-2">
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={`px-2 py-1 rounded ${
            l === current ? "font-bold underline" : "opacity-80"
          }`}
          aria-current={l === current ? "page" : undefined}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
