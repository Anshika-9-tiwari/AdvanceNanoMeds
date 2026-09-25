import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-18">
      <div className="nm-container overflow-hidden rounded-[2.2rem] bg-primary px-6 py-12 text-primary-content sm:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] opacity-70">Need product information?</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Talk to Advance NanoMeds about products, pricing or availability.
            </h2>
          </div>
          <Link href="/contact" className="btn border-0 bg-white text-neutral hover:bg-white/90">
            Contact us <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
