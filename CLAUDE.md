# Brief — Création de mon portfolio de développeur freelance

Tu es un développeur front-end senior et un designer produit. Ton rôle : concevoir et coder **mon portfolio personnel**, un site vitrine de freelance, moderne, élégant et sobre. L'objectif business est de décrocher des missions freelance (React / Next.js) : le site doit inspirer confiance, être ultra-rapide, parfaitement référencé, et donner envie de me contacter en moins de 10 secondes.

Avant d'écrire du code, **commence par me proposer une structure de pages et une arborescence de composants**, puis attends ma validation. Ensuite, construis section par section.

---

## 1. Qui je suis (contenu du site)

- **Nom :** Matthias Lechien
- **Titre :** Développeur Front-End Freelance — React / Next.js / TypeScript
- **Sous-titre / angle :** « Le front-end qui pense produit. » Je conçois et développe des interfaces web modernes, du besoin utilisateur jusqu'à la mise en production.
- **Expérience :** 4 ans en développement front-end sur des applications SaaS, dashboards, plateformes de données et outils métier.
- **Localisation :** Bruxelles, Belgique — disponible en **remote, hybride ou sur site**.
- **Statut :** **Disponible immédiatement** (à mettre en avant visuellement, c'est un argument commercial fort).
- **Langues :** Français (natif), Anglais (professionnel — habitué aux environnements de travail internationaux).

### Ce qui me distingue

Je ne suis pas qu'un exécutant front-end. J'ai une vraie sensibilité produit (discovery utilisateur, UX, prototypage Figma, priorisation) et une expérience entrepreneuriale réelle (j'ai lancé et géré ma propre marque e-commerce). Je comprends donc les contraintes business, l'acquisition et le client final, pas seulement le code. J'intègre aussi les outils d'IA dans mon workflow de développement.

### Stack technique

- **Front-end :** React, Next.js, TypeScript, JavaScript (ES6+), React Native / Expo, HTML5, CSS3, Tailwind
- **Outils & qualité :** Git, CI/CD, revue de code, Figma (maquettes & prototypes), Node.js, Shopify, Leaflet
- **Méthodes :** Agile / Scrum, discovery & spécification produit, priorisation, remote
- **IA :** intégration d'outils d'IA dans le workflow de développement

### Expériences

1. **Développeur Front-End — Famoco** (Mars 2022 – Mars 2026, remote)
   Scale-up tech internationale. Développement et évolution d'applications web SaaS en React et TypeScript, au sein d'une équipe agile internationale (devs, PM, designers). Conception d'une application mobile from scratch (étude du besoin, maquettes Figma, React Native / Expo). Participation à la définition des besoins fonctionnels, revue de code, CI/CD.

   > NOTE POUR MOI : ajouter ici 1-2 réalisations chiffrées si possible (nb d'utilisateurs, taille d'équipe, impact).

2. **Développeur JavaScript — Kodama Px** (Avril 2026 – Mai 2026, freelance)
   Développement d'une plateforme cartographique interactive (JavaScript, Leaflet) : filtres dynamiques, système multi-dates, formulaires front-end avancés. Interfaces UI/UX responsives.

3. **Fondateur — Produit & Développement — Racclimb** (depuis Jan 2025, activité complémentaire)
   Création et lancement d'une marque e-commerce de bout en bout : étude de marché, branding, go-to-market. Conception et développement du site Shopify (orienté conversion). Roadmap, priorisation centrée utilisateur, pilotage de freelances.

### Projet phare

**Urban Boulder** (lancement juin 2026) — Plateforme web dédiée à l'escalade urbaine, conçue et développée **de bout en bout** : discovery utilisateur, UX/UI, développement Next.js / TypeScript, mise en production, acquisition, itérations. À présenter comme la vitrine de ma capacité à construire un produit complet, pas juste à coder des écrans.

> NOTE POUR MOI : ajouter l'URL réelle + 1-2 captures quand le site sera en ligne.

### Contact

- Email : matthias.lechien@gmail.com
- Téléphone : +32 456 41 96 26
- LinkedIn : `[À COMPLÉTER — URL réelle]`
- GitHub : `[À COMPLÉTER — URL réelle]`
- CV téléchargeable (PDF) : prévoir un bouton de téléchargement (je fournirai le fichier).

---

## 2. Positionnement & ton

- Ton : professionnel, confiant, direct, sans jargon creux ni superlatifs vides. Pas de « passionné par le code depuis l'enfance ». Du concret.
- Le site doit assumer l'angle **développeur + sensibilité produit**, sans se sur-vendre comme « consultant produit » (je reste avant tout un dev front-end qui sait penser produit).
- Mise en avant prioritaire : la disponibilité immédiate, la stack React/Next, et la preuve par les projets (Urban Boulder en tête).

---

## 3. Stack technique du site

- **Framework :** Next.js (App Router) + TypeScript
- **Styling :** Tailwind CSS
- **Animations :** subtiles uniquement (Framer Motion autorisé mais avec parcimonie — fade/slide légers au scroll, rien de tape-à-l'œil)
- **Contenu :** centralise toutes mes données (profil, expériences, projets, skills) dans un fichier de données typé (ex. `src/data/profile.ts`) pour que je puisse tout éditer facilement sans toucher aux composants.
- **Déploiement :** prévu pour Vercel. Configure le projet en conséquence (build statique si possible pour la performance).
- **Qualité :** code propre, composants réutilisables, TypeScript strict, accessible, responsive mobile-first.

---

## 4. Structure du site

Single-page élégant avec navigation ancrée (ou multi-sections sur une page), dans cet ordre :

1. **Hero** — nom, titre, phrase d'accroche (« Le front-end qui pense produit »), badge « Disponible immédiatement », localisation (Bruxelles · Remote/Hybride), deux CTA : « Me contacter » et « Télécharger mon CV ».
2. **À propos** — bio courte (4-6 lignes) avec l'angle dev + produit + entrepreneuriat.
3. **Compétences / Stack** — regroupées par catégorie (Front-end / Outils & qualité / Méthodes / IA), présentation visuelle claire et scannable.
4. **Expériences** — Famoco, Kodama Px, Racclimb, en timeline ou cartes sobres.
5. **Projets** — Urban Boulder mis en avant (carte large), puis Racclimb. Chaque projet : titre, description courte, stack utilisée, lien.
6. **Contact** — email, LinkedIn, GitHub, CTA clair. Pas de formulaire complexe ; un bouton mailto + les liens suffisent (ou un formulaire simple si tu le proposes, mais sans back-end lourd).
7. **Footer** — liens, mention « Construit avec Next.js », année.

Navigation : header sticky discret avec ancres vers les sections + le CTA contact toujours accessible.

---

## 5. Direction artistique

**Style général :** élégant, sobre, moderne, aéré. Beaucoup d'espace blanc, hiérarchie typographique forte, lisibilité maximale. **Pas besoin d'être « awwwards winning »** ni surchargé d'effets — je veux du propre, du pro, du rassurant. Pense à l'esthétique de landing pages SaaS épurées (style Linear / Vercel / Stripe, mais plus chaleureux).

**Palette : bleu / blanc / vert.**

- Fond : blanc / blanc cassé (`#FFFFFF` / `#FAFAFA`)
- Bleu primaire (texte fort, titres, éléments structurants) : un bleu profond type `#1E3A5F` ou `#1E40AF` — à affiner
- Vert accent (CTA, liens, détails, badge dispo) : un vert sobre et élégant type émeraude/sapin `#2F855A` / `#059669` — surtout pas néon
- Gris neutres pour le texte courant (`#374151`, `#6B7280`)
- Utilise le vert avec parcimonie, comme accent, pas comme couleur dominante.

**Typographie :** une sans-serif moderne et lisible (ex. Inter, Geist, ou Satoshi) via `next/font`. Hiérarchie nette entre titres et corps.

**Détails :** coins légèrement arrondis, ombres très douces, séparateurs fins, micro-interactions discrètes au hover. Mode sombre **optionnel** (ne pas prioriser pour cette version).

---

## 6. SEO & performance (important)

- **Metadata Next.js (App Router) :** title (avec template), description optimisée, mots-clés (« développeur React freelance Belgique », « développeur Next.js Bruxelles », etc.), `lang="fr"`.
- **Open Graph + Twitter Cards :** titre, description, image OG dédiée (génère une OG image propre, idéalement via `next/og` / route `opengraph-image`).
- **Données structurées JSON-LD :** schéma `Person` (et `ProfilePage` si pertinent) avec nom, métier, localisation, liens sociaux, compétences.
- **HTML sémantique :** un seul `<h1>`, hiérarchie de titres correcte, balises `header`/`main`/`section`/`footer`, attributs `alt` sur toutes les images.
- **Fichiers techniques :** `sitemap.ts` et `robots.ts` générés, URL canonique.
- **Performance :** `next/image` pour toutes les images, `next/font` pour les polices, JS minimal, génération statique. Vise un **Lighthouse 95+** sur Performance, SEO, Accessibilité et Bonnes pratiques.
- **Accessibilité :** contrastes suffisants, navigation clavier, focus visibles, ARIA quand nécessaire.

---

## 7. Contraintes — ce qu'il ne faut PAS faire

- Pas d'animations lourdes, de parallax envahissant, de 3D ou de curseurs custom gadgets.
- Pas de texte marketing creux ni de buzzwords vides.
- Pas de dépendances inutiles : reste léger.
- Pas de back-end complexe pour le contact (mailto ou formulaire simple).
- Ne pas inventer de fausses réalisations ou de faux chiffres : laisse des emplacements `[À COMPLÉTER]` là où il me manque des données, plutôt que de remplir au hasard.

---

## 8. Méthode de travail attendue

1. Commence par me **proposer l'arborescence des fichiers et la structure des composants**, et attends ma validation.
2. Mets en place le projet Next.js + Tailwind + TypeScript proprement, avec le fichier de données centralisé.
3. Construis **section par section**, en me montrant le résultat au fur et à mesure pour que je valide le rendu.
4. Termine par le SEO technique (metadata, JSON-LD, sitemap, OG image) et un passage d'optimisation/performance.
5. Documente brièvement dans un `README` comment lancer le projet en local et le déployer sur Vercel.

---

> Données à compléter de mon côté avant ou pendant : URLs LinkedIn / GitHub / Urban Boulder, fichier CV PDF, captures de projets, et éventuelles métriques pour Famoco.
