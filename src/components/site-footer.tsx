import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink py-20 text-white sm:py-32">
      <div className="shell grid gap-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col items-start gap-8">
          <Image
            alt="Regenerate Bob's Cove logo"
            className="h-16 w-16 rounded-full"
            height={64}
            src="/brand/logo-notext.png"
            width={64}
          />
          <h2 className="max-w-xl font-display text-5xl font-normal leading-[1.1] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Let's regenerate Bob's Cove.
          </h2>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:pt-24">
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">Navigation</h3>
            <div className="mt-2 flex flex-col gap-3">
              {siteContent.footer.links.map((item) => (
                <Link
                  className="w-fit text-base text-white/80 transition-colors hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">Social</h3>
            <div className="mt-2 flex flex-col gap-3">
              {siteContent.footer.socialLinks.map((item) => (
                <a
                  className="w-fit text-base text-white/80 transition-colors hover:text-white"
                  href={item.href}
                  key={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-white/50">
              {siteContent.footer.note}
            </p>
          </div>
        </div>
      </div>
      <div className="shell mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center">
        <p>&copy; {new Date().getFullYear()} {siteContent.siteName}</p>
        <p>{siteContent.location}</p>
      </div>
    </footer>
  );
}
