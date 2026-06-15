"use client";

import { useEffect, useState } from "react";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { profileBase, type NavLink, type UiStrings } from "@/data/profile";
import type { Locale } from "@/i18n/config";

export default function Header({
  nav,
  ui,
  locale,
}: {
  nav: NavLink[];
  ui: UiStrings;
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled || menuOpen
          ? "border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-base font-bold tracking-tight text-navy"
          aria-label={`${profileBase.name} — ${ui.backToTop}`}
        >
          {profileBase.name}
        </a>

        {/* Navigation desktop */}
        <nav aria-label={ui.primaryNav} className="hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle locale={locale} label={ui.langSwitch} />
          <a
            href="#contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {ui.contactCta}
          </a>
        </div>

        {/* Contrôles mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle locale={locale} label={ui.langSwitch} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            className="inline-flex size-10 items-center justify-center rounded-lg text-navy"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-5"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={ui.mobileNav}
          className="border-t border-gray-100 bg-white px-6 pb-6 pt-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {ui.contactCta}
          </a>
        </nav>
      )}
    </header>
  );
}
