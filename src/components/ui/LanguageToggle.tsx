"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Mémorise la langue choisie (lue par le proxy à la prochaine visite). */
function persistLocale(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=${ONE_YEAR};samesite=lax`;
}

/**
 * Bascule FR / EN. Vrais liens (crawlables, ouvrables dans un
 * nouvel onglet). Au clic : mémorise le choix dans un cookie et
 * conserve l'ancre courante (#projets…) pour rester sur la section.
 */
export default function LanguageToggle({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();

  const hrefFor = (next: Locale) =>
    pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${next}`) || `/${next}`;

  const onSelect = (
    event: React.MouseEvent<HTMLAnchorElement>,
    next: Locale
  ) => {
    if (next === locale) {
      event.preventDefault();
      return;
    }
    persistLocale(next);
    const hash = window.location.hash;
    if (hash) {
      event.preventDefault();
      window.location.assign(`${hrefFor(next)}${hash}`);
    }
  };

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-lg border border-gray-200 bg-white/70 p-0.5 text-xs font-semibold"
    >
      {locales.map((value) => {
        const active = value === locale;
        return (
          <a
            key={value}
            href={hrefFor(value)}
            hrefLang={value}
            aria-current={active ? "true" : undefined}
            onClick={(event) => onSelect(event, value)}
            className={`rounded-md px-2.5 py-1 uppercase transition-colors ${
              active ? "bg-accent text-white" : "text-gray-500 hover:text-navy"
            }`}
          >
            {value}
          </a>
        );
      })}
    </div>
  );
}
