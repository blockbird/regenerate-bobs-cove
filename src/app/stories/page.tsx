import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Placeholder story formats and updates for Regenerate Bob's Cove.",
};

export default function StoriesPage() {
  const page = siteContent.pages.stories;

  return (
    <>
      <PageHero
        description={page.description}
        eyebrow={page.eyebrow}
        image={page.image}
        title={page.title}
      />

      <section className="py-8 pb-16 sm:pb-20">
        <div className="shell">
          <div className="panel-surface px-6 py-6 sm:px-7">
            <h2 className="font-display text-4xl leading-none tracking-[-0.05em] text-ink">
              Story formats that can stay lightweight.
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {page.formats.map((format) => (
                <article
                  className="rounded-[1.5rem] border border-deep/8 bg-white/70 px-5 py-5"
                  key={format.title}
                >
                  <h3 className="font-display text-2xl leading-none tracking-[-0.04em] text-ink">
                    {format.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/72 sm:text-base">
                    {format.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {page.cards.map((story) => (
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
                  <h2 className="mt-3 font-display text-3xl leading-none tracking-[-0.04em] text-ink">
                    {story.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink/72 sm:text-base">
                    {story.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[2rem] border border-deep/10 bg-[linear-gradient(180deg,rgba(4,84,89,0.05),rgba(94,199,216,0.04))] px-6 py-6 sm:px-7">
            <p className="text-sm leading-7 text-ink/76 sm:text-base">{page.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
