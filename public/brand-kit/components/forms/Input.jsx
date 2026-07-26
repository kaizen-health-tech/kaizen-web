import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Input — labelled text field with a soft filled box (maps to BaseInput).
 * Fill = surface-input (cloud), 16px radius, violet active outline.
 */
export function Input({
  label, required = false, value, placeholder, leftIcon, rightIcon, onRightIconClick,
  prefix, errorText, disabled = false, type = "text", style, onChange, ...rest
}) {
  const [focused, setFocused] = useState(false);
  const box = {
    display: "flex", alignItems: "center", gap: 8, height: 56, padding: "0 16px",
    background: "var(--color-surface-input)", borderRadius: "var(--radius-lg)",
    border: `1.5px solid ${errorText ? "var(--error)" : focused ? "var(--color-primary)" : "transparent"}`,
    transition: "border-color var(--dur-fast) var(--ease-standard)", opacity: disabled ? 0.55 : 1,
  };
  const affix = focused ? "var(--color-primary)" : "var(--color-on-surface-disabled)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, ...style }}>
      {label && (
        <span className="kz-label-md" style={{ color: "var(--color-on-surface)" }}>
          {label}{required && <span style={{ color: "var(--color-primary)" }}> *</span>}
        </span>
      )}
      <div style={box}>
        {prefix && <span className="kz-body-lg" style={{ color: affix }}>{prefix}</span>}
        {leftIcon && <Icon name={leftIcon} size={22} color={affix} />}
        <input
          type={type} value={value} placeholder={placeholder} disabled={disabled}
          onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
            font: "inherit", fontSize: 16, color: "var(--color-on-surface)" }}
          {...rest}
        />
        {rightIcon && (
          <button type="button" onClick={onRightIconClick} style={{ border: "none", background: "none", padding: 0, cursor: "pointer", display: "flex" }}>
            <Icon name={rightIcon} size={22} color="var(--color-text-muted)" />
          </button>
        )}
      </div>
      {errorText && <span className="kz-label-sm" style={{ color: "var(--error)", paddingLeft: 4 }}>{errorText}</span>}
    </div>
  );
}
