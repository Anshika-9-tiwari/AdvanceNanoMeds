export type DemoProduct = {
  slug: string;
  name: string;
  genericName: string;
  strength: string;
  dosageForm: string;
  category: string;
  shortDescription: string;
  image: string;
  priceLabel: string;
};

// Visual/demo content only. Replace with approved NanoMeds product data.
export const demoProducts: DemoProduct[] = [
  {
    slug: "liposomal-vitamin-c-sachets",
    name: "Liposomal Vitamin C Sachets",
    genericName: "Liposomal Nutrition",
    strength: "Strength",
    dosageForm: "Tablet",
    category: "General Care",
    shortDescription: "Vitamin C formulated with liposomal delivery technology and presented in single-serve sachets.",
    image: "/images/liposomal-vitamin-c.jpg",
    priceLabel: "Contact for price",
  },
  {
    slug: "liposomal-ferrous-ascorbate",
    name: "Liposomal Ferrous Ascorbate",
    genericName: "Liposomal Nutrition",
    strength: "Strength",
    dosageForm: "Capsule",
    category: "Wellness",
    shortDescription: "Ferrous ascorbate formulated with liposomal delivery technology.",
    image: "/images/medicine-lab.svg",
    priceLabel: "Contact for price",
  },
  {
    slug: "liposomal-glutathion-sachets",
    name: "Liposomal Glutathione Sachets",
    genericName: "Liposomal Nutrition",
    strength: "Strength",
    dosageForm: "Syrup",
    category: "Everyday Health",
    shortDescription: "Glutathione formulated with liposomal delivery technology and supplied in sachets.",
    image: "/about/liposomal-vit-c.jpg",
    priceLabel: "Contact for price",
  },
  {
    slug: "pea-protein-powder",
    name: "Pea Protein Powder",
    genericName: "Plant Protein",
    strength: "Strength",
    dosageForm: "Powder",
    category: "Everyday Health",
    shortDescription: "A plant-based pea protein powder for everyday nutrition.",
    image: "/images/medicine-lab.svg",
    priceLabel: "Contact for price",
  },
];
