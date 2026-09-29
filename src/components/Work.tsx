import { works } from "@/data/works";
import { getDictionary } from "@/i18n/dictionaries";
import { formatMessage } from "@/i18n/format";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";

export async function Work() {
  const dict = await getDictionary();

  const items = works.map((work) => {
    const copy = dict.work.items.find((item) => item.id === work.id);

    if (!copy) {
      throw new Error(`Missing work translation for "${work.id}"`);
    }

    return {
      ...work,
      ...copy,
      imageAlt: formatMessage(dict.a11y.screenshotAlt, { title: copy.title }),
      imageFallback: dict.a11y.projectImage,
    };
  });

  return (
    <section id="work" className="section-spacing scroll-mt-8" aria-labelledby="work-heading">
      <div className="page-container">
        <Reveal>
          <header className="mb-10 md:mb-12">
            <h2 id="work-heading" className="type-h2 text-ink">
              {dict.work.title}
            </h2>
          </header>
        </Reveal>

        <ul className="grid w-full list-none grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-2 lg:gap-6">
          {items.map((work, index) => (
            <li key={work.id} className="min-w-0">
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
