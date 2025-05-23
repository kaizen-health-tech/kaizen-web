export type Author = {
  name: string;
  image: string;
  bio?: string;
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
};
