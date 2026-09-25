import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CirclePlay } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomeVideoSection() {
  return (
    <section className="nm-section">
      <div className="nm-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-neutral shadow-2xl">
          <Image
            src="/images/medicine-lab.svg"
            alt="Pharmaceutical laboratory illustration"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-neutral/20 to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md">
            <CirclePlay size={30} />
          </span>
          <div className="absolute inset-x-6 bottom-6 text-white">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-accent">
              Video library
            </div>
            <h3 className="mt-2 text-2xl font-black">
              Medicine and pharmaceutical stories
            </h3>
            <p className="mt-2 max-w-xl text-sm text-white/70">
              Product videos, laboratory visuals and educational medicine
              content can live here.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Video content"
            title="Use video to make complex information easier to absorb."
            text="Advance NanoMeds can support product explainers, manufacturing stories, educational clips, YouTube or Vimeo embeds, and optimized hosted video."
          />
          <Link
            href="/contact"
            className="btn btn-outline mt-7 rounded-full px-7"
          >
            Discuss video content <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
