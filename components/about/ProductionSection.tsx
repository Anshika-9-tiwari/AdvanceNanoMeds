import { Boxes, Factory, Package, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { icon: Factory, value: "15,000", label: "Approx. boxes / month" },
  { icon: Package, value: "30", label: "Single-dose sachets / box" },
  { icon: Boxes, value: "1 month", label: "Approx. usage / box" },
  { icon: ShieldCheck, value: "GMP · HACCP · ISO", label: "Facility standards stated by company" },
];

export default function ProductionSection() {
  return (
    <section className="nm-section bg-base-100">
      <div className="nm-container">
        <SectionHeading
          centered
          eyebrow="Production capabilities"
          title="Specialized production with a focused monthly capacity."
          text="Because liposomal preparation requires specialized processing, Advance Nanomeds describes its current production capability as approximately 15,000 boxes per month."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-3xl border border-base-300 bg-base-200/45 p-7 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <div className="mt-5 text-2xl font-black tracking-tight">{value}</div>
              <div className="mt-2 text-sm leading-6 text-base-content/55">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}