import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { SITE_URL } from "@/lib/seo";

import "../globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-source-sans",
});

// A third root layout, alongside app/(site)/layout.tsx and app/(embed)/layout.tsx.
// The join URL carries a credential (the invite code), so this page must not
// load analytics, which would record the full URL, and must not send a referrer
// to the store pages it links to. It also gets no header or footer: the page
// has one job.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body
        className={`${sourceSans.className} bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(245,246,252,1)]`}
      >
        {children}
      </body>
    </html>
  );
}
