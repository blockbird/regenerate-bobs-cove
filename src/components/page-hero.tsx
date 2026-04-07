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
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="flex flex-col justify-center gap-6 py-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-charcoal">
              {eyebrow}
            </span>
            <h1 className="mt-6 font-display text-4xl font-normal leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal">
              {description}
            </p>
          </div>

          {actions && actions.length > 0 ? (
            <div className="flex flex-wrap gap-4 mt-4">
              {actions.map((action) => (
                <ButtonLink
                  href={action.href}
                  key={action.href}
                  label={action.label}
                  variant={action.variant || "primary"}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-black/5 lg:h-full lg:min-h-[30rem]">
          <Image
            alt={image.alt}
            className="object-cover object-center"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            src={image.src}
          />
        </div>
      </div>
    </section>
  );
}
