"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const androidStoreUrl = "https://bit.ly/kz-android-store";
const appleStoreUrl = "https://bit.ly/kz-app-store";

// Pages where a "download the app" push doesn't make sense.
const HIDDEN_ON_PREFIXES = ["/chat", "/auth", "/thank-you"];

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const [storeHref, setStoreHref] = useState(appleStoreUrl);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    if (/android/i.test(ua)) {
      setStoreHref(androidStoreUrl);
    } else {
      setStoreHref(appleStoreUrl);
    }
  }, []);

  if (HIDDEN_ON_PREFIXES.some((prefix) => pathname?.startsWith(prefix))) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[999] flex items-center justify-between gap-3 border-t border-stroke bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur dark:border-strokedark dark:bg-black/95 lg:hidden">
      <p className="text-sm font-medium text-black dark:text-white">
        Get Kaizen Health free
      </p>
      <a
        href={storeHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-primaryho"
      >
        Download the App
      </a>
    </div>
  );
}
