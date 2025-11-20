import type { MetadataRoute } from "next";

const SITE_URL = "https://www.kaizenhealth.io";

const staticRoutes = [
  "",
  "/about",
  "/team",
  "/how-it-works",
  "/blog",
  "/updates",
  "/careers",
  "/support",
  "/docs/privacy",
  "/docs/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.6,
  }));
}
