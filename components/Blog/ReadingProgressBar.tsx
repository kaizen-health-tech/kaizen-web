"use client";

import { useEffect, useState } from "react";

interface ReadingProgressBarProps {
  targetId: string;
}

// Width bound to scroll progress through the article element only, not the
// whole document. Pinned to the true top of the viewport (above the fixed
// site header) rather than measured relative to header height, so it never
// depends on the header's runtime layout.
const ReadingProgressBar = ({ targetId }: ReadingProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [targetId]);

  return (
    <div
      className="fixed left-0 top-0 z-[100000] h-1 w-full"
      aria-hidden="true"
    >
      <div className="h-full bg-violet transition-[width]" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ReadingProgressBar;
