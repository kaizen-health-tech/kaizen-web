import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { releases } from "@/data/releases";
import { getTotalPages } from "@/lib/blog";

// Core pages with highest priority
const coreRoutes = [
  "/",
  "/about",
  "/how-it-works",
  "/blog",
];

// Secondary pages
const secondaryRoutes = [
  "/team",
  "/updates",
  "/careers",
  "/careers/open-roles",
  "/support",
  "/contact",
];

// Utility / legal pages (lower priority)
const utilityRoutes = [
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
  "/blog/heart/genetic-risk-score-heart-disease",
  "/blog/health/medicare-glp1-weight-loss-coverage",
  "/blog/caregiving/grieving-the-years-lost-to-caregiving",
  "/blog/health/kidney-transplant-evaluation-gap",
  "/blog/caregiving/retirement-cost-of-caregiving",
];

// Paginated blog index pages, derived from the post count. Page 1 is /blog,
// already listed in coreRoutes.
const blogPaginationRoutes = Array.from(
  { length: getTotalPages() - 1 },
  (_, index) => `/blog/${index + 2}`,
);

const updateRoutes = releases.map((release) => `/updates/${release.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = coreRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const secondaryPages: MetadataRoute.Sitemap = secondaryRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const utilityPages: MetadataRoute.Sitemap = utilityRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.3,
  }));

  const blogPages: MetadataRoute.Sitemap = blogRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPaginationPages: MetadataRoute.Sitemap = blogPaginationRoutes.map(
    (route) => ({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4,
    }),
  );

  const updatePages: MetadataRoute.Sitemap = updateRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...corePages,
    ...secondaryPages,
    ...utilityPages,
    ...blogPages,
    ...blogPaginationPages,
    ...updatePages,
  ];
}
