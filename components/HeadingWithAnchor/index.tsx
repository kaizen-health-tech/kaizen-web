"use client";

import { ReactNode } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";

interface HeadingWithAnchorProps {
  id: string;
  children: ReactNode;
  /** @deprecated all H2s are a uniform size under the blog redesign typography. */
  size?: string;
}

const HeadingWithAnchor = ({ id, children }: HeadingWithAnchorProps) => {
  const handleClick = () => {
    const fullUrl = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(fullUrl);
  };

  return (
    <h2
      id={id}
      className="group flex scroll-mt-32 items-center gap-2 text-pretty text-[34px] font-bold leading-[1.15] tracking-[-.9px] text-midnight [margin:48px_0_18px]"
      aria-label={typeof children === "string" ? children : undefined}
    >
      <span>{children}</span>
      <button
        onClick={handleClick}
        className="invisible shrink-0 group-hover:visible"
        aria-label="Copy section link"
      >
        <LinkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
      </button>
    </h2>
  );
};

export default HeadingWithAnchor;
