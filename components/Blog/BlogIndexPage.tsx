import {
  getFeaturedPosts,
  getMostReadPosts,
  getPostsForPage,
  getTotalPages,
} from "@/lib/blog";
import { PageHero } from "@/components/Common/PageHero";
import AskKaiPanel from "./AskKaiPanel";
import CategoryTabs from "./CategoryTabs";
import FeaturedGrid from "./FeaturedGrid";
import ArticleCard from "./ArticleCard";
import MostReadPanel from "./MostReadPanel";
import AppCtaPanel from "./AppCtaPanel";
import { BlogPagination } from "./BlogPagination";

interface BlogIndexPageProps {
  pageNumber: number;
}

const BlogIndexPage = ({ pageNumber }: BlogIndexPageProps) => {
  const totalPages = getTotalPages();
  const posts = getPostsForPage(pageNumber);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        align="left"
        title="Practical guides and information for the whole family."
        description="Articles on family health, prevention, medical records and caregiving — written to be read in one sitting."
        aside={<AskKaiPanel />}
        containerClassName="max-w-c-1280"
      />

      <section className="pb-20 lg:pb-25 xl:pb-30">
        <CategoryTabs />

        {pageNumber === 1 && <FeaturedGrid posts={getFeaturedPosts()} />}

        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <h3 className="mb-6 text-[28px] font-semibold leading-[1.15] tracking-[-.6px] text-midnight">
                Recent articles
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {posts.map((post) => (
                  <ArticleCard post={post} key={post.id} />
                ))}
              </div>
              <BlogPagination
                currentPage={pageNumber}
                totalPages={totalPages}
              />
            </div>

            <aside className="flex flex-col gap-7 lg:sticky lg:top-6">
              <MostReadPanel posts={getMostReadPosts()} />
              <AppCtaPanel />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndexPage;
