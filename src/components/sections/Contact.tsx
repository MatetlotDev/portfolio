import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import {
  profileBase,
  type ContactContent,
  type HeroContent,
  type UiStrings,
} from "@/data/profile";

export default function Contact({
  contact,
  ui,
  location,
  workModes,
}: {
  contact: ContactContent;
  ui: UiStrings;
  location: HeroContent["location"];
  workModes: HeroContent["workModes"];
}) {
  const socials = [
    { label: "LinkedIn", url: profileBase.social.linkedin },
    { label: "GitHub", url: profileBase.social.github },
  ].filter((social) => social.url !== "");

  return (
    <section id="contact" className="relative py-24">
      {/* Formes colorées autour de la carte, dans le style du hero */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 size-[440px] rounded-full bg-gradient-to-tr from-sky-200/55 via-blue-100/40 to-transparent blur-3xl" />
        <div className="absolute right-[-12%] bottom-0 size-[420px] rounded-full bg-gradient-to-bl from-emerald-200/55 via-teal-100/45 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-emerald-50 via-sky-50 to-teal-50 px-6 py-16 text-center shadow-md ring-1 ring-emerald-100/60 sm:px-16">
            {/* Halos doux à l'intérieur de la carte */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -top-24 right-[-10%] size-80 rounded-full bg-emerald-300/35 blur-3xl" />
              <div className="absolute bottom-[-30%] left-[-5%] size-72 rounded-full bg-sky-300/30 blur-3xl" />
            </div>

            <div className="relative">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
                {contact.eyebrow}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {contact.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                {contact.text}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={`mailto:${profileBase.email}?subject=${encodeURIComponent(ui.mailSubject)}`}
                >
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
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  {profileBase.email}
                </Button>
                <a
                  href={profileBase.cvPath}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/70 px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:border-navy hover:bg-white"
                >
                  {ui.downloadCv}
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
                <li>
                  <a
                    href={`tel:${profileBase.phone}`}
                    className="transition-colors hover:text-navy"
                  >
                    {profileBase.phoneDisplay}
                  </a>
                </li>
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent transition-colors hover:text-accent-dark"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  {location} · {workModes}
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
