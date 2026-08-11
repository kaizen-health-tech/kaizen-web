import Link from "next/link";
import { BreadcrumbSchema } from "@/components/Schema";
import type { BreadcrumbItem } from "@/components/Schema";

export type { BreadcrumbItem };

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Center the trail — use on pages with centered hero copy. */
  center?: boolean;
  className?: string;
};

const Breadcrumbs = ({ items, center = false, className = "" }: BreadcrumbsProps) => {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className={`mb-6 text-sm ${className}`}>
        <ol
          className={`flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400 ${
            center ? "justify-center" : "justify-start"
          }`}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-black dark:text-white">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-primary">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
