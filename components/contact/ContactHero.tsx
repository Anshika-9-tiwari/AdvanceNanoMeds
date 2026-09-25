import Image from "next/image";
import { ArrowDown, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

const checkpoints = [
  "Product and pricing enquiries",
  "Distribution and supply discussions",
  "Corporate office in Georgia, USA",
  "Manufacturing plant in Noida, India",
];

export default function ContactHero() {
  return (
    <section className="relative isolate min-h-[550px] overflow-hidden border-b border-base-300">
      <Image
        src="/images/medicine-lab.svg"
        alt="Advance NanoMeds pharmaceutical contact background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,28,48,.93)_0%,rgba(8,42,57,.82)_48%,rgba(8,42,57,.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(11,143,138,.30),transparent_34%)]" />

      <div className="nm-container relative z-10 flex min-h-[550px] items-center py-10">
        <div className="max-w-5xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-accent" />
            Talk to Advance NanoMeds
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-16 sm:text-5xl lg:text-6xl">
            Let&apos;s start a conversation about products, supply and partnership.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Reach our team for product information, pricing, distribution, supply or general enquiries. We&apos;ll help direct your message to the right team.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {checkpoints.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="size-5 shrink-0 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="btn btn-primary rounded-full px-7">
              Send an enquiry
              <ArrowDown className="size-4" />
            </a>

            <a
              href="#locations"
              className="btn rounded-full border-white/25 bg-white/10 px-7 text-white shadow-none backdrop-blur-sm hover:border-white/40 hover:bg-white/15"
            >
              <MapPin className="size-4" />
              View locations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}