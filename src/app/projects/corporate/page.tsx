"use client";

import Image from "next/image";

import DemoResponsiveHeader from "../components/DemoResponsiveHeader";

export default function DemoCorporatePage() {
  const services = [
    {
      title: "Transformación digital",
      description:
        "Webs y portales con estructura clara, performance y un flujo de contacto que convierte (demo).",
    },
    {
      title: "Experiencia de marca",
      description:
        "Diseño consistente: secciones, jerarquía visual y contenido pensado para confianza corporativa.",
    },
    {
      title: "Soporte y evolución",
      description:
        "Mantenimiento, mejoras continuas y ajustes según analítica y objetivos (demo).",
    },
  ];

  const values = [
    {
      title: "Cumplimiento",
      text: "Metodología ordenada, entregables y comunicación sin vueltas.",
    },
    {
      title: "Eficiencia",
      text: "Menos fricción: procesos rápidos y experiencia fluida para usuarios.",
    },
    {
      title: "Atención humana",
      text: "Cercanía real con el cliente: seguimiento y soporte cuando hace falta.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Fundación",
      text: "Atlas Logistics arranca con servicios de transporte y atención de calidad.",
    },
    {
      year: "2014",
      title: "Crecimiento regional",
      text: "Se suman rutas, alianzas y procesos internos para ganar eficiencia.",
    },
    {
      year: "2019",
      title: "Estandarización",
      text: "Se consolidan metodologías y criterios de calidad para el equipo.",
    },
    {
      year: "2023",
      title: "Digitalización",
      text: "Portales y comunicaciones modernas para clientes y colaboradores (demo).",
    },
  ];

  return (
    <div className="bg-[#FAFAF9] dark:bg-[#0c0c0d]">
      <DemoResponsiveHeader
        brandName="Atlas Logistics"
        links={[
          { href: "#about", label: "Nosotros" },
          { href: "#services", label: "Servicios" },
          { href: "#timeline", label: "Historia" },
          { href: "#team", label: "Equipo" },
          { href: "#contact", label: "Contacto" },
        ]}
      />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-normal tracking-tight text-black dark:text-white md:text-5xl">
              Atlas Logistics: transporte y entregas confiables
            </h1>
            <p className="mt-6 text-lg text-body-color dark:text-body-color-dark">
              Rutas planificadas, seguimiento claro y atención real. Esta demo muestra cómo se vería una web corporativa consolidada.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-2xl bg-[#fbb040] px-8 py-3.5 text-[15px] font-medium text-black shadow-btn">
                Solicitar propuesta
              </button>
              <button className="rounded-2xl border border-stroke-stroke bg-transparent px-8 py-3.5 text-[15px] font-medium text-black dark:border-stroke-dark dark:text-white">
                Ver alcance (demo)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-stroke-stroke bg-[#fff7e6] py-10 dark:border-stroke-dark dark:bg-[#2b1a00]">
        <div className="container px-4">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            {[
              { k: "15+", v: "años operando en logística" },
              { k: "2.400+", v: "rutas planificadas (demo)" },
              { k: "4.9/5", v: "satisfacción de clientes (demo)" },
            ].map((s) => (
              <div key={s.k}>
                <p className="font-display text-3xl font-normal text-black dark:text-white">
                  {s.k}
                </p>
                <p className="mt-1 text-sm text-body-color dark:text-body-color-dark">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-stroke-stroke bg-white py-16 dark:border-stroke-dark dark:bg-[#0f0f11]">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display mb-4 text-2xl font-normal tracking-tight text-black dark:text-white md:text-3xl">
                Quiénes somos
              </h2>
              <p className="text-body-color dark:text-body-color-dark">
                Atlas Logistics trabaja con empresas que necesitan entregas constantes, con tiempos claros y seguimiento. Esta demo usa datos inventados para mostrar el estilo de una web corporativa.
              </p>
              <p className="mt-4 text-body-color dark:text-body-color-dark">
                Diseñamos una estructura por secciones: credibilidad, servicios, historia y contacto.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-2xl border border-stroke-stroke/60 bg-[#FAFAF9] p-5 dark:border-stroke-dark/60 dark:bg-[#0c0c0d]"
                  >
                    <p className="text-sm font-semibold text-black dark:text-white">
                      {v.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-body-color dark:text-body-color-dark">
                      {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-stroke-stroke/60 bg-[#f5f6f8] shadow-one dark:border-stroke-dark/60 dark:bg-[#161619]">
              <Image
                src="/images/corporate/hero.webp"
                alt="Atlas Logistics — operaciones y logística (demo)"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container px-4">
          <h2 className="font-display mb-12 text-center text-2xl font-normal tracking-tight text-black dark:text-white md:text-3xl">
            Servicios corporativos
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-stroke-stroke/60 bg-white p-6 shadow-one dark:border-stroke-dark/60 dark:bg-[#0f0f11]"
              >
                <div className="mb-4 h-12 w-12 rounded-xl bg-[#fbb040]/15 dark:bg-[#fbb040]/20" />
                <h3 className="mb-2 font-semibold text-black dark:text-white">
                  {s.title}
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {s.description}
                </p>
                <div className="mt-5 h-px w-full bg-stroke-stroke/70 dark:bg-stroke-dark/70" />
                <p className="mt-4 text-xs text-body-color dark:text-body-color-dark">
                  Alcance (demo): alcance, cronograma y plan de puesta en marcha.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="border-t border-stroke-stroke bg-white py-16 dark:border-stroke-dark dark:bg-[#0f0f11]">
        <div className="container px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black dark:text-white md:text-3xl">
              Hitos de Atlas (demo)
            </h2>
            <p className="mt-3 text-body-color dark:text-body-color-dark">
              Una línea de tiempo pensada para reforzar credibilidad en empresas consolidadas.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="rounded-2xl border border-stroke-stroke/60 bg-[#FAFAF9] p-6 dark:border-stroke-dark/60 dark:bg-[#0c0c0d]"
                >
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#fbb040]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#fbb040] dark:bg-[#fbb040]/15 dark:text-[#fde68a]">
                    {m.year}
                  </div>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    {m.title}
                  </p>
                  <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16">
        <div className="container px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-2xl font-normal tracking-tight text-black dark:text-white md:text-3xl">
              Equipo directivo (demo)
            </h2>
            <p className="mt-3 text-body-color dark:text-body-color-dark">
              Roles clave para operar con calidad y responder rápido a empresas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Sofía Montiel", role: "Dirección Comercial" },
              { name: "Martín Salas", role: "Operaciones" },
              { name: "Camila Rojas", role: "Logística y Calidad" },
              { name: "Diego Herrera", role: "Soporte a Clientes" },
            ].map((p) => (
              <div
                key={p.role}
                className="rounded-2xl border border-stroke-stroke/60 bg-white p-6 shadow-one dark:border-stroke-dark/60 dark:bg-[#0f0f11]"
              >
                <div className="mb-4 h-14 w-14 rounded-full bg-[#fbb040]/15 dark:bg-[#fbb040]/20" />
                <p className="text-sm font-semibold text-black dark:text-white">
                  {p.name}
                </p>
                <p className="mt-1 text-xs text-body-color dark:text-body-color-dark">
                  {p.role}
                </p>
                <div className="mt-4 h-px w-full bg-stroke-stroke/70 dark:bg-stroke-dark/70" />
                <p className="mt-4 text-xs text-body-color dark:text-body-color-dark">
                  Bio corta (demo). Experiencia en entregas, procesos y atención.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact (visual only) */}
      <section id="contact" className="border-t border-stroke-stroke bg-white py-16 dark:border-stroke-dark dark:bg-[#0f0f11]">
        <div className="container px-4">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
              <h2 className="font-display mb-2 text-2xl font-normal tracking-tight text-black dark:text-white">
                Hablemos con Atlas
              </h2>
              <p className="mb-8 text-body-color dark:text-body-color-dark">
                Pedí una propuesta. Esta demo usa datos inventados para mostrar una web corporativa de una empresa consolidada.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
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
                    placeholder="Email corporativo"
                    className="w-full rounded-xl border border-stroke-stroke bg-[#f8f8f8] px-4 py-3 text-[15px] outline-none dark:border-stroke-dark dark:bg-[#1a1a1d]"
                    readOnly
                    tabIndex={-1}
                    aria-hidden
                  />
                </div>
                <input
                  type="text"
                  placeholder="Tema"
                  className="w-full rounded-xl border border-stroke-stroke bg-[#f8f8f8] px-4 py-3 text-[15px] outline-none dark:border-stroke-dark dark:bg-[#1a1a1d]"
                  readOnly
                  tabIndex={-1}
                  aria-hidden
                />
                <textarea
                  placeholder="Mensaje (ej: rutas semanales, destino, volumen) "
                  rows={4}
                  className="w-full resize-none rounded-xl border border-stroke-stroke bg-[#f8f8f8] px-4 py-3 text-[15px] outline-none dark:border-stroke-dark dark:bg-[#1a1a1d]"
                  readOnly
                  tabIndex={-1}
                  aria-hidden
                />
                <button
                  type="button"
                  className="rounded-2xl bg-[#fbb040] px-8 py-3.5 text-[15px] font-medium text-black"
                >
                  Enviar (demo)
                </button>
              </form>
            </div>

            <aside className="rounded-2xl border border-stroke-stroke/60 bg-[#FAFAF9] p-6 dark:border-stroke-dark/60 dark:bg-[#0c0c0d]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#fbb040] dark:text-[#fde68a]">
                Datos rápidos
              </p>
              <div className="mt-4 space-y-3 text-sm text-body-color dark:text-body-color-dark">
                <div className="flex items-center justify-between">
                  <span>Atención</span>
                  <span className="font-medium text-black dark:text-white">9–19h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tiempo de respuesta</span>
                  <span className="font-medium text-black dark:text-white">12h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cobertura</span>
                  <span className="font-medium text-black dark:text-white">Nacional (demo)</span>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-stroke-stroke/70 dark:bg-stroke-dark/70" />
              <p className="mt-6 text-sm font-semibold text-black dark:text-white">
                Señales de confianza (demo)
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["ISO", "SSL", "SLA"].map((b) => (
                  <div
                    key={b}
                    className="flex items-center justify-center rounded-xl border border-stroke-stroke/60 bg-white py-3 text-xs font-semibold text-body-color dark:border-stroke-dark/60 dark:bg-[#0f0f11] dark:text-body-color-dark"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className="border-t border-stroke-stroke py-8 dark:border-stroke-dark">
        <div className="container px-4 text-center text-sm text-body-color dark:text-body-color-dark">
          Demo · Atlas Logistics · Web corporativa consolidada
        </div>
      </footer>
    </div>
  );
}

