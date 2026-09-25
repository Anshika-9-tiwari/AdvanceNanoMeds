"use client";

import Link from "next/link";
import { Menu, Pill, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-base-300/70 bg-base-100/90 backdrop-blur-xl">
      <div className="nm-container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20">
            <Pill size={22} />
          </span>
          <span>
            <span className="block text-xl font-black tracking-tight">Advance Nanomeds</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">Science. Care. Trust.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-base-content/75 transition hover:text-primary">
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary rounded-full px-6">
            Make an enquiry
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="btn btn-ghost btn-circle md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-base-300 bg-base-100 md:hidden">
          <nav className="nm-container flex flex-col gap-1 py-4">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-xl px-4 py-3 font-semibold hover:bg-base-200" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
