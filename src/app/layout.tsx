import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/content/site";

import "./globals.css";

const displayFont = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-playfair",
});

const bodyFont = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
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
  themeColor: "#f9f9f6",
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
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink focus:outline-none focus:ring-2 focus:ring-ink"
          href="#main-content"
        >
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
