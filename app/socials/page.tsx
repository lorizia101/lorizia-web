"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FadeIn, StaggerChildren, fadeUpVariant } from "@/components/fade-in";

const platforms = [
  {
    name: "Instagram",
    handle: "@loriziallc",
    href: "https://www.instagram.com/loriziallc/",
    description:
      "Performance marketing insights, behind-the-scenes, and partner-facing content.",
    color: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Lorizia LLC",
    href: "https://www.facebook.com/profile.php?id=61587433923372",
    description:
      "Company updates, partnership announcements, and performance marketing content.",
    color: "from-[#1877f2] to-[#0d5dbf]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@lorizia",
    href: "https://www.tiktok.com/@lorizia",
    description:
      "Short-form content on paid search, acquisition strategy, and partner marketing.",
    color: "from-[#010101] via-[#69c9d0] to-[#ee1d52]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@Loriziallc",
    href: "https://x.com/Loriziallc",
    description:
      "Real-time takes on performance marketing, affiliate industry news, and partner updates.",
    color: "from-[#14171a] to-[#1da1f2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@Loriziallc",
    href: "https://www.youtube.com/@Loriziallc",
    description:
      "In-depth content on paid acquisition strategy, offer qualification, and partner marketing.",
    color: "from-[#ff0000] to-[#cc0000]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function SocialsPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0d1c28] px-6 py-16 md:py-24">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker-light">Social Channels</span>
              <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,5.5vw,5.5rem)] font-semibold leading-[0.92] text-white">
                Find Lorizia across the web.
              </h1>
              <p className="mt-5 max-w-xl text-[17px] leading-8 text-[#8fa5b5]">
                All public handles and channels in one place — for partners,
                networks, and anyone evaluating a working relationship with
                Lorizia LLC.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Platform cards */}
        <section className="px-6 py-16 md:py-24">
          <div className="lorizia-shell">
            <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
              {platforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  variants={fadeUpVariant}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-[28px] border border-[#ddd5c8] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(13,28,40,0.12)]"
                >
                  {/* Icon with gradient bg */}
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${platform.color} text-white shadow-sm`}>
                    {platform.icon}
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-[20px] font-semibold text-[#0d1c28]">
                        {platform.name}
                      </h2>
                      <p className="mt-0.5 font-mono text-[13px] text-[#c8622a]">
                        {platform.handle}
                      </p>
                    </div>
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-[#8a9da8] transition-colors group-hover:text-[#c8622a]" />
                  </div>

                  <p className="mt-4 border-t border-[#f0e8dc] pt-4 text-[14px] leading-6 text-[#5a6e78]">
                    {platform.description}
                  </p>
                </motion.a>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Partner note */}
        <section className="bg-[#f0e8dc] px-6 py-14 md:py-20">
          <div className="lorizia-shell">
            <FadeIn>
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="lorizia-kicker">For Partners & Networks</span>
                  <h2 className="mt-4 max-w-2xl text-[clamp(1.8rem,3.5vw,3.2rem)] font-semibold leading-[0.94] text-[#0d1c28]">
                    Evaluating a partnership with Lorizia?
                  </h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#5a6e78]">
                    The media kit has brand assets, company overview, and partner
                    qualification criteria. The contact page is the right place to
                    submit an offer or program for review.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link href="/media-kit" className="btn-primary justify-center">
                    View media kit
                  </Link>
                  <Link href="/contact" className="btn-ghost justify-center">
                    Contact us
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
