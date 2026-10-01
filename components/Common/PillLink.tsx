import Link from "next/link";

import { PillArrow } from "@/components/Common/PillArrow";
import { pillClassName } from "@/components/Common/pillStyles";

import type { PillLinkProps } from "@/types/ui";

/**
 * The site's call-to-action pill. The arrow sits in its own circle flush with
 * the edge and nudges in its direction on hover; the whole pill presses in
 * slightly when clicked. Use PillButton for actions that are not navigation.
 */
export const PillLink = ({
  href,
  children,
  variant = "violet",
  size = "md",
  arrow = "forward",
  fullWidth,
  className,
  native = false,
  ...anchorProps
}: PillLinkProps) => {
  const classes = pillClassName({ variant, size, arrow, fullWidth, className });
  const content = (
    <>
      {arrow === "back" && (
        <PillArrow direction="back" variant={variant} size={size} />
      )}
      <span>{children}</span>
      {arrow === "forward" && (
        <PillArrow direction="forward" variant={variant} size={size} />
      )}
    </>
  );

  if (native) {
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...anchorProps}>
      {content}
    </Link>
  );
};
