import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  "Established in 2017",
  "U.S.-focused wellness brand",
  "Manufacturing facility in India",
];

export default function AboutHeroSection() {
  return (
    <section className="nm-section nm-grid-bg overflow-hidden border-b border-base-300">
      <div className="nm-container grid gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About Advance Nanomeds"
            title="Science-led wellness with a focus on better delivery."
            text="Advance Nanomeds was established in 2017 with a focus on combining pharmaceutical knowledge, nutritional formulation and modern delivery technology in practical wellness products."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-base-300 bg-base-100/80 px-4 py-3 text-sm font-semibold shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn btn-primary rounded-full px-7">
              Explore our products
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/contact" className="btn btn-outline rounded-full px-7">
              Contact us
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 size-40 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-base-300 bg-base-200 shadow-2xl shadow-primary/10">
            <Image
              src="/about/liposomal-vitamin-c.JPG"
              alt="Liposomal Vitamin C being mixed into water"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral/90 via-neutral/45 to-transparent p-6 pt-20 text-neutral-content">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">
                Advance Nanomeds
              </p>
              <p className="mt-2 max-w-md text-lg font-bold leading-7">
                Product development shaped by formulation science, usability and careful handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}