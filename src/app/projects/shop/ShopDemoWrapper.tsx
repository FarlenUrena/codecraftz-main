"use client";

import type { ReactNode } from "react";

import { ShopCartProvider } from "./ShopCartContext";
import ShopDemoHeader from "./ShopDemoHeader";

export default function ShopDemoWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ShopCartProvider>
      <div className="min-h-screen bg-[#FAFAF9] dark:bg-[#0c0c0d]">
        <ShopDemoHeader />
        {children}
      </div>
    </ShopCartProvider>
  );
}
