import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { contact, profile } from "@/data/profile";

export default function Contact() {
  const socials = [
    { label: "LinkedIn", url: profile.social.linkedin },
    { label: "GitHub", url: profile.social.github },
  ].filter((social) => social.url !== "");

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-light to-accent-dark px-6 py-16 text-center shadow-lg sm:px-16">
            {/* Halos lumineux dans la carte */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -top-24 right-[-10%] size-80 rounded-full bg-emerald-400/25 blur-3xl" />
              <div className="absolute bottom-[-30%] left-[-5%] size-72 rounded-full bg-sky-400/20 blur-3xl" />
            </div>

            <div className="relative">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-300">
                {contact.eyebrow}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {contact.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100">
                {contact.text}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="light"
                  href={`mailto:${profile.email}?subject=${encodeURIComponent("Mission freelance — prise de contact")}`}
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
                  {profile.email}
                </Button>
                <a
                  href={profile.cvPath}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  Télécharger mon CV
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-blue-200">
                <li>
                  <a
                    href={`tel:${profile.phone}`}
                    className="transition-colors hover:text-white"
                  >
                    {profile.phoneDisplay}
                  </a>
                </li>
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  {profile.location} · {profile.workModes}
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
