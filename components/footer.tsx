import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[#dfd7ca] bg-[#142a3a] px-6 py-12 text-[#d8e1e8]">
      <div className="lorizia-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <Image
              src="/lorizia-logo.png"
              alt="Lorizia LLC"
              width={136}
              height={42}
              className="h-9 w-auto object-contain brightness-95"
            />
          </div>
          <p className="max-w-md text-[14px] leading-7 text-[#a8bac8]">
            Lorizia LLC is a Houston-based performance marketing company focused
            on paid search, compliant landing paths, partner acquisition, and
            measurable growth systems.
          </p>
          <p className="text-[13px] text-[#8ea4b5]">
            Houston, Texas · United States
          </p>
        </div>

        <div>
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.24em] text-[#f0b059]">
            Company
          </p>
          <div className="flex flex-col gap-3">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/partnerships", label: "Partnerships" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[14px] text-[#d8e1e8] transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.24em] text-[#f0b059]">
            Reach Out
          </p>
          {[
            { href: "mailto:info@loriziallc.com", label: "info@loriziallc.com" },
            { href: "tel:+13463415848", label: "346-341-5848" },
            { href: "/contact", label: "Partnership inquiry form" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="mb-3 block text-[14px] text-[#d8e1e8] transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="lorizia-shell mt-10 border-t border-white/10 pt-5 text-[13px] text-[#8ea4b5]">
        © {new Date().getFullYear()} Lorizia LLC. All rights reserved.
      </div>
    </footer>
  );
}
