"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useShopCart } from "./ShopCartContext";

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export default function ShopDemoHeader() {
  const {
    totalQuantity,
    lineDetails,
    subtotal,
    removeItem,
    setQuantity,
    clearCart,
  } = useShopCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-[41px] z-40 border-b border-stroke-stroke bg-white dark:border-stroke-dark dark:bg-[#0f0f11]">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-rob.svg"
              alt="logo"
              width={32}
              height={32}
              className="h-8 w-auto dark:hidden"
              priority
            />
            <Image
              src="/images/logo/logo-rob-white.svg"
              alt="logo"
              width={32}
              height={32}
              className="hidden h-8 w-auto dark:block"
              priority
            />
            <span className="font-semibold text-black dark:text-white">
              RopaNómada
            </span>
          </div>
          <nav className="flex items-center gap-4 text-sm sm:gap-6">
            <Link
              href="/projects/shop"
              className="text-body-color hover:text-[#0ea5e9] dark:text-body-color-dark dark:hover:text-[#7dd3fc]"
            >
              Inicio
            </Link>
            <Link
              href="/projects/shop/products"
              className="text-body-color hover:text-[#0ea5e9] dark:text-body-color-dark dark:hover:text-[#7dd3fc]"
            >
              Productos
            </Link>
            <Link
              href="/projects/landing#cta"
              className="hidden text-body-color hover:text-[#0ea5e9] dark:text-body-color-dark dark:hover:text-[#7dd3fc] sm:inline"
            >
              Reserva de talles
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-stroke-stroke text-black dark:border-stroke-dark dark:text-white"
              aria-label={
                totalQuantity
                  ? `Carrito, ${totalQuantity} productos`
                  : "Carrito"
              }
            >
              <CartIcon />
              {totalQuantity > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0ea5e9] px-1 text-[10px] font-bold text-white">
                  {totalQuantity > 99 ? "99+" : totalQuantity}
                </span>
              ) : null}
            </button>
          </nav>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Carrito"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-label="Cerrar carrito"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex h-full w-full max-w-md flex-col border-l border-stroke-stroke bg-white shadow-2xl dark:border-stroke-dark dark:bg-[#0f0f11]">
            <div className="flex items-center justify-between border-b border-stroke-stroke px-4 py-4 dark:border-stroke-dark">
              <h2 className="font-display text-lg font-normal text-black dark:text-white">
                Tu carrito (demo)
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-body-color hover:bg-black/5 dark:text-body-color-dark dark:hover:bg-white/10"
                aria-label="Cerrar"
              >
                X
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              {lineDetails.length === 0 ? (
                <p className="text-center text-sm text-body-color dark:text-body-color-dark">
                  El carrito está vacío. Agregá productos desde el catálogo.
                </p>
              ) : (
                <ul className="space-y-4">
                  {lineDetails.map(({ product, quantity, lineTotal }) => (
                    <li
                      key={product.id}
                      className="flex gap-3 rounded-xl border border-stroke-stroke/60 p-3 dark:border-stroke-dark/60"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-[#f5f6f8] dark:bg-[#161619]">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/projects/shop/products/${product.id}`}
                          onClick={() => setOpen(false)}
                          className="font-medium text-black hover:text-[#0ea5e9] dark:text-white dark:hover:text-[#7dd3fc]"
                        >
                          {product.name}
                        </Link>
                        <p className="mt-1 text-sm text-[#0ea5e9] dark:text-[#7dd3fc]">
                          ${product.price} c/u · ${lineTotal}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-stroke-stroke text-lg leading-none dark:border-stroke-dark"
                            onClick={() =>
                              setQuantity(product.id, quantity - 1)
                            }
                            aria-label="Menos"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-black dark:text-white">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-stroke-stroke text-lg leading-none dark:border-stroke-dark"
                            onClick={() =>
                              setQuantity(product.id, quantity + 1)
                            }
                            aria-label="Mas"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItem(product.id)}
                            className="ml-auto text-xs text-body-color underline dark:text-body-color-dark"
                          >
                            Quitar
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-stroke-stroke p-4 dark:border-stroke-dark">
              <div className="mb-4 flex items-center justify-between text-black dark:text-white">
                <span className="font-medium">Subtotal</span>
                <span className="text-lg font-semibold text-[#0ea5e9] dark:text-[#7dd3fc]">
                  ${subtotal}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  disabled={lineDetails.length === 0}
                  className="w-full rounded-2xl bg-[#0ea5e9] py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Finalizar pedido (demo)
                </button>
                <button
                  type="button"
                  onClick={() => clearCart()}
                  disabled={lineDetails.length === 0}
                  className="w-full rounded-2xl border border-stroke-stroke py-2.5 text-sm font-medium text-body-color disabled:opacity-50 dark:border-stroke-dark dark:text-body-color-dark"
                >
                  Vaciar carrito
                </button>
              </div>
              <p className="mt-3 text-center text-xs text-body-color dark:text-body-color-dark">
                Sin pago real — solo demostración
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
