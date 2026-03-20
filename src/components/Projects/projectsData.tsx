import { Project } from "@/types/project";

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce con catálogo",
    description:
      "Tienda online con catálogo administrable, carrito integrado con WhatsApp y panel de gestión para el cliente.",
    image: "/images/projects/tienda.webp",
    tags: ["Next.js", "E-commerce", "WhatsApp"],
    link: "/projects/shop",
    linkLabel: "Ver ejemplo",
  },
  {
    id: 2,
    title: "Sitio corporativo",
    description:
      "Página web institucional con múltiples secciones, formulario de contacto y diseño adaptable a móviles.",
    image: "/images/projects/corporate.webp",
    tags: ["React", "Diseño responsive", "SEO"],
    link: "/projects/corporate",
    linkLabel: "Ver ejemplo",
  },
  {
    id: 3,
    title: "Landing y conversión",
    description:
      "Ejemplo tipo constructora: presupuesto, proceso en pasos, testimonios y FAQ para generar confianza.",
    image: "/images/projects/landing.webp",
    tags: ["Landing", "Conversión", "Analytics"],
    link: "/projects/landing",
    linkLabel: "Ver ejemplo",
  },
];

export default projectsData;
