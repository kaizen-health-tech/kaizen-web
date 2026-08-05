import Link from "next/link";
import { blogPageHref } from "@/lib/blog";
import { KaizenIcon } from "./icons";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
}

export const BlogPagination = ({
  currentPage,
  totalPages,
}: BlogPaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const showNext = currentPage < totalPages;

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-11 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1 && (
        <Link
          href={blogPageHref(currentPage - 1)}
          rel="prev"
          className="grid h-11 w-11 place-items-center rounded-full font-semibold text-arsenic hover:bg-lavender"
        >
          ←
        </Link>
      )}

      {pages.map((page) =>
        page === currentPage ? (
          <span
            key={page}
            aria-current="page"
            className="grid h-11 w-11 place-items-center rounded-full bg-violet font-bold text-aquamarine"
          >
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={blogPageHref(page)}
            className="grid h-11 w-11 place-items-center rounded-full font-semibold text-arsenic hover:bg-lavender"
          >
            {page}
          </Link>
        ),
      )}

      {showNext && (
        <Link
          href={blogPageHref(currentPage + 1)}
          rel="next"
          className="ml-2 flex h-11 items-center gap-2 rounded-full border border-cloud px-4.5 font-semibold text-midnight hover:bg-lavender"
        >
          Next
          <KaizenIcon name="ArrowNarrowRight" size={17} />
        </Link>
      )}
    </nav>
  );
};
