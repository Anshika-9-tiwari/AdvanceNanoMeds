import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { DemoProduct } from "@/lib/demo-products";

export default function ProductCard({ product }: { product: DemoProduct }) {
  return (
    <article className="group overflow-hidden rounded-[1.6rem] border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-base-200">
        <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="badge badge-primary absolute left-4 top-4 border-0">{product.category}</span>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{product.dosageForm} · {product.strength}</p>
        <h3 className="mt-2 text-xl font-black">{product.name}</h3>
        <p className="mt-1 text-sm text-base-content/55">{product.genericName}</p>
        <p className="mt-3 min-h-12 text-sm leading-5 text-base-content/65">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="text-sm font-bold">{product.priceLabel}</span>
          <Link href={`/products/${product.slug}`} className="btn btn-circle btn-primary btn-xs" aria-label={`View ${product.name}`}>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
