import Link from "next/link";
import { Mail, MapPin, Phone, Pill } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="nm-container grid gap-10 py-14 md:grid-cols-[1.3fr_.7fr_.8fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-content"><Pill size={22} /></span>
            <div>
              <div className="text-xl font-black">Advance Nanomeds</div>
              <div className="text-xs text-neutral-content/60">Science. Care. Trust.</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-neutral-content/70">
            A modern product-information platform for NanoMeds. Replace all demo medicine copy with reviewed and approved product information before launch.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="btn btn-circle btn-sm border-white/10 bg-white/80 hover:bg-white/30"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/" aria-label="Instagram" className="btn btn-circle btn-sm border-white/10 bg-white/80 hover:bg-white/30"><FaInstagram /></a>
            <a href="https://wa.me/12029805149" aria-label="WhatsApp" className="btn btn-circle btn-sm border-white/10 bg-white/80 hover:bg-white/30"><FaWhatsapp /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Explore</h3>
          <div className="flex flex-col gap-3 text-sm text-neutral-content/70">
            <Link href="/about" className="hover:text-white">About us</Link>
            <Link href="/products" className="hover:text-white">Products</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Contact</h3>
          <div className="space-y-4 text-sm text-neutral-content/70">
            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-accent" />Manufacturing Plant 142A/20A, NSEZ, Noida, 201305, Uttar Pradesh, India
            </p>
            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-accent" />Corporate Address 561 W Pike Street, Suite 201, Lawrenceville, GA 30046, USA
            </p>

            <p className="flex gap-3"><Phone size={18} className="shrink-0 text-accent" />
               <a href="tel:+919990176720">Tel: +91 9990 1767 20</a>
            </p>

            <p className="flex gap-3"><Mail size={18} className="shrink-0 text-accent hover:text-blue-600" />
              <a href="mailto:info@advancenanomeds.io">info@advancenanomeds.io</a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-neutral-content/50">
        © {new Date().getFullYear()} Advance Nanomeds. Demo starter website.
      </div>
    </footer>
  );
}
