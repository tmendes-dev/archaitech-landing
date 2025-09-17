export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export function getLocale(param?: string): Locale {
  if (param && (locales as readonly string[]).includes(param)) return param as Locale;
  return "pt";
}

export const defaultLocale: Locale = "pt";
