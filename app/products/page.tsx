import ProductCard from "@/components/products/ProductCard";
import ProductHero from "@/components/products/ProductHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { demoProducts } from "@/lib/demo-products";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <ProductHero />

      <section id="product-catalogue" className="nm-section scroll-mt-24">
        <div className="nm-container">
          <SectionHeading
            eyebrow="Product catalogue"
            title="Advance Nanomeds products"
            text="These are demo cards. The final page will query PostgreSQL through Prisma and support category filters, search, pagination and real product imagery."
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {["All products", "General Care", "Wellness", "Everyday Health"].map(
              (label, index) => (
                <button
                  key={label}
                  className={`btn btn-sm rounded-full ${
                    index === 0
                      ? "btn-primary"
                      : "btn-ghost border-base-300"
                  }`}
                >
                  {label}
                </button>
              ),
            )}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demoProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
