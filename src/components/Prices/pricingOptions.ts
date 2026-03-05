import { PricingOption } from "@/types/pricingOption";

export const BASE_PRICE: number = 60;

export const pricingOptions: PricingOption[] = [
  // Página — secciones: solo una opción (group)
  {
    id: "sec-3",
    label: "3 secciones",
    description: "Ideal para presentación sencilla: inicio, servicios, contacto.",
    price: 40,
    category: "pagina",
    group: "secciones",
  },
  {
    id: "sec-5",
    label: "5 secciones",
    description: "Más espacio para contenido: añade sobre nosotros, testimonios, etc.",
    price: 85,
    category: "pagina",
    group: "secciones",
  },
  {
    id: "sec-10",
    label: "Hasta 10 secciones",
    description: "Sitio completo con múltiples páginas y bloques.",
    price: 180,
    category: "pagina",
    group: "secciones",
  },
  {
    id: "diseno",
    label: "Colores y diseño a elegir",
    description: "Personalizamos paleta y estilo según tu marca.",
    price: 45,
    category: "pagina",
  },
  {
    id: "formulario",
    label: "Formulario de contacto",
    description: "Los visitantes pueden enviarte mensajes desde la web.",
    price: 35,
    category: "pagina",
  },
  {
    id: "multi-idioma",
    label: "2 lenguajes",
    description: "Sitio preparado para mostrar contenido en dos idiomas.",
    price: 50,
    category: "pagina",
  },
  {
    id: "tema-oscuro",
    label: "Tema claro/oscuro",
    description: "El usuario puede elegir entre modo claro y oscuro.",
    price: 30,
    category: "pagina",
  },
  // Dominio y hosting
  {
    id: "dominio-propio",
    label: "Dominio propio",
    description: "Ej: tunegocio.com. Incluye registro por 1 año.",
    price: 25,
    category: "dominio",
  },
  {
    id: "hosting-incluido",
    label: "Hosting incluido 1 año",
    description: "Solo para landing page. Alojamiento. Incluido.",
    price: 0,
    category: "dominio",
  },
  // Extras
  {
    id: "base-datos",
    label: "Base de datos",
    description: "Para guardar datos, usuarios o contenido administrable.",
    price: 220,
    category: "extras",
  },
  {
    id: "carrito-whatsapp",
    label: "Carrito + WhatsApp",
    description: "Catálogo con carrito que envía pedidos por WhatsApp.",
    price: 180,
    category: "extras",
  },
  {
    id: "catalogo-admin",
    label: "Catálogo administrable",
    description: "Panel para que tú edites productos o servicios sin programar.",
    price: 200,
    category: "extras",
  },
  {
    id: "seo-basico",
    label: "Optimización SEO básica",
    description: "Títulos, descripciones y estructura para buscadores.",
    price: 25,
    category: "extras",
  },
];

/** Opción de pago en cuotas */
export const DOWN_PAYMENT_PERCENT = 20; // % del total a pagar al inicio
export const DOWN_PAYMENT_MIN = 300; // enganche mínimo en USD
export const INSTALLMENT_MONTHS = 12; // cuotas mensuales

export const categoryLabels: Record<PricingOption["category"], string> = {
  pagina: "Página web",
  dominio: "Dominio y hosting",
  extras: "Funcionalidades extra",
};
