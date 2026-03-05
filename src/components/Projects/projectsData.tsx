import { Project } from "@/types/project";

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce con catálogo",
    description:
      "Tienda online con catálogo administrable, carrito integrado con WhatsApp y panel de gestión para el cliente.",
    tags: ["Next.js", "E-commerce", "WhatsApp"],
    link: "#contact",
    linkLabel: "¿Quieres uno similar?",
  },
  {
    id: 2,
    title: "Sitio corporativo",
    description:
      "Página web institucional con múltiples secciones, formulario de contacto y diseño adaptable a móviles.",
    tags: ["React", "Diseño responsive", "SEO"],
    link: "#contact",
    linkLabel: "Solicitar presupuesto",
  },
  {
    id: 3,
    title: "Landing y conversión",
    description:
      "Landing page enfocada en conversión con formularios optimizados y integración con herramientas de marketing.",
    tags: ["Landing", "Conversión", "Analytics"],
    link: "#contact",
    linkLabel: "Ver opciones",
  },
];

export default projectsData;
