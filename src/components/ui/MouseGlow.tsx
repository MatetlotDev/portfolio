"use client";

import { useEffect, useRef } from "react";

/**
 * Halo vert très discret qui suit la souris avec un léger retard.
 * Désactivé sur les appareils tactiles et si l'utilisateur préfère
 * réduire les animations. Peint derrière le contenu (-z-10).
 */
export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    const tick = () => {
      x += (targetX - x) * 0.07;
      y += (targetY - y) * 0.07;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      el.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 size-[560px] rounded-full bg-[radial-gradient(circle,rgba(5,150,105,0.14)_0%,rgba(56,189,248,0.07)_45%,transparent_70%)] opacity-0 blur-3xl transition-opacity duration-700"
    />
  );
}
