// i18n.ts
import {getRequestConfig} from "next-intl/server";
export const locales = ["pt", "en"] as const;
export const defaultLocale = "pt";

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
