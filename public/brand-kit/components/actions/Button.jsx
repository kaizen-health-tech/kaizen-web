import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Button — the primary Kaizen action control (maps to the app's BaseButton).
 * Contained = violet fill with aquamarine label; Outlined = hairline; Ghost = quiet text.
 */
export function Button({
  mode = "contained",
  size = "lg",
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const height = size === "sm" ? 42 : size === "md" ? 48 : 58;
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    minWidth: 100, height, padding: "0 22px", borderRadius: "var(--radius-lg)",
    fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, letterSpacing: ".2px",
    lineHeight: "20px", border: "1.5px solid transparent", cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : undefined, transition: "background var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard)",
    WebkitTapHighlightColor: "transparent",
  };
  const modes = {
    contained: { background: "var(--color-primary)", color: "var(--color-on-primary)", boxShadow: "0 12px 28px rgba(110,64,243,.22)" },
    outlined: { background: "transparent", color: "var(--color-on-background)", borderColor: "var(--color-on-background)" },
    ghost: { background: "transparent", color: "var(--color-text-muted)" },
  };
  const disabledStyle = disabled
    ? { background: "var(--color-surface-disabled)", color: "var(--color-on-surface-disabled)", borderColor: "transparent", boxShadow: "none", opacity: .8 }
    : null;
  const iconColor = mode === "contained" ? "var(--color-on-primary)" : "currentColor";
  const iconSize = size === "sm" ? 16 : 18;

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...base, ...modes[mode], ...disabledStyle, ...style }}
      onMouseEnter={(e) => { if (!disabled && mode === "contained") e.currentTarget.style.background = "var(--violet-hover)"; }}
      onMouseLeave={(e) => { if (!disabled && mode === "contained") e.currentTarget.style.background = "var(--color-primary)"; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "none"; }}
      {...rest}
    >
      {loading && <Icon name="Refresh" size={iconSize} color={iconColor} style={{ animation: "kz-spin 1s linear infinite" }} />}
      {!loading && leftIcon && <Icon name={leftIcon} size={iconSize} color={iconColor} />}
      {children}
      {!loading && rightIcon && <Icon name={rightIcon} size={iconSize} color={iconColor} />}
      <style>{"@keyframes kz-spin{to{transform:rotate(360deg)}}"}</style>
    </button>
  );
}
