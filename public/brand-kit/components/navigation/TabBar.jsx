import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * TabBar — the app's bottom navigation (maps to the Bottom menu icons family).
 * Four destinations around an elevated violet "+" action. Active tab is violet.
 */
export function TabBar({ items, value, onChange, onAdd, style, ...rest }) {
  const tabs = items || [
    { value: "home", icon: "HomeIcon", label: "Home" },
    { value: "groups", icon: "Users", label: "Groups" },
    { value: "chat", icon: "Kai", label: "Kai" },
    { value: "documents", icon: "FileText", label: "Records" },
  ];
  const withCenter = tabs.length >= 4 ? [tabs.slice(0, 2), tabs.slice(2)] : [tabs, []];
  const renderTab = (t) => {
    const active = t.value === value;
    return (
      <button key={t.value} type="button" onClick={() => onChange && onChange(t.value)}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, flex: 1, border: "none", background: "transparent", cursor: "pointer", padding: "6px 0" }}>
        <Icon name={t.icon === "HomeIcon" ? "GridLayout" : t.icon} size={24} color={active ? "var(--color-primary)" : "var(--color-text-muted)"} />
        <span className="kz-label-xxs" style={{ color: active ? "var(--color-primary)" : "var(--color-text-muted)", letterSpacing: ".2px", textTransform: "none" }}>{t.label}</span>
      </button>
    );
  };
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: 8, height: 74, padding: "0 18px",
      background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", ...style }} {...rest}>
      {withCenter[0].map(renderTab)}
      {onAdd && (
        <button type="button" onClick={onAdd} style={{ width: 54, height: 54, borderRadius: "var(--radius-pill)", background: "var(--color-primary)", border: "none", display: "grid", placeItems: "center", cursor: "pointer", boxShadow: "0 10px 22px rgba(110,64,243,.35)", marginTop: -18, flexShrink: 0 }}>
          <Icon name="NavPlus" size={22} color="var(--white)" />
        </button>
      )}
      {withCenter[1].map(renderTab)}
    </nav>
  );
}
