"use client";

import { useEffect, useState } from "react";

interface ReadingProgressBarProps {
  targetId: string;
}

// Width bound to scroll progress through the article element only, not the
// whole document. Positioned just under the (fixed) site header, measured at
// runtime so it never has to assume the header's height.
const ReadingProgressBar = ({ targetId }: ReadingProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");

    const measure = () => setTop(header?.getBoundingClientRect().height ?? 0);
    measure();

    const handleScroll = () => {
      const article = document.getElementById(targetId);
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(rect.top <= 0 ? 100 : 0);
        return;
      }

      const scrolled = -rect.top;
      setProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measure);
    };
  }, [targetId]);

  return (
    <div
      className="fixed left-0 z-[9998] h-1 w-full"
      style={{ top }}
      aria-hidden="true"
    >
      <div className="h-full bg-violet transition-[width]" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ReadingProgressBar;
