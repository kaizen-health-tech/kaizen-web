import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import UserStories from "components/UserStories";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import HowItWorks from "@/components/HowItWorks";

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
      <HowItWorks />
      {/*<Feature />*/}
      <UserStories />
      {/*<FeaturesTab />*/}
      {/*<FunFact />*/}
      {/*<Integration />*/}
      {/*<CTA />*/}
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      {/*<Blog />*/}
    </main>
  );
}
