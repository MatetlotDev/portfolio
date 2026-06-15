"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Mémorise la langue choisie (lue par le proxy à la prochaine visite). */
function persistLocale(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=${ONE_YEAR};samesite=lax`;
}

/**
 * Bascule FR / EN. Vrais liens (crawlables, ouvrables dans un nouvel onglet).
 * Au clic simple : navigation client avec `scroll: false` pour rester
 * exactement à la même position dans la page lors du changement de langue.
 */
export default function LanguageToggle({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

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
    // Laisser le navigateur gérer l'ouverture dans un nouvel onglet.
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }
    event.preventDefault();
    persistLocale(next);
    router.push(hrefFor(next), { scroll: false });
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
