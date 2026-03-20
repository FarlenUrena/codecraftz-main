"use client";

import Link from "next/link";
import { useState } from "react";

import { useShopCart } from "./ShopCartContext";

type Props = {
  productId: number;
};

export default function ProductDetailCartActions({ productId }: Props) {
  const { addItem } = useShopCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm text-body-color dark:text-body-color-dark">
          Cantidad
        </span>
        <div className="flex items-center rounded-xl border border-stroke-stroke dark:border-stroke-dark">
          <button
            type="button"
            className="px-3 py-2 text-lg leading-none text-black dark:text-white"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Menos"
          >
            -
          </button>
          <span className="min-w-[2rem] text-center text-sm font-medium text-black dark:text-white">
            {qty}
          </span>
          <button
            type="button"
            className="px-3 py-2 text-lg leading-none text-black dark:text-white"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Más"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            addItem(productId, qty);
            setQty(1);
          }}
          className="rounded-2xl bg-[#0ea5e9] px-6 py-3 text-sm font-medium text-white hover:bg-[#0284c7] dark:hover:bg-[#38bdf8]"
        >
          Agregar al carrito
        </button>
        <Link
          href="/projects/landing#cta"
          className="inline-flex items-center justify-center rounded-2xl border border-stroke-stroke bg-white px-6 py-3 text-sm font-medium text-body-color hover:border-[#0ea5e9] hover:text-[#0ea5e9] dark:border-stroke-dark dark:bg-[#0f0f11] dark:text-body-color-dark dark:hover:border-[#7dd3fc] dark:hover:text-[#7dd3fc]"
        >
          Pedir por WhatsApp (demo)
        </Link>
        <Link
          href="/projects/shop/products"
          className="inline-flex items-center justify-center rounded-2xl border border-stroke-stroke bg-transparent px-6 py-3 text-sm font-medium text-body-color hover:border-[#0ea5e9] hover:text-[#0ea5e9] dark:border-stroke-dark dark:text-body-color-dark dark:hover:border-[#7dd3fc] dark:hover:text-[#7dd3fc]"
        >
          ← Ver catálogo
        </Link>
      </div>
    </div>
  );
}
