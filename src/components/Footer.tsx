import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from "./icons";

export async function Footer() {
  const dict = await getDictionary();

  const footerLinks = [
    {
      label: dict.footer.email,
      href: site.email ? `mailto:${site.email}` : undefined,
      icon: MailIcon,
    },
    {
      label: dict.footer.linkedin,
      href: site.linkedin,
      icon: LinkedInIcon,
    },
    {
      label: dict.footer.instagram,
      href: site.instagram,
      icon: InstagramIcon,
    },
    {
      label: dict.footer.github,
      href: site.github,
      icon: GitHubIcon,
    },
  ];

  return (
    <footer className="border-t border-line">
      <div className="page-container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="type-small text-muted">{dict.meta.name}</p>
        <ul className="flex flex-wrap items-center gap-3">
          {footerLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    className="social-icon inline-flex size-10 items-center justify-center rounded-full"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={link.label}
                  >
                    <Icon />
                  </a>
                ) : (
                  <span className="type-small text-muted">{link.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
