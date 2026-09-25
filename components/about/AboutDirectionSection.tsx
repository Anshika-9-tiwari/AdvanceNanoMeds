import { FlaskConical, ShieldCheck, Sparkles, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    icon: FlaskConical,
    title: "Scientific focus",
    text: "Use formulation knowledge and laboratory thinking to guide product development and product communication.",
  },
  {
    icon: ShieldCheck,
    title: "Quality mindset",
    text: "Treat manufacturing standards, storage conditions and product handling as connected parts of quality.",
  },
  {
    icon: Users,
    title: "Customer clarity",
    text: "Explain products, usage and handling requirements in language customers and partners can understand.",
  },
  {
    icon: Sparkles,
    title: "Practical innovation",
    text: "Apply modern delivery technology in formats intended to fit naturally into everyday routines.",
  },
];

export default function AboutDirectionSection() {
  return (
    <section className="nm-section">
      <div className="nm-container">
        <SectionHeading
          centered
          eyebrow="Our direction"
          title="Science, care and trust in every interaction."
          text="Advance Nanomeds aims to bring together formulation science, quality-conscious manufacturing, practical delivery and clear product information."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-base-300 bg-base-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <Icon className="size-6 text-primary" />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-base-content/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}