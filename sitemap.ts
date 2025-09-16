import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.archaitech.com.br/pt",  lastModified: new Date() },
    { url: "https://www.archaitech.com.br/en",  lastModified: new Date() }
  ];
}
