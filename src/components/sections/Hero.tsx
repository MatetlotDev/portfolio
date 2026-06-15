import Image from "next/image";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import {
  profileBase,
  type HeroContent,
  type UiStrings,
} from "@/data/profile";

export default function Hero({
  hero,
  ui,
}: {
  hero: HeroContent;
  ui: UiStrings;
}) {
  const socials = [
    {
      label: "LinkedIn",
      url: profileBase.social.linkedin,
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.8a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.54v-4.58c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67c.04.75 0 8.35 0 8.35h2.67v-4.66c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.48h2.66z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      url: profileBase.social.github,
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      ),
    },
  ].filter((social) => social.url !== "");

  return (
    <section id="top" className="relative">
      {/* Mesh gradient d'arrière-plan, doux et aéré — déborde sur la section suivante */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 right-[-12%] size-[560px] rounded-full bg-gradient-to-br from-emerald-200/70 via-teal-100/60 to-transparent blur-3xl" />
        <div className="absolute -left-40 top-1/4 size-[480px] rounded-full bg-gradient-to-tr from-sky-200/60 via-blue-100/50 to-transparent blur-3xl" />
        <div className="absolute bottom-[-35%] right-1/4 size-[420px] rounded-full bg-gradient-to-t from-indigo-100/60 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-32 sm:pt-40 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_minmax(0,340px)]">
          <FadeIn>
            <AvailabilityBadge label={hero.availability} />

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl md:text-6xl">
              {profileBase.name}
            </h1>

            <p className="mt-4 bg-gradient-to-r from-navy-light via-accent to-emerald-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
              {hero.title}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              {hero.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#contact">{ui.contactCta}</Button>
              <Button href={profileBase.cvPath} variant="secondary" download>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
                </svg>
                {ui.downloadCv}
              </Button>
            </div>

            <dl className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <dt className="sr-only">{ui.metaLocation}</dt>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 text-accent"
                >
                  <path d="M20 10c0 6-8 11-8 11s-8-5-8-11a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <dd>
                  {hero.location} · {hero.workModes}
                </dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">{ui.metaExperience}</dt>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 text-accent"
                >
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                <dd>{hero.yearsOfExperience}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">{ui.metaLanguages}</dt>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 text-accent"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                <dd>{hero.languages.join(" · ")}</dd>
              </div>
            </dl>

            {socials.length > 0 && (
              <ul className="mt-6 flex items-center gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-accent hover:text-accent"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </FadeIn>

          <FadeIn delay={150} className="mx-auto w-full max-w-72 lg:max-w-none">
            <div className="relative">
              {/* Halo gradient derrière la photo */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-300/50 via-emerald-300/40 to-teal-200/50 blur-2xl"
              />
              <Image
                src={profileBase.photo}
                alt={hero.photoAlt}
                width={1200}
                height={1800}
                priority
                sizes="(min-width: 1024px) 340px, 288px"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-lg ring-1 ring-gray-900/10"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
