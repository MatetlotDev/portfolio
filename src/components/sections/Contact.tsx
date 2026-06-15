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
  cvPath,
}: {
  contact: ContactContent;
  ui: UiStrings;
  location: HeroContent["location"];
  workModes: HeroContent["workModes"];
  cvPath: string;
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
                  href={cvPath}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white/70 px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:border-navy hover:bg-white"
                >
                  {ui.downloadCv}
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2.5">
                  <a
                    href={`tel:${profileBase.phone}`}
                    className="transition-colors hover:text-navy"
                  >
                    {profileBase.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${profileBase.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ui.whatsapp}
                    title={ui.whatsapp}
                    className="inline-flex size-7 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15h-.003a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
                    </svg>
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
