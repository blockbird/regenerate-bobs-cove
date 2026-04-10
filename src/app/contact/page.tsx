import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Regenerate Bobs Cove team.",
};

export default function ContactPage() {
  const page = siteContent.pages.contact;

  return (
    <section className="py-16 sm:py-32">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col gap-12 lg:pt-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-charcoal">
                {page.eyebrow}
              </span>
              <h1 className="mt-6 font-display text-5xl font-normal tracking-tight text-ink sm:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-charcoal">
                {page.description}
              </p>
            </div>

            <div className="border-t border-ink/10 pt-12">
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

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}