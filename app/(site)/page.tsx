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
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Family Health Management App",
  description:
    "Kaizen Health helps families organize records, share secure updates, and use AI guidance to stay prepared for appointments and care decisions together.",
  path: "/",
  image: "/images/open-graph/home.png",
  keywords: [
    "family health app",
    "HIPAA compliant health records",
    "AI health insights",
    "share medical records securely",
    "caregiver tools",
  ],
});

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="content-visibility-auto">
        <WhyWeBuiltKaizen />
      </div>
      <div className="content-visibility-auto">
        <BuiltWithStories />
      </div>
      <div className="content-visibility-auto">
        <WhyKai />
      </div>
      <div className="content-visibility-auto">
        <Feature />
      </div>
      <div className="content-visibility-auto">
        <SecurityHighlights />
      </div>
      <div className="content-visibility-auto">
        <Pricing />
      </div>
      <div className="content-visibility-auto">
        <FAQ />
      </div>
      <div className="content-visibility-auto">
        <CTA />
      </div>
    </main>
  );
}
