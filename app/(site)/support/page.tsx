import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Family Health App Support",
  description:
    "Contact Kaizen Health support for help with accounts, billing, document access, and AI features so your family can keep care information organized.",
  path: "/support",
  image: "/images/open-graph/support.png",
  keywords: [
    "Kaizen Health support",
    "family health app help",
    "HIPAA secure healthcare platform",
    "contact Kaizen Health",
    "health record management assistance",
  ],
});

const SupportPage = () => {
  return (
    <div id="support">
      <Contact />
    </div>
  );
};

export default SupportPage;
