import BlogData from "@/components/Blog/blogData";
import type { Blog } from "@/types/blog";

export const POSTS_PER_PAGE = 6;

// Posts are listed newest first. `id` is assigned in publication order in
// blogData, so sorting by id descending puts the most recent post at the top of
// page 1. When a post carries publishedAt, that wins, so backdating or
// reordering a post does not require renumbering every id after it.
export const getSortedPosts = (): Blog[] =>
  [...BlogData].sort((a, b) => {
    if (a.publishedAt && b.publishedAt) {
      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    }
    return b.id - a.id;
  });

// The 1b featured block is editorially chosen (a `featured` flag in
// blogData), not "most recent" — kept out of the recent-articles pool below
// so the same post doesn't appear twice on the index. Order follows blogData
// authoring order (first = the big card) rather than recency.
export const getFeaturedPosts = (): Blog[] =>
  BlogData.filter((post) => post.featured);

export const getRecentPosts = (): Blog[] =>
  getSortedPosts().filter((post) => !post.featured);

export const getTotalPages = (): number =>
  Math.max(1, Math.ceil(getRecentPosts().length / POSTS_PER_PAGE));

export const getPostsForPage = (pageNumber: number): Blog[] => {
  const start = (pageNumber - 1) * POSTS_PER_PAGE;
  return getRecentPosts().slice(start, start + POSTS_PER_PAGE);
};

// Page 1 lives at /blog, not /blog/1, which redirects.
export const blogPageHref = (pageNumber: number): string =>
  pageNumber <= 1 ? "/blog" : `/blog/${pageNumber}`;

// "Most read" is analytics-driven in the real design; until that pipeline
// exists, surface a fixed editorial selection rather than fabricated titles.
export const getMostReadPosts = (): Blog[] => {
  const bySlug = (url: string) => getSortedPosts().find((post) => post.url === url);
  return [
    bySlug("/blog/family-history/organizing-medical-records"),
    bySlug("/blog/caregiving/grieving-the-years-lost-to-caregiving"),
    bySlug("/blog/heart/genetic-risk-score-heart-disease"),
    bySlug("/blog/health/creatine"),
  ].filter((post): post is Blog => Boolean(post));
};

// "Keep reading" on an article page: same category first, then most recent,
// excluding the article itself.
export const getRelatedPosts = (
  currentUrl: string,
  categoryKey?: Blog["categoryKey"],
  count = 3,
): Blog[] => {
  const pool = getSortedPosts().filter((post) => post.url !== currentUrl);
  const sameCategory = categoryKey
    ? pool.filter((post) => post.categoryKey === categoryKey)
    : [];
  const rest = pool.filter((post) => !sameCategory.includes(post));
  return [...sameCategory, ...rest].slice(0, count);
};
