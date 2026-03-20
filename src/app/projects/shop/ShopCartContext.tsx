"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getShopDemoProductById,
  type ShopDemoProduct,
} from "./shopProducts";

const STORAGE_KEY = "cc-shop-demo-cart";

export type CartLine = {
  productId: number;
  quantity: number;
};

type ShopCartContextValue = {
  lines: CartLine[];
  addItem: (productId: number, quantity?: number) => void;
  removeItem: (productId: number) => void;
  setQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalQuantity: number;
  subtotal: number;
  lineDetails: Array<
    CartLine & { product: ShopDemoProduct; lineTotal: number }
  >;
};

const ShopCartContext = createContext<ShopCartContextValue | null>(null);

export function ShopCartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setHydrated(true);
        return;
      }
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) {
        setHydrated(true);
        return;
      }
      const next: CartLine[] = [];
      for (const row of parsed) {
        if (
          row &&
          typeof row === "object" &&
          "productId" in row &&
          "quantity" in row
        ) {
          const productId = Number((row as { productId: unknown }).productId);
          const quantity = Math.floor(
            Number((row as { quantity: unknown }).quantity),
          );
          if (getShopDemoProductById(productId) && quantity > 0) {
            next.push({ productId, quantity });
          }
        }
      }
      setLines(next);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, hydrated]);

  const addItem = useCallback((productId: number, quantity = 1) => {
    if (!getShopDemoProductById(productId) || quantity < 1) return;
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.productId === productId);
      if (idx === -1) {
        return [...prev, { productId, quantity }];
      }
      const next = [...prev];
      next[idx] = {
        ...next[idx],
        quantity: next[idx].quantity + quantity,
      };
      return next;
    });
  }, []);

  const removeItem = useCallback((productId: number) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId));
  }, []);

  const setQuantity = useCallback((productId: number, quantity: number) => {
    if (!getShopDemoProductById(productId)) return;
    if (quantity < 1) {
      setLines((prev) => prev.filter((l) => l.productId !== productId));
      return;
    }
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.productId === productId);
      if (idx === -1) return [...prev, { productId, quantity }];
      const next = [...prev];
      next[idx] = { ...next[idx], quantity };
      return next;
    });
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const value = useMemo<ShopCartContextValue>(() => {
    const lineDetails = lines
      .map((line) => {
        const product = getShopDemoProductById(line.productId);
        if (!product) return null;
        return {
          ...line,
          product,
          lineTotal: product.price * line.quantity,
        };
      })
      .filter(Boolean) as ShopCartContextValue["lineDetails"];

    const totalQuantity = lineDetails.reduce((acc, l) => acc + l.quantity, 0);
    const subtotal = lineDetails.reduce((acc, l) => acc + l.lineTotal, 0);

    return {
      lines,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      totalQuantity,
      subtotal,
      lineDetails,
    };
  }, [lines, addItem, removeItem, setQuantity, clearCart]);

  return (
    <ShopCartContext.Provider value={value}>
      {children}
    </ShopCartContext.Provider>
  );
}

export function useShopCart() {
  const ctx = useContext(ShopCartContext);
  if (!ctx) {
    throw new Error("useShopCart must be used within ShopCartProvider");
  }
  return ctx;
}
