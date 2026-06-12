# Portfolio — Matthias Lechien

Portfolio de développeur front-end freelance (React / Next.js / TypeScript).
Single-page statique, optimisée SEO et performance, prête pour Vercel.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript strict
- Tailwind CSS v4
- Aucune autre dépendance : animations en CSS natif (IntersectionObserver), pas de back-end.

## Lancer en local

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

Autres commandes :

```bash
npm run build   # build de production
npm run lint    # vérification ESLint
```

## Éditer le contenu

**Tout le contenu du site est centralisé dans [`src/data/profile.ts`](src/data/profile.ts)** :
profil, bio, compétences, expériences, projets, liens, textes SEO. Aucun texte
n'est en dur dans les composants — modifier ce fichier suffit.

### Données à compléter (marquées `[À COMPLÉTER]` dans `profile.ts`)

- `siteUrl` : le domaine final une fois déployé (utilisé pour le SEO : canonical, sitemap, Open Graph).
- `social.linkedin` / `social.github` : les liens sont masqués automatiquement tant que la valeur est `""`.
- URL du projet Urban Boulder (et Racclimb) : idem, le lien « Voir le projet » apparaît dès que l'URL est renseignée.
- **CV** : déposer le PDF dans `public/cv-matthias-lechien.pdf` (le bouton de téléchargement pointe déjà dessus).
- Captures de projets : à déposer dans `public/projects/`, puis remplacer le panneau décoratif dans `src/components/sections/Projects.tsx` par un `next/image`.
- Réalisations chiffrées Famoco : à ajouter dans le tableau `description` de l'expérience Famoco.

## Structure

```
src/
├── app/              # layout (metadata, fonts), page, SEO (sitemap, robots, OG image)
├── components/
│   ├── layout/       # Header (sticky + menu mobile), Footer
│   ├── sections/     # Hero, About, Skills, Experience, Projects, Contact
│   └── ui/           # Button, Tag, SectionHeading, AvailabilityBadge, FadeIn
├── data/profile.ts   # ← tout le contenu du site
└── lib/jsonld.ts     # données structurées schema.org (ProfilePage + Person)
```

## SEO inclus

- Metadata App Router (title template, description, keywords, canonical, `lang="fr"`)
- Open Graph + Twitter Cards, image OG générée via `next/og` (`src/app/opengraph-image.tsx`)
- JSON-LD `ProfilePage` / `Person`
- `sitemap.xml` et `robots.txt` générés
- HTML sémantique (un seul `h1`, sections, skip-link, focus visibles)

## Déployer sur Vercel

1. Pousser le repo sur GitHub.
2. Sur [vercel.com](https://vercel.com), « Add New Project » → importer le repo. Les réglages par défaut (framework Next.js détecté) suffisent.
3. Une fois le domaine final connu, mettre à jour `siteUrl` dans `src/data/profile.ts` et redéployer.

La page est entièrement statique (prérendue au build) : aucune configuration serveur nécessaire.
