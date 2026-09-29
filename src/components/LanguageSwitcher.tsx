import Link from "next/link";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { locales } from "@/i18n/locales";

export async function LanguageSwitcher() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <nav aria-label={dict.a11y.language} className="lang-toggle">
      <ul>
        {locales.map((code) => {
          const isCurrent = code === locale;

          return (
            <li key={code}>
              <Link
                href={`/${code}`}
                hrefLang={code}
                lang={code}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={dict.a11y.languageNames[code]}
                className={
                  isCurrent
                    ? "lang-toggle-option is-current"
                    : "lang-toggle-option"
                }
              >
                {dict.nav.locales[code]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
