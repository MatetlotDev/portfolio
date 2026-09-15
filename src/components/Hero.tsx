import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Button } from "./Button";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Hero() {
  return (
    <section className="page-container">
      <header className="flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="type-small font-semibold text-ink">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-link type-small">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="pb-20 pt-12 md:pb-24 md:pt-16 lg:pb-32 lg:pt-20">
        <p className="inline-flex items-center gap-2 rounded-pill bg-cream px-2.5 py-1.5 type-small text-ink">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {site.availability}
        </p>

        <h1 className="type-display mt-6 text-ink">{site.name}</h1>

        <div className="mt-6 grid items-start gap-8 lg:mt-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="min-w-0">
            <p className="type-body-lg max-w-xl text-ink">{site.positioning}</p>
            <p className="type-body mt-4 max-w-lg text-pretty text-muted">
              {site.introduction}
            </p>
            <div className="mt-8">
              <Button href={site.calendly} arrow>
                {site.heroCta}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:mx-0 lg:max-w-none">
            <Image
              src="/header.png"
              alt={`${site.name} illustration`}
              width={1536}
              height={1024}
              priority
              sizes="(min-width: 1024px) 520px, 420px"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
