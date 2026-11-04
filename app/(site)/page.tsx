import { Metadata } from "next";
import Hero from "@/components/Hero";
import Caregivers from "@/components/Caregivers";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import RecordsValue from "@/components/RecordsValue";
import WhyKai from "@/components/WhyKai";
import Journey from "@/components/Journey";
import CTA from "@/components/CTA";
import { MobileApplicationSchema } from "@/components/Schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kaizen Health: The healthcare home for your family",
  primaryKeyword: "Family Health Management App",
  description:
    "Kaizen Health is a family health app that keeps medical records in one place, shares selected information securely, and lets you ask Kai before appointments.",
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
      <MobileApplicationSchema />
      <Hero />
      <Caregivers />
      <div className="content-visibility-auto">
        <RecordsValue />
      </div>
      <div className="content-visibility-auto">
        <WhyKai />
      </div>
      <Journey />
      <div className="content-visibility-auto">
        <Pricing />
      </div>
      <div className="content-visibility-auto">
        <FAQ />
      </div>
      <div className="content-visibility-auto">
        <CTA variant="home" />
      </div>
    </main>
  );
}
