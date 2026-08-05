import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { getTotalPages } from "@/lib/blog";
import BlogIndexPage from "@/components/Blog/BlogIndexPage";

interface BlogPageProps {
  params: Promise<{
    page: string;
  }>;
}

// Prerender every page the current post count supports. Page 1 is served by
// /blog, so this starts at 2.
export const generateStaticParams = () =>
  Array.from({ length: getTotalPages() - 1 }, (_, index) => ({
    page: String(index + 2),
  }));

export const generateMetadata = async ({
  params,
}: BlogPageProps): Promise<Metadata> => {
  const { page } = await params;
  const pageNumber = Math.max(Number.parseInt(page || "1", 10) || 1, 1);

  if (pageNumber === 1) {
    return {};
  }

  return createPageMetadata({
    primaryKeyword: `Family Health Blog - Page ${pageNumber}`,
    description:
      "Read practical family health guides on prevention, caregiving, medical records, and everyday care decisions.",
    path: `/blog/${pageNumber}`,
    image: "/images/open-graph/blog.png",
  });
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const { page } = await params;
  const pageNumber = Number.parseInt(page, 10);

  if (pageNumber === 1) {
    redirect("/blog");
  }

  const totalPages = getTotalPages();

  if (!Number.isInteger(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
    notFound();
  }

  return <BlogIndexPage pageNumber={pageNumber} />;
};

export default BlogPage;
