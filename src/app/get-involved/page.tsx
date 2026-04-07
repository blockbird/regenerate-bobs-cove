import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, follow updates, and support the practical work at Regenerate Bob's Cove.",
};

export default function GetInvolvedPage() {
  const page = siteContent.pages.getInvolved;

  return (
    <>
      <PageHero
        actions={page.actions}
        description={page.description}
        eyebrow={page.eyebrow}
        image={page.image}
        title={page.title}
      />

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
