import type { MetadataRoute } from "next";
import { profileBase } from "@/data/profile";
import { defaultLocale, locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${profileBase.siteUrl}/${locale}`])
  );

  return locales.map((locale) => ({
    url: `${profileBase.siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}
