import type { CategoryKey } from "@/components/Blog/categories";

export type Author = {
  name: string;
  image: string;
  bio?: string;
  role?: string;
  id?: number | string;
  ref?: number | string;
};

export type Blog = {
  id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  url: string;
  /** One of the 7 canonical blog categories, used for card tinting. */
  categoryKey?: CategoryKey;
  /** Editorially chosen for the 1b featured block, not "most recent". */
  featured?: boolean;
  readTime?: string;
};
