"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "@/app/providers";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProjectsDemo = pathname?.startsWith("/projects") ?? false;

  return (
    <Providers>
      {!isProjectsDemo && <Header />}
      {children}
      {!isProjectsDemo && <Footer />}
      {!isProjectsDemo && <ScrollToTop />}
    </Providers>
  );
}

