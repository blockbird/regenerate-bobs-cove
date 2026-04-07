import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/95 py-4 backdrop-blur-md transition-all">
      <div className="shell flex items-center justify-between gap-4">
        <Link
          className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          href="/"
        >
          <Image
            alt="Regenerate Bob's Cove logo"
            className="h-10 w-10 rounded-full transition-transform duration-500 group-hover:scale-105"
            height={40}
            priority
            src="/brand/RBCround.png"
            width={40}
          />
          <div>
            <strong className="block font-display text-xl tracking-tight text-white">
              {siteContent.siteName}
            </strong>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {siteContent.navigation.map((item) => (
            <Link
              className="text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <Link
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              href="/get-involved"
            >
              Get Involved
            </Link>

            {siteContent.socialLinks.map((social) => (
              <a
                key={social.handle}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:-translate-y-0.5 hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                aria-label={social.label}
              >
                {social.handle === "Facebook" ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                )}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
