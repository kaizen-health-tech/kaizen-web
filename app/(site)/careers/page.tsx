import Careers from "./Careers";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  primaryKeyword: "Careers",
  description:
    "Explore careers at Kaizen Health and help build secure, family-first healthcare tools that improve care coordination, record sharing, and patient understanding.",
  path: "/careers",
});

export default function CareersPage() {
  return <Careers />;
}
