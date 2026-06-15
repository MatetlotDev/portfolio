/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENU DU SITE — fichier unique à éditer.
 *
 *  • profileBase : données identiques quelle que soit la langue
 *    (nom, contacts, liens, chemins de fichiers).
 *  • content     : tout le texte traduisible, indexé par langue.
 *                  Le type `SiteContent` garantit que `fr` et `en`
 *                  ont EXACTEMENT la même structure — une clé
 *                  manquante dans une langue = erreur de compilation.
 *
 *  Pour ajouter/éditer du contenu : modifier les objets `fr` et `en`
 *  ci-dessous. Les passages anglais marqués [À RELIRE] sont une
 *  première traduction à valider.
 * ─────────────────────────────────────────────────────────────
 */

import type { Locale } from "@/i18n/config";

/* ───────────────────────────── Types ───────────────────────────── */

export interface SocialLinks {
  /** Laisser "" tant que l'URL n'est pas connue : le lien sera masqué automatiquement. */
  linkedin: string;
  github: string;
}

/** Données non traduisibles (identiques en FR et EN). */
export interface ProfileBase {
  name: string;
  /** Photo de profil dans /public (version optimisée pour le web). */
  photo: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  siteUrl: string;
  social: SocialLinks;
}

export interface Differentiator {
  title: string;
  text: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  differentiators: Differentiator[];
}

export interface SectionHeadingContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  context: string;
  description: string[];
  stack: string[];
}

export interface Project {
  name: string;
  label: string;
  status?: string;
  description: string;
  highlights: string[];
  stack: string[];
  /** Capture du projet dans /public. Laisser "" pour masquer le visuel. */
  image: string;
  imageAlt: string;
  /** Laisser "" tant que l'URL n'est pas connue : le lien sera masqué automatiquement. */
  url: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  text: string;
}

export interface SeoContent {
  titleDefault: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
}

export interface HeroContent {
  /** Titre/métier affiché sous le nom. */
  title: string;
  tagline: string;
  intro: string;
  photoAlt: string;
  availability: string;
  location: string;
  workModes: string;
  yearsOfExperience: string;
  languages: string[];
}

/** Libellés d'interface (boutons, aria, mentions). */
export interface UiStrings {
  contactCta: string;
  downloadCv: string;
  visitWebsite: string;
  skipToContent: string;
  backToTop: string;
  openMenu: string;
  closeMenu: string;
  primaryNav: string;
  mobileNav: string;
  footerNav: string;
  builtWith: string;
  metaLocation: string;
  metaExperience: string;
  metaLanguages: string;
  langSwitch: string;
  mailSubject: string;
  whatsapp: string;
}

export interface SiteContent {
  /** Métier court pour les données structurées (schema.org Person.jobTitle). */
  jobTitle: string;
  /** Chemin du CV dans /public, propre à la langue. */
  cvPath: string;
  hero: HeroContent;
  about: AboutContent;
  sections: {
    skills: SectionHeadingContent;
    experience: SectionHeadingContent;
    projects: SectionHeadingContent;
  };
  skillCategories: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  contact: ContactContent;
  navLinks: NavLink[];
  seo: SeoContent;
  ui: UiStrings;
}

/* ──────────────────────── Données non traduisibles ─────────────────────── */

export const profileBase: ProfileBase = {
  name: "Matthias Lechien",
  photo: "/profile-pic-web.jpg",
  email: "matthias.lechien@gmail.com",
  phone: "+32456419626",
  phoneDisplay: "+32 456 41 96 26",
  siteUrl: "https://matthias-lechien.dev",
  social: {
    linkedin: "https://www.linkedin.com/in/matthias-lechien-ab44ba229",
    github: "https://github.com/MatetlotDev",
  },
};

/* ──────────────────────────── Contenu FR ──────────────────────────── */

const fr: SiteContent = {
  jobTitle: "Développeur Front-End Freelance",
  cvPath: "/cv-matthias-lechien-fr.pdf",
  hero: {
    title: "Développeur Front-End Freelance — React / Next.js / TypeScript",
    tagline: "Le front-end qui pense produit.",
    intro:
      "4 ans+ d'expérience sur des dashboards data et des interfaces SaaS en React, Next.js et TypeScript. Je construis des produits de l'idée à la mise en production — discovery, UX, code, lancement — avec l'IA au cœur de mon workflow.",
    photoAlt: "Portrait de Matthias Lechien, développeur front-end freelance",
    availability: "Disponible immédiatement",
    location: "Bruxelles, Belgique",
    workModes: "Remote · Hybride · Sur site",
    yearsOfExperience: "4 ans d'expérience",
    languages: ["Français (natif)", "Anglais (professionnel)"],
  },
  about: {
    eyebrow: "Qui je suis",
    title: "À propos",
    paragraphs: [
      "Depuis 4 ans, je développe des applications web en React et TypeScript : SaaS, dashboards, plateformes de données et outils métier, au sein d'équipes agiles et internationales.",
      "Je ne m'arrête pas au code. Discovery utilisateur, maquettes Figma, spécification, priorisation : je participe à la définition du produit autant qu'à sa réalisation. C'est ce qui me permet de livrer des interfaces qui servent un objectif, pas juste des écrans.",
      "J'ai aussi lancé et géré ma propre marque e-commerce, de l'étude de marché à la mise en production. Je comprends donc les contraintes business, l'acquisition et le client final — et j'intègre les outils d'IA dans mon workflow pour développer plus vite, sans transiger sur la qualité.",
    ],
    differentiators: [
      {
        title: "Sensibilité produit",
        text: "Discovery, UX, prototypage Figma, priorisation : je pense usage avant de penser code.",
      },
      {
        title: "Expérience entrepreneuriale",
        text: "Fondateur d'une marque e-commerce : je connais les enjeux business derrière chaque feature.",
      },
      {
        title: "IA dans le workflow",
        text: "Outils d'IA intégrés à mon cycle de développement pour livrer plus vite et mieux.",
      },
    ],
  },
  sections: {
    skills: {
      eyebrow: "Compétences",
      title: "Stack & savoir-faire",
      description:
        "Un socle front-end solide, complété par une vraie culture produit et des méthodes de travail éprouvées en équipe distribuée.",
    },
    experience: {
      eyebrow: "Parcours",
      title: "Expériences",
      description:
        "SaaS, cartographie interactive, e-commerce : quatre ans à construire des produits web, en équipe comme en autonomie.",
    },
    projects: {
      eyebrow: "Projets",
      title: "La preuve par les projets",
      description:
        "Des produits pensés, construits et mis en production de bout en bout.",
    },
  },
  skillCategories: [
    {
      title: "Front-end",
      skills: [
        "React",
        "Redux",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "React Native / Expo",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Outils & qualité",
      skills: [
        "Git",
        "CI/CD",
        "Revue de code",
        "Figma (maquettes & prototypes)",
        "Node.js",
        "Shopify",
        "Leaflet",
        "Supabase",
        "MongoDB",
        "Docker",
      ],
    },
    {
      title: "Méthodes",
      skills: [
        "Agile / Scrum",
        "Discovery & spécification produit",
        "Priorisation",
        "Travail en remote",
      ],
    },
    {
      title: "IA",
      skills: ["Intégration d'outils d'IA dans le workflow de développement"],
    },
  ],
  experiences: [
    {
      role: "Développeur JavaScript",
      company: "Kodama Px",
      period: "Avril 2026 – Mai 2026",
      context: "Mission freelance · Remote",
      description: [
        "Développement d'une plateforme cartographique interactive (JavaScript, Leaflet) : affichage dynamique d'activités sur carte, filtres multi-critères et système multi-dates interactif.",
        "Création de formulaires front-end avancés et de composants UI/UX responsives personnalisés (base WordPress custom).",
        "Livraison autonome et rapide d'une fonctionnalité complète, de la conception à la mise en production.",
      ],
      stack: ["JavaScript", "Leaflet", "Wordpress", "PHP"],
    },
    {
      role: "Fondateur — Produit & Développement",
      company: "Racclimb",
      period: "Depuis janvier 2025",
      context: "Activité complémentaire · Remote",
      description: [
        "Création et lancement d'une marque e-commerce de bout en bout : étude de marché, positionnement, identité de marque et stratégie go-to-market.",
        "Conception et développement du site e-commerce (Shopify), avec un focus sur l'expérience utilisateur et le taux de conversion.",
        "Définition et pilotage de la roadmap produit : priorisation centrée utilisateur sous contraintes business réelles, puis itérations.",
        "Pilotage de freelances externes pour déléguer et optimiser les opérations",
      ],
      stack: [
        "Javascript",
        "Shopify",
        "Liquid",
        "Branding",
        "HTML/CSS",
        "Meta/Google Ads",
        "Figma",
        "Klaviyo",
      ],
    },
    {
      role: "Développeur Front-End",
      company: "Famoco",
      period: "Mars 2022 – Mars 2026",
      context: "Scale-up tech internationale · Remote",
      description: [
        "Développement et évolution d'interfaces web en React / TypeScript dans un environnement SaaS international.",
        "Conception de composants réutilisables et maintenables, dans le respect des standards de performance et d'accessibilité.",
        "Participation aux choix techniques et à l'amélioration continue de l'architecture front-end.",
        "Rôle de Scrum Master : animation des rituels agiles, planification des sprints et mise en place d'un fonctionnement plus fluide entre Design, Product et Développement — permettant à l'équipe de livrer ses features ~40 % plus vite.",
        "Collaboration étroite avec Product, Design et Back-End en Agile / Scrum ; revue de code, gestion de versions Git et contribution aux pipelines CI/CD.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Redux",
        "Chart.js",
        "Figma",
        "Leaflet",
        "Jira",
        "Mui",
        "Vite",
      ],
    },
  ],
  projects: [
    {
      name: "Urban Boulder",
      label: "Projet phare",
      status: "Lancement juin 2026",
      description:
        "Plateforme web dédiée à l'escalade urbaine, pour créer et découvrir des spots d'escalades autour de  chez sois. Conçue et développée de bout en bout.",
      highlights: [
        "Discovery utilisateur, UX/UI et prototypage",
        "Développement Next.js / TypeScript",
        "Mise en production, acquisition, itérations",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/urban-boulder.png",
      imageAlt:
        "Aperçu de la plateforme Urban Boulder : carte interactive des spots d'escalade urbaine",
      url: "https://urban-boulder.com",
      featured: true,
    },
    {
      name: "Racclimb",
      label: "Entrepreneuriat",
      description:
        "Marque e-commerce créée et lancée de bout en bout : étude de marché, branding, site Shopify orienté conversion, go-to-market et pilotage de freelances.",
      highlights: [],
      stack: ["Shopify", "E-commerce", "Conversion"],
      image: "/racclimb.png",
      imageAlt: "Page d'accueil de la boutique e-commerce Racclimb",
      url: "https://racclimb.com",
      featured: false,
    },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Travaillons ensemble",
    text: "Une mission React / Next.js, un produit à construire ou une équipe à renforcer ? Je suis disponible immédiatement — parlons-en.",
  },
  navLinks: [
    { label: "À propos", href: "#a-propos" },
    { label: "Compétences", href: "#competences" },
    { label: "Expériences", href: "#experiences" },
    { label: "Projets", href: "#projets" },
    { label: "Contact", href: "#contact" },
  ],
  seo: {
    titleDefault:
      "Matthias Lechien — Développeur Front-End Freelance React / Next.js à Bruxelles",
    titleTemplate: "%s — Matthias Lechien",
    description:
      "Développeur front-end freelance à Bruxelles — React, Next.js, TypeScript. 4 ans d'expérience sur des SaaS, dashboards et outils métier, sensibilité produit, disponible immédiatement en remote, hybride ou sur site.",
    keywords: [
      "développeur React freelance Belgique",
      "développeur Next.js Bruxelles",
      "développeur front-end freelance",
      "freelance React TypeScript",
      "développeur web Bruxelles",
      "freelance Next.js Belgique",
    ],
  },
  ui: {
    contactCta: "Me contacter",
    downloadCv: "Télécharger mon CV",
    visitWebsite: "Visiter le site",
    skipToContent: "Aller au contenu",
    backToTop: "retour en haut de page",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    primaryNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    footerNav: "Navigation du pied de page",
    builtWith: "Construit avec Next.js",
    metaLocation: "Localisation",
    metaExperience: "Expérience",
    metaLanguages: "Langues",
    langSwitch: "Changer de langue",
    mailSubject: "Mission freelance — prise de contact",
    whatsapp: "Écrire sur WhatsApp",
  },
};

/* ──────────────────────────── Contenu EN ──────────────────────────── */

const en: SiteContent = {
  jobTitle: "Freelance Front-End Developer",
  cvPath: "/cv-matthias-lechien-en.pdf",
  hero: {
    title: "Freelance Front-End Developer — React / Next.js / TypeScript",
    tagline: "Front-end that thinks product.",
    intro:
      "4+ years of experience building data dashboards and SaaS interfaces with React, Next.js, and TypeScript. I build products from idea to production — discovery, UX, development, and launch — with AI at the core of my workflow.",
    photoAlt: "Portrait of Matthias Lechien, freelance front-end developer",
    availability: "Available now",
    location: "Brussels, Belgium",
    workModes: "Remote · Hybrid · On-site",
    yearsOfExperience: "4 years of experience",
    languages: ["French (native)", "English (professional)"],
  },
  about: {
    eyebrow: "Who I am",
    title: "About",
    paragraphs: [
      "For the past 4 years, I've been building web applications with React and TypeScript: SaaS products, dashboards, data platforms and internal tools, within agile, international teams.",
      "I don't stop at code. User discovery, Figma mockups, specification, prioritization: I take part in defining the product as much as building it. That's what lets me ship interfaces that serve a goal, not just screens.",
      "I've also launched and run my own e-commerce brand, from market research to production. So I understand business constraints, acquisition and the end customer — and I bring AI tools into my workflow to build faster without compromising on quality.",
    ],
    differentiators: [
      {
        title: "Product mindset",
        text: "Discovery, UX, Figma prototyping, prioritization: I think about usage before thinking about code.",
      },
      {
        title: "Entrepreneurial experience",
        text: "Founder of an e-commerce brand: I know the business stakes behind every feature.",
      },
      {
        title: "AI in the workflow",
        text: "AI tools built into my development cycle to ship faster and better.",
      },
    ],
  },
  sections: {
    skills: {
      eyebrow: "Skills",
      title: "Stack & expertise",
      description:
        "A solid front-end foundation, backed by genuine product sense and working methods proven in distributed teams.",
    },
    experience: {
      eyebrow: "Background",
      title: "Experience",
      description:
        "SaaS, interactive mapping, e-commerce: four years building web products, both in teams and on my own.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Proof through projects",
      description:
        "Products designed, built and shipped to production end to end.",
    },
  },
  skillCategories: [
    {
      title: "Front-end",
      skills: [
        "React",
        "Redux",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "React Native / Expo",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & quality",
      skills: [
        "Git",
        "CI/CD",
        "Code review",
        "Figma (mockups & prototypes)",
        "Node.js",
        "Shopify",
        "Leaflet",
        "Supabase",
        "MongoDB",
        "Docker",
      ],
    },
    {
      title: "Methods",
      skills: [
        "Agile / Scrum",
        "Product discovery & specification",
        "Prioritization",
        "Remote work",
      ],
    },
    {
      title: "AI",
      skills: ["Integrating AI tools into the development workflow"],
    },
  ],
  experiences: [
    {
      role: "JavaScript Developer",
      company: "Kodama Px",
      period: "April 2026 – May 2026",
      context: "Freelance engagement",
      description: [
        "Built an interactive mapping platform (JavaScript, Leaflet): dynamic display of activities on a map, multi-criteria filters and an interactive multi-date system.",
        "Created advanced front-end forms and custom responsive UI/UX components (custom WordPress base).",
        "Delivered a complete feature independently and quickly, from design to production.",
      ],
      stack: ["JavaScript", "Leaflet", "Wordpress", "PHP"],
    },
    {
      role: "Founder — Product & Development",
      company: "Racclimb",
      period: "Since January 2025",
      context: "Side venture",
      description: [
        "Created and launched an e-commerce brand end-to-end: market research, positioning, brand identity and goto-market strategy.",
        "Designed and developed the e-commerce site (Shopify), focused on user experience and conversion rate.",
        "Defined and managed the product roadmap: user-centered prioritization under real business constraints, then iterations.",
        "Managed external freelancers to delegate and optimize operations.",
      ],
      stack: [
        "Javascript",
        "Shopify",
        "Liquid",
        "HTML/CSS",
        "Meta/Google Ads",
        "Figma",
        "Klaviyo",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Famoco",
      period: "March 2022 – March 2026",
      context: "International tech scale-up · Remote",
      description: [
        "Developed and evolved web interfaces in React / TypeScript within an international SaaS environment.",
        "Designed reusable, maintainable components, meeting performance and accessibility standards.",
        "Contributed to technical decisions and to the continuous improvement of the front-end architecture.",
        "Scrum Master role: facilitated agile ceremonies, planned sprints and set up a smoother workflow between Design, Product and Development enabling the team to ship features ~40% faster.",
        "Worked closely with Product, Design and Back-End in Agile / Scrum; code review, version control with Git and contribution to CI/CD pipelines.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Mui",
        "Redux",
        "Chart.js",
        "Leaflet",
        "Figma",
        "Jira",
        "Vite",
      ],
    },
  ],
  projects: [
    {
      name: "Urban Boulder",
      label: "Flagship project",
      status: "Launching June 2026",
      description:
        "A web platform dedicated to urban climbing, allowing users to discover and share climbing spots near them. Designed and developed end-to-end, from concept and UX to development and deployment.",
      highlights: [
        "User discovery, UX/UI and prototyping",
        "Next.js / TypeScript development",
        "Production launch, acquisition, iterations",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/urban-boulder.png",
      imageAlt:
        "Preview of the Urban Boulder platform: interactive map of urban climbing spots",
      url: "https://urban-boulder.com",
      featured: true,
    },
    {
      name: "Racclimb",
      label: "Entrepreneurship",
      description:
        "An e-commerce brand created and launched end to end: market research, branding, a conversion-focused Shopify store, go-to-market and freelancer management.",
      highlights: [],
      stack: ["Shopify", "E-commerce", "Conversion"],
      image: "/racclimb.png",
      imageAlt: "Homepage of the Racclimb e-commerce store",
      url: "https://racclimb.com",
      featured: false,
    },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    text: "A React / Next.js engagement, a product to build or a team to strengthen? I'm available now — let's talk.",
  },
  navLinks: [
    { label: "About", href: "#a-propos" },
    { label: "Skills", href: "#competences" },
    { label: "Experience", href: "#experiences" },
    { label: "Projects", href: "#projets" },
    { label: "Contact", href: "#contact" },
  ],
  seo: {
    titleDefault:
      "Matthias Lechien — Freelance Front-End Developer React / Next.js in Brussels",
    titleTemplate: "%s — Matthias Lechien",
    description:
      "Freelance front-end developer in Brussels — React, Next.js, TypeScript. 4 years of experience on SaaS products, dashboards and internal tools, with a product mindset. Available now, remote, hybrid or on-site.",
    keywords: [
      "freelance React developer Belgium",
      "Next.js developer Brussels",
      "freelance front-end developer",
      "React TypeScript freelancer",
      "web developer Brussels",
      "freelance Next.js Belgium",
    ],
  },
  ui: {
    contactCta: "Get in touch",
    downloadCv: "Download my CV",
    visitWebsite: "Visit website",
    skipToContent: "Skip to content",
    backToTop: "back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNav: "Main navigation",
    mobileNav: "Mobile navigation",
    footerNav: "Footer navigation",
    builtWith: "Built with Next.js",
    metaLocation: "Location",
    metaExperience: "Experience",
    metaLanguages: "Languages",
    langSwitch: "Switch language",
    mailSubject: "Freelance engagement — getting in touch",
    whatsapp: "Message on WhatsApp",
  },
};

/* ───────────────────────────── Accès ───────────────────────────── */

const content: Record<Locale, SiteContent> = { fr, en };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
