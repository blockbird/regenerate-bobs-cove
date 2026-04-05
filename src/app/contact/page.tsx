import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "A placeholder contact page ready for confirmed project details and volunteer enquiries.",
};

export default function ContactPage() {
  const page = siteContent.pages.contact;

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
            {page.channels.map((channel) => (
              <article className="panel-surface px-6 py-6 sm:px-7" key={channel.title}>
                <span className="inline-flex rounded-full border border-deep/10 bg-deep/6 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-deep">
                  {channel.status}
                </span>
                <h2 className="mt-4 font-display text-3xl leading-none tracking-[-0.04em] text-ink">
                  {channel.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink/72 sm:text-base">
                  {channel.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(148,205,66,0.15),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(94,199,216,0.12),transparent_30%),linear-gradient(135deg,#00373c_0%,#004c51_100%)] px-6 py-7 text-white shadow-[0_32px_80px_rgba(0,40,43,0.24)] sm:px-8 sm:py-8">
            <h2 className="font-display text-4xl leading-none tracking-[-0.05em] text-balance">
              Ready for confirmed project channels.
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
