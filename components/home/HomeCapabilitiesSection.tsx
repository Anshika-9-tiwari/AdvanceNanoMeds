import {
  BadgeCheck,
  FlaskConical,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const cards = [
  [
    FlaskConical,
    "Composition & strength",
    "Present active ingredients, strength, dosage form, pack details and manufacturer information in a predictable place.",
  ],
  [
    HeartPulse,
    "Uses & benefits",
    "Separate indications and practical product benefits so visitors can scan medicine information more efficiently.",
  ],
  [
    ShieldCheck,
    "Warnings & precautions",
    "Give contraindications, precautions, storage information and potential side effects the prominence they require.",
  ],
  [
    BadgeCheck,
    "Product consistency",
    "Reusable components keep the experience familiar as the Advance NanoMeds catalogue grows.",
  ],
] as const;

export default function HomeCapabilitiesSection() {
  return (
    <section className="nm-section bg-neutral text-neutral-content">
      <div className="nm-container">
        <div className="max-w-3xl ">
          <SectionHeading
            eyebrow="Built for pharmaceutical information"
            title="A product experience that stays precise as the catalogue grows."
            text="The website structure is intentionally reusable, so new medicines can be added without redesigning every product page."
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([Icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-accent/15 text-accent">
                <Icon size={21} />
              </span>
              <h3 className="mt-5 text-lg font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-content/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
