import Link from "next/link";
import { CATEGORY_LIST, categoryHref, CategoryKey } from "./categories";

interface CategoryTabsProps {
  /** Omit (or leave undefined) on the all-posts index, where "All" is active. */
  activeKey?: CategoryKey;
}

const tabClass = (active: boolean) =>
  `whitespace-nowrap border-b-[3px] pb-4 text-lg ${
    active
      ? "border-violet font-bold text-midnight"
      : "border-transparent font-medium text-graphite hover:text-midnight"
  }`;

const CategoryTabs = ({ activeKey }: CategoryTabsProps) => {
  return (
    <div className="mx-auto flex max-w-c-1280 gap-8 overflow-x-auto border-b border-cloud px-4 no-scrollbar md:px-8 xl:px-0">
      <Link href="/blog" className={tabClass(!activeKey)}>
        All
      </Link>
      {CATEGORY_LIST.map((category) => (
        <Link
          key={category.key}
          href={categoryHref(category.key)}
          className={tabClass(activeKey === category.key)}
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
};

export default CategoryTabs;
