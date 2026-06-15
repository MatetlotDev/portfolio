import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getContent, profileBase } from "@/data/profile";
import {
  defaultLocale,
  isLocale,
  locales,
  ogLocale,
} from "@/i18n/config";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const { seo } = getContent(locale);

  return {
    metadataBase: new URL(profileBase.siteUrl),
    title: {
      default: seo.titleDefault,
      template: seo.titleTemplate,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: profileBase.name, url: profileBase.siteUrl }],
    creator: profileBase.name,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocale[l]),
      url: `/${locale}`,
      siteName: profileBase.name,
      title: seo.titleDefault,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.titleDefault,
      description: seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning : des extensions navigateur (ColorZilla…)
          injectent des attributs sur <body> avant l'hydratation React */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
