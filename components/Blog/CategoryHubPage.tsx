import Link from "next/link";
import { Blog } from "@/types/blog";
import { PageHero } from "@/components/Common/PageHero";
import { CategoryDef, categoryHref } from "./categories";
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
// scoped to one topic.
const CategoryHubPage = ({
  category,
  posts,
  mostReadPosts,
}: CategoryHubPageProps) => {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        align="left"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: category.label, url: categoryHref(category.key) },
        ]}
        title={category.label}
        description={
          posts.length === 0
            ? "New articles on this topic are on the way."
            : `${posts.length} article${posts.length === 1 ? "" : "s"} on ${category.label.toLowerCase()}.`
        }
        aside={<AskKaiPanel />}
        containerClassName="max-w-c-1280"
      />

      <section className="pb-20 lg:pb-25 xl:pb-30">
        <CategoryTabs activeKey={category.key} />

        <div className="mx-auto max-w-c-1280 px-4 pt-12 md:px-8 xl:px-0">
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-cloud bg-lavender p-10 text-center">
              <p className="text-lg text-text-body">
                {`We haven't published in ${category.label.toLowerCase()} yet — check back soon, or browse everything we've written so far.`}
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-block text-base font-semibold text-violet hover:text-violet-hover"
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
    </>
  );
};

export default CategoryHubPage;
