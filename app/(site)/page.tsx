import { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import { WhyWeBuiltKaizen } from "@/components/WhyWeBuiltKaizen";
import BuiltWithStories from "@/components/BuiltWithStories";
import WhyKai from "@/components/WhyKai";
import SecurityHighlights from "@/components/SecurityHighlights";
import Feature from "@/components/Features";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Kaizen Health – Connecting Families, Simplifying Health",
  description:
    "Kaizen Health is a secure, AI-powered platform that helps families organize, track, and share medical records. Stay connected to your loved ones’ health with HIPAA‑compliant tools, personalized insights, and easy access to vital health information.",
  keywords: [
    "Kaizen Health",
    "family health app",
    "HIPAA compliant health records",
    "AI health insights",
    "share medical records securely",
    "caregiver tools",
  ],
  alternates: {
    canonical: "https://www.kaizenhealth.io/",
  },
  openGraph: {
    title: "Kaizen Health – Connecting Families, Simplifying Health",
    description:
      "Organize, understand, and securely share your family’s health information in one place.",
    url: "https://www.kaizenhealth.io/",
    siteName: "Kaizen Health",
    type: "website",
    images: [
      {
        url: "https://www.kaizenhealth.io/images/open-graph/home.png",
        width: 1200,
        height: 630,
        alt: "Kaizen Health app screens and family dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaizen Health – Connecting Families, Simplifying Health",
    description:
      "Secure, AI-powered health records and insights for the whole family.",
    images: ["https://www.kaizenhealth.io/images/open-graph/home.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyWeBuiltKaizen />
      <BuiltWithStories />
      <WhyKai />
      <Feature />
      <SecurityHighlights />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
