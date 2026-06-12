import { profile, seo, skillCategories } from "@/data/profile";

/**
 * Données structurées schema.org : ProfilePage + Person.
 * Les liens sociaux vides sont exclus automatiquement.
 */
export function buildJsonLd() {
  const sameAs = [profile.social.linkedin, profile.social.github].filter(
    (url) => url !== ""
  );

  const person = {
    "@type": "Person",
    name: profile.name,
    jobTitle: "Développeur Front-End Freelance",
    description: seo.description,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneDisplay,
    url: profile.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bruxelles",
      addressCountry: "BE",
    },
    knowsLanguage: ["fr", "en"],
    knowsAbout: skillCategories.flatMap((category) => category.skills),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: person,
  };
}
