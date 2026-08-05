"use client";

import { useEffect, useState } from "react";

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
  };

  return (
    <aside className="sticky top-6 hidden flex-col gap-4 lg:flex">
      {sections.length > 0 && (
        <>
          <span className="text-sm font-bold uppercase tracking-[1.2px] text-space">
            On this page
          </span>
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
        </>
      )}

      {tags.length > 0 && (
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
      )}
    </aside>
  );
};

export default ContentsRail;
