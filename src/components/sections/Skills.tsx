import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import type {
  SectionHeadingContent,
  SkillCategory,
} from "@/data/profile";

export default function Skills({
  heading,
  categories,
}: {
  heading: SectionHeadingContent;
  categories: SkillCategory[];
}) {
  return (
    <section id="competences" className="relative py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 top-1/4 size-[460px] rounded-full bg-gradient-to-tr from-sky-200/55 via-blue-100/45 to-transparent blur-3xl" />
        <div className="absolute right-[-12%] bottom-0 size-[400px] rounded-full bg-gradient-to-bl from-emerald-200/50 via-teal-100/40 to-transparent blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={heading.eyebrow}
            title={heading.title}
            description={heading.description}
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 75}>
              <div className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-navy">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
