import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  SiChartdotjs,
  SiCss,
  SiDocker,
  SiExpo,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLeaflet,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiShopify,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress,
} from "react-icons/si";

/**
 * Associe une techno/outil à son icône de marque.
 * Recherche par mot-clé (ordre important : les cas spécifiques —
 * « react native », « tailwind » — passent avant les génériques
 * « react », « css »). Renvoie `null` si rien de pertinent.
 */
const matchers: [keyword: string, icon: IconType][] = [
  ["next", SiNextdotjs],
  ["react native", SiReact],
  ["react", SiReact],
  ["redux", SiRedux],
  ["typescript", SiTypescript],
  ["javascript", SiJavascript],
  ["tailwind", SiTailwindcss],
  ["html", SiHtml5],
  ["css", SiCss],
  ["node", SiNodedotjs],
  ["git", SiGit],
  ["figma", SiFigma],
  ["shopify", SiShopify],
  ["supabase", SiSupabase],
  ["mongodb", SiMongodb],
  ["docker", SiDocker],
  ["expo", SiExpo],
  ["leaflet", SiLeaflet],
  ["chart.js", SiChartdotjs],
  ["mui", SiMui],
  ["jira", SiJira],
  ["wordpress", SiWordpress],
  ["php", SiPhp],
  ["vite", SiVite],
];

export function getTechIcon(label: string): ReactNode | null {
  const normalized = label.toLowerCase();
  const match = matchers.find(([keyword]) => normalized.includes(keyword));
  if (!match) return null;
  const Icon = match[1];
  return <Icon aria-hidden="true" className="size-3.5 shrink-0 text-gray-500" />;
}
