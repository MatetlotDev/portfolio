import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile, seo } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: seo.titleDefault,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: profile.siteUrl,
    siteName: profile.name,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      {/* suppressHydrationWarning : des extensions navigateur (ColorZilla…)
          injectent des attributs sur <body> avant l'hydratation React */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
