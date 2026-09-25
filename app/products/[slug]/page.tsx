import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowLeft, BadgeCheck, Box, CircleDollarSign, ShieldCheck } from "lucide-react";
import { demoProducts } from "@/lib/demo-products";

export function generateStaticParams() {
  return demoProducts.map(({ slug }) => ({ slug }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = demoProducts.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <section className="nm-section">
      <div className="nm-container">
        <Link href="/products" className="btn btn-ghost btn-sm mb-8 rounded-full"><ArrowLeft size={16} /> Back to products</Link>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-base-300 bg-base-200">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          </div>
          <div>
            <div className="badge badge-primary badge-outline">{product.category}</div>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{product.name}</h1>
            <p className="mt-3 text-lg text-base-content/55">{product.genericName} · {product.strength} · {product.dosageForm}</p>
            <p className="mt-6 max-w-2xl leading-8 text-base-content/65">{product.shortDescription}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-base-300 p-4"><Box className="text-primary" size={20} /><div className="mt-3 text-xs text-base-content/50">Dosage form</div><div className="font-bold">{product.dosageForm}</div></div>
              <div className="rounded-2xl border border-base-300 p-4"><CircleDollarSign className="text-primary" size={20} /><div className="mt-3 text-xs text-base-content/50">Pricing</div><div className="font-bold">{product.priceLabel}</div></div>
              <div className="rounded-2xl border border-base-300 p-4"><ShieldCheck className="text-primary" size={20} /><div className="mt-3 text-xs text-base-content/50">Information</div><div className="font-bold">Demo only</div></div>
            </div>
            <Link href="/contact" className="btn btn-primary mt-8 rounded-full px-7">Enquire about this product</Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {[
            [BadgeCheck, 'Uses', 'Add approved indications and intended-use information for this medicine.'],
            [BadgeCheck, 'Benefits', 'Add verified benefit information supported by the approved product documentation.'],
            [AlertTriangle, 'Possible drawbacks & side effects', 'Add product-specific adverse effects, drawbacks and frequency information where applicable.'],
            [ShieldCheck, 'Warnings & precautions', 'Add contraindications, precautions, interactions and other required safety information.'],
          ].map(([Icon, title, text]) => {
            const Comp = Icon as typeof BadgeCheck;
            return (
              <section key={String(title)} className="rounded-3xl border border-base-300 bg-base-100 p-7">
                <Comp className="text-primary" />
                <h2 className="mt-4 text-xl font-black">{String(title)}</h2>
                <p className="mt-3 text-sm leading-7 text-base-content/65">{String(text)}</p>
              </section>
            );
          })}
        </div>

        <div className="alert alert-warning mt-8 items-start rounded-2xl">
          <AlertTriangle className="mt-0.5 shrink-0" />
          <div>
            <div className="font-bold">Medical-content note</div>
            <div className="text-sm">All medicine claims, dosage information, warnings, interactions and safety statements must be reviewed against the approved product information before publishing.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
