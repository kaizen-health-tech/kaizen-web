"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { PillArrow } from "@/components/Common/PillArrow";
import { pillClassName } from "@/components/Common/pillStyles";

interface GetAppButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md";
  fullWidth?: boolean;
  className?: string;
}

// Mirrors the header's device-aware store link so every "Get the app" CTA
// on the blog (masthead, sidebar, product callout) resolves the same way.
const GetAppButton = ({
  children,
  size = "md",
  fullWidth,
  className = "",
}: GetAppButtonProps) => {
  const [href, setHref] = useState("/");

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    if (/android/i.test(ua)) {
      setHref("https://bit.ly/kz-android-store");
    } else if (/iPad|iPhone|iPod/i.test(ua)) {
      setHref("https://bit.ly/kz-app-store");
    } else {
      setHref("/");
    }
  }, []);

  return (
    <Link
      href={href}
      className={pillClassName({
        size,
        fullWidth,
        // Article prose styles links; keep the pill's own colour and no underline.
        className: `!text-white !no-underline ${className}`,
      })}
    >
      <span>{children}</span>
      <PillArrow direction="forward" variant="violet" size={size} />
    </Link>
  );
};

export default GetAppButton;
