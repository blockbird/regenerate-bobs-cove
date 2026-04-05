import Link from "next/link";

import type { ActionLink, LinkVariant } from "@/content/site";

type ButtonLinkProps = ActionLink & {
  className?: string;
};

const variantClasses: Record<LinkVariant, string> = {
  primary:
    "bg-lime text-deep shadow-[0_18px_40px_rgba(148,205,66,0.28)] hover:bg-[#a7d95b]",
  secondary:
    "border border-white/30 bg-white/12 text-white backdrop-blur-md hover:bg-white/18",
  light:
    "bg-white text-deep shadow-[0_18px_40px_rgba(255,255,255,0.18)] hover:bg-white/92",
  ghost:
    "border border-white/25 bg-transparent text-white hover:bg-white/10",
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
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-deep",
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
