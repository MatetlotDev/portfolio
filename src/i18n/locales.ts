export const locales = ["fr", "en"] as const;

export const defaultLocale = "fr" satisfies (typeof locales)[number];

export type Locale = (typeof locales)[number];

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}
