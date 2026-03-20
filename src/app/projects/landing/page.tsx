"use client";

import Link from "next/link";

import DemoResponsiveHeader from "../components/DemoResponsiveHeader";

/** Accent for this demo (construction / obra) — distinct from main site primary */
const ACCENT = "#ea580c";
const ACCENT_SOFT = "rgba(234, 88, 12, 0.15)";

export default function DemoLandingPage() {
  return (
    <div className="bg-[#FAFAF9] dark:bg-[#0c0c0d]">
      <DemoResponsiveHeader
        brandName="ObraFina"
        links={[
          { href: "#features", label: "Por qué nosotros" },
          { href: "#how", label: "Proceso" },
          { href: "#reviews", label: "Clientes" },
          { href: "#faq", label: "FAQ" },
          { href: "#cta", label: "Contacto" },
        ]}
        cta={{
          label: "Presupuesto",
          href: "#cta",
          backgroundColor: ACCENT,
        }}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: `linear-gradient(to bottom, ${ACCENT_SOFT}, transparent)`,
        }}
      >
        <div className="container px-4 text-center">
          <h1 className="font-display mx-auto max-w-3xl text-4xl font-normal tracking-tight text-black dark:text-white md:text-5xl">
            Construcción y reformas con plazos claros y obra terminada
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body-color dark:text-body-color-dark">
            ObraFina (demo): ampliaciones, refacciones y obra nueva. Presupuesto
            detallado, seguimiento y comunicación directa con el responsable de obra.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              className="rounded-2xl px-8 py-3.5 text-[15px] font-medium text-white shadow-btn"
              style={{ backgroundColor: ACCENT }}
            >
              Solicitar visita técnica
            </button>
            <button className="rounded-2xl border border-stroke-stroke bg-transparent px-8 py-3.5 text-[15px] font-medium text-black dark:border-stroke-dark dark:text-white">
              Ver tipos de obra
            </button>
          </div>

          {/* Social proof strip */}
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-stroke-stroke bg-white/70 px-6 py-5 text-left shadow-one backdrop-blur-sm dark:border-stroke-dark dark:bg-[#0f0f11]/70">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { k: "120+", v: "obras y reformas (demo)" },
                { k: "18", v: "años de trayectoria (demo)" },
                { k: "100%", v: "seguro de responsabilidad (demo)" },
              ].map((s) => (
                <div key={s.k} className="flex items-baseline gap-3">
                  <span className="font-display text-2xl font-normal text-black dark:text-white">
                    {s.k}
                  </span>
                  <span className="text-sm text-body-color dark:text-body-color-dark">
                    {s.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-stroke-stroke bg-white py-16 dark:border-stroke-dark dark:bg-[#0f0f11]"
      >
        <div className="container px-4">
          <h2 className="font-display mb-12 text-center text-2xl font-normal tracking-tight text-black dark:text-white md:text-3xl">
            Por qué confiar en nuestra obra
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Presupuesto por escrito",
                text: "Ítems claros, plazos y forma de pago acordada antes de arrancar (demo).",
              },
              {
                title: "Seguridad en obra",
                text: "Protocolos y seguros para tu tranquilidad y la del equipo (demo).",
              },
              {
                title: "Acabados y garantía",
                text: "Control de calidad en cada etapa y respuesta ante incidencias (demo).",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-stroke-stroke/60 bg-[#FAFAF9] p-6 dark:border-stroke-dark/60 dark:bg-[#0c0c0d]"
              >
                <div
                  className="mb-3 h-10 w-10 rounded-xl dark:opacity-90"
                  style={{ backgroundColor: ACCENT_SOFT }}
                />
                <h3 className="mb-2 font-semibold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16">
        <div className="container px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black dark:text-white md:text-3xl">
              Cómo trabajamos en ObraFina
            </h2>
            <p className="mt-3 text-body-color dark:text-body-color-dark">
              Un proceso ordenado: desde la primera visita hasta la entrega de llaves.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Visita y diagnóstico",
                text: "Recorremos el espacio, medimos y definimos alcance y prioridades (demo).",
              },
              {
                step: "02",
                title: "Presupuesto y plan",
                text: "Te entregamos costos, cronograma y materiales propuestos (demo).",
              },
              {
                step: "03",
                title: "Ejecución y entrega",
                text: "Obra con seguimiento semanal y cierre con checklist de entrega (demo).",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-stroke-stroke/60 bg-white p-6 shadow-one dark:border-stroke-dark/60 dark:bg-[#0f0f11]"
              >
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider dark:text-[#fdba74]"
                  style={{
                    backgroundColor: ACCENT_SOFT,
                    color: ACCENT,
                  }}
                >
                  Paso {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {s.title}
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="reviews"
        className="border-t border-stroke-stroke bg-white py-16 dark:border-stroke-dark dark:bg-[#0f0f11]"
      >
        <div className="container px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black dark:text-white md:text-3xl">
              Lo que dicen nuestros clientes (demo)
            </h2>
            <p className="mt-3 text-body-color dark:text-body-color-dark">
              Referencias para dar tranquilidad antes de contratar una obra.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "La reforma del baño quedó impecable. Cumplieron fechas y el presupuesto fue el acordado.",
                name: "Laura Méndez",
                role: "Vivienda unifamiliar",
              },
              {
                quote:
                  "Ampliamos la cocina y el living. Siempre supimos en qué etapa estábamos.",
                name: "Roberto Díaz",
                role: "Ampliación",
              },
              {
                quote:
                  "Profesionales serios. Resolvieron un tema de humedad que otros no habían detectado.",
                name: "Ana Ferreyra",
                role: "Refacción integral",
              },
            ].map((t) => (
              <figure
                key={t.role}
                className="rounded-2xl border border-stroke-stroke/60 bg-[#FAFAF9] p-6 dark:border-stroke-dark/60 dark:bg-[#0c0c0d]"
              >
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                  “{t.quote}”
                </p>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div
                    className="h-10 w-10 shrink-0 rounded-full dark:opacity-90"
                    style={{ backgroundColor: ACCENT_SOFT }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-body-color dark:text-body-color-dark">
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black dark:text-white md:text-3xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-3 text-body-color dark:text-body-color-dark">
              Dudas habituales antes de empezar una obra.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-3">
            {[
              {
                q: "¿Trabajan con permisos y habilitaciones?",
                a: "En esta demo se muestra cómo se explica el tema de permisos y quién gestiona cada trámite según el tipo de obra.",
              },
              {
                q: "¿Cómo se paga?",
                a: "Ejemplo: señal al inicio, hitos por etapa y saldo a entrega (demo).",
              },
              {
                q: "¿Dan garantía?",
                a: "Sí: período de garantía sobre mano de obra y materiales según contrato (demo).",
              },
            ].map((i) => (
              <details
                key={i.q}
                className="group rounded-2xl border border-stroke-stroke bg-white p-5 shadow-one dark:border-stroke-dark dark:bg-[#0f0f11]"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-black dark:text-white">
                  <span className="flex items-center justify-between gap-4">
                    {i.q}
                    <span
                      className="transition-transform group-open:rotate-45 dark:text-[#fdba74]"
                      style={{ color: ACCENT }}
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-body-color dark:text-body-color-dark">
                  {i.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA form (visual only) */}
      <section id="cta" className="py-20">
        <div className="container px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-stroke-stroke bg-white p-8 shadow-one dark:border-stroke-dark dark:bg-[#0f0f11]">
              <h2 className="font-display mb-2 text-2xl font-normal tracking-tight text-black dark:text-white">
                Pedí presupuesto para tu obra
              </h2>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                Contanos el tipo de proyecto (reforma, ampliación, obra nueva) y te
                contactamos para coordinar visita (demo).
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-stroke-stroke bg-[#f8f8f8] px-4 py-3 text-[15px] outline-none dark:border-stroke-dark dark:bg-[#1a1a1d]"
                  readOnly
                  tabIndex={-1}
                  aria-hidden
                />
                <input
                  type="email"
                  placeholder="Email o teléfono"
                  className="w-full rounded-xl border border-stroke-stroke bg-[#f8f8f8] px-4 py-3 text-[15px] outline-none dark:border-stroke-dark dark:bg-[#1a1a1d]"
                  readOnly
                  tabIndex={-1}
                  aria-hidden
                />
                <textarea
                  placeholder="Mensaje (ej: reforma cocina 12 m², zona, fecha deseada)"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-stroke-stroke bg-[#f8f8f8] px-4 py-3 text-[15px] outline-none dark:border-stroke-dark dark:bg-[#1a1a1d]"
                  readOnly
                  tabIndex={-1}
                  aria-hidden
                />
                <button
                  type="button"
                  className="w-full rounded-2xl py-3.5 text-[15px] font-medium text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  Enviar solicitud (demo)
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-stroke-stroke bg-white p-8 shadow-one dark:border-stroke-dark dark:bg-[#0f0f11]">
              <p
                className="text-xs font-semibold uppercase tracking-wider dark:text-[#fdba74]"
                style={{ color: ACCENT }}
              >
                Qué incluye esta landing (demo)
              </p>
              <h3 className="font-display mt-2 text-2xl font-normal tracking-tight text-black dark:text-white">
                Credibilidad para contratar obra
              </h3>
              <p className="mt-3 text-body-color dark:text-body-color-dark">
                Secciones pensadas para empresas de construcción: proceso, prueba
                social, FAQ y contacto claro.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Bloque de métricas y trayectoria",
                  "Proceso en 3 pasos",
                  "Testimonios de clientes",
                  "FAQ sobre obra y pagos",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold dark:text-[#fdba74]"
                      style={{ backgroundColor: ACCENT_SOFT, color: ACCENT }}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-body-color dark:text-body-color-dark">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="mt-8 rounded-2xl p-5 dark:opacity-95"
                style={{ backgroundColor: ACCENT_SOFT }}
              >
                <p className="text-sm font-semibold text-black dark:text-white">
                  ¿Otro rubro?
                </p>
                <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                  Esta misma estructura sirve para electricidad, plomería, arquitectura
                  o constructoras. Ajustamos copy e imágenes a tu negocio.
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  Ir a contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stroke-stroke py-8 dark:border-stroke-dark">
        <div className="container px-4 text-center text-sm text-body-color dark:text-body-color-dark">
          Demo · ObraFina · Construcción y reformas
        </div>
      </footer>
    </div>
  );
}
