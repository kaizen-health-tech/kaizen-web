import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { SITE_URL } from "@/lib/seo";

import "../globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// A second root layout, alongside app/(site)/layout.tsx. Embeddable widgets
// render on someone else's page, so they get no header, footer, analytics, or
// site chrome — just the tool.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // The canonical version of every embed is its page under /tools. Indexing the
  // frame would compete with it for the same query.
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // No `dark` class is ever applied here: dark mode is class-based
    // (see globals.css) and the host page controls the surrounding design, so
    // the embed commits to the light palette rather than guessing.
    <html lang="en">
      <body className={`${sourceSans.className} bg-transparent`}>
        {children}
      </body>
    </html>
  );
}
