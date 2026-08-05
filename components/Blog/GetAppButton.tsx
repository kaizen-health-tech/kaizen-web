"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface GetAppButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md";
  fullWidth?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-10.5 px-5 text-sm",
  md: "h-12 px-6 text-base",
};

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
      className={`inline-flex items-center justify-center rounded-full bg-violet font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-hover active:scale-[.97] ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default GetAppButton;
