import { getTechIcon } from "@/lib/techIcons";

export default function Tag({ children }: { children: React.ReactNode }) {
  // Icône de marque automatique quand le libellé correspond à une techno connue.
  const icon = typeof children === "string" ? getTechIcon(children) : null;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
      {icon}
      {children}
    </span>
  );
}
