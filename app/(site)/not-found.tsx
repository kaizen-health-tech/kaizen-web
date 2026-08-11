import { Metadata } from "next";
import NotFoundContent from "@/components/NotFound";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Page Not Found",
  description:
    "The page you requested is unavailable. Return to Kaizen Health to continue exploring secure family health tools, records, and support resources.",
  path: "/404",
  noIndex: true,
});

const NotFound = () => <NotFoundContent />;

export default NotFound;
