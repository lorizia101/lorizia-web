"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/partnerships", label: "Partnerships" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#dfd7ca] bg-[#fbfaf7]/90 backdrop-blur">
      <div className="lorizia-shell flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="rounded-2xl border border-[#203447]/12 bg-[#173047] px-3 py-2 shadow-sm">
            <Image
              src="/lorizia-logo.png"
              alt="Lorizia LLC"
              width={160}
              height={50}
              className="h-8 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[15px] font-medium transition-colors ${
                  pathname === l.href
                    ? "text-[#173047] font-semibold"
                    : "text-[#5f6d72] hover:text-[#173047]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-full bg-[#b85b20] px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#9f4d18]"
            >
              Partner With Lorizia
            </Link>
          </li>
        </ul>

        <button
          className="rounded-xl border border-[#dfd7ca] bg-white p-2 text-[#173047] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#dfd7ca] bg-[#fbfaf7] md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#e7e0d6] px-6 py-3.5 text-[15px] font-medium text-[#173047] hover:bg-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block px-6 py-3.5 text-[15px] font-semibold text-[#b85b20] hover:bg-white"
          >
            Partner With Lorizia
          </Link>
        </div>
      )}
    </nav>
  );
}
