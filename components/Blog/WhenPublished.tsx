import { ReactNode } from "react";
import { isDraftUrl } from "@/lib/blog";

interface WhenPublishedProps {
  /** The post URL the wrapped content points to. */
  url: string;
  children: ReactNode;
}

// Renders its children only once the post at `url` is no longer a draft, so a
// link to an unpublished post can be committed without going live as a 404.
// Wrap the whole sentence, not just the anchor, so the copy still reads
// correctly while the post is hidden. Put any leading space inside the children.
const WhenPublished = ({ url, children }: WhenPublishedProps) =>
  isDraftUrl(url) ? null : <>{children}</>;

export default WhenPublished;
