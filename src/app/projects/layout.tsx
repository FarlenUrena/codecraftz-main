import Link from "next/link";

export default function ProjectsDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50 flex items-center justify-center gap-2 border-b border-stroke-stroke bg-white/95 px-4 py-2 text-sm backdrop-blur-sm dark:border-stroke-dark dark:bg-[#0c0c0d]/95">
        <span className="rounded bg-[#0ea5e9]/15 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-[#0ea5e9] dark:bg-[#0ea5e9]/25 dark:text-[#7dd3fc]">
          Demo
        </span>
        <span className="text-body-color dark:text-body-color-dark">
          Ejemplo visual
        </span>
        <Link
          href="/#projects"
          className="ml-2 text-[#0ea5e9] hover:underline dark:text-[#7dd3fc]"
        >
          ← Volver
        </Link>
      </div>
      {children}
    </div>
  );
}
