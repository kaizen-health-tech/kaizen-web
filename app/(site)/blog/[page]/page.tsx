import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";

const POSTS_PER_PAGE = 6;

interface BlogPageProps {
  params: Promise<{
    page: string;
  }>;
}

export const generateMetadata = async ({
  params,
}: BlogPageProps): Promise<Metadata> => {
  const { page } = await params;
  const pageNumber = Math.max(Number.parseInt(page || "1", 10) || 1, 1);

  return createPageMetadata({
    primaryKeyword: `Family Health Blog Page ${pageNumber}`,
    description:
      "Explore practical family health guidance, research-backed articles, and caregiving insights to stay informed and confident in everyday care decisions.",
    path: `/blog/${pageNumber}`,
    image: "/images/open-graph/blog.png",
  });
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const { page } = await params;
  const pageNumber = parseInt(page || "1", 10);
  const start = (pageNumber - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const paginatedPosts = [...BlogData]
    .sort((a, b) => b.id - a.id)
    .slice(start, end);

  if (pageNumber < 1 || paginatedPosts.length === 0) {
    notFound();
  }

  const totalPages = Math.ceil(BlogData.length / POSTS_PER_PAGE);

  return (
    <>
      {/* Blog Hero */}
      <section className="relative overflow-hidden py-24">
        {/* Background squiggle */}
        <Image
          src="/images/hero/hero_blog.svg"
          alt=""
          width={1600}
          height={800}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center mt-20">
          <h1 className="text-4xl font-extrabold leading-tight text-black md:text-6xl">
            Insights for Better Family Health
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-800">
            Explore practical tips, research‑backed insights, and real stories
            to help you care for yourself and your loved ones with confidence
            and clarity.
          </p>
        </div>
      </section>
      <section className="py-10 lg:py-8 xl:py-6">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {paginatedPosts.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-4">
            {pageNumber > 1 && (
              <Link
                href={`/blog/${pageNumber - 1}`}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Previous
              </Link>
            )}
            {pageNumber < totalPages && (
              <Link
                href={`/blog/${pageNumber + 1}`}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
