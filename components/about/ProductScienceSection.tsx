import Image from "next/image";
import { Ban, CircleDot, Leaf, Microscope, Sparkles, WheatOff } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  { icon: Microscope, title: "Nano-sized liposomes", text: "Internal product specifications describe globule sizes below 200 nm." },
  { icon: Sparkles, title: "Delivery-focused formulation", text: "Developed around liposomal delivery and convenient single-dose sachets." },
  { icon: Leaf, title: "Non-GMO", text: "Formulated to meet the company&apos;s non-GMO product specification." },
  { icon: Ban, title: "Alcohol free", text: "The formulation is described as alcohol free." },
  { icon: WheatOff, title: "Gluten free", text: "The product is described as gluten free." },
  { icon: CircleDot, title: "Soy free", text: "The product is described as soy free." },
];

export default function ProductScienceSection() {
  return (
    <section className="nm-section nm-grid-bg">
      <div className="nm-container">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Product science"
              title="A closer look at our Liposomal Vitamin C."
              text="Advance Nanomeds describes its Liposomal Vitamin C as a nano-sized liposomal formulation designed around absorption, convenience and controlled handling."
            />

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                  <Icon className="size-5 text-primary" />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-base-content/60">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-base-300 bg-base-200 shadow-2xl shadow-primary/10">
            <Image
              src="/about/liposomal-group.jpg"
              alt="Advance Nanomeds Liposomal Vitamin C sachet being poured into water"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-neutral/80 p-5 text-neutral-content backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">Single-dose format</p>
              <p className="mt-2 font-bold">30 sachets per box, designed for approximately one month of use.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}