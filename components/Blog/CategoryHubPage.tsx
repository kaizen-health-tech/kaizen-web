import Link from "next/link";
import { Blog } from "@/types/blog";
import { CategoryDef } from "./categories";
import AskKaiPanel from "./AskKaiPanel";
import CategoryTabs from "./CategoryTabs";
import ArticleCard from "./ArticleCard";
import MostReadPanel from "./MostReadPanel";
import AppCtaPanel from "./AppCtaPanel";

interface CategoryHubPageProps {
  category: CategoryDef;
  posts: Blog[];
  mostReadPosts: Blog[];
}

// The 1d category hub: same masthead/sidebar language as the full index (1b),
// scoped to one topic and tinted with that topic's colour.
const CategoryHubPage = ({ category, posts, mostReadPosts }: CategoryHubPageProps) => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-40">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <div className="mb-5.5 flex items-center gap-2.5 text-base text-space">
          <Link href="/blog" className="hover:text-graphite">
            Blog
          </Link>
          <span>/</span>
          <span className="font-semibold text-midnight">{category.label}</span>
        </div>

        <div className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          <div className="max-w-2xl">
            <span
              className="mb-4 inline-flex h-7 w-fit items-center rounded-lg px-3 text-sm font-bold uppercase tracking-wide"
              style={{ background: category.tint, color: category.dark }}
            >
              {category.label}
            </span>
            <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-1px] text-midnight text-pretty sm:text-[58px] sm:leading-[1.04] sm:tracking-[-2px]">
              {category.label}
            </h1>
            <p className="mt-4 text-lg leading-[1.5] text-text-body text-pretty sm:text-[21px]">
              {posts.length === 0
                ? "New articles on this topic are on the way."
                : `${posts.length} article${posts.length === 1 ? "" : "s"} on ${category.label.toLowerCase()}.`}
            </p>
          </div>
          <AskKaiPanel />
        </div>
      </div>

      <CategoryTabs activeKey={category.key} />

      <div className="mx-auto max-w-c-1280 px-4 pt-12 md:px-8 xl:px-0">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-cloud bg-lavender p-10 text-center">
            <p className="text-lg text-text-body">
              {`We haven't published in ${category.label.toLowerCase()} yet — check back soon, or browse everything we've written so far.`}
            </p>
            <Link
              href="/blog"
              className="mt-4 inline-block text-base font-bold text-violet hover:text-violet-hover"
            >
              See all articles →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <ArticleCard post={post} key={post.id} />
              ))}
            </div>

            <aside className="flex flex-col gap-7 lg:sticky lg:top-6">
              <MostReadPanel posts={mostReadPosts} />
              <AppCtaPanel />
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryHubPage;
