import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { releases } from "@/data/releases";

const staticRoutes = [
  "/",
  "/about",
  "/team",
  "/how-it-works",
  "/blog",
  "/blog/1",
  "/updates",
  "/careers",
  "/careers/open-roles",
  "/support",
  "/chat",
  "/html-sitemap",
  "/docs",
  "/docs/privacy",
  "/docs/terms",
  "/docs/eula",
  "/docs/disclaimer",
  "/docs/healthscore",
];

// All blog post routes
const blogRoutes = [
  "/blog/family-history",
  "/blog/family-history/caregiver-guide-aging-parents",
  "/blog/family-history/documenting-family-health",
  "/blog/family-history/organizing-medical-records",
  "/blog/family-history/research",
  "/blog/family-health-monitoring",
  "/blog/health/creatine",
  "/blog/health/sunshine",
  "/blog/cancer/colorectal-cancer-risk",
  "/blog/diabetes-magnesium-vitamin-d",
  "/blog/pregnancy-genetic",
];

const updateRoutes = releases.map((release) => `/updates/${release.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: (route === "/" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const blogPages = blogRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const updatePages = updateRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...blogPages, ...updatePages];
}
