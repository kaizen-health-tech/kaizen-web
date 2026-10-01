import { PillArrow } from "@/components/Common/PillArrow";
import { pillClassName } from "@/components/Common/pillStyles";

import type { PillButtonProps } from "@/types/ui";

/**
 * PillLink's shape for a <button>. Actions such as copy, print or reset stay
 * plain; pass arrow="forward" for steps that move the visitor on (submit,
 * continue).
 */
export const PillButton = ({
  children,
  variant = "violet",
  size = "md",
  arrow = "none",
  fullWidth,
  className,
  type = "button",
  ...buttonProps
}: PillButtonProps) => (
  <button
    type={type}
    className={pillClassName({ variant, size, arrow, fullWidth, className })}
    {...buttonProps}
  >
    {arrow === "back" && (
      <PillArrow direction="back" variant={variant} size={size} isButton />
    )}
    <span>{children}</span>
    {arrow === "forward" && (
      <PillArrow direction="forward" variant={variant} size={size} isButton />
    )}
  </button>
);
