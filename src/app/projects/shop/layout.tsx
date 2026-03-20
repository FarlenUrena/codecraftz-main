import type { ReactNode } from "react";

import ShopDemoWrapper from "./ShopDemoWrapper";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return <ShopDemoWrapper>{children}</ShopDemoWrapper>;
}
