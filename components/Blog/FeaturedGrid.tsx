import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { getCategory } from "./categories";
import Avatar from "./Avatar";

interface FeaturedGridProps {
  posts: Blog[];
}

const FeaturedGrid = ({ posts }: FeaturedGridProps) => {
  const [big, ...small] = posts;
  if (!big) return null;

  const bigCategory = big.categoryKey ? getCategory(big.categoryKey) : null;

  return (
    <div className="mx-auto grid max-w-c-1280 grid-cols-1 gap-7 px-4 pt-10 md:px-8 lg:grid-cols-2 xl:px-0">
      <Link
        href={big.url}
        className="group flex flex-col gap-5 rounded-3xl p-8"
        style={{ background: bigCategory?.tint ?? "#F5F7FC" }}
      >
        <div className="flex items-center gap-2.5">
          {bigCategory && (
            <span
              className="inline-flex h-6.5 items-center rounded-lg px-2.5 text-xs font-bold uppercase tracking-wide"
              style={{ background: bigCategory.dark, color: bigCategory.tint }}
            >
              {bigCategory.label}
            </span>
          )}
          <span
            className="text-sm font-semibold"
            style={{ color: bigCategory?.dark }}
          >
            Editor&apos;s pick
          </span>
        </div>
        <h3
          className="text-[38px] font-bold leading-[1.1] tracking-[-1.1px] text-pretty"
          style={{ color: bigCategory?.deep ?? bigCategory?.dark }}
        >
          {big.title}
        </h3>
        {big.metadata && (
          <p
            className="text-[19px] leading-[1.55] text-pretty"
            style={{ color: bigCategory?.dark }}
          >
            {big.metadata}
          </p>
        )}
        {big.mainImage && (
          <div className="relative h-55 w-full overflow-hidden rounded-2xl">
            <Image
              src={big.mainImage}
              alt={big.title}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-center transition duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="mt-auto flex items-center gap-2.5">
          <Avatar name={big.author?.name ?? "Kaizen Health"} image={big.author?.image} size={32} />
          <span className="text-base font-semibold" style={{ color: bigCategory?.deep ?? bigCategory?.dark }}>
            {big.author?.name ?? "Kaizen Health"}
          </span>
          {big.readTime && (
            <>
              <span className="h-0.75 w-0.75 rounded-full" style={{ background: bigCategory?.dark }} />
              <span className="text-base" style={{ color: bigCategory?.dark }}>
                {big.readTime}
              </span>
            </>
          )}
        </div>
      </Link>

      <div className="flex flex-col gap-7">
        {small.map((post) => {
          const category = post.categoryKey ? getCategory(post.categoryKey) : null;
          return (
            <Link
              href={post.url}
              key={post.id}
              className="group flex gap-6 rounded-3xl p-7.5"
              style={{ background: category?.tint ?? "#F5F7FC" }}
            >
              <div className="flex flex-1 flex-col gap-3">
                {category && (
                  <span
                    className="inline-flex h-6.5 w-fit items-center rounded-lg px-2.5 text-xs font-bold uppercase tracking-wide"
                    style={{ background: category.dark, color: category.tint }}
                  >
                    {category.label}
                  </span>
                )}
                <h3
                  className="text-[26px] font-bold leading-[1.18] tracking-[-.5px] text-pretty"
                  style={{ color: category?.deep ?? category?.dark }}
                >
                  {post.title}
                </h3>
                {post.metadata && (
                  <p className="text-base leading-[1.5] text-pretty" style={{ color: category?.dark }}>
                    {post.metadata}
                  </p>
                )}
                {post.readTime && (
                  <span className="mt-auto text-sm" style={{ color: category?.dark }}>
                    {post.readTime}
                  </span>
                )}
              </div>
              {post.mainImage && (
                <div className="relative w-37.5 flex-none overflow-hidden rounded-2xl">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    sizes="150px"
                    className="object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedGrid;
