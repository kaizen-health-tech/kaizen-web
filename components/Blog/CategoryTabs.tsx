import Link from "next/link";
import { CATEGORY_LIST } from "./categories";

// Per the design, these are meant to be real links to per-category hub pages
// (the "1d" category listing). That surface hasn't been built yet, so for now
// only "All" is a live link; the rest render in place as a preview of the
// full taxonomy without routing anywhere.
const CategoryTabs = () => {
  return (
    <div className="mx-auto flex max-w-c-1280 gap-8 overflow-x-auto border-b border-cloud px-4 no-scrollbar md:px-8 xl:px-0">
      <Link
        href="/blog"
        className="whitespace-nowrap border-b-[3px] border-violet pb-4 text-lg font-bold text-midnight"
      >
        All
      </Link>
      {CATEGORY_LIST.map((category) => (
        <span
          key={category.key}
          className="whitespace-nowrap border-b-[3px] border-transparent pb-4 text-lg font-medium text-graphite"
        >
          {category.label}
        </span>
      ))}
    </div>
  );
};

export default CategoryTabs;
