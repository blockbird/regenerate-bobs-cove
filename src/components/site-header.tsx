import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-paper/82 backdrop-blur-xl">
      <div className="shell flex flex-wrap items-center justify-between gap-4 py-4">
        <Link
          className="inline-flex min-w-0 items-center gap-3 rounded-full pr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          href="/"
        >
          <Image
            alt="Regenerate Bob's Cove logo"
            className="h-12 w-12 rounded-full shadow-[0_12px_24px_rgba(4,84,89,0.12)]"
            height={48}
            priority
            src="/brand/RBCround.png"
            width={48}
          />
          <span className="min-w-0">
            <strong className="block truncate font-display text-base leading-tight tracking-[-0.03em] text-ink">
              {siteContent.siteName}
            </strong>
            <span className="block truncate text-sm text-ink/65">
              {siteContent.location}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="flex flex-wrap justify-end gap-2">
          {siteContent.navigation.map((item) => (
            <Link
              className="rounded-full px-4 py-3 text-sm font-medium text-ink/68 transition hover:bg-deep/6 hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
