import Image from "next/image";
import { GraduationCap, Quote } from "lucide-react";

export default function DrIqbalSection() {
  return (
    <section className="nm-section bg-neutral text-neutral-content">
      <div className="nm-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
          <Image
            src="/about/about-boss.JPG"
            alt="Advance Nanomeds leadership in the company office"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-accent">
            <GraduationCap className="size-4" />
            Leadership
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Dr. Iqbal Ahmad, MPharm, PhD
          </h2>
          <p className="mt-3 text-lg font-semibold text-white/80">General Manager, Advance Nanomeds</p>

          <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6">
            <Quote className="size-8 text-accent" />
            <p className="mt-4 text-lg leading-8 text-white/80">
              Our focus is to combine product quality, practical science and careful distribution. For temperature-sensitive liposomal products, maintaining the intended storage conditions is part of delivering the quality customers expect.
            </p>
          </div>

          <p className="mt-4 max-w-2xl leading-8 text-white/65 px-2">
            Dr. Ahmad&apos;s company introduction describes Advance Nanomeds as a U.S.-based business established in 2017, supported by its manufacturing operation in India and focused on supplying Liposomal Vitamin C throughout the United States.
          </p>
        </div>
      </div>
    </section>
  );
}