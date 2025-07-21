"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Source_Sans_3 } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "../globals.css";
const inter = Source_Sans_3({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`dark:bg-black ${inter.className} bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(245,246,252,1)]`}
      >
        <GoogleAnalytics gaId="G-PN88Z9QS4E" />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
