import ProductCarousel from "@/components/products/ProductCarousel";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProductsSection() {
  return (
    <section className="nm-section">
      <div className="nm-container">
        <SectionHeading
          eyebrow="Featured catalogue"
          title="Explore Advance NanoMeds products"
          text="Four formulations built around liposomal delivery and everyday nutrition. All are currently out of stock — join the notification list to hear when they return."
        />
        <div className="mt-10">
          <ProductCarousel />
        </div>
      </div>
    </section>
  );
}
