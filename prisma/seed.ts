import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is required");

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const category = await prisma.category.upsert({
    where: { slug: "general-care" },
    update: {},
    create: {
      name: "General Care",
      slug: "general-care",
      description: "Demo category. Replace with your real NanoMeds product categories.",
    },
  });

  await prisma.product.upsert({
    where: { slug: "liposomal-vitamin-c-sachets" },
    update: {},
    create: {
      name: "Liposomal Vitamin C Sachets",
      slug: "liposomal-vitamin-c-sachets",
      genericName: "Liposomal Nutrition",
      strength: "Strength",
      dosageForm: "Tablet",
      shortDescription: "Vitamin C formulated with liposomal delivery technology and presented in single-serve sachets.",
      description: "Vitamin C formulated with liposomal delivery technology and presented in single-serve sachets designed to fit into a daily routine.",
      uses: ["Designed for everyday use, Single-serve sachet format"],
      benefits: ["Add approved benefit information here"],
      drawbacks: ["Add verified limitations or drawbacks here"],
      sideEffects: ["Add approved side-effect information here"],
      warnings: ["Add product-specific warnings here"],
      precautions: ["Add approved precautions here"],
      storage: "Add approved storage instructions here",
      manufacturer: "NanoMeds",
      featured: true,
      categoryId: category.id,
      images: {
        create: [
          {
            url: "/images/medicine-blue.svg",
            alt: "Demo medicine image",
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
