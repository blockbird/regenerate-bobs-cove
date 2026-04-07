"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteContent } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-50 py-6 transition-all"
          : "sticky inset-x-0 top-0 z-50 border-b border-black/5 bg-paper/90 py-4 backdrop-blur-md transition-all"
      }
    >
      <div className="shell flex items-center justify-between gap-4">
        <Link
          className={[
            "group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            isHome ? "focus-visible:ring-white" : "focus-visible:ring-ink",
          ].join(" ")}
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
            <strong
              className={[
                "block font-display text-xl tracking-tight",
                isHome ? "text-white" : "text-ink",
              ].join(" ")}
            >
              {siteContent.siteName}
            </strong>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {siteContent.navigation.map((item) => (
            <Link
              className={[
                "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isHome
                  ? "text-white/80 hover:text-white focus-visible:ring-white"
                  : "text-charcoal hover:text-ink focus-visible:ring-ink",
              ].join(" ")}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-2">
            <Link
              className={[
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isHome
                  ? "bg-white text-ink hover:bg-white/90 focus-visible:ring-white"
                  : "bg-ink text-white hover:bg-ink/80 focus-visible:ring-ink",
              ].join(" ")}
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
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-full transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  isHome
                    ? "text-white/80 hover:text-white focus-visible:ring-white bg-white/10 hover:bg-white/20"
                    : "text-charcoal hover:text-ink focus-visible:ring-ink bg-ink/5 hover:bg-ink/10",
                ].join(" ")}
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
