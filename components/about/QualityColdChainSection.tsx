import { PackageCheck, ShieldCheck, Snowflake, ThermometerSnowflake, Truck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ThermometerSnowflake,
    title: "Preferred storage",
    text: "The company specifies refrigerated storage at approximately 36–46°F for preferred product handling.",
  },
  {
    icon: Snowflake,
    title: "Temperature awareness",
    text: "The product information emphasizes protecting liposomal structure from extended exposure to high temperatures.",
  },
  {
    icon: Truck,
    title: "Cold-chain shipping",
    text: "Advance Nanomeds uses temperature-conscious storage and delivery arrangements for U.S. distribution.",
  },
  {
    icon: PackageCheck,
    title: "Shelf-life planning",
    text: "The supplied product information states a six-month shelf life when handled under the intended conditions.",
  },
];

export default function QualityColdChainSection() {
  return (
    <section className="nm-section bg-[var(--nm-mint)]">
      <div className="nm-container">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Quality beyond manufacturing"
            title="Cold-chain care is part of the product story."
            text="For a temperature-sensitive liposomal formulation, manufacturing is only one part of quality. Advance Nanomeds also emphasizes storage and shipping conditions intended to preserve product characteristics through delivery."
          />

          <div className="rounded-3xl border border-primary/15 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-primary/10 p-3">
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-black">Why temperature control matters</h3>
                <p className="mt-2 leading-7 text-base-content/65">
                  According to the company&apos;s product information, prolonged high-temperature exposure can affect liposomal structure. That is why refrigerated storage and temperature-conscious shipping are treated as important handling requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-primary/10 bg-base-100 p-6">
              <div className="inline-flex rounded-2xl bg-primary/10 p-3">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-base-content/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
