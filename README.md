# Portfolio — Matthias Lechien

Portfolio de développeur front-end freelance (React / Next.js / TypeScript).
Single-page statique, optimisée SEO et performance, prête pour Vercel.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript strict
- Tailwind CSS v4
- [`react-icons`](https://react-icons.github.io/react-icons/) (jeu Simple Icons) pour les logos de technos dans les chips — import par icône, donc tree-shaké.
- Pas d'autre dépendance : animations en CSS natif (IntersectionObserver), pas de back-end.

## Bilingue (FR / EN)

Le site est disponible en **français** (`/fr`) et **anglais** (`/en`), avec un
bouton de bascule dans le header (desktop et mobile).

- **Routing** : segment `app/[locale]/`, les deux langues sont **prégénérées en
  statique** au build. La langue par défaut est le français (`src/i18n/config.ts`).
- **Détection** : `src/proxy.ts` redirige `/` vers `/fr` ou `/en` selon le cookie
  `NEXT_LOCALE` (choix explicite mémorisé) puis l'en-tête `Accept-Language`.
- **SEO** : metadata, titre, description et balises `hreflang` sont déclinés par
  langue ; le bouton de langue conserve l'ancre courante (`#projets`…).

## Éditer le contenu

**Tout le contenu du site est centralisé dans [`src/data/profile.ts`](src/data/profile.ts)** :

- `profileBase` : données non traduisibles (nom, email, téléphone, liens, chemins).
- `content` : tout le texte traduisible, dans les objets `fr` et `en`. Le type
  `SiteContent` **force la parité** entre les deux langues (une clé manquante = erreur
  de compilation).

Aucun texte n'est en dur dans les composants — modifier ce fichier suffit.

## Structure

```
src/
├── app/
│   ├── [locale]/     # layout (metadata, fonts, lang), page, OG image — par langue
│   ├── sitemap.ts    # les deux langues + alternates
│   └── robots.ts
├── components/
│   ├── layout/       # Header (sticky + menu mobile + bascule langue), Footer
│   ├── sections/     # Hero, About, Skills, Experience, Projects, Contact
│   └── ui/           # Button, Tag, SectionHeading, AvailabilityBadge, FadeIn,
│                     #   MouseGlow, LanguageToggle
├── data/profile.ts   # ← tout le contenu (profileBase + content FR/EN)
├── i18n/config.ts    # langues supportées, langue par défaut
├── lib/jsonld.ts     # données structurées schema.org (ProfilePage + Person)
└── proxy.ts          # redirection de langue (ex-middleware)
```

## SEO inclus

- Metadata App Router par langue (title template, description, keywords, canonical, `lang`)
- Balises `hreflang` (`fr`, `en`, `x-default`)
- Open Graph + Twitter Cards, image OG générée par langue via `next/og`
- JSON-LD `ProfilePage` / `Person` localisé
- `sitemap.xml` (deux langues) et `robots.txt` générés
- HTML sémantique (un seul `h1`, sections, skip-link, focus visibles)
