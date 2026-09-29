import Image from "next/image";
import { site } from "@/data/site";
import { formatMessage } from "@/i18n/format";
import { getDictionary } from "@/i18n/dictionaries";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export async function Contact() {
  const dict = await getDictionary();

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
              <p className="type-label text-muted">{dict.contact.label}</p>
              <h2 id="contact-heading" className="type-h2 mt-3 text-ink">
                {dict.contact.headline}
              </h2>
              <p className="type-body-lg mt-4 max-w-lg text-pretty text-muted">
                {dict.contact.description}
              </p>
              <div className="mt-8">
                <Button href={site.calendly} arrow>
                  {dict.contact.cta}
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:mx-0 lg:max-w-none">
              <Image
                src="/contact.png"
                alt={formatMessage(dict.a11y.illustrationAlt, {
                  name: dict.meta.name,
                })}
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
