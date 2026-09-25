import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface ContactInfoFormSectionProps {
  children: ReactNode;
}

export default function ContactInfoFormSection({ children }: ContactInfoFormSectionProps) {
  return (
    <section id="contact-form" className="nm-section">
      <div className="nm-container grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Contact Advance NanoMeds"
            title="How can we help?"
            text="Use the form for product, pricing, distribution or general enquiries. Share a few details and our team can follow up with the right information."
          />

          <div className="mt-8 space-y-4">
            <a
              href="mailto:info@advancenanomeds.io"
              className="group flex gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="size-5 text-primary" />
              </div>
              <div>
                <div className="font-bold">Email</div>
                <div className="mt-1 text-sm text-base-content/55 group-hover:text-primary">
                  info@advancenanomeds.io
                </div>
              </div>
            </a>

            <div className="flex gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="size-5 text-primary" />
              </div>
              <div>
                <div className="font-bold">Phone</div>
                <div className="mt-1 space-y-1 text-sm text-base-content/55">
                  <a href="tel:+18004041606" className="block hover:text-primary">
                    Toll Free: +1 800 404 1606
                  </a>
                  <a href="tel:+919990176720" className="block hover:text-primary">
                    Tel: +91 9990 1767 20
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <div className="font-bold">Addresses</div>
                <div className="mt-1 text-sm leading-6 text-base-content/55">
                  Manufacturing Plant: 142A/20A, NSEZ, Noida, 201305, Uttar Pradesh, India
                  <span className="mt-1 block">
                    Corporate Address: 561 W Pike Street, Suite 201, Lawrenceville, GA 30046, USA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </section>
  );
}