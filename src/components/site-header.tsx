import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-paper/90 py-4 backdrop-blur-md transition-all">
      <div className="shell flex items-center justify-between gap-4">
        <Link
          className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
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
            <strong className="block font-display text-xl tracking-tight text-ink">
              {siteContent.siteName}
            </strong>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {siteContent.navigation.map((item) => (
            <Link
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            href="/get-involved"
          >
            Get Involved
          </Link>
        </nav>
      </div>
    </header>
  );
}
