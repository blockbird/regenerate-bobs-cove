import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Why Bob's Cove Matters",
  description:
    "Why Bob's Cove is a place worth caring for through practical, community-led conservation.",
};

export default function WhyBobsCoveMattersPage() {
  const page = siteContent.pages.why;

  return (
    <>
      <PageHero
        description={page.description}
        eyebrow={page.eyebrow}
        image={page.image}
        title={page.title}
      />

      <section className="py-8 pb-16 sm:pb-20">
        <div className="shell grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="grid gap-5">
            {page.sections.map((section) => (
              <article className="panel-surface px-6 py-6 sm:px-7" key={section.title}>
                <h2 className="font-display text-3xl leading-none tracking-[-0.04em] text-ink">
                  {section.title}
                </h2>
                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p className="text-sm leading-7 text-ink/72 sm:text-base" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-5">
            {page.cards.map((card) => (
              <article className="panel-surface overflow-hidden" key={card.title}>
                <div className="relative aspect-[16/10]">
                  <Image
                    alt={card.image.alt}
                    className="object-cover object-center"
                    fill
                    sizes="(max-width: 1023px) 100vw, 40vw"
                    src={card.image.src}
                  />
                </div>
                <div className="px-6 py-6">
                  <h2 className="font-display text-3xl leading-none tracking-[-0.04em] text-ink">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink/72 sm:text-base">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
