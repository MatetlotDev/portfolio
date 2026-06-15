import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import type {
  Project,
  SectionHeadingContent,
} from "@/data/profile";

function ProjectLink({
  project,
  label,
}: {
  project: Project;
  label: string;
}) {
  if (project.url === "") {
    return project.status ? (
      <p className="text-sm font-medium text-gray-500">{project.status}</p>
    ) : null;
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
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

export default function Projects({
  heading,
  projects,
  viewProjectLabel,
}: {
  heading: SectionHeadingContent;
  projects: Project[];
  viewProjectLabel: string;
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
              <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 sm:p-10">
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
                    <div className="mt-6">
                      <ProjectLink project={project} label={viewProjectLabel} />
                    </div>
                  </div>

                  {/*
                    Panneau visuel temporaire — remplacer par une capture
                    du projet via next/image (fichiers dans /public/projects)
                    dès qu'elle est disponible.
                  */}
                  <div
                    aria-hidden="true"
                    className="relative hidden min-h-72 items-center justify-center bg-gradient-to-br from-navy via-navy-light to-accent-dark lg:flex"
                  >
                    <p className="text-5xl font-bold tracking-tight text-white/90">
                      {project.name}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}

          {others.map((project, index) => (
            <FadeIn key={project.name} delay={index * 75}>
              <article className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
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
                  </div>
                  <div className="shrink-0">
                    <ProjectLink project={project} label={viewProjectLabel} />
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
