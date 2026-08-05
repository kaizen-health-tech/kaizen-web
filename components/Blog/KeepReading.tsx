import Link from "next/link";
import { getRelatedPosts } from "@/lib/blog";
import { getCategory, CategoryKey } from "./categories";

interface KeepReadingProps {
  currentUrl: string;
  categoryKey?: CategoryKey;
}

const KeepReading = ({ currentUrl, categoryKey }: KeepReadingProps) => {
  const related = getRelatedPosts(currentUrl, categoryKey);
  if (related.length === 0) return null;

  return (
    <div className="border-t border-cloud bg-lavender px-6 py-13 md:px-12">
      <div className="mx-auto max-w-c-1016">
        <h3 className="mb-6.5 text-[28px] font-bold leading-[1.15] tracking-[-.6px] text-midnight">
          Keep reading
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {related.map((post) => {
            const category = post.categoryKey ? getCategory(post.categoryKey) : null;
            return (
              <Link
                href={post.url}
                key={post.id}
                className="group flex flex-col gap-3 rounded-[20px] border border-cloud bg-white p-6 transition hover:shadow-card-hover"
              >
                {category && (
                  <span
                    className="inline-flex h-6.5 w-fit items-center rounded-lg px-2.5 text-xs font-bold uppercase tracking-wide"
                    style={{ background: category.tint, color: category.dark }}
                  >
                    {category.label}
                  </span>
                )}
                <h4 className="text-[22px] font-bold leading-[1.22] tracking-[-.4px] text-midnight text-pretty group-hover:text-violet">
                  {post.title}
                </h4>
                {post.readTime && <span className="text-sm text-space">{post.readTime}</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeepReading;
