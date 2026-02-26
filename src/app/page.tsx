import { Metadata } from "next";
import FinalLayout from './../components/Layout/FinalLayout';

export const metadata: Metadata = {
  title: "Code Craftz | Desarrollo Web y Aplicaciones",
  description: "Empresa enfocada en páginas y aplicaciones web. Diseñamos y desarrollamos sitios web modernos, rápidos y seguros para tu negocio.",
  keywords: ["desarrollo web", "aplicaciones web", "diseño web", "Code Craftz", "sitios web"],
  authors: [{ name: "Code Craftz" }],
  openGraph: {
    title: "Code Craftz | Desarrollo Web y Aplicaciones",
    description: "Empresa enfocada en páginas y aplicaciones web. Diseñamos y desarrollamos sitios web modernos, rápidos y seguros.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Craftz | Desarrollo Web y Aplicaciones",
    description: "Empresa enfocada en páginas y aplicaciones web. Diseñamos y desarrollamos sitios web modernos, rápidos y seguros.",
  },
};

export default function Home() {
  return (
    <>
      <FinalLayout />
    </>
  );
}
