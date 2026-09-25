// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, BadgeCheck, FlaskConical, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
// import SectionHeading from "@/components/SectionHeading";
// import ProductCarousel from "@/components/ProductCarousel";

// export default function HomePage() {
//   return (
//     <>
//       <section className="nm-grid-bg overflow-hidden border-b border-base-300/70">
//         <div className="nm-container grid min-h-[650px] items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
//           <div>
//             <div className="badge badge-outline badge-primary mb-6 gap-2 rounded-full px-4 py-3 font-bold">
//               <Sparkles size={14} /> Modern pharmaceutical care
//             </div>
//             <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
//               Better medicine information, <span className="text-primary">made clearer.</span>
//             </h1>
//             <p className="mt-7 max-w-2xl text-lg leading-8 text-base-content/65">
//               NanoMeds brings product information, safety guidance, pricing enquiries and medicine resources together in one clear, modern experience.
//             </p>
//             <div className="mt-9 flex flex-wrap gap-3">
//               <Link href="/products" className="btn btn-primary rounded-full px-7">Explore products <ArrowRight size={17} /></Link>
//               <Link href="/about" className="btn btn-outline rounded-full px-7">About Advance Nanomeds</Link>
//             </div>
//             <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center sm:text-left">
//               {[
//                 ["Clear", "Product information"],
//                 ["Trusted", "Quality focus"],
//                 ["Simple", "Enquiry process"],
//               ].map(([top, bottom]) => (
//                 <div key={top} className="rounded-2xl border border-base-300 bg-base-100/80 p-4 backdrop-blur">
//                   <div className="text-lg font-black">{top}</div>
//                   <div className="mt-1 text-xs leading-5 text-base-content/55">{bottom}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative mx-auto w-full max-w-[620px]">
//             <div className="absolute -left-10 top-8 size-40 rounded-full bg-accent/25 blur-3xl" />
//             <div className="absolute -right-10 bottom-8 size-56 rounded-full bg-primary/20 blur-3xl" />
//             <div className="nm-glow relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white p-3">
//               <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] sm:aspect-[5/4] lg:aspect-[4/5]">
//                 <Image src="/images/medicine-blue.svg" alt="Medicine tablets on a blue background" fill priority className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" />
//                 <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-neutral/75 p-5 text-neutral-content backdrop-blur-md">
//                   <div className="flex items-start gap-3">
//                     <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary"><ShieldCheck size={20} /></span>
//                     <div>
//                       <div className="font-bold">Designed around clarity</div>
//                       <p className="mt-1 text-sm leading-6 text-neutral-content/80">Product benefits, precautions and supporting details in a consistent format.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="nm-section">
//         <div className="nm-container">
//           <SectionHeading 
//             eyebrow="Featured catalogue" 
//             title="Explore Advance Nanomeds products" 
//             text="Four formulations built around liposomal delivery and everyday nutrition. All are currently out of stock — join the notification list to hear when they return." />
//           <div className="mt-10"><ProductCarousel /></div>
//         </div>
//       </section>

//       <section className="nm-section bg-neutral text-neutral-content">
//         <div className="nm-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
//           <div>
//             <SectionHeading eyebrow="Why NanoMeds" title="A pharmaceutical experience that feels precise, modern and easy to use." text="The website is structured to help visitors understand products without burying important information inside long, difficult pages." />
//             <Link href="/about" className="btn btn-primary mt-8 rounded-full">Our approach <ArrowRight size={17} /></Link>
//           </div>
//           <div className="grid gap-4 sm:grid-cols-2">
//             {[
//               [FlaskConical, "Science-led presentation", "Space for composition, strength, dosage form and product-specific data."],
//               [HeartPulse, "Benefit clarity", "Uses and benefits are separated so visitors can scan information quickly."],
//               [ShieldCheck, "Safety visibility", "Warnings, precautions, drawbacks and side effects are given dedicated sections."],
//               [BadgeCheck, "Consistent catalogue", "Reusable layouts keep every medicine page familiar and easier to compare."],
//             ].map(([Icon, title, text]) => {
//               const Comp = Icon as typeof FlaskConical;
//               return (
//                 <div key={String(title)} className="rounded-3xl border border-white/10 bg-white/5 p-6">
//                   <Comp className="text-accent" />
//                   <h3 className="mt-5 text-lg font-bold">{String(title)}</h3>
//                   <p className="mt-2 text-sm leading-6 text-neutral-content/65">{String(text)}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="nm-section">
//         <div className="nm-container grid gap-10 lg:grid-cols-2 lg:items-center">
//           <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-neutral shadow-2xl">
//             <Image src="/images/medicine-lab.svg" alt="Medicines in a laboratory setting" fill className="object-cover opacity-70" sizes="(max-width: 1024px) 100vw, 50vw" />
//             <div className="absolute inset-0 bg-gradient-to-t from-neutral via-neutral/20 to-transparent" />
//             <div className="absolute inset-x-6 bottom-6 text-white">
//               <div className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Video library</div>
//               <h3 className="mt-2 text-2xl font-black">Medicine & pharmaceutical stories</h3>
//               <p className="mt-2 max-w-xl text-sm text-white/70">A dedicated area for product videos, lab visuals and educational pharmaceutical content.</p>
//             </div>
//           </div>
//           <div>
//             <SectionHeading eyebrow="Video content" title="Make important information easier to understand." text="We’ll support hosted MP4 video, YouTube/Vimeo embeds, or licensed stock footage. For production, videos should be compressed and served in web-friendly formats rather than linking to large source files." />
//             <a className="btn btn-outline mt-7 rounded-full" href="https://www.pexels.com/video/a-chemist-laboratory-7230300/" target="_blank" rel="noreferrer">View current demo video source <ArrowRight size={17} /></a>
//           </div>
//         </div>
//       </section>

//       <section className="pb-24">
//         <div className="nm-container overflow-hidden rounded-[2.2rem] bg-primary px-6 py-12 text-primary-content sm:px-10 lg:px-14">
//           <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
//             <div>
//               <p className="text-xs font-black uppercase tracking-[0.24em] opacity-70">Need product information?</p>
//               <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">Talk to Advance  Nanomeds about products, pricing or availability.</h2>
//             </div>
//             <Link href="/contact" className="btn border-0 bg-white text-neutral hover:bg-white/90">Contact us <ArrowRight size={17} /></Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import TestimonialsSection from "@/components/about/TestimonialsSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import HealthSocialShowcase from "@/components/home/HealthSocialShowcase";
import HeroSlider from "@/components/home/HeroSlider";
import HomeAboutSection from "@/components/home/HomeAboutSection";
import HomeCapabilitiesSection from "@/components/home/HomeCapabilitiesSection";
import HomeCTA from "@/components/home/HomeCTA";
import HomeTrustStrip from "@/components/home/HomeTrustStrip";
import HomeVideoSection from "@/components/home/HomeVideoSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HomeTrustStrip />
      <FeaturedProductsSection />
      <HomeAboutSection />
      <HomeCapabilitiesSection />
      <HealthSocialShowcase />
      <HomeVideoSection />
      <TestimonialsSection />
      <HomeCTA />
    </>
  );
}
