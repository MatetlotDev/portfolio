import { works } from "@/data/works";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";

export function Work() {
  return (
    <section id="work" className="section-spacing scroll-mt-8" aria-labelledby="work-heading">
      <div className="page-container">
        <Reveal>
          <header className="mb-10 md:mb-12">
            <h2 id="work-heading" className="type-h2 text-ink">
              Work
            </h2>
          </header>
        </Reveal>

        <ul className="grid w-full list-none grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-2 lg:gap-6">
          {works.map((work, index) => (
            <li key={work.title} className="min-w-0">
              <Reveal delay={index * 0.08} className="h-full min-w-0">
                <WorkCard work={work} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
