import Link from "next/link";

import DemoShopProductCard from "../DemoShopProductCard";
import { SHOP_DEMO_PRODUCTS } from "../shopProducts";

export default function ProductsListPage() {
  return (
    <div className="container px-4 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-normal tracking-tight text-black dark:text-white">
            Productos de RopaNómada
          </h1>
          <p className="mt-2 text-body-color dark:text-body-color-dark">
            Catálogo demo: agregá al carrito o entrá al detalle (solo visual).
          </p>
        </div>
        <Link
          href="/projects/shop"
          className="rounded-2xl border border-stroke-stroke bg-white px-4 py-2.5 text-sm font-medium text-body-color hover:border-[#0ea5e9] hover:text-[#0ea5e9] dark:border-stroke-dark dark:bg-[#0f0f11] dark:text-body-color-dark dark:hover:border-[#7dd3fc] dark:hover:text-[#7dd3fc]"
        >
          ← Volver a la tienda
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SHOP_DEMO_PRODUCTS.map((p) => (
          <DemoShopProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
