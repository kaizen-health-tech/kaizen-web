import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaizen Health Support | Contact & Help Center",
  description:
    "Need help with Kaizen Health? Get in touch with our support team for questions about family accounts, HIPAA‑secure document storage, AI insights, billing, and more.",
  keywords: [
    "Kaizen Health support",
    "family health app help",
    "HIPAA secure healthcare platform",
    "contact Kaizen Health",
    "health record management assistance",
  ],
  alternates: {
    canonical: "https://www.kaizenhealth.io/support",
  },
  openGraph: {
    title: "Kaizen Health Support | Contact & Help Center",
    description:
      "We’re here to help you simplify family healthcare. Reach out for quick answers and expert guidance.",
    url: "https://www.kaizenhealth.io/support",
    siteName: "Kaizen Health",
    type: "website",
    images: [
      {
        url: "https://www.kaizenhealth.io/images/opengraph/support-og.png",
        width: 1200,
        height: 630,
        alt: "Kaizen Health Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaizen Health Support | Contact & Help Center",
    description:
      "Need assistance with Kaizen Health? Our team is ready to support you every step of the way.",
    images: ["https://www.kaizenhealth.io/images/opengraph/support-og.png"],
  },
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
