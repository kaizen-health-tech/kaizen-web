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

import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
} from "@/components/Contact/ContactDetails";

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
  { name: "Contact Us", url: absoluteUrl("/contact") },
  { name: "Careers", url: absoluteUrl("/careers") },
  { name: "Privacy Policy", url: absoluteUrl("/docs/privacy") },
  { name: "Terms & Conditions", url: absoluteUrl("/docs/terms") },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: COMPANY_NAME,
  alternateName: "Kaizen Health App",
  url: SITE_URL,
  logo: absoluteUrl("/images/logo/kaizen-logo.png"),
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    ...CONTACT_ADDRESS,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: CONTACT_EMAIL,
    url: absoluteUrl("/contact"),
    availableLanguage: "English",
  },
  // Every profile a person could land on while trying to verify "is this the
  // real Kaizen Health" should be listed here — this @id is what Google's
  // entity graph resolves to when it sees these same URLs cited elsewhere
  // (App Store, social bios, press). Keep in sync as new profiles go live
  // (Crunchbase, G2, Product Hunt, etc. — see docs/brand-serp-seo-strategy.md).
  sameAs: [
    "https://twitter.com/kaizenhealthio",
    "https://linkedin.com/company/kaizen-health-io",
    "https://instagram.com/kaizenhealthio",
    "https://www.facebook.com/profile.php?id=61562247803536",
    "https://apps.apple.com/us/app/kaizen-health-family/id6472772538",
    "https://play.google.com/store/apps/details?id=io.kaizenhealth.app",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: COMPANY_NAME,
  alternateName: "Kaizen Health App",
  url: SITE_URL,
  publisher: {
    "@id": absoluteUrl("/#organization"),
  },
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
  // No `alternates.canonical` here on purpose: a layout-level canonical is
  // inherited by every route that doesn't set its own, which would silently
  // declare those pages duplicates of the homepage. Each page supplies its own
  // self-referencing canonical via createPageMetadata().
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
