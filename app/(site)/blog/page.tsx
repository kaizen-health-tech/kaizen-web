import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Family Health Blog",
  description:
    "Browse the Kaizen Health blog for caregiver resources, prevention insights, and practical guidance on organizing family records and care decisions.",
  path: "/blog",
  image: "/images/open-graph/blog.png",
});

export default function BlogIndexPage() {
  redirect("/blog/1");
}
