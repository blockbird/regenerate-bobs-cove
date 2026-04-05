import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

const tileSpans = {
  square: "md:col-span-4",
  tall: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-8",
} as const;

export default function HomePage() {
  const { home } = siteContent;

  return (
    <>
      <section
        aria-label="Homepage hero"
        className="relative isolate overflow-hidden bg-deep text-white"
      >
        <Image
          alt=""
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src={home.hero.image.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(93deg,rgba(0,27,31,0.84)_0%,rgba(4,84,89,0.48)_38%,rgba(4,84,89,0.18)_100%),linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.28)_100%)]" />

        <div className="shell relative grid gap-6 py-18 sm:py-24 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end lg:py-10">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/18 bg-white/12 px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/92 backdrop-blur-md">
              {home.hero.eyebrow}
            </span>
            <h1 className="mt-5 max-w-[11ch] font-display text-5xl leading-none tracking-[-0.06em] text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              {home.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/84 sm:text-lg">
              {home.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={home.hero.primaryAction.href}
                label={home.hero.primaryAction.label}
              />
              <ButtonLink
                href={home.hero.secondaryAction.href}
                label={home.hero.secondaryAction.label}
                variant={home.hero.secondaryAction.variant}
              />
            </div>

            <ul className="mt-6 flex flex-wrap gap-3" aria-label="Project focus areas">
              {home.hero.focusAreas.map((focusArea) => (
                <li
                  className="rounded-full border border-white/15 bg-white/12 px-4 py-2 text-sm font-medium text-white/92 backdrop-blur-md"
                  key={focusArea}
                >
                  {focusArea}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            <div className="glass-surface grid min-h-[15rem] gap-4 p-5">
              <Image
                alt={home.hero.brandPanel.logoAlt}
                className="h-auto w-[min(210px,60%)] rounded-[1.4rem] shadow-[0_16px_40px_rgba(0,22,26,0.16)]"
                height={160}
                src={home.hero.brandPanel.logo}
                width={210}
              />
              <div>
                <h2 className="font-display text-3xl leading-none tracking-[-0.04em] text-white">
                  {home.hero.brandPanel.title}
                </h2>
                <p className="mt-3 max-w-xs text-sm leading-7 text-white/78">
                  {home.hero.brandPanel.description}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {home.hero.visuals.map((visual) => (
                <div
                  className="relative min-h-56 overflow-hidden rounded-[1.65rem] shadow-[0_18px_40px_rgba(0,22,26,0.12)]"
                  key={visual.src}
                >
                  <Image
                    alt={visual.alt}
                    className="object-cover object-center"
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    src={visual.src}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.54))]" />
                  <p className="absolute inset-x-4 bottom-4 text-sm font-semibold leading-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                    {visual.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="why">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)]">
            <div className="relative min-h-[23rem] overflow-hidden rounded-[2rem] shadow-panel">
              <Image
                alt={home.why.image.alt}
                className="object-cover object-center"
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                src={home.why.image.src}
              />
            </div>

            <div className="panel-surface px-6 py-7 sm:px-8 sm:py-9">
              <SectionHeading
                description={home.why.description}
                eyebrow={home.why.eyebrow}
                title={home.why.title}
              />

              <ul className="mt-8 grid gap-5">
                {home.why.points.map((point, index) => (
                  <li className="grid grid-cols-[auto_1fr] gap-4" key={point.title}>
                    <span className="mt-1 inline-grid h-7 w-7 place-items-center rounded-full border border-lime/25 bg-lime/16 text-xs font-extrabold text-deep">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-ink/68 sm:text-base">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-8 rounded-[1.5rem] border border-deep/8 bg-[linear-gradient(180deg,rgba(4,84,89,0.05),rgba(94,199,216,0.04))] px-5 py-4 text-base font-semibold leading-7 text-ink">
                {home.why.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="species">
        <div className="shell">
          <SectionHeading
            description={home.birds.description}
            eyebrow={home.birds.eyebrow}
            title={home.birds.title}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {home.birds.species.map((bird) => (
              <article className="panel-surface overflow-hidden" key={bird.name}>
                <div className="relative aspect-[4/3]">
                  <Image
                    alt={bird.image.alt}
                    className="object-cover object-center"
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    src={bird.image.src}
                  />
                </div>
                <div className="px-5 py-5 sm:px-6">
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-deep/72">
                    Biodiversity
                  </span>
                  <h3 className="mt-2 font-display text-3xl leading-none tracking-[-0.04em] text-ink">
                    {bird.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
                    {bird.summary}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-6 text-deep/76">
                    {bird.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="work">
        <div className="shell">
          <SectionHeading
            description={home.work.description}
            eyebrow={home.work.eyebrow}
            title={home.work.title}
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="grid gap-5">
              {home.work.features.map((feature) => (
                <article
                  className="panel-surface grid overflow-hidden lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                  key={feature.title}
                >
                  <div className="relative min-h-64">
                    <Image
                      alt={feature.image.alt}
                      className="object-cover object-center"
                      fill
                      sizes="(max-width: 1023px) 100vw, 32vw"
                      src={feature.image.src}
                    />
                  </div>
                  <div className="flex flex-col justify-center px-6 py-6 sm:px-7">
                    <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-deep/72">
                      {feature.kicker}
                    </span>
                    <h3 className="mt-2 font-display text-3xl leading-none tracking-[-0.04em] text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-ink/70 sm:text-base">
                      {feature.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="panel-surface bg-[radial-gradient(circle_at_top_left,rgba(148,205,66,0.13),transparent_34%),linear-gradient(180deg,#ffffff_0%,#eef6f4_100%)] px-6 py-6 sm:px-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_18px_40px_rgba(4,84,89,0.12)]">
                <Image
                  alt={home.work.emphasis.image.alt}
                  className="object-cover object-center"
                  fill
                  sizes="(max-width: 1023px) 100vw, 32vw"
                  src={home.work.emphasis.image.src}
                />
              </div>
              <h3 className="mt-6 font-display text-4xl leading-none tracking-[-0.05em] text-ink">
                {home.work.emphasis.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink/70 sm:text-base">
                {home.work.emphasis.description}
              </p>
              <ul className="mt-6 grid gap-4">
                {home.work.emphasis.principles.map((principle) => (
                  <li className="grid grid-cols-[auto_1fr] gap-4" key={principle.title}>
                    <span className="mt-2 h-3 w-3 rounded-full bg-[linear-gradient(180deg,#94cd42,#79b130)] shadow-[0_0_0_6px_rgba(148,205,66,0.12)]" />
                    <div>
                      <h4 className="font-semibold text-ink">{principle.title}</h4>
                      <p className="mt-1 text-sm leading-7 text-ink/68 sm:text-base">
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

      <section className="py-16 sm:py-20">
        <div className="shell">
          <SectionHeading
            description={home.landscape.description}
            eyebrow={home.landscape.eyebrow}
            title={home.landscape.title}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-12">
            {home.landscape.gallery.map((item) => (
              <figure
                className={[
                  "group relative overflow-hidden rounded-[1.85rem] shadow-panel",
                  tileSpans[item.shape],
                  item.shape === "tall" ? "min-h-[30rem]" : "min-h-[18rem]",
                ].join(" ")}
                key={item.src}
              >
                <Image
                  alt={item.alt}
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  src={item.src}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.52))]" />
                <figcaption className="absolute inset-x-4 bottom-4 text-sm font-semibold leading-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.32)]">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="join">
        <div className="shell">
          <div className="grid gap-6 rounded-[2.1rem] bg-[radial-gradient(circle_at_top_left,rgba(148,205,66,0.15),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(94,199,216,0.12),transparent_30%),linear-gradient(135deg,#00373c_0%,#004c51_100%)] px-6 py-7 text-white shadow-[0_32px_80px_rgba(0,40,43,0.24)] sm:px-8 sm:py-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <div>
              <SectionHeading
                description={home.join.description}
                eyebrow={home.join.eyebrow}
                inverted
                title={home.join.title}
              />
              <div className="mt-7 flex flex-wrap gap-3">
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

            <ol className="grid gap-1">
              {home.join.steps.map((step, index) => (
                <li
                  className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/14 py-4 first:border-t-0 first:pt-0"
                  key={step.title}
                >
                  <span className="inline-grid h-9 w-9 place-items-center rounded-full border border-lime/26 bg-lime/12 text-sm font-extrabold text-lime">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-white/72 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" id="stories">
        <div className="shell">
          <SectionHeading
            description={home.stories.description}
            eyebrow={home.stories.eyebrow}
            title={home.stories.title}
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {home.stories.cards.map((story) => (
              <article className="panel-surface overflow-hidden" key={story.title}>
                <div className="relative aspect-[16/10]">
                  <Image
                    alt={story.image.alt}
                    className="object-cover object-center"
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    src={story.image.src}
                  />
                </div>
                <div className="px-5 py-5 sm:px-6">
                  <span className="inline-flex rounded-full bg-deep/6 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-deep">
                    {story.meta}
                  </span>
                  <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.04em] text-ink">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70 sm:text-base">
                    {story.summary}
                  </p>
                  <Link
                    className="mt-5 inline-flex text-sm font-semibold text-deep underline decoration-deep/25 underline-offset-4 transition hover:decoration-deep"
                    href={story.href}
                  >
                    Read the placeholder page
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
