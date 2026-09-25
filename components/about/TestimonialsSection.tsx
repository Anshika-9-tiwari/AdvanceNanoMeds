"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Add an approved Amazon or direct-customer review here before publishing.",
    name: "Verified customer",
    source: "Amazon review",
  },
  {
    quote:
      "Add a verified testimonial that specifically reflects the customer's real experience with the product.",
    name: "Verified customer",
    source: "Customer feedback",
  },
  {
    quote:
      "Add a third approved review here. Keep the wording exactly as authorized by the customer or review source.",
    name: "Verified customer",
    source: "Approved testimonial",
  },
  {
    quote:
      "Add a verified testimonial that specifically reflects the customer's real experience with the product.",
    name: "Verified customer",
    source: "Customer feedback",
  },
  {
    quote:
      "Add a third approved review here. Keep the wording exactly as authorized by the customer or review source.",
    name: "Verified customer",
    source: "Approved testimonial",
  },
  {
    quote:
      "Add an approved Amazon or direct-customer review here before publishing.",
    name: "Verified customer",
    source: "Amazon review",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="nm-section overflow-hidden bg-neutral text-neutral-content">
      <div className="nm-container">
        <SectionHeading
          centered
          eyebrow="Customer feedback"
          title="Experiences shared by our customers."
          text="Advance Nanomeds values feedback from customers using our products. Replace the sample testimonials below with verified Amazon reviews or approved direct-customer feedback before publishing."
        />

        {/* Slider controls */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/20 transition hover:bg-white hover:text-neutral"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/20 transition hover:bg-white hover:text-neutral"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Embla viewport */}
        <div ref={emblaRef} className="mt-6 overflow-hidden">
          <div className="-mx-2 flex touch-pan-y">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.source}-${index}`}
                className="
                  min-w-0
                  flex-[0_0_100%]
                  px-2
                  md:flex-[0_0_50%]
                  xl:flex-[0_0_33.333333%]
                "
              >
                <article className="flex h-full flex-col rounded-3xl border border-white/20 bg-white/5 p-7 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-5">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/30">
                      <Quote className="size-6 text-primary" />
                    </div>

                    <div
                      className="flex gap-1 text-warning"
                      aria-label="Five star review placeholder"
                    >
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star
                          key={star}
                          className="size-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="mt-6 flex-1">
                    <p className="text-base leading-8 text-white/75">
                      “{testimonial.quote}”
                    </p>
                  </blockquote>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <div className="font-bold text-white">
                      {testimonial.name}
                    </div>

                    <div className="mt-1 text-sm text-white/50">
                      {testimonial.source}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}