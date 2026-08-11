import type { Metadata } from "next";
import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import NotFoundContent from "@/components/NotFound";
import { COMPANY_NAME, SITE_URL, buildTitle, normalizeDescription } from "@/lib/seo";

import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const primaryKeyword = "Page Not Found";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: buildTitle(primaryKeyword),
  description: normalizeDescription(
    "The page you requested is unavailable. Return to Kaizen Health to continue exploring secure family health tools, records, and support resources.",
    primaryKeyword,
  ),
};

/**
 * This file is rendered by Next.js as a fully separate <html>/<body>
 * document that bypasses the normal app render tree (see
 * https://nextjs.org/docs/app/api-reference/file-conventions/not-found).
 * No router is mounted here, so the real Header/Footer — both full of
 * next/link <Link>s — silently break on click (URL changes, content
 * doesn't). This uses a minimal, static header/footer with plain <a> tags
 * instead, which always trigger a real navigation.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`dark:bg-black ${sourceSans.className} bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(245,246,252,1)]`}
      >
        <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
          <header className="fixed left-0 top-0 z-99999 w-full py-2">
            <div className="bg-white relative mx-auto flex max-w-c-1390 items-center rounded-lg p-2 px-4 shadow-lg md:px-8">
              <a href="/" aria-label={`${COMPANY_NAME} home`}>
                <Image
                  src="/images/logo/kaizen-logo.svg"
                  alt={`${COMPANY_NAME} logo`}
                  width={240}
                  height={120}
                  className="w-40"
                />
              </a>
            </div>
          </header>

          <NotFoundContent />

          <footer className="bg-[#1E1A34] py-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
