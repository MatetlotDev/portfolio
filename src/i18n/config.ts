/**
 * Configuration i18n — source unique des langues supportées.
 */
export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

/**
 * Langue par défaut : anglais. Le proxy suit ensuite la préférence du
 * navigateur (Accept-Language) et bascule en français si demandé.
 */
export const defaultLocale: Locale = "en";

/** Type guard : vérifie qu'une chaîne est une locale supportée. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Code de locale pour Open Graph (og:locale). */
export const ogLocale: Record<Locale, string> = {
  fr: "fr_BE",
  en: "en_US",
};
