"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { legalDocs } from "@/data/legalDocs";

/**
 * Links between the legal documents. A swipeable row of pills on small
 * screens, a vertical list in the sidebar from `lg` up.
 */
export const DocsNav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Policies and docs">
      <p className="mb-4 hidden text-[11px] font-bold uppercase tracking-[0.18em] text-graphite lg:block">
        Policies &amp; Docs
      </p>
      <ul className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:px-0">
        {legalDocs.map((doc) => {
          const isActive = pathname === doc.href;
          return (
            <li key={doc.href} className="shrink-0">
              <Link
                href={doc.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex whitespace-nowrap rounded-full px-4 py-2 text-[15px] ring-1 transition duration-500 ease-out-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet active:scale-[0.98] lg:rounded-xl lg:px-3.5 lg:py-2.5 lg:ring-0 ${
                  isActive
                    ? "bg-midnight font-semibold text-white ring-midnight lg:bg-lavender lg:text-midnight"
                    : "text-text-body ring-midnight/[0.08] hover:bg-lavender hover:text-midnight"
                }`}
              >
                {doc.navLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
