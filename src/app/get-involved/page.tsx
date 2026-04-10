import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Learn why Bobs Cove matters and discover how you can support the practical conservation work at Regenerate Bobs Cove.",
};

export default function GetInvolvedPage() {
  const page = siteContent.pages.getInvolved;
  const whyPage = siteContent.pages.why;

  return (
    <>
      <PageHero
        actions={page.actions}
        description={page.description}
        eyebrow={page.eyebrow}
        image={page.image}
        title={page.title}
      />

      {/* Merged 'Why Bobs Cove Matters' Sections */}
      <section className="py-12 sm:py-24 bg-black/5">
        <div className="shell grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-24">
          <div className="flex flex-col gap-16">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                {whyPage.eyebrow}
              </span>
              <h2 className="mt-4 font-display text-4xl font-normal tracking-tight text-ink">
                {whyPage.title}
              </h2>
            </div>
            {whyPage.sections.map((section) => (
              <article key={section.title}>
                <h3 className="font-display text-3xl font-normal tracking-tight text-ink">
                  {section.title}
                </h3>
                <div className="mt-4 flex flex-col gap-6">
                  {section.body.map((paragraph) => (
                    <p className="text-lg leading-relaxed text-charcoal" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-16">
            {whyPage.cards.map((card) => (
              <article key={card.title} className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black/5">
                  <Image
                    alt={card.image.alt}
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 1023px) 100vw, 40vw"
                    src={card.image.src}
                  />
                </div>
                <div className="mt-6">
                  <h4 className="font-display text-2xl font-normal tracking-tight text-ink">
                    {card.title}
                  </h4>
                  <p className="mt-4 text-base leading-relaxed text-charcoal">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Opportunities */}
      <section className="py-12 sm:py-24">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
            {page.opportunities.map((opportunity, index) => (
              <article key={opportunity.title}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 text-xs font-semibold text-charcoal">
                  0{index + 1}
                </span>
                <h2 className="mt-6 font-display text-3xl font-normal tracking-tight text-ink">
                  {opportunity.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal">
                  {opportunity.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-24 rounded-[2rem] bg-ink px-6 py-20 text-center sm:px-16 sm:py-32 lg:px-24">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-display text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready for confirmed next steps.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-white/80 sm:text-xl">
                {page.note}
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {page.actions.map((action) => (
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