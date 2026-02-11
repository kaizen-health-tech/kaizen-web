import type { Metadata } from "next";
import Link from "next/link";
import BlogData from "@/components/Blog/blogData";
import { getSortedReleases } from "@/data/releases";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "HTML Sitemap",
  description:
    "Use this HTML sitemap to quickly access core Kaizen Health pages, legal documentation, latest release notes, and family health education resources.",
  path: "/html-sitemap",
});

const coreLinks = [
  { href: "/", label: "Family health platform home page" },
  { href: "/about", label: "About Kaizen Health mission and values" },
  { href: "/team", label: "Meet the Kaizen Health leadership team" },
  { href: "/how-it-works", label: "How Kaizen works for families" },
  { href: "/chat", label: "Chat with Kai AI health assistant" },
  { href: "/support", label: "Support center and contact options" },
  { href: "/careers", label: "Careers at Kaizen Health" },
  { href: "/careers/open-roles", label: "Current open roles and job details" },
  { href: "/updates", label: "Product updates and release timeline" },
  { href: "/blog", label: "Family health blog index" },
];

const legalLinks = [
  { href: "/docs", label: "Legal and policy documentation hub" },
  { href: "/docs/privacy", label: "Privacy policy for data handling" },
  { href: "/docs/terms", label: "Terms and conditions of service" },
  { href: "/docs/eula", label: "End user license agreement details" },
  { href: "/docs/disclaimer", label: "Medical disclaimer and guidance limits" },
  { href: "/docs/healthscore", label: "Health score methodology references" },
];

const blogLinks = [...BlogData]
  .sort((a, b) => b.id - a.id)
  .map((post) => ({
    href: post.url,
    label: post.title,
  }));

const releaseLinks = getSortedReleases().map((release) => ({
  href: `/updates/${release.slug}`,
  label: `${release.version} release notes: ${release.title}`,
}));

const LinkList = ({ links }: { links: { href: string; label: string }[] }) => (
  <ul className="space-y-2">
    {links.map((link) => (
      <li key={link.href}>
        <Link href={link.href} className="text-primary hover:text-primaryho">
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default function HtmlSitemapPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-4 py-28 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
          HTML Sitemap
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-200">
          Browse every important Kaizen Health page from one location.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Core Pages
        </h2>
        <LinkList links={coreLinks} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Legal and Policy Pages
        </h2>
        <LinkList links={legalLinks} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Blog Articles
        </h2>
        <LinkList links={blogLinks} />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Release Notes
        </h2>
        <LinkList links={releaseLinks} />
      </section>
    </main>
  );
}
