"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { HeartPulse } from "lucide-react";
import { useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const healthQuotes = [
  {
    image: "https://images.pexels.com/photos/7208628/pexels-photo-7208628.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Person holding vitamins with a glass of water",
    label: "Daily wellbeing",
    quote: "Healthy routines are built one thoughtful choice at a time.",
  },
  {
    image: "https://images.pexels.com/photos/4443441/pexels-photo-4443441.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Fresh vegetables, fruit and green juice",
    label: "Nutrition",
    quote: "Give your body variety, balance and the nutrients it needs.",
  },
  {
    image: "https://images.pexels.com/photos/5622211/pexels-photo-5622211.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Fresh fruit, vegetables and fitness accessories",
    label: "Balanced lifestyle",
    quote: "Move often, eat thoughtfully and make space for recovery.",
  },
  {
    image: "https://images.pexels.com/photos/3873201/pexels-photo-3873201.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Vitamins beside fresh orange",
    label: "Everyday care",
    quote: "Consistency matters more than perfection when building healthy habits.",
  },
] as const;

const socialPack = [
  {
    image: "/social-pack/social-1.png",
    alt: "Advance NanoMeds Vitamin C social media artwork",
  },
  {
    image: "/social-pack/social-2.png",
    alt: "Advance NanoMeds orange wellness social media artwork",
  },
  {
    image: "/social-pack/social-3.png",
    alt: "Advance NanoMeds Liposomal Vitamin C product social media artwork",
  },
  {
    image: "/social-pack/social-4.png",
    alt: "Advance NanoMeds product quality social media artwork",
  },
  {
    image: "/social-pack/social-5.png",
    alt: "Advance NanoMeds Vitamin C education social media artwork",
  },
] as const;

const healthSlides = [...healthQuotes, ...healthQuotes];
const socialSlides = [...socialPack, ...socialPack];

function HealthCard({
  item,
  duplicate = false,
}: {
  item: (typeof healthQuotes)[number];
  duplicate?: boolean;
}) {
  return (
    <article
      aria-hidden={duplicate || undefined}
      className="group relative h-[260px] min-w-0 flex-[0_0_280px] overflow-hidden rounded-[1.8rem] bg-neutral shadow-xl sm:h-[300px] sm:flex-[0_0_320px] lg:h-[350px] lg:flex-[0_0_350px]"
    >
      <Image
        src={item.image}
        alt={duplicate ? "" : item.alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 350px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071a28]/95 via-[#071a28]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] backdrop-blur-md">
          <HeartPulse size={13} className="text-accent" />
          {item.label}
        </div>
        <p className="max-w-[290px] text-xl font-extrabold leading-snug tracking-[-0.025em] sm:text-2xl">
          {item.quote}
        </p>
      </div>
    </article>
  );
}

function SocialCard({
  item,
  duplicate = false,
}: {
  item: (typeof socialPack)[number];
  duplicate?: boolean;
}) {
  return (
    <article
      aria-hidden={duplicate || undefined}
      className="group relative aspect-square min-w-0 flex-[0_0_280px] overflow-hidden rounded-[1.8rem] border border-base-300 bg-white shadow-lg sm:flex-[0_0_320px] lg:flex-[0_0_340px]"
    >
      <Image
        src={item.image}
        alt={duplicate ? "" : item.alt}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.025]"
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 350px"
      />
    </article>
  );
}

export default function HealthSocialShowcase() {
  const healthAutoScroll = useRef(
    AutoScroll({
      speed: 1,
      direction: "backward",
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const socialAutoScroll = useRef(
    AutoScroll({
      speed: 1,
      direction: "forward",
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [healthEmblaRef, healthEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [healthAutoScroll.current],
  );

  const [socialEmblaRef, socialEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [socialAutoScroll.current],
  );

  useEffect(() => {
    if (!healthEmblaApi || !socialEmblaApi) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      const healthPlugin = healthEmblaApi.plugins().autoScroll;
      const socialPlugin = socialEmblaApi.plugins().autoScroll;

      if (reducedMotion.matches) {
        healthPlugin?.stop();
        socialPlugin?.stop();
        return;
      }

      healthPlugin?.play();
      socialPlugin?.play();
    };

    syncMotionPreference();
    reducedMotion.addEventListener("change", syncMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", syncMotionPreference);
    };
  }, [healthEmblaApi, socialEmblaApi]);

  return (
    <section className="nm-section overflow-hidden bg-base-200/70">
      <div className="nm-container">
        <div className="grid gap-7 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <SectionHeading
            eyebrow="Health & social stories"
            title="Wellness inspiration and Advance NanoMeds social content."
            text="A visual space for healthy-lifestyle inspiration, product education and the social media artwork created for Advance NanoMeds."
          />
        </div>
      </div>

      <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-10 px-4 md:px-14">
        <div
          ref={healthEmblaRef}
          className="w-full cursor-grab overflow-hidden active:cursor-grabbing"
          aria-label="Health and wellness inspiration"
          aria-roledescription="carousel"
        >
          <div className="flex touch-pan-y gap-5 pl-4 sm:pl-6 lg:pl-8">
            {healthSlides.map((item, index) => (
              <HealthCard
                key={`${item.quote}-${index}`}
                item={item}
                duplicate={index >= healthQuotes.length}
              />
            ))}
          </div>
        </div>

        {/* <div className="nm-container flex items-center gap-3 pt-3">
          <span className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
            <Images size={17} />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
              Advance NanoMeds social media pack
            </p>
          </div>
        </div> */}

        <div
          ref={socialEmblaRef}
          className="w-full cursor-grab overflow-hidden active:cursor-grabbing"
          aria-label="Advance NanoMeds social media gallery"
          aria-roledescription="carousel"
        >
          <div className="flex touch-pan-y gap-5 pl-4 sm:pl-6 lg:pl-8">
            {socialSlides.map((item, index) => (
              <SocialCard
                key={`${item.image}-${index}`}
                item={item}
                duplicate={index >= socialPack.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
