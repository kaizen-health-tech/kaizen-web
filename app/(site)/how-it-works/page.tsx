import type { Metadata } from "next";
import HowItWorksClient from "@/components/HowItWorks";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "How Family Health Sharing Works",
  description:
    "See how Kaizen Health helps families upload records once, share updates securely, and get AI guidance that makes appointments and care planning easier.",
  path: "/how-it-works",
  image: "/images/open-graph/howitworks.png",
});

export default function HowItWorks() {
  return <HowItWorksClient />;
}
