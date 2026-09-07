"use client";

import { useEffect } from "react";

export const EMBED_MESSAGE_TYPE = "kaizen-embed-height";

/**
 * Reports this document's height to the host page so a publisher's iframe can
 * resize itself instead of scrolling internally or being cut off.
 *
 * The message carries nothing but an id and a pixel height, which is why the
 * target origin is "*" — an embed can live on any domain, so there is no host
 * origin to pin, and there is nothing here worth restricting to one.
 */
export const EmbedFrameSync = ({ id }: { id: string }) => {
  useEffect(() => {
    if (window.parent === window) return;

    let lastHeight = 0;

    const postHeight = () => {
      const height = Math.ceil(
        document.documentElement.getBoundingClientRect().height,
      );

      if (height === lastHeight) return;

      lastHeight = height;
      window.parent.postMessage(
        { type: EMBED_MESSAGE_TYPE, id, height },
        "*",
      );
    };

    postHeight();

    const observer = new ResizeObserver(postHeight);
    observer.observe(document.documentElement);
    window.addEventListener("load", postHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", postHeight);
    };
  }, [id]);

  return null;
};
