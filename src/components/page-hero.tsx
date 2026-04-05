import Image from "next/image";
import Link from "next/link";

import type { ActionLink, ImageAsset } from "@/content/site";

import { ButtonLink } from "./button-link";

type PageHeroProps = {
  actions?: readonly ActionLink[];
  description: string;
  eyebrow: string;
  image: ImageAsset;
  title: string;
};

export function PageHero({
  actions,
  description,
  eyebrow,
  image,
  title,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      <div className="shell grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
        <div className="panel-surface flex flex-col justify-between gap-6 px-6 py-7 sm:px-8 sm:py-9">
          <div>
            <span className="inline-flex rounded-full border border-deep/10 bg-deep/6 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-deep">
              {eyebrow}
            </span>
            <h1 className="mt-4 font-display text-4xl leading-none tracking-[-0.05em] text-balance text-ink sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/72 sm:text-lg">
              {description}
            </p>
          </div>

          {actions && actions.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {actions.map((action) => (
                action.variant === "primary" || action.variant === undefined ? (
                  <ButtonLink
                    href={action.href}
                    key={action.href}
                    label={action.label}
                    variant="primary"
                  />
                ) : (
                  <Link
                    className={[
                      "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] text-deep transition duration-200 hover:-translate-y-0.5",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
                      action.variant === "secondary"
                        ? "border border-deep/12 bg-white shadow-[0_12px_30px_rgba(4,84,89,0.08)] hover:bg-white/86"
                        : "border border-deep/12 bg-transparent hover:bg-deep/6",
                    ].join(" ")}
                    href={action.href}
                    key={action.href}
                  >
                    {action.label}
                  </Link>
                )
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] shadow-panel">
          <Image
            alt={image.alt}
            className="object-cover object-center"
            fill
            sizes="(max-width: 1023px) 100vw, 45vw"
            src={image.src}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.28))]" />
        </div>
      </div>
    </section>
  );
}
