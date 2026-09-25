import Link from "next/link";
import { ArrowRight, Microscope, Pill, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  [
    Microscope,
    "Science-led",
    "Formulation decisions begin with the science of delivery, not with marketing.",
  ],
  [
    Pill,
    "Designed for everyday wellness",
    "Formats chosen so products fit into routines people already keep.",
  ],
  [
    ShieldCheck,
    "Safety-aware",
    "Precautions, warnings and potential side effects receive dedicated visibility.",
  ],
] as const;

export default function HomeAboutSection() {
  return (
    <section className="nm-section bg-base-200/70">
      <div className="nm-container grid gap-12 lg:grid-cols-[.9fr_1.0fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About Advance NanoMeds"
            title="A modern pharmaceutical experience built around better possibilities."
            text="Advance Nanomeds is a modern wellness brand combining scientific thinking, nutritional formulation, modern delivery technology and everyday convenience.  The work centres on quality-focused product development: formulations built deliberately, described plainly, and designed to fit into ordinary routines rather than demand new ones."
          /> 
          <Link
            href="/about"
            className="btn btn-primary mt-8 rounded-full px-7"
          >
            Discover our story <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-4">
          {points.map(([Icon, title, text], index) => (
            <div
              key={title}
              className="group rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="flex gap-5">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="mb-1 text-xs font-black uppercase tracking-[0.18em] text-primary/70">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-base-content/60">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
