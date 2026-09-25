import { BadgeCheck, HeartPulse, SearchCheck, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: SearchCheck,
    title: "Easy to explore",
    text: "Clear navigation and structured product information.",
  },
  {
    icon: BadgeCheck,
    title: "Consistent catalogue",
    text: "Every medicine follows the same readable information flow.",
  },
  {
    icon: ShieldCheck,
    title: "Safety visible",
    text: "Warnings, precautions and side effects stay easy to find.",
  },
  {
    icon: HeartPulse,
    title: "Patient-friendly design",
    text: "Important information presented with less visual clutter.",
  },
];

export default function HomeTrustStrip() {
  return (
    <section className="relative z-20 -mt-1 border-b border-base-300 bg-base-100">
      <div className="nm-container grid gap-px bg-base-300 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4 bg-base-100 px-5 py-6 sm:px-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Icon size={20} />
            </span>
            <div>
              <h2 className="text-sm font-black">{title}</h2>
              <p className="mt-1 text-xs leading-5 text-base-content/55">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
