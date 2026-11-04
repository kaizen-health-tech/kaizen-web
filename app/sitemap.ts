import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { releases } from "@/data/releases";
import { legalDocs } from "@/data/legalDocs";
import {
  getPostsForPage,
  getSortedPosts,
  getTotalPages,
} from "@/lib/blog";

// Core pages with highest priority
const coreRoutes = [
  "/",
  "/about",
  "/how-it-works",
  "/blog",
];

// Secondary pages
const secondaryRoutes = [
  "/tools",
  "/tools/caregiver-cost-calculator",
  "/tools/doctor-visit-summary",
  "/tools/medical-records-request-tracker",
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
  "/docs/consumer-health",
  "/docs/terms",
  "/docs/eula",
  "/docs/disclaimer",
  "/docs/healthscore",
];

// Blog posts come from blogData (published only, so drafts can never leak into
// the sitemap). These pages are live and linked from articles but are not
// listed in blogData, so they are declared here with their own date.
const unlistedBlogPages = [
  { url: "/blog/family-history/research", lastModified: "2025-01-08" },
];

// Paginated blog index pages, derived from the post count. Page 1 is /blog,
// already listed in coreRoutes.
const blogPaginationRoutes = Array.from(
  { length: getTotalPages() - 1 },
  (_, index) => `/blog/${index + 2}`,
);

// `lastmod` must be the real date a page last changed. Stamping every URL with
// the build time teaches Google to ignore the field, so pages with no
// trustworthy date source simply omit it.
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const toIsoDate = (value?: string): string | undefined => {
  if (!value) {
    return undefined;
  }

  if (ISO_DATE.test(value)) {
    return value;
  }

  // Long-form dates such as "November 3, 2026" (data/legalDocs.ts).
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  const pad = (part: number) => String(part).padStart(2, "0");
  return `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(parsed.getDate())}`;
};

// YYYY-MM-DD strings sort chronologically as plain strings.
const latestDate = (dates: Array<string | undefined>): string | undefined => {
  const valid = dates.filter((date): date is string => Boolean(date)).sort();
  return valid[valid.length - 1];
};

const withDate = (date?: string) => (date ? { lastModified: date } : {});

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedPosts = getSortedPosts();
  const postDates = new Map(
    publishedPosts.map((post) => [post.url, toIsoDate(post.lastModified)]),
  );
  const legalDates = new Map(
    legalDocs.map((doc) => [
      doc.href as string,
      toIsoDate(doc.lastUpdated ?? doc.effectiveDate),
    ]),
  );
  const releaseDates = new Map(
    releases.map((release) => [release.slug, toIsoDate(release.publishedAt)]),
  );

  // Index pages change whenever the content they list changes.
  const indexDates = new Map<string, string | undefined>([
    ["/blog", latestDate([...postDates.values()])],
    ["/updates", latestDate([...releaseDates.values()])],
  ]);

  const corePages: MetadataRoute.Sitemap = coreRoutes.map((route) => ({
    url: absoluteUrl(route),
    ...withDate(indexDates.get(route)),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const secondaryPages: MetadataRoute.Sitemap = secondaryRoutes.map((route) => ({
    url: absoluteUrl(route),
    ...withDate(indexDates.get(route)),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const utilityPages: MetadataRoute.Sitemap = utilityRoutes.map((route) => ({
    url: absoluteUrl(route),
    ...withDate(legalDates.get(route)),
    changeFrequency: "monthly",
    priority: 0.3,
  }));

  const blogPages: MetadataRoute.Sitemap = [
    ...publishedPosts.map((post) => ({
      url: post.url,
      lastModified: toIsoDate(post.lastModified),
    })),
    ...unlistedBlogPages,
  ].map((page) => ({
    url: absoluteUrl(page.url),
    ...withDate(page.lastModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPaginationPages: MetadataRoute.Sitemap = blogPaginationRoutes.map(
    (route) => ({
      url: absoluteUrl(route),
      ...withDate(
        latestDate(
          getPostsForPage(Number(route.split("/").pop())).map((post) =>
            toIsoDate(post.lastModified),
          ),
        ),
      ),
      changeFrequency: "weekly",
      priority: 0.4,
    }),
  );

  const updatePages: MetadataRoute.Sitemap = releases.map((release) => ({
    url: absoluteUrl(`/updates/${release.slug}`),
    ...withDate(releaseDates.get(release.slug)),
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
