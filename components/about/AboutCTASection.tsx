import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function AboutCTASection() {
  return (
    <section className="nm-section">
      <div className="nm-container">
        <div className="overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-primary-content shadow-2xl shadow-primary/20 sm:px-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] opacity-75">Connect with Advance Nanomeds</div>
              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                Want to discuss our products, samples, distribution or commercial quantities?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 opacity-80">
                Contact our team for product information, availability and business enquiries.
              </p>
            </div>
            <Link href="/contact" className="btn rounded-full px-7">
              <Mail className="size-4" />
              Contact our team
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
