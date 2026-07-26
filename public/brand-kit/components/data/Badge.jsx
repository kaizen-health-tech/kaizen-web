import React from "react";

/** Badge — small status/count pill (maps to the label family). Tones map to semantic colors. */
const TONES = {
  neutral: { bg: "var(--color-surface-variant)", fg: "var(--color-text-muted)" },
  violet: { bg: "var(--light-lilac)", fg: "var(--light-plum)" },
  success: { bg: "var(--grass-100)", fg: "var(--grass-300)" },
  notice: { bg: "var(--orange-100)", fg: "var(--orange-300)" },
  error: { bg: "var(--red-100)", fg: "var(--error)" },
  info: { bg: "var(--light-sea-green)", fg: "var(--sea-green)" },
};
export function Badge({ children, tone = "neutral", dot = false, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span className="kz-label-xxs" style={{ display: "inline-flex", alignItems: "center", gap: 5,
      padding: dot ? 0 : "3px 9px", minWidth: dot ? 8 : undefined, height: dot ? 8 : undefined,
      borderRadius: "var(--radius-pill)", background: t.bg, color: t.fg, textTransform: "uppercase",
      letterSpacing: ".5px", ...style }} {...rest}>
      {!dot && children}
    </span>
  );
}
