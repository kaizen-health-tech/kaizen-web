import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { getCategory } from "./categories";

interface ArticleCardProps {
  post: Blog;
}

// Recent-articles grid card (1b): deliberately unframed — no border, no
// shadow, no fill — in contrast to the filled featured cards above it.
const ArticleCard = ({ post }: ArticleCardProps) => {
  const category = post.categoryKey ? getCategory(post.categoryKey) : null;

  return (
    <Link href={post.url} className="group flex flex-col gap-3.5">
      {post.mainImage && (
        <div className="relative h-47.5 w-full overflow-hidden rounded-[18px]">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center transition duration-300 group-hover:scale-105"
          />
        </div>
      )}
      {category && (
        <span
          className="inline-flex h-6.5 w-fit items-center rounded-lg px-2.5 text-xs font-bold uppercase tracking-wide"
          style={{ background: category.tint, color: category.dark }}
        >
          {category.label}
        </span>
      )}
      <h4 className="text-2xl font-bold leading-[1.2] tracking-[-.4px] text-midnight text-pretty transition duration-150 group-hover:text-violet">
        {post.title}
      </h4>
      {post.metadata && (
        <p className="text-[17px] leading-[1.55] text-text-body text-pretty">{post.metadata}</p>
      )}
      <span className="text-sm text-space">
        {post.author?.name}
        {post.author?.name && post.readTime ? " · " : ""}
        {post.readTime}
      </span>
    </Link>
  );
};

export default ArticleCard;
