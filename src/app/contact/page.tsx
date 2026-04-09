import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
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
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-12">
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

              <div className="mt-8 border-t border-ink/10 pt-12">
                <h2 className="font-display text-3xl font-normal tracking-tight text-ink">
                  Follow the project
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal">
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
            </div>

            <div className="mt-12 lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
