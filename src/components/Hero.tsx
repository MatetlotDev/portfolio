import Image from "next/image";
import { site } from "@/data/site";
import { formatMessage } from "@/i18n/format";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { Button } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SiteHeader } from "./SiteHeader";

export async function Hero() {
  const dict = await getDictionary();
  const locale = await getLocale();

  const navItems = [
    { href: "#services", label: dict.nav.services },
    { href: "#work", label: dict.nav.work },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <section className="page-container">
      <SiteHeader
        name={dict.meta.name}
        homeHref={`/${locale}`}
        navItems={navItems}
        primaryNavLabel={dict.a11y.primaryNav}
        openMenuLabel={dict.a11y.openMenu}
        closeMenuLabel={dict.a11y.closeMenu}
        languageSwitcher={<LanguageSwitcher />}
      />

      <div className="pb-20 pt-12 md:pb-24 md:pt-16 lg:pb-32 lg:pt-20">
        <p className="inline-flex items-center gap-2 rounded-pill bg-cream px-2.5 py-1.5 type-small text-ink">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {dict.hero.availability}
        </p>

        <h1 className="type-display mt-6 text-ink">{dict.meta.name}</h1>

        <div className="mt-6 grid items-start gap-8 lg:mt-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="min-w-0">
            <p className="type-body-lg max-w-xl text-ink">{dict.hero.positioning}</p>
            <p className="type-body mt-4 max-w-lg text-pretty text-muted">
              {dict.hero.introduction}
            </p>
            <div className="mt-8">
              <Button href={site.calendly} arrow>
                {dict.hero.cta}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:mx-0 lg:max-w-none">
            <Image
              src="/header.png"
              alt={formatMessage(dict.a11y.illustrationAlt, {
                name: dict.meta.name,
              })}
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1024px) 520px, 420px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
