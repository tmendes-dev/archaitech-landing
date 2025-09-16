import {notFound} from "next/navigation";
export const locales = ["en", "pt"] as const;
export type Locale = typeof locales[number];
export function getLocale(param?: string): Locale {
  if (!param || !locales.includes(param as Locale)) return "pt";
  return param as Locale;
}
export const defaultLocale: Locale = "pt";
