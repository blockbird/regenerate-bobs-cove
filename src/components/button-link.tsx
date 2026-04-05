import Link from "next/link";

import type { ActionLink, LinkVariant } from "@/content/site";

type ButtonLinkProps = ActionLink & {
  className?: string;
};

const variantClasses: Record<LinkVariant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink/80 shadow-sm",
  secondary:
    "border border-ink/20 bg-transparent text-ink hover:bg-ink/5",
  light:
    "bg-white text-ink shadow-sm hover:bg-white/90",
  ghost:
    "border border-white/30 bg-transparent text-white hover:bg-white/10",
};

export function ButtonLink({
  className,
  href,
  label,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      className={[
        "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        "hover:-translate-y-0.5",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      href={href}
    >
      {label}
    </Link>
  );
}
