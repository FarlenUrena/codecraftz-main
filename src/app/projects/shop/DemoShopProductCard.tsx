"use client";

import Image from "next/image";
import Link from "next/link";

import { useShopCart } from "./ShopCartContext";
import type { ShopDemoProduct } from "./shopProducts";

type Props = {
  product: ShopDemoProduct;
};

export default function DemoShopProductCard({ product }: Props) {
  const { addItem } = useShopCart();

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stroke-stroke/60 bg-white shadow-one dark:border-stroke-dark/60 dark:bg-[#0f0f11]">
      <Link
        href={`/projects/shop/products/${product.id}`}
        className="relative block aspect-square w-full overflow-hidden bg-[#f5f6f8] dark:bg-[#161619]"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link
          href={`/projects/shop/products/${product.id}`}
          className="font-medium text-black hover:text-[#0ea5e9] dark:text-white dark:hover:text-[#7dd3fc]"
        >
          {product.name}
        </Link>
        <p className="mt-1 text-lg font-semibold text-[#0ea5e9] dark:text-[#7dd3fc]">
          ${product.price}
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Link
            href={`/projects/shop/products/${product.id}`}
            className="flex-1 rounded-xl border border-stroke-stroke py-2.5 text-center text-sm font-medium text-body-color hover:border-[#0ea5e9] hover:text-[#0ea5e9] dark:border-stroke-dark dark:text-body-color-dark dark:hover:border-[#7dd3fc] dark:hover:text-[#7dd3fc]"
          >
            Ver detalle
          </Link>
          <button
            type="button"
            onClick={() => addItem(product.id)}
            className="flex-1 rounded-xl bg-[#0ea5e9] py-2.5 text-sm font-medium text-white hover:bg-[#0284c7] dark:hover:bg-[#38bdf8]"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
}
