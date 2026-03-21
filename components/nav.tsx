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
    <nav className="sticky top-0 z-50 bg-white border-b border-[#dde4ed]">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="bg-[#0f2236] rounded-lg px-3 py-1.5">
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[15px] font-medium transition-colors ${
                  pathname === l.href
                    ? "text-[#1b3a5c] font-semibold"
                    : "text-[#64748b] hover:text-[#1b3a5c]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-[#e8460a] hover:bg-[#c73a08] text-white px-5 py-2.5 rounded-md text-[15px] font-semibold transition-colors"
            >
              Work With Us
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md border border-[#dde4ed] text-[#1b3a5c]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#dde4ed] bg-white">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3.5 text-[15px] font-medium text-[#1b3a5c] border-b border-[#dde4ed] hover:bg-[#f4f7fb]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block px-6 py-3.5 text-[15px] font-semibold text-[#e8460a] hover:bg-[#f4f7fb]"
          >
            Work With Us →
          </Link>
        </div>
      )}
    </nav>
  );
}
