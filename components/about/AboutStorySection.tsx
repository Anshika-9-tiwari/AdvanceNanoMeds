import Image from "next/image";
import { Building2, CalendarDays, Factory, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const facts = [
  { icon: CalendarDays, label: "Founded", value: "2017" },
  { icon: MapPin, label: "U.S. presence", value: "Georgia" },
  { icon: Factory, label: "Manufacturing", value: "India" },
  { icon: Building2, label: "Standards", value: "GMP · HACCP · ISO" },
];

export default function AboutStorySection() {
  return (
    <section className="nm-section bg-base-100">
      <div className="nm-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[520px]">
          <div className="absolute left-0 top-0 h-[78%] w-[78%] overflow-hidden rounded-[2rem] border border-base-300 shadow-xl">
            <Image
              src="/about/about-owner.JPG"
              alt="Advance Nanomeds leadership working in the office"
              fill
              sizes="(max-width: 1024px) 80vw, 38vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[48%] w-[58%] overflow-hidden rounded-[1.75rem] border-8 border-base-100 bg-base-200 shadow-xl">
            <Image
              src="/about/about-1.jpg"
              alt="Liposomal Vitamin C product use demonstration"
              fill
              sizes="(max-width: 1024px) 58vw, 29vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Our story"
            title="From a focused idea to an international wellness operation."
            text="Advance Nanomeds LLC began in 2017. The company describes its model as combining U.S. distribution with manufacturing capabilities in India, where it operates a facility certified to GMP, HACCP and ISO standards."
          />

          <div className="mt-3 space-y-3 text-base leading-8 text-base-content/70">
            <p>
              The company&apos;s current focus includes Liposomal Vitamin C produced at its manufacturing facility and supplied to customers across the United States, including through Amazon. We have been maintaining a good rating & feedback on Amazon. 
            </p>
            <p>
              The goal is straightforward: pair formulation and production knowledge with dependable handling so that the product delivered to customers reflects the specifications established during manufacturing.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-base-300 bg-base-200/55 p-5">
                <Icon className="size-5 text-primary" />
                <div className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-base-content/45">
                  {label}
                </div>
                <div className="mt-1 font-bold text-base-content">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}