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
        </nav>
      </div>
    </header>
  );
}
