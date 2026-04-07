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

      <section className="py-12 sm:py-24">
        <div className="shell grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-24">
          <div className="flex flex-col gap-16">
            {page.sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-4xl font-normal tracking-tight text-ink">
                  {section.title}
                </h2>
                <div className="mt-6 flex flex-col gap-6">
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
            {page.cards.map((card) => (
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
                  <h3 className="font-display text-3xl font-normal tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-charcoal">
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
