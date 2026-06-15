import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import type {
  Experience as ExperienceItem,
  SectionHeadingContent,
} from "@/data/profile";

export default function Experience({
  heading,
  experiences,
}: {
  heading: SectionHeadingContent;
  experiences: ExperienceItem[];
}) {
  return (
    <section id="experiences" className="relative py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-15%] top-1/4 size-[480px] rounded-full bg-gradient-to-bl from-emerald-200/55 via-teal-100/45 to-transparent blur-3xl" />
        <div className="absolute -left-44 bottom-1/4 size-[420px] rounded-full bg-gradient-to-tr from-indigo-200/45 via-sky-100/40 to-transparent blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={heading.eyebrow}
            title={heading.title}
            description={heading.description}
          />
        </FadeIn>

        <ol className="relative ml-3 space-y-12 border-l border-gray-200 pl-8">
          {experiences.map((experience, index) => (
            <li key={experience.company} className="relative">
              {/* Point de timeline */}
              <span
                aria-hidden="true"
                className="absolute -left-[39px] top-1.5 size-3.5 rounded-full border-2 border-accent bg-white"
              />
              <FadeIn delay={index * 75}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-navy">
                    {experience.role}
                    <span className="text-accent"> · {experience.company}</span>
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {experience.period} — {experience.context}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {experience.description.map((item) => (
                    <li
                      key={item.slice(0, 32)}
                      className="flex gap-3 text-sm leading-relaxed text-gray-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1 shrink-0 rounded-full bg-gray-400"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
