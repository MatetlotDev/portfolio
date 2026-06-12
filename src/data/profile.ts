/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENU DU SITE — fichier unique à éditer.
 *  Tout le texte, les liens et les données affichés sur le
 *  portfolio viennent d'ici. Aucun contenu n'est en dur dans
 *  les composants.
 * ─────────────────────────────────────────────────────────────
 */

export interface SocialLinks {
  /** Laisser "" tant que l'URL n'est pas connue : le lien sera masqué automatiquement. */
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  /** Photo de profil dans /public (version optimisée pour le web). */
  photo: string;
  photoAlt: string;
  availability: string;
  location: string;
  workModes: string;
  yearsOfExperience: string;
  languages: string[];
  email: string;
  phone: string;
  phoneDisplay: string;
  /** Chemin du CV dans /public — déposer le PDF à cet emplacement. */
  cvPath: string;
  /** [À COMPLÉTER] — remplacer par le domaine final une fois déployé. */
  siteUrl: string;
  social: SocialLinks;
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
  /** Laisser "" tant que l'URL n'est pas connue : le lien sera masqué automatiquement. */
  url: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export const profile: Profile = {
  name: "Matthias Lechien",
  title: "Développeur Front-End Freelance — React / Next.js / TypeScript",
  tagline: "Le front-end qui pense produit.",
  intro:
    "Le front-end qui pense produit : je conçois et développe des interfaces web modernes — React, Next.js, TypeScript — du besoin utilisateur jusqu'à la mise en production.",
  photo: "/profile-pic-web.jpg",
  photoAlt: "Portrait de Matthias Lechien, développeur front-end freelance",
  availability: "Disponible immédiatement",
  location: "Bruxelles, Belgique",
  workModes: "Remote · Hybride · Sur site",
  yearsOfExperience: "4 ans d'expérience",
  languages: ["Français (natif)", "Anglais (professionnel)"],
  email: "matthias.lechien@gmail.com",
  phone: "+32456419626",
  phoneDisplay: "+32 456 41 96 26",
  cvPath: "/cv-matthias-lechien.pdf",
  siteUrl: "https://matthias-lechien.vercel.app", // [À COMPLÉTER] domaine final
  social: {
    linkedin: "", // [À COMPLÉTER] URL LinkedIn
    github: "", // [À COMPLÉTER] URL GitHub
  },
};

export const about = {
  title: "À propos",
  eyebrow: "Qui je suis",
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
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    skills: [
      "React",
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
];

export const experiences: Experience[] = [
  {
    role: "Développeur Front-End",
    company: "Famoco",
    period: "Mars 2022 – Mars 2026",
    context: "Scale-up tech internationale · Remote",
    description: [
      "Développement et évolution d'applications web SaaS en React et TypeScript, au sein d'une équipe agile internationale (devs, PM, designers).",
      "Conception d'une application mobile from scratch : étude du besoin, maquettes Figma, développement React Native / Expo.",
      "Participation à la définition des besoins fonctionnels, revue de code, CI/CD.",
      // [À COMPLÉTER] ajouter ici 1-2 réalisations chiffrées (nb d'utilisateurs, taille d'équipe, impact)
    ],
    stack: ["React", "TypeScript", "React Native", "Expo", "Figma"],
  },
  {
    role: "Développeur JavaScript",
    company: "Kodama Px",
    period: "Avril 2026 – Mai 2026",
    context: "Mission freelance",
    description: [
      "Développement d'une plateforme cartographique interactive : filtres dynamiques, système multi-dates, formulaires front-end avancés.",
      "Conception d'interfaces UI/UX responsives.",
    ],
    stack: ["JavaScript", "Leaflet"],
  },
  {
    role: "Fondateur — Produit & Développement",
    company: "Racclimb",
    period: "Depuis janvier 2025",
    context: "Activité complémentaire",
    description: [
      "Création et lancement d'une marque e-commerce de bout en bout : étude de marché, branding, go-to-market.",
      "Conception et développement du site Shopify, orienté conversion.",
      "Roadmap, priorisation centrée utilisateur, pilotage de freelances.",
    ],
    stack: ["Shopify", "Branding", "Go-to-market"],
  },
];

export const projects: Project[] = [
  {
    name: "Urban Boulder",
    label: "Projet phare",
    status: "Lancement juin 2026",
    description:
      "Plateforme web dédiée à l'escalade urbaine, conçue et développée de bout en bout — la preuve par l'exemple de ma capacité à construire un produit complet, pas juste à coder des écrans.",
    highlights: [
      "Discovery utilisateur, UX/UI et prototypage",
      "Développement Next.js / TypeScript",
      "Mise en production, acquisition, itérations",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "", // [À COMPLÉTER] URL Urban Boulder + captures dans /public/projects
    featured: true,
  },
  {
    name: "Racclimb",
    label: "Entrepreneuriat",
    description:
      "Marque e-commerce créée et lancée de bout en bout : étude de marché, branding, site Shopify orienté conversion, go-to-market et pilotage de freelances.",
    highlights: [],
    stack: ["Shopify", "E-commerce", "Conversion"],
    url: "", // [À COMPLÉTER] URL Racclimb
    featured: false,
  },
];

export const contact = {
  eyebrow: "Contact",
  title: "Travaillons ensemble",
  text: "Une mission React / Next.js, un produit à construire ou une équipe à renforcer ? Je suis disponible immédiatement — parlons-en.",
};

export const navLinks: NavLink[] = [
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Expériences", href: "#experiences" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

export const seo = {
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
};
