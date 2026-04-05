import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-10 bg-[linear-gradient(180deg,#00363a_0%,#002c2f_100%)] py-12 text-white">
      <div className="shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <Image
            alt="Regenerate Bob's Cove logo"
            className="h-[5.5rem] w-[5.5rem] rounded-[1.5rem] shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
            height={88}
            src="/brand/RBCBOX.png"
            width={88}
          />
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-balance">
              {siteContent.siteName}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/74 sm:text-base">
              {siteContent.footer.summary}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/60">
              {siteContent.footer.note}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          {siteContent.footer.links.map((item) => (
            <Link
              className="rounded-full border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
