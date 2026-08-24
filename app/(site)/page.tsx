import { Metadata } from "next";
import AudienceCarousel from "@/components/Home/AudienceCarousel";
import ClosingCTA from "@/components/Home/ClosingCTA";
import FamilyStory from "@/components/Home/FamilyStory";
import HomeFAQ from "@/components/Home/HomeFAQ";
import HomeHero from "@/components/Home/HomeHero";
import HowItWorksSteps from "@/components/Home/HowItWorksSteps";
import QuestionMarquee from "@/components/Home/QuestionMarquee";
import StatementBand from "@/components/Home/StatementBand";
import TrustStrip from "@/components/Home/TrustStrip";
import VoicesCarousel from "@/components/Home/VoicesCarousel";
import { MobileApplicationSchema } from "@/components/Schema";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Organize Your Family's Medical Records | Kaizen Health",
  primaryKeyword: "Family Health Management App",
  description:
    "Keep family medical records organized, share selected information, and ask Kai questions before appointments with Kaizen Health.",
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
    <main className="bg-lavender">
      <MobileApplicationSchema />
      <HomeHero />
      <TrustStrip />
      <AudienceCarousel />
      <StatementBand />
      <HowItWorksSteps />
      <QuestionMarquee />
      <FamilyStory />
      <VoicesCarousel />
      <HomeFAQ />
      <ClosingCTA />
    </main>
  );
}
