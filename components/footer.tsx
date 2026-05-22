import Link from "next/link";
import { LoriziaLogo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-[#0d1c28] text-white">
      <div className="lorizia-shell pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-5">
            <LoriziaLogo className="h-11 w-auto" variant="light" />
            <p className="max-w-sm text-[14px] leading-7 text-[#8fa5b5]">
              Lorizia LLC is a Houston-based performance marketing company
              focused on paid search, compliant landing paths, partner
              acquisition, and measurable growth systems.
            </p>
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#5a7080]">
              Houston, Texas · United States
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e8a85a]">
              Company
            </p>
            <div className="flex flex-col gap-3.5">
              {[
                { href: "/",            label: "Home" },
                { href: "/services",    label: "Services" },
                { href: "/about",       label: "About" },
                { href: "/partnerships",label: "Partnerships" },
                { href: "/contact",     label: "Contact" },
                { href: "/media-kit",   label: "Media Kit" },
                { href: "/socials",     label: "Socials" },
                { href: "/terms",       label: "Terms" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[14px] text-[#8fa5b5] transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#e8a85a]">
              Reach Out
            </p>
            <div className="flex flex-col gap-3.5">
              {[
                { href: "mailto:info@loriziallc.com", label: "info@loriziallc.com" },
                { href: "tel:+13463415848",           label: "346-341-5848" },
                { href: "/contact",                   label: "Partnership inquiry" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[14px] text-[#8fa5b5] transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-3 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#526878]">
            © {new Date().getFullYear()} Lorizia LLC. All rights reserved.
          </p>
          <p className="text-[13px] text-[#526878]">
            Performance marketing with operating discipline.
          </p>
        </div>
      </div>
    </footer>
  );
}
