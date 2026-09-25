import { Building2, Factory, Mail, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const locations = [
  {
    title: "Corporate Office",
    subtitle: "Lawrenceville, Georgia, USA",
    address: "561 W Pike Street, Suite 201, Lawrenceville, GA 30046, USA",
    mapSrc:
      "https://www.google.com/maps?q=561+W+Pike+Street+Suite+201+Lawrenceville+GA+30046+USA&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=561+W+Pike+Street+Suite+201+Lawrenceville+GA+30046+USA",
    icon: Building2,
  },
  {
    title: "Manufacturing Plant",
    subtitle: "NSEZ, Noida, India",
    address: "142A/20A, NSEZ, Noida, 201305, Uttar Pradesh, India",
    mapSrc:
      "https://www.google.com/maps?q=142A%2F20A+NSEZ+Noida+201305+Uttar+Pradesh+India&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=142A%2F20A+NSEZ+Noida+201305+Uttar+Pradesh+India",
    icon: Factory,
  },
];

const contactPoints = [
  "Use the enquiry form for product and pricing questions.",
  "Contact us for distribution and supply discussions.",
  "Reach our Georgia corporate office for USA enquiries.",
  "Our manufacturing location is based in NSEZ, Noida, India.",
];

export default function ContactMap() {
  return (
    <section id="locations" className="nm-section nm-grid-bg scroll-mt-20 border-t border-base-300">
      <div className="nm-container">
        <SectionHeading
          centered
          eyebrow="Our locations"
          title="Find Advance NanoMeds."
          text="Our corporate office is in Georgia, USA, with our manufacturing location in Noida, Uttar Pradesh, India."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {locations.map((location) => {
            const Icon = location.icon;

            return (
              <article
                key={location.title}
                className="overflow-hidden rounded-[2rem] border border-base-300 bg-base-100 shadow-xl shadow-primary/5"
              >
                <div className="aspect-[16/10] bg-base-200">
                  <iframe
                    title={`${location.title} map`}
                    src={location.mapSrc}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black">{location.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-primary">{location.subtitle}</p>
                      <p className="mt-3 text-sm leading-6 text-base-content/60">{location.address}</p>
                    </div>
                  </div>

                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-primary mt-6 rounded-full"
                  >
                    <MapPin className="size-4" />
                    Open in Google Maps
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contactPoints.map((point, index) => {
            const icons = [Mail, MapPin, Building2, Factory];
            const Icon = icons[index];

            return (
              <div key={point} className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <p className="mt-4 text-sm leading-6 text-base-content/65">{point}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}