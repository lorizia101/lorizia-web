import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#122840] text-[#7fa8cc] py-8 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/lorizia-logo.png"
            alt="Lorizia LLC"
            width={120}
            height={38}
            className="h-8 w-auto object-contain brightness-90"
          />
        </div>
        <div className="flex flex-wrap gap-6">
          {[
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/partnerships", label: "Partnerships" },
            { href: "/contact", label: "Contact" },
            { href: "mailto:info@loriziallc.com", label: "info@loriziallc.com" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-[#7fa8cc] hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <span className="text-[13px] text-[#4d7494]">
          © {new Date().getFullYear()} Lorizia LLC. Houston, Texas. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
