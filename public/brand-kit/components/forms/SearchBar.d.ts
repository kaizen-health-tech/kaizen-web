import React from "react";
export interface SearchBarProps {
  value?: string;
  onSearch?: (query: string) => void;
  onFilter?: () => void;
  placeholder?: string;
  style?: React.CSSProperties;
}
export function SearchBar(props: SearchBarProps): JSX.Element;
