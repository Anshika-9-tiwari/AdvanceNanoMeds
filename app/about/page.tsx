import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutStorySection from "@/components/about/AboutStorySection";
import DrIqbalSection from "@/components/about/DrIqbalSection";
import ProductScienceSection from "@/components/about/ProductScienceSection";
import QualityColdChainSection from "@/components/about/QualityColdChainSection";
import ProductionSection from "@/components/about/ProductionSection";
import AboutDirectionSection from "@/components/about/AboutDirectionSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import AboutCTASection from "@/components/about/AboutCTASection";

export const metadata = {
  title: "About | Advance Nanomeds",
  description:
    "Learn about Advance Nanomeds, its leadership, liposomal Vitamin C, quality approach, cold-chain handling and production capabilities.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <DrIqbalSection />
      <ProductScienceSection />
      <QualityColdChainSection />
      <ProductionSection />
      <AboutDirectionSection />
      <TestimonialsSection />
      <AboutCTASection />
    </>
  );
}