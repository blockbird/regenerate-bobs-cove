import type { Metadata, Viewport } from "next";
import { Manrope, Public_Sans } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site";

import "./globals.css";

const displayFont = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-manrope",
});

const bodyFont = Public_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: {
    default: siteContent.siteName,
    template: `%s | ${siteContent.siteName}`,
  },
  description: siteContent.siteDescription,
  applicationName: siteContent.siteName,
  category: "environment",
  icons: {
    apple: "/brand/RBCround.png",
    icon: "/brand/RBCround.png",
    shortcut: "/brand/RBCround.png",
  },
  openGraph: {
    description: siteContent.siteDescription,
    locale: "en_NZ",
    siteName: siteContent.siteName,
    title: siteContent.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description: siteContent.siteDescription,
    title: siteContent.siteName,
  },
};

export const viewport: Viewport = {
  themeColor: "#045459",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-deep focus:outline-none focus:ring-2 focus:ring-deep"
          href="#main-content"
        >
          Skip to content
        </a>
        <div className="min-h-screen">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
