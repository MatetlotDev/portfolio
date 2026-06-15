import { getContent, profileBase } from "@/data/profile";
import type { Locale } from "@/i18n/config";

/**
 * Données structurées schema.org : ProfilePage + Person, localisées.
 * Les liens sociaux vides sont exclus automatiquement.
 */
export function buildJsonLd(locale: Locale) {
  const content = getContent(locale);
  const sameAs = [
    profileBase.social.linkedin,
    profileBase.social.github,
  ].filter((url) => url !== "");

  const person = {
    "@type": "Person",
    name: profileBase.name,
    jobTitle: content.jobTitle,
    description: content.seo.description,
    email: `mailto:${profileBase.email}`,
    telephone: profileBase.phoneDisplay,
    url: `${profileBase.siteUrl}/${locale}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bruxelles",
      addressCountry: "BE",
    },
    knowsLanguage: ["fr", "en"],
    knowsAbout: content.skillCategories.flatMap((category) => category.skills),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    inLanguage: locale,
    mainEntity: person,
  };
}
