import Image from "next/image";
import Link from "next/link";

import ProductDetailCartActions from "../../ProductDetailCartActions";
import { getShopDemoProductById } from "../../shopProducts";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idParam } = await params;
  const id = Number(idParam);
  const product = getShopDemoProductById(id);
  const nextProduct = getShopDemoProductById(id + 1);

  return (
    <div>
      <div className="container px-4 py-12">
        {!product ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-stroke-stroke bg-white p-8 text-center dark:border-stroke-dark dark:bg-[#0f0f11]">
            <h1 className="font-display text-3xl font-normal tracking-tight text-black dark:text-white">
              Producto no encontrado
            </h1>
            <p className="mt-3 text-body-color dark:text-body-color-dark">
              No existe el id <span className="font-semibold">{idParam}</span>{" "}
              en la demo.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                href="/projects/shop/products"
                className="rounded-2xl border border-stroke-stroke bg-white px-4 py-2.5 text-sm font-medium text-body-color hover:border-[#0ea5e9] hover:text-[#0ea5e9] dark:border-stroke-dark dark:bg-[#0f0f11] dark:text-body-color-dark dark:hover:border-[#7dd3fc] dark:hover:text-[#7dd3fc]"
              >
                ← Volver a productos
              </Link>
              <Link
                href="/projects/shop"
                className="rounded-2xl bg-[#0ea5e9] px-4 py-2.5 text-sm font-medium text-white"
              >
                Ir a tienda →
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-stroke-stroke bg-white p-4 shadow-one dark:border-stroke-dark dark:bg-[#0f0f11]">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#f5f6f8] dark:bg-[#161619]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="lg:pt-2">
              <div className="flex items-center justify-between gap-4">
                <h1 className="font-display text-4xl font-normal tracking-tight text-black dark:text-white">
                  {product.name}
                </h1>
                <div className="rounded-2xl bg-[#0ea5e9]/10 px-4 py-2 text-center text-sm font-semibold text-[#0ea5e9] dark:bg-[#0ea5e9]/15 dark:text-[#7dd3fc]">
                  ${product.price}
                </div>
              </div>

              <p className="mt-5 text-body-color dark:text-body-color-dark">
                Prenda urbana (demo): fit cómodo, costuras reforzadas y look listo
                para usar. Incluye guía de talles y un mensaje de compra claro por
                WhatsApp (visual).
              </p>

              <ProductDetailCartActions productId={product.id} />

              {nextProduct ? (
                <div className="mt-10 rounded-2xl border border-stroke-stroke bg-white p-5 dark:border-stroke-dark dark:bg-[#0f0f11]">
                  <p className="text-sm font-semibold text-black dark:text-white">
                    Siguiente producto (demo)
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#f5f6f8] dark:bg-[#161619]">
                        <Image
                          src={nextProduct.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <p className="truncate text-sm text-body-color dark:text-body-color-dark">
                        {nextProduct.name}
                      </p>
                    </div>
                    <Link
                      href={`/projects/shop/products/${nextProduct.id}`}
                      className="shrink-0 text-[#0ea5e9] hover:underline dark:text-[#7dd3fc]"
                    >
                      Ver →
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
