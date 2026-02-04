import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "../globals.css";
import SiteShell from "./site-shell";

const inter = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.kaizenhealth.io";

const NAV_LINKS = [
  { name: "About", url: `${SITE_URL}/about` },
  { name: "Our Team", url: `${SITE_URL}/team` },
  { name: "How It Works", url: `${SITE_URL}/how-it-works` },
  { name: "Blog", url: `${SITE_URL}/blog` },
  { name: "Updates", url: `${SITE_URL}/updates` },
  { name: "Support", url: `${SITE_URL}/support` },
  { name: "Careers", url: `${SITE_URL}/careers` },
  { name: "Privacy Policy", url: `${SITE_URL}/docs/privacy` },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Kaizen Health",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo/kaizen-logo.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://twitter.com/kaizenhealthio",
        "https://www.facebook.com/profile.php?id=61562247803536",
        "https://instagram.com/kaizenhealthio",
        "https://www.linkedin.com/company/kaizen-health-io",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@kaizenhealth.io",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: "Kaizen Health",
      url: SITE_URL,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    ...NAV_LINKS.map((link) => ({
      "@type": "SiteNavigationElement",
      name: link.name,
      url: link.url,
    })),
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kaizen Health | Connecting Families, Simplifying Health",
    template: "%s | Kaizen Health",
  },
  description:
    "Kaizen Health keeps families organized around medical information, care plans, and health updates—so everyone can feel confident and informed.",
  keywords: [
    "family health app",
    "medical record organizer",
    "care coordination",
    "health tracking",
    "Kaizen Health",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Kaizen Health",
    title: "Kaizen Health | Connecting Families, Simplifying Health",
    description:
      "A secure hub for families to organize medical information, coordinate care, and stay connected.",
    images: [
      {
        url: `${SITE_URL}/images/logo/kaizen-logo.png`,
        width: 1200,
        height: 630,
        alt: "Kaizen Health logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaizen Health | Connecting Families, Simplifying Health",
    description:
      "Organize medical data, collaborate with relatives, and simplify every step of family health management.",
    images: [`${SITE_URL}/images/logo/kaizen-logo.png`],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`dark:bg-black ${inter.className} bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(245,246,252,1)]`}
      >
        <GoogleAnalytics gaId="G-PN88Z9QS4E" />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
