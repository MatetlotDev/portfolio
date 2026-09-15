import Image from "next/image";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
};

export function WorkCard({ work }: WorkCardProps) {
  const meta = [work.role, work.year, work.status].filter(Boolean);
  const technologies = work.technologies ?? [];

  const content = (
    <>
      <div className="overflow-hidden rounded-md">
        <div className="relative aspect-[16/10] overflow-hidden bg-warm-white">
          {work.image ? (
            <Image
              src={work.image}
              alt={`${work.title} screenshot`}
              fill
              className="project-media object-cover"
              sizes="(min-width: 1024px) 528px, 100vw"
            />
          ) : (
            <div className="project-media flex h-full w-full items-center justify-center">
              <p className="type-small text-muted">Project image</p>
            </div>
          )}
          <span
            className="project-accent pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-accent"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <h3 className="type-h3 text-ink">{work.title}</h3>
        <p className="type-body font-bold text-ink">{work.subTitle}</p>
        {work.description ? (
          <p className="type-body text-muted">{work.description}</p>
        ) : null}

        {meta.length > 0 ? (
          <p className="type-small text-muted">{meta.join(" · ")}</p>
        ) : null}

        {technologies.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-pill bg-warm-white px-2.5 py-1.5 type-small text-ink"
              >
                {technology}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );

  const className =
    "work-card block h-full w-full min-w-0 rounded-lg bg-cream p-6 text-ink no-underline";

  if (work.url) {
    return (
      <a
        href={work.url}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
