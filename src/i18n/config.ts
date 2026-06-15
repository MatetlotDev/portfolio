/**
 * Configuration i18n — source unique des langues supportées.
 */
export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** Type guard : vérifie qu'une chaîne est une locale supportée. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Code de locale pour Open Graph (og:locale). */
export const ogLocale: Record<Locale, string> = {
  fr: "fr_BE",
  en: "en_US",
};
