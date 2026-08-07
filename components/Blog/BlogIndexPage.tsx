import {
  getFeaturedPosts,
  getMostReadPosts,
  getPostsForPage,
  getSortedPosts,
  getTotalPages,
} from "@/lib/blog";
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
  const totalCount = getSortedPosts().length;

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-40">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <div className="flex flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          <div className="max-w-2xl">
            <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-1px] text-midnight text-pretty sm:text-[58px] sm:leading-[1.04] sm:tracking-[-2px]">
              Practical guides and information for the whole family.
            </h1>
            <p className="mt-4 text-lg leading-[1.5] text-text-body text-pretty sm:text-[21px]">
              Articles on family health, prevention, medical
              records and caregiving — written to be read in one sitting.
            </p>
          </div>
          <AskKaiPanel />
        </div>
      </div>

      <CategoryTabs />

      {pageNumber === 1 && <FeaturedGrid posts={getFeaturedPosts()} />}

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <h3 className="mb-6 text-[28px] font-bold leading-[1.15] tracking-[-.6px] text-midnight">
              Recent articles
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <ArticleCard post={post} key={post.id} />
              ))}
            </div>
            <BlogPagination currentPage={pageNumber} totalPages={totalPages} />
          </div>

          <aside className="flex flex-col gap-7 lg:sticky lg:top-6">
            <MostReadPanel posts={getMostReadPosts()} />
            <AppCtaPanel />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogIndexPage;
