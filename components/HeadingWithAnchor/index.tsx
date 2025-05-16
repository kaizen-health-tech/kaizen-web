"use client";

import { ReactNode } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";

interface HeadingWithAnchorProps {
  id: string;
  children: ReactNode;
  size: string;
}

const HeadingWithAnchor = ({ id, children, size }: HeadingWithAnchorProps) => {
  const handleClick = () => {
    const fullUrl = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(fullUrl);
  };

  return (
    <h2
      id={id}
      className={`group scroll-mt-32 mt-14 mb-6 flex items-center gap-2 tracking-tight dark:text-white`}
      aria-label={typeof children === "string" ? children : undefined}
    >
      <span className={`${size || "text-2xl"}`}>{children}</span>
      <button
        onClick={handleClick}
        className="invisible group-hover:visible"
        aria-label="Copy section link"
      >
        <LinkIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
      </button>
    </h2>
  );
};

export default HeadingWithAnchor;
