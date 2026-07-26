import React from "react";
export interface NewsCardProps {
  source?: string;
  date?: string;
  title: string;
  deck?: string;
  /** Cover image URL; falls back to a gradient + source monogram. */
  image?: string;
  /** Override the fallback cover gradient. */
  cover?: string;
  saved?: boolean;
  onSave?: () => void;
  onShare?: () => void;
  onOpen?: () => void;
  style?: React.CSSProperties;
}
export function NewsCard(props: NewsCardProps): JSX.Element;
