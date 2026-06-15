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
