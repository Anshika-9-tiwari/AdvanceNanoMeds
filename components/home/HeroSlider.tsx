"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  FlaskConical,
  HeartPulse,
  Pause,
  Play,
  ShieldCheck,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Advance NanoMeds",
    title: "Advanced nutrition. Delivered differently",
    text: "Science-led wellness powered by advanced liposomal delivery and thoughtfully formulated nutrition.",
    primaryLabel: "Explore products",
    primaryHref: "/products",
    secondaryLabel: "About Advance NanoMeds",
    secondaryHref: "/about",
    image:
      "https://images.pexels.com/photos/7230183/pexels-photo-7230183.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imagePosition: "center 42%",
    badge: "Trusted product information",
    icon: BadgeCheck,
  },
  {
    eyebrow: "Quality at every step",
    title: "From pharmaceutical science to dependable products.",
    text: "A modern platform designed to present composition, strength, dosage form, uses and safety information in a consistent, easy-to-read format.",
    primaryLabel: "View our catalogue",
    primaryHref: "/products",
    secondaryLabel: "Our approach",
    secondaryHref: "/about",
    image:
      "https://images.pexels.com/photos/11589208/pexels-photo-11589208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imagePosition: "center center",
    badge: "Science-led presentation",
    icon: FlaskConical,
  },
  {
    eyebrow: "Clearer medicine information",
    title: "Important product details, made easier to understand.",
    text: "Find uses, benefits, potential drawbacks, precautions, storage guidance, pricing enquiries and supporting resources in one place.",
    primaryLabel: "Browse medicines",
    primaryHref: "/products",
    secondaryLabel: "Contact us",
    secondaryHref: "/contact",
    image:
      "https://images.pexels.com/photos/8657301/pexels-photo-8657301.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imagePosition: "center center",
    badge: "Designed around clarity",
    icon: HeartPulse,
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 6500);

    return () => window.clearInterval(timer);
  }, [emblaApi, isPlaying]);

  return (
    <section className="relative overflow-hidden bg-neutral text-white" aria-label="Advance NanoMeds highlights">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => {
            const Icon = slide.icon;

            return (
              <article key={slide.title} className="relative min-w-0 flex-[0_0_100%]">
                <div
                  className="absolute inset-0 scale-[1.01] bg-cover bg-center transition-transform duration-[7000ms] ease-out"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: slide.imagePosition,
                  }}
                  aria-hidden="true"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,25,42,.94)_0%,rgba(8,35,53,.86)_38%,rgba(7,35,50,.48)_67%,rgba(6,25,42,.35)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(46,200,181,.2),transparent_29%)]" />

                <div className="nm-container relative z-10 flex min-h-[500px] items-center py-10 sm:min-h-[530px] lg:min-h-[550px]">
                  <div className="max-w-3xl py-6 md:py-2">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-bold backdrop-blur-md uppercase  tracking-[0.18em] text-white/75">
                      <ShieldCheck size={15} className="text-accent" />
                      {slide.eyebrow}
                    </div>

                    <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.038em] text-white sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                      {slide.text}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <Link href={slide.primaryHref} className="btn btn-primary rounded-full border-0 px-7 font-bold shadow-lg shadow-black/10">
                        {slide.primaryLabel}
                        <ArrowRight size={17} />
                      </Link>
                      <Link href={slide.secondaryHref} className="btn rounded-full border-white/30 bg-white/10 px-7 font-bold text-white backdrop-blur-md hover:border-white/50 hover:bg-white/20">
                        {slide.secondaryLabel}
                      </Link>
                    </div>

                    <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-md">
                      <span className="grid size-10 place-items-center rounded-xl bg-accent/20 text-accent">
                        <Icon size={19} />
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white">{slide.badge}</div>
                        <div className="mt-0.5 text-xs text-white/55">Advance NanoMeds pharmaceutical platform</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="nm-container flex justify-end gap-4 pb-6 sm:pb-10">
          
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              type="button"
              className="btn btn-circle btn-sm border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white/15"
              onClick={() => setIsPlaying((value) => !value)}
              aria-label={isPlaying ? "Pause hero slider" : "Play hero slider"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              type="button"
              className="btn btn-circle border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white/15"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous hero slide"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              className="btn btn-circle border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white/15"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next hero slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
