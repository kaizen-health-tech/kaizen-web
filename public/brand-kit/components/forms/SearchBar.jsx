import React, { useState } from "react";
import { Input } from "./Input.jsx";

/** SearchBar — Input preset with a Search glyph and a Filter action (maps to BaseSearchBar). */
export function SearchBar({ value, onSearch, onFilter, placeholder = "Search", style, ...rest }) {
  const [q, setQ] = useState(value ?? "");
  const active = (q ?? "").length > 0;
  return (
    <Input
      value={q}
      placeholder={placeholder}
      leftIcon={active ? "Close" : "Search"}
      rightIcon="Filter"
      onRightIconClick={onFilter}
      onChange={(e) => { setQ(e.target.value); onSearch && onSearch(e.target.value); }}
      style={style}
      {...rest}
    />
  );
}
