import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  PackageSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const highlights = [
  "Clear product information and usage guidance",
  "Quality-focused wellness formulations",
  "Storage and handling information where required",
  "Responsive product and distribution support",
];

export default function ProductHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-base-300">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/medicine-lab.svg"
          alt="Advance Nanomeds product and pharmaceutical background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral/95 via-neutral/85 to-neutral/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral/70 via-transparent to-transparent" />

      <div className="nm-container flex min-h-[500px] items-center py-10 sm:py-14 lg:min-h-[550px]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
            <Sparkles className="size-4 text-accent" />
            Advance Nanomeds Product Catalogue
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-16 tracking-tight text-white sm:text-5xl lg:text-6xl">
            Wellness products designed with{" "}
            <span className="text-accent">science, quality and care.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Explore Advance Nanomeds products with clear information about
            formulation, intended use, benefits, precautions, storage and
            product availability.
          </p>

          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm leading-4 text-white/85"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#product-catalogue"
              className="btn btn-primary rounded-full px-7"
            >
              <PackageSearch className="size-5" />
              Explore Products
            </a>

            <Link
              href="/contact"
              className="btn rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-neutral"
            >
              Contact Our Team
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent" />
              Quality-focused information
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-accent" />
              Product details in one place
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
