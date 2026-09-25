"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { demoProducts } from "@/lib/demo-products";

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-5">
          {demoProducts.map((product) => (
            <div key={product.slug} className="min-w-0 flex-[0_0_92%] pl-5 sm:flex-[0_0_52%] lg:flex-[0_0_33.333%]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button type="button" className="btn btn-circle btn-outline" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous product"><ChevronLeft /></button>
        <button type="button" className="btn btn-circle btn-primary" onClick={() => emblaApi?.scrollNext()} aria-label="Next product"><ChevronRight /></button>
      </div>
    </div>
  );
}
