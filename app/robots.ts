import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Invite links carry a credential in the path.
        disallow: ["/join/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
