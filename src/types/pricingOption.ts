export type PricingOption = {
  id: string;
  label: string;
  description?: string;
  price: number;
  category: "pagina" | "dominio" | "extras";
  /** If set, only one option in this group can be selected (e.g. "secciones") */
  group?: string;
};
