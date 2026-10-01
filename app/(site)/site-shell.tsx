"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import ToasterContext from "../context/ToastContext";

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      {/* Framer Motion animations honour the OS "reduce motion" setting. */}
      <MotionConfig reducedMotion="user">
        <Lines />
        <Header />
        <ToasterContext />
        <div className="pb-16 lg:pb-0">{children}</div>
        <Footer />
        <ScrollToTop />
        <StickyMobileCTA />
      </MotionConfig>
    </ThemeProvider>
  );
}
