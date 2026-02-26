import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Mejores componentes UI para sitios web modernos",
    paragraph:
      "Descubre los componentes de interfaz de usuario más efectivos para crear experiencias web modernas y atractivas que cautiven a tus usuarios.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Code Craftz",
      image: "/images/blog/author-01.png",
      designation: "Equipo de Desarrollo",
    },
    tags: ["diseño"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 formas simples de mejorar tus habilidades de diseño",
    paragraph:
      "Aprende técnicas prácticas y consejos profesionales para elevar tu nivel de diseño y crear proyectos más impactantes y profesionales.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Code Craftz",
      image: "/images/blog/author-02.png",
      designation: "Equipo de Diseño",
    },
    tags: ["desarrollo"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Consejos para mejorar rápidamente tu velocidad de codificación",
    paragraph:
      "Técnicas y herramientas que te ayudarán a escribir código más rápido y eficiente, aumentando tu productividad como desarrollador.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Code Craftz",
      image: "/images/blog/author-03.png",
      designation: "Equipo de Desarrollo",
    },
    tags: ["programación"],
    publishDate: "2025",
  },
];
export default blogData;
