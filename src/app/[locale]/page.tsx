import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import MouseGlow from "@/components/ui/MouseGlow";
import { getContent } from "@/data/profile";
import { isLocale, locales } from "@/i18n/config";
import { buildJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = getContent(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(locale)),
        }}
      />
      <a
        href="#a-propos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy focus:shadow-md"
      >
        {content.ui.skipToContent}
      </a>
      <Header nav={content.navLinks} ui={content.ui} locale={locale} />
      <MouseGlow />
      <main className="flex-1 overflow-x-clip">
        <Hero hero={content.hero} ui={content.ui} />
        <About about={content.about} />
        <Skills
          heading={content.sections.skills}
          categories={content.skillCategories}
        />
        <Experience
          heading={content.sections.experience}
          experiences={content.experiences}
        />
        <Projects
          heading={content.sections.projects}
          projects={content.projects}
          viewProjectLabel={content.ui.viewProject}
        />
        <Contact
          contact={content.contact}
          ui={content.ui}
          location={content.hero.location}
          workModes={content.hero.workModes}
        />
      </main>
      <Footer nav={content.navLinks} ui={content.ui} />
    </>
  );
}
