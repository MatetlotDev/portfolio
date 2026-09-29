import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import en from "@/dictionaries/en.json";
import fr from "@/dictionaries/fr.json";
import { hasLocale, type Locale } from "./locales";

const dictionaries = {
  fr: fr satisfies typeof en,
  en: en satisfies typeof fr,
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export async function getLocale(): Promise<Locale> {
  const locale = await lang();

  if (!hasLocale(locale)) notFound();

  return locale;
}

export async function getDictionary() {
  const locale = await getLocale();
  return dictionaries[locale];
}
