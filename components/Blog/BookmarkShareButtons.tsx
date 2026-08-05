"use client";

import toast from "react-hot-toast";
import { KaizenIcon } from "./icons";

interface BookmarkShareButtonsProps {
  title: string;
  url: string;
}

const iconButtonClasses =
  "grid h-11 w-11 flex-none place-items-center rounded-full border border-cloud bg-white text-graphite transition hover:border-violet hover:text-violet";

// The web app has no signed-in session, so bookmarking always routes to the
// app-install prompt rather than a real saved state (mirrors "Bookmark
// requires auth — show the app install prompt when signed out").
const BookmarkShareButtons = ({ title, url }: BookmarkShareButtonsProps) => {
  const handleBookmark = () => {
    toast("Get the Kaizen Health app to save articles to your account.");
  };

  const handleShare = async () => {
    const absoluteUrl =
      typeof window !== "undefined" ? new URL(url, window.location.origin).toString() : url;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: absoluteUrl });
      } catch {
        // User cancelled the native share sheet — no error state needed.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(absoluteUrl);
      toast.success("Link copied");
    } catch {
      toast.error("Couldn't copy the link");
    }
  };

  return (
    <div className="flex gap-2.5">
      <button
        type="button"
        onClick={handleBookmark}
        className={iconButtonClasses}
        aria-label="Bookmark this article"
      >
        <KaizenIcon name="Bookmark" size={19} />
      </button>
      <button
        type="button"
        onClick={handleShare}
        className={iconButtonClasses}
        aria-label="Share this article"
      >
        <KaizenIcon name="ShareBox" size={19} />
      </button>
    </div>
  );
};

export default BookmarkShareButtons;
