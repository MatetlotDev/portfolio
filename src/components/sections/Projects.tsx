import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import type { Project, SectionHeadingContent } from "@/data/profile";

function ProjectImage({
  project,
  sizes,
  className,
}: {
  project: Project;
  sizes: string;
  className?: string;
}) {
  if (project.image === "") {
    // Repli si aucune capture : panneau dégradé avec le nom du projet.
    return (
      <div
        aria-hidden="true"
        className={`flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-accent-dark p-8 ${className ?? ""}`}
      >
        <p className="text-3xl font-bold tracking-tight text-white/90">
          {project.name}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className ?? ""}`}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}

/**
 * Bouton « Visiter le site ». Le pseudo-élément `after` s'étire sur toute
 * la carte (ancêtre positionné le plus proche) : la carte entière devient
 * cliquable sans imbriquer de balises <a>.
 */
function VisitLink({
  url,
  label,
  name,
}: {
  url: string;
  label: string;
  name: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — ${name}`}
      className="inline-flex items-center gap-1.5 rounded-lg bg-accent-soft px-4 py-2 text-sm font-semibold text-accent-dark transition-colors after:absolute after:inset-0 after:content-[''] group-hover:bg-accent group-hover:text-white"
    >
      {label}
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
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </a>
  );
}

/** Halo vert/bleu asymétrique révélé au survol (rappel de la photo du hero). */
function CardGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-2 z-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
    >
      <div className="absolute left-0 top-2 h-2/3 w-3/4 rounded-full bg-sky-400/40" />
      <div className="absolute bottom-0 right-2 h-2/3 w-2/3 rounded-full bg-emerald-400/40" />
    </div>
  );
}

function ProjectFooter({
  project,
  visitLabel,
}: {
  project: Project;
  visitLabel: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      {project.url !== "" && (
        <VisitLink url={project.url} label={visitLabel} name={project.name} />
      )}
      {project.status && (
        <span className="text-sm font-medium text-gray-500">
          {project.status}
        </span>
      )}
    </div>
  );
}

export default function Projects({
  heading,
  projects,
  visitLabel,
}: {
  heading: SectionHeadingContent;
  projects: Project[];
  visitLabel: string;
}) {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projets" className="relative py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 -z-10 size-[440px] rounded-full bg-gradient-to-tr from-sky-100/50 via-emerald-50/40 to-transparent blur-3xl"
      />
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow={heading.eyebrow}
            title={heading.title}
            description={heading.description}
          />
        </FadeIn>

        <div className="space-y-8">
          {featured.map((project) => (
            <FadeIn key={project.name}>
              <div className="group relative">
                <CardGlow />
                <article className="relative z-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                  <div className="grid lg:grid-cols-2">
                    {/* Image : au-dessus en mobile, à droite en desktop */}
                    <ProjectImage
                      project={project}
                      sizes="(min-width: 1024px) 512px, 100vw"
                      className="order-1 aspect-[16/10] lg:order-2 lg:aspect-auto lg:min-h-full"
                    />

                    <div className="order-2 p-8 sm:p-10 lg:order-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                        {project.label}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-navy">
                        {project.name}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-600">
                        {project.description}
                      </p>
                      {project.highlights.length > 0 && (
                        <ul className="mt-5 space-y-2">
                          {project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-center gap-2.5 text-sm text-gray-600"
                            >
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
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <li key={item}>
                            <Tag>{item}</Tag>
                          </li>
                        ))}
                      </ul>
                      <ProjectFooter project={project} visitLabel={visitLabel} />
                    </div>
                  </div>
                </article>
              </div>
            </FadeIn>
          ))}

          {others.map((project, index) => (
            <FadeIn key={project.name} delay={index * 75}>
              <div className="group relative">
                <CardGlow />
                <article className="relative z-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                  <div className="grid sm:grid-cols-2">
                    {/* Image : au-dessus en mobile, à gauche en desktop */}
                    <ProjectImage
                      project={project}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="aspect-[16/10] sm:aspect-auto sm:min-h-full"
                    />

                    <div className="flex flex-col p-8 sm:p-10">
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                        {project.label}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-navy">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-600">
                        {project.description}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <li key={item}>
                            <Tag>{item}</Tag>
                          </li>
                        ))}
                      </ul>
                      <ProjectFooter project={project} visitLabel={visitLabel} />
                    </div>
                  </div>
                </article>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
