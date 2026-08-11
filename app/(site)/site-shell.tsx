"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import ToasterContext from "../context/ToastContext";

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      <Lines />
      <Header />
      <ToasterContext />
      <div className="pb-16 lg:pb-0">{children}</div>
      <Footer />
      <ScrollToTop />
      <StickyMobileCTA />
    </ThemeProvider>
  );
}
