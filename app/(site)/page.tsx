import { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import { WhyWeBuiltKaizen } from "@/components/WhyWeBuiltKaizen";
import BuiltWithStories from "@/components/BuiltWithStories";
import SecurityHighlights from "@/components/SecurityHighlights";
import Feature from "@/components/Features";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Kaizen Health - Home",
  description:
    "Connecting Families, Simplifying Health. Kaizen Health is a family-focused, AI-powered healthcare platform designed to simplify health management. Track vitals, securely store medical records, and monitor your well-being with our proprietary health scoring system. Stay connected to your loved ones’ health while ensuring HIPAA-compliant data security. ",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/*<Brands />*/}
      {/*<HowItWorks />*/}
      <WhyWeBuiltKaizen />
      <BuiltWithStories />
      {/*<WhyKaizen />*/}
      <Feature />
      <SecurityHighlights />
      <Pricing />
      {/*<UserStories />*/}
      {/*<FeaturesTab />*/}
      {/*<FunFact />*/}
      {/*<Integration />*/}
      <FAQ />
      <CTA />
      {/*<Testimonial />*/}
      {/*<Contact />*/}
      {/*<Blog />*/}
    </main>
  );
}
