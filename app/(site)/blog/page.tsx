import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import BlogIndexPage from "@/components/Blog/BlogIndexPage";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Family Health Blog",
  description:
    "Browse the Kaizen Health blog for caregiver resources, prevention insights, and practical guidance on organizing family records and care decisions.",
  path: "/blog",
  image: "/images/open-graph/blog.png",
});

export default function BlogIndexRoute() {
  return <BlogIndexPage pageNumber={1} />;
}
