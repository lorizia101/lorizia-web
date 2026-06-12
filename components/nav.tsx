"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LoriziaLogo } from "@/components/logo";

const links = [
  { href: "/services",     label: "Services" },
  { href: "/resources",    label: "Resources" },
  { href: "/about",        label: "About" },
  { href: "/partnerships", label: "Partnerships" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#ddd5c8] bg-[#f7f2eb]/92 shadow-[0_2px_16px_rgba(13,28,40,0.07)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="lorizia-shell flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <LoriziaLogo className="h-11 w-auto" variant="dark" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative px-4 py-2 text-[14px] font-medium transition-colors rounded-full ${
                  pathname === l.href
                    ? "text-[#0d1c28] font-semibold bg-[#0d1c28]/6"
                    : "text-[#6b7f8a] hover:text-[#0d1c28] hover:bg-[#0d1c28]/4"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link
              href="/contact"
              className="btn-primary py-2.5 text-[14px]"
            >
              Partner With Lorizia
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-xl border border-[#ddd5c8] bg-white/80 p-2 text-[#0d1c28] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#ddd5c8] bg-[#f7f2eb] md:hidden">
          <div className="lorizia-shell py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                  pathname === l.href
                    ? "bg-[#0d1c28]/8 text-[#0d1c28] font-semibold"
                    : "text-[#4a5c66] hover:bg-[#0d1c28]/4 hover:text-[#0d1c28]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Partner With Lorizia
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
