import React, { useState } from "react";

/** Textarea — multiline field with the same soft fill as Input (maps to baseTextArea). */
export function Textarea({ label, value, placeholder, rows = 4, errorText, disabled = false, style, onChange, ...rest }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, ...style }}>
      {label && <span className="kz-label-md" style={{ color: "var(--color-on-surface)" }}>{label}</span>}
      <textarea
        rows={rows} value={value} placeholder={placeholder} disabled={disabled} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ resize: "vertical", padding: "14px 16px", font: "inherit", fontSize: 16,
          color: "var(--color-on-surface)", background: "var(--color-surface-input)",
          borderRadius: "var(--radius-lg)", outline: "none",
          border: `1.5px solid ${errorText ? "var(--error)" : focused ? "var(--color-primary)" : "transparent"}`,
          opacity: disabled ? 0.55 : 1, transition: "border-color var(--dur-fast) var(--ease-standard)" }}
        {...rest}
      />
      {errorText && <span className="kz-label-sm" style={{ color: "var(--error)", paddingLeft: 4 }}>{errorText}</span>}
    </div>
  );
}
