import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/data/profile";

export default function About() {
  return (
    <section id="a-propos" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-gray-600">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={100}>
            <ul className="space-y-5">
              {about.differentiators.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-surface p-5"
                >
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4 shrink-0 text-accent"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
