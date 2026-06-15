interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  download?: boolean;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200";

const variants = {
  primary:
    "bg-gradient-to-r from-accent to-emerald-500 text-white shadow-sm hover:from-accent-dark hover:to-emerald-600 hover:shadow-md",
  secondary:
    "border border-gray-300 bg-white text-navy hover:border-navy hover:bg-gray-50",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  download = false,
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
