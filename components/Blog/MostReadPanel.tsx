import Link from "next/link";
import { Blog } from "@/types/blog";

interface MostReadPanelProps {
  posts: Blog[];
}

const MostReadPanel = ({ posts }: MostReadPanelProps) => {
  if (posts.length === 0) return null;

  return (
    <div className="rounded-[20px] border border-cloud bg-lavender p-6.5">
      <h4 className="mb-4.5 text-lg font-bold uppercase tracking-wide text-graphite">
        Most read
      </h4>
      <div className="flex flex-col gap-4.5">
        {posts.map((post, index) => (
          <Link href={post.url} key={post.id} className="group flex gap-3.5">
            <span className="text-[22px] font-bold leading-none text-steel">{index + 1}</span>
            <span className="text-lg font-semibold leading-[1.3] text-midnight text-pretty group-hover:text-violet">
              {post.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostReadPanel;
