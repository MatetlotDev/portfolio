import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  arrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  arrow,
}: ButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const className = variant === "primary" ? "btn-primary" : "btn-secondary";
  const content = (
    <>
      {children}
      {arrow ? <ArrowUpRightIcon /> : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
