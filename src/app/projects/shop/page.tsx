import DemoShopProductCard from "./DemoShopProductCard";
import { SHOP_DEMO_PRODUCTS } from "./shopProducts";

export default function DemoShopPage() {
  return (
    <>
      <section className="border-b border-stroke-stroke bg-[#f3f6ff] py-12 dark:border-stroke-dark dark:bg-[#15112a]">
        <div className="container px-4 text-center">
          <h1 className="font-display text-3xl font-normal tracking-tight text-black dark:text-white md:text-4xl">
            Catálogo de ropa urbana: estilo + talles claros (demo)
          </h1>
          <p className="mt-2 text-body-color dark:text-body-color-dark">
            Elegí tu prenda, agregala al carrito o revisá el detalle y avanzá con
            tu pedido por WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SHOP_DEMO_PRODUCTS.map((p) => (
              <DemoShopProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stroke-stroke bg-white py-12 dark:border-stroke-dark dark:bg-[#0f0f11]">
        <div className="container px-4 text-center">
          <p className="text-body-color dark:text-body-color-dark">
            ¿Prefieres que armemos el pedido por WhatsApp?
          </p>
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 text-sm font-medium text-white"
          >
            Enviar consulta (demo)
          </button>
        </div>
      </section>

      <footer className="border-t border-stroke-stroke py-8 dark:border-stroke-dark">
        <div className="container px-4 text-center text-sm text-body-color dark:text-body-color-dark">
          Demo · RopaNómada · Tienda de ropa (sin backend)
        </div>
      </footer>
    </>
  );
}
