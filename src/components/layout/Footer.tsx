import { navLinks, profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "LinkedIn", url: profile.social.linkedin },
    { label: "GitHub", url: profile.social.github },
  ].filter((social) => social.url !== "");

  return (
    <footer className="border-t border-gray-200/80">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm font-semibold text-navy">{profile.name}</p>

          <nav aria-label="Navigation du pied de page">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {socials.length > 0 && (
            <ul className="flex items-center gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition-colors hover:text-navy"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          © {year} {profile.name} · Construit avec Next.js
        </p>
      </div>
    </footer>
  );
}
