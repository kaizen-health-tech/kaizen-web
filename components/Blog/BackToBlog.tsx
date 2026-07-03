import Link from "next/link";

const BackToBlog = () => {
  return (
    <Link
      href="/blog"
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-5 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10 dark:bg-transparent dark:hover:bg-primary/10"
    >
      ← Back to Blog
    </Link>
  );
};

export default BackToBlog;
