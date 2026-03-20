export type ShopDemoProduct = {
  id: number;
  name: string;
  price: number;
  /** Path under /public */
  image: string;
  imageAlt: string;
};

/**
 * Demo catalog — images in /public/images/prendas
 */
export const SHOP_DEMO_PRODUCTS: ShopDemoProduct[] = [
  {
    id: 1,
    name: "Camisa Oxford - Azul",
    price: 59,
    image: "/images/prendas/camisa-oxford.webp",
    imageAlt: "Camisa Oxford azul",
  },
  {
    id: 2,
    name: "Pantalón Cargo - Negro",
    price: 74,
    image: "/images/prendas/pantalon-cargo-negro.webp",
    imageAlt: "Pantalón cargo negro",
  },
  {
    id: 3,
    name: "Sudadera Oversize - Gris",
    price: 89,
    image: "/images/prendas/sudadera-overzise.webp",
    imageAlt: "Sudadera oversize gris",
  },
  {
    id: 4,
    name: "Vestido Midi - Rosa",
    price: 99,
    image: "/images/prendas/vestido-midi.webp",
    imageAlt: "Vestido midi rosa",
  },
  {
    id: 5,
    name: "Chaqueta Liviana - Verde",
    price: 119,
    image: "/images/prendas/chaqueta-liviana-verde.webp",
    imageAlt: "Chaqueta liviana verde",
  },
  {
    id: 6,
    name: "Gorra Street - Unisex",
    price: 29,
    image: "/images/prendas/gorra-street.webp",
    imageAlt: "Gorra street unisex",
  },
];

export function getShopDemoProductById(id: number): ShopDemoProduct | undefined {
  return SHOP_DEMO_PRODUCTS.find((p) => p.id === id);
}
