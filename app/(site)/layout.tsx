import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  COMPANY_NAME,
  SITE_URL,
  absoluteUrl,
  buildTitle,
  normalizeDescription,
} from "@/lib/seo";

import "../globals.css";
import SiteShell from "./site-shell";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const NAV_LINKS = [
  { name: "About Kaizen Health", url: absoluteUrl("/about") },
  { name: "Our Team", url: absoluteUrl("/team") },
  { name: "How Kaizen Works", url: absoluteUrl("/how-it-works") },
  { name: "Family Health Blog", url: absoluteUrl("/blog") },
  { name: "Product Updates", url: absoluteUrl("/updates") },
  { name: "Support Center", url: absoluteUrl("/support") },
  { name: "Careers", url: absoluteUrl("/careers") },
  { name: "Privacy Policy", url: absoluteUrl("/docs/privacy") },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/images/logo/kaizen-logo.png"),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  url: SITE_URL,
};

const navigationSchema = {
  "@context": "https://schema.org",
  "@graph": NAV_LINKS.map((link) => ({
    "@type": "SiteNavigationElement",
    name: link.name,
    url: link.url,
  })),
};

const homePrimaryKeyword = "Family Health Management Platform";
const homeMetaDescription = normalizeDescription(
  "Kaizen Health gives families one secure place to organize medical records, share updates, and use AI support to stay prepared for every care decision.",
  homePrimaryKeyword,
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: buildTitle(homePrimaryKeyword),
  description: homeMetaDescription,
  keywords: [
    "family health app",
    "medical record organizer",
    "care coordination",
    "health tracking",
    COMPANY_NAME,
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: buildTitle(homePrimaryKeyword),
    description: homeMetaDescription,
    images: [
      {
        url: absoluteUrl("/images/open-graph/home.png"),
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} family health platform`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: buildTitle(homePrimaryKeyword),
    description: homeMetaDescription,
    images: [absoluteUrl("/images/open-graph/home.png")],
    site: "@kaizenhealthio",
    creator: "@kaizenhealthio",
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
        />
      </head>
      <body
        className={`dark:bg-black ${sourceSans.className} bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(245,246,252,1)]`}
      >
        <GoogleAnalytics gaId="G-PN88Z9QS4E" />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
