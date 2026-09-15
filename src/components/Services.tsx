import { services } from "@/data/services";
import { Reveal } from "./Reveal";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section
      id="services"
      className="section-spacing scroll-mt-8"
      aria-labelledby="services-heading"
    >
      <div className="page-container">
        <Reveal>
          <header className="mb-10 md:mb-12">
            <h2 id="services-heading" className="type-h2 text-ink">
              Services
            </h2>
          </header>
        </Reveal>

        <ul className="grid w-full list-none grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-3 md:gap-6">
          {services.map((service, index) => (
            <li key={service.title} className="min-w-0">
              <Reveal delay={index * 0.08} className="h-full min-w-0">
                <ServiceCard service={service} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
