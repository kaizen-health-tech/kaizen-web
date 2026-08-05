"use client";

import { useEffect, useState } from "react";
import { KaizenIcon } from "./icons";

export interface ArticleSection {
  id: string;
  label: string;
}

interface ContentsRailProps {
  sections: ArticleSection[];
  tags?: string[];
}

const ContentsRail = ({ sections, tags = [] }: ContentsRailProps) => {
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0 && tags.length === 0) return null;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
    setMobileOpen(false);
  };

  const sectionLinks = (
    <nav className="flex flex-col gap-3 border-l-2 border-cloud pl-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(event) => handleClick(event, section.id)}
          className={`text-[17px] leading-[1.35] transition-colors ${
            activeId === section.id
              ? "font-bold text-violet"
              : "font-normal text-graphite hover:text-arsenic"
          }`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );

  const tagList = (
    <div className="mt-3 flex flex-col gap-2 border-t border-cloud pt-5">
      <span className="text-sm font-bold uppercase tracking-[1.2px] text-space">
        Filed under
      </span>
      {tags.map((tag) => (
        <span key={tag} className="text-[17px] font-semibold leading-[1.35] text-arsenic">
          {tag}
        </span>
      ))}
    </div>
  );

  return (
    <div>
      {/* Mobile: collapsed by default so the contents don't push the article
          below the fold; expands into the same links as the desktop rail. */}
      <div className="mb-2 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between rounded-2xl border border-cloud bg-lavender px-5 py-4"
        >
          <span className="text-sm font-bold uppercase tracking-[1.2px] text-space">
            On this page
          </span>
          <KaizenIcon
            name="ArrowNarrowRight"
            size={18}
            className={`text-graphite transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`}
          />
        </button>
        {mobileOpen && (
          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-cloud p-5">
            {sections.length > 0 && sectionLinks}
            {tags.length > 0 && tagList}
          </div>
        )}
      </div>

      {/* Desktop: always-visible sticky rail. */}
      <aside className="sticky top-6 hidden flex-col gap-4 lg:flex">
        {sections.length > 0 && (
          <>
            <span className="text-sm font-bold uppercase tracking-[1.2px] text-space">
              On this page
            </span>
            {sectionLinks}
          </>
        )}
        {tags.length > 0 && tagList}
      </aside>
    </div>
  );
};

export default ContentsRail;
