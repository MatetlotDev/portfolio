"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "./icons";

type NavItem = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  name: string;
  homeHref: string;
  navItems: NavItem[];
  primaryNavLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  languageSwitcher: React.ReactNode;
};

export function SiteHeader({
  name,
  homeHref,
  navItems,
  primaryNavLabel,
  openMenuLabel,
  closeMenuLabel,
  languageSwitcher,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");

    function onChange() {
      if (desktop.matches) setOpen(false);
    }

    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <header ref={headerRef} className="relative py-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href={homeHref}
          className="type-small min-w-0 truncate font-semibold text-ink"
        >
          {name}
        </Link>

        <div className="flex shrink-0 items-center gap-2 md:gap-5">
          {languageSwitcher}

          <nav aria-label={primaryNavLabel} className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-link type-small">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button inline-flex items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? closeMenuLabel : openMenuLabel}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav
        id={menuId}
        aria-label={primaryNavLabel}
        hidden={!open}
        className="mobile-nav md:hidden"
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
