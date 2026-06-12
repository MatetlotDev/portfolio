import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import { skillCategories } from "@/data/profile";

export default function Skills() {
  return (
    <section id="competences" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Compétences"
            title="Stack & savoir-faire"
            description="Un socle front-end solide, complété par une vraie culture produit et des méthodes de travail éprouvées en équipe distribuée."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
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
