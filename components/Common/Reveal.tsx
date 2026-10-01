"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

import type { RevealProps } from "@/types/ui";

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. The animation itself is CSS (`.reveal` in globals.css), so this only
 * flips a data attribute once and then stops observing; there is no scroll
 * listener and nothing re-runs on later scrolls.
 */
export const Reveal = ({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.dataset.revealed = "";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        element.dataset.revealed = "";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : undefined;

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
};
