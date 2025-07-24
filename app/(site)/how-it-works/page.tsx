import type { Metadata } from "next";
import HowItWorksClient from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "How Kaizen Works | Kaizen Health",
  description:
    "Learn how Kaizen Health helps families securely upload, organize, and share health records while getting AI‑powered insights.",
  alternates: { canonical: "https://www.kaizenhealth.io/how-it-works" },
  openGraph: {
    title: "How Kaizen Works | Kaizen Health",
    description:
      "Upload once. Share easily. Support better care together with Kaizen Health.",
    url: "https://www.kaizenhealth.io/how-it-works",
    siteName: "Kaizen Health",
    type: "website",
    images: [
      {
        url: "https://www.kaizenhealth.io/images/open-graph/howitworks.png",
        width: 1200,
        height: 630,
        alt: "How Kaizen Works – Kaizen Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Kaizen Works | Kaizen Health",
    description:
      "See how Kaizen Health lets families manage records and get AI‑powered insights in one secure place.",
    images: ["https://www.kaizenhealth.io/images/open-graph/howitworks.png"],
  },
};

export default function HowItWorks() {
  return <HowItWorksClient />;
}
