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

      <section className="py-8 pb-16 sm:pb-20">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-3">
            {page.opportunities.map((opportunity, index) => (
              <article className="panel-surface px-6 py-6 sm:px-7" key={opportunity.title}>
                <span className="inline-grid h-9 w-9 place-items-center rounded-full border border-lime/26 bg-lime/14 text-sm font-extrabold text-deep">
                  {index + 1}
                </span>
                <h2 className="mt-5 font-display text-3xl leading-none tracking-[-0.04em] text-ink">
                  {opportunity.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink/72 sm:text-base">
                  {opportunity.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(148,205,66,0.15),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(94,199,216,0.12),transparent_30%),linear-gradient(135deg,#00373c_0%,#004c51_100%)] px-6 py-7 text-white shadow-[0_32px_80px_rgba(0,40,43,0.24)] sm:px-8 sm:py-8">
            <h2 className="font-display text-4xl leading-none tracking-[-0.05em] text-balance">
              Ready for confirmed next steps.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/76 sm:text-base">
              {page.note}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
      </section>
    </>
  );
}
