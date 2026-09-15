import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing scroll-mt-8"
      aria-labelledby="contact-heading"
    >
      <div className="page-container">
        <Reveal>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="min-w-0">
              <p className="type-label text-muted">Contact</p>
              <h2 id="contact-heading" className="type-h2 mt-3 text-ink">
                {site.contactHeadline}
              </h2>
              <p className="type-body-lg mt-4 max-w-lg text-pretty text-muted">
                {site.contactDescription}
              </p>
              <div className="mt-8">
                <Button href={site.calendly} arrow>
                  {site.contactCta}
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:mx-0 lg:max-w-none">
              <Image
                src="/contact.png"
                alt={`${site.name} illustration`}
                width={1024}
                height={935}
                sizes="(min-width: 1024px) 520px, 420px"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
