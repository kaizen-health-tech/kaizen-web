import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";
import { getMostReadPosts, getPostsByCategory } from "@/lib/blog";
import { CATEGORY_LIST, CategoryKey, categoryHref, getCategory } from "@/components/Blog/categories";
import CategoryHubPage from "@/components/Blog/CategoryHubPage";

interface CategoryPageProps {
  params: Promise<{
    key: string;
  }>;
}

const isCategoryKey = (value: string): value is CategoryKey =>
  CATEGORY_LIST.some((category) => category.key === value);

export const generateStaticParams = () =>
  CATEGORY_LIST.map((category) => ({ key: category.key }));

export const generateMetadata = async ({
  params,
}: CategoryPageProps): Promise<Metadata> => {
  const { key } = await params;
  if (!isCategoryKey(key)) {
    return {};
  }

  const category = getCategory(key);

  return createPageMetadata({
    primaryKeyword: `${category.label} Articles`,
    description: `Read our ${category.label.toLowerCase()} articles — practical, doctor-reviewed guidance on family health, prevention, and care.`,
    path: categoryHref(key),
    keywords: [category.label],
  });
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { key } = await params;

  if (!isCategoryKey(key)) {
    notFound();
  }

  const category = getCategory(key);
  const posts = getPostsByCategory(key);

  return (
    <CategoryHubPage category={category} posts={posts} mostReadPosts={getMostReadPosts()} />
  );
};

export default CategoryPage;
