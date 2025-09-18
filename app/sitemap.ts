import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const locales = ["en", "pt"]; 
  return locales.map((loc) => ({
    url: `${base}/${loc}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));
}
