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
                  <a
                    className={[
                      "inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] text-white shadow-sm transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep focus-visible:ring-offset-2",
                      item.handle === "Facebook"
                        ? "bg-[#1877F2] hover:bg-[#1877F2]/90"
                        : "bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] hover:opacity-90"
                    ].join(" ")}
                    href={item.href}
                    key={item.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.handle === "Facebook" ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    )}
                    {item.label}
                  </a>
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