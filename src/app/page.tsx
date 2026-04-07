import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

const tileSpans = {
  square: "md:col-span-4",
  tall: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-8",
  full: "md:col-span-12",
} as const;

export default function HomePage() {
  const { home } = siteContent;

  return (
    <>
      <section
        aria-label="Homepage hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink text-white pt-20"
      >
        <div className="absolute inset-0 z-0">
          <Image
            alt=""
            className="object-cover object-center scale-105"
            fill
            priority
            sizes="100vw"
            src={home.hero.image.src}
          />
          {/* A more subtle gradient overlay for editorial elegance */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
        </div>

        <div className="shell relative z-10 flex flex-col items-center text-center pb-20 pt-32 sm:py-40">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            {home.hero.eyebrow}
          </span>
          <h1 className="mt-8 max-w-[14ch] font-display text-5xl font-normal leading-[1.05] tracking-tight text-balance sm:text-7xl lg:text-[7rem]">
            {home.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {home.hero.description}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {/* For hero, we force specific variants that look good on dark backgrounds */}
            <ButtonLink
              href={home.hero.primaryAction.href}
              label={home.hero.primaryAction.label}
              variant="light"
            />
            <ButtonLink
              href={home.hero.secondaryAction.href}
              label={home.hero.secondaryAction.label}
              variant="ghost"
            />
          </div>

          <ul className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium tracking-wide text-white/60" aria-label="Project focus areas">
            {home.hero.focusAreas.map((focusArea) => (
              <li key={focusArea} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-lime/80" />
                {focusArea}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 sm:py-40" id="why">
        <div className="shell">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/5">
              <Image
                alt={home.why.image.alt}
                className="object-cover object-center"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                src={home.why.image.src}
              />
            </div>

            <div className="flex flex-col justify-center">
              <SectionHeading
                description={home.why.description}
                eyebrow={home.why.eyebrow}
                title={home.why.title}
              />

              <ul className="mt-16 flex flex-col gap-10">
                {home.why.points.map((point, index) => (
                  <li className="flex items-start gap-6" key={point.title}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 text-xs font-semibold text-charcoal">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight text-ink">{point.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-charcoal">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-40 bg-white" id="species">
        <div className="shell">
          <div className="max-w-3xl">
            <SectionHeading
              description={home.birds.description}
              eyebrow={home.birds.eyebrow}
              title={home.birds.title}
            />
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-3">
            {home.birds.species.map((bird) => (
              <article className="group" key={bird.name}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black/5">
                  <Image
                    alt={bird.image.alt}
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    src={bird.image.src}
                  />
                </div>
                <div className="mt-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                    Biodiversity
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-normal tracking-tight text-ink">
                    {bird.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-charcoal">
                    {bird.summary}
                  </p>
                  <p className="mt-6 text-sm font-medium text-ink">
                    {bird.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-40" id="work">
        <div className="shell">
          <div className="max-w-3xl">
            <SectionHeading
              description={home.work.description}
              eyebrow={home.work.eyebrow}
              title={home.work.title}
            />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-12">
              {home.work.features.map((feature) => (
                <article
                  className="group flex flex-col gap-6 sm:flex-row sm:items-center"
                  key={feature.title}
                >
                  <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-xl bg-black/5 sm:w-64">
                    <Image
                      alt={feature.image.alt}
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                      fill
                      sizes="(max-width: 639px) 100vw, 256px"
                      src={feature.image.src}
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                      {feature.kicker}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-normal tracking-tight text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-charcoal">
                      {feature.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="flex flex-col justify-center rounded-2xl bg-white p-8 shadow-sm sm:p-12 lg:ml-12">
              <h3 className="font-display text-3xl font-normal leading-[1.15] tracking-tight text-ink sm:text-4xl">
                {home.work.emphasis.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-charcoal">
                {home.work.emphasis.description}
              </p>
              <ul className="mt-10 flex flex-col gap-8">
                {home.work.emphasis.principles.map((principle) => (
                  <li className="flex items-start gap-4" key={principle.title}>
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                    <div>
                      <h4 className="text-lg font-medium tracking-tight text-ink">{principle.title}</h4>
                      <p className="mt-2 text-base leading-relaxed text-charcoal">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-40 bg-white">
        <div className="shell">
          <div className="max-w-3xl mb-16">
            <SectionHeading
              description={home.landscape.description}
              eyebrow={home.landscape.eyebrow}
              title={home.landscape.title}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
            {home.landscape.gallery.map((item) => (
              <figure
                className={[
                  "group relative overflow-hidden rounded-xl bg-black/5",
                  tileSpans[item.shape],
                  (item.shape as string) === "tall" ? "min-h-[40rem]" : (item.shape as string) === "full" ? "min-h-[60vh] md:min-h-[80vh]" : "min-h-[24rem]",
                ].join(" ")}
                key={item.src}
              >
                <Image
                  alt={item.alt}
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  src={item.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-6 bottom-6 translate-y-4 text-sm font-medium tracking-wide text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-40" id="join">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-20 sm:px-16 sm:py-32 lg:px-24">
            <div className="absolute inset-0 opacity-10">
              <Image 
                alt="" 
                src={home.hero.image.src} 
                fill 
                className="object-cover object-center grayscale" 
              />
            </div>
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {home.join.eyebrow}
              </span>
              <h2 className="mt-8 font-display text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {home.join.title}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-white/80 sm:text-xl">
                {home.join.description}
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {home.join.actions.map((action) => (
                  <ButtonLink
                    href={action.href}
                    key={action.href}
                    label={action.label}
                    variant={action.variant}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
