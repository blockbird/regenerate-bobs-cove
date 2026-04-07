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

      <section className="py-12 sm:py-24">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
            {page.channels.map((channel) => (
              <article key={channel.title}>
                <span className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                  {channel.status}
                </span>
                <h2 className="mt-4 font-display text-3xl font-normal tracking-tight text-ink">
                  {channel.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal">
                  {channel.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-24 rounded-2xl bg-white p-8 shadow-sm sm:p-12">
            <h2 className="font-display text-4xl font-normal tracking-tight text-ink">
              Follow the project
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal">
              Facebook and Instagram are the current public places to follow updates and get a feel for the project as it grows.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {page.socialLinks.map((item) => (
                <ButtonLink
                  href={item.href}
                  key={item.href}
                  label={item.label}
                  variant="secondary"
                />
              ))}
            </div>
          </div>

          <div className="mt-24 rounded-[2rem] bg-ink px-6 py-20 text-center sm:px-16 sm:py-32 lg:px-24">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-display text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready for confirmed project channels.
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
