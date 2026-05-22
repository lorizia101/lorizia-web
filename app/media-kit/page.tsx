"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LoriziaLogo } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";
import { FadeIn, StaggerChildren, fadeUpVariant } from "@/components/fade-in";


const brandColors = [
  { name: "Navy",   hex: "#0d1c28", bg: "bg-[#0d1c28]", text: "text-white" },
  { name: "Orange", hex: "#c8622a", bg: "bg-[#c8622a]", text: "text-white" },
  { name: "Gold",   hex: "#e8a85a", bg: "bg-[#e8a85a]", text: "text-[#0d1c28]" },
  { name: "Cream",  hex: "#f7f2eb", bg: "bg-[#f7f2eb]", text: "text-[#0d1c28]", border: true },
  { name: "Sand",   hex: "#f0e8dc", bg: "bg-[#f0e8dc]", text: "text-[#0d1c28]", border: true },
  { name: "Muted",  hex: "#8a9da8", bg: "bg-[#8a9da8]", text: "text-white" },
];

const focusAreas = [
  {
    number: "01",
    title: "Paid Search",
    body: "High-intent keyword targeting built around real buyer demand, not broad awareness spend.",
  },
  {
    number: "02",
    title: "Landing-Path Quality",
    body: "Click paths structured to satisfy users, partners, and platform reviewers simultaneously.",
  },
  {
    number: "03",
    title: "Offer Qualification",
    body: "Economics, destination quality, and demand pressure reviewed before any traffic goes live.",
  },
  {
    number: "04",
    title: "Reporting Discipline",
    body: "Signal-clean measurement that supports real commercial decisions, not flattering dashboards.",
  },
];

const partnerFit = [
  "Affiliate offers with clear buyer demand and believable economics",
  "SaaS partner programs looking for serious paid-acquisition operators",
  "Networks that value clean traffic and transparent attribution",
  "Programs with compliant, review-ready destination pages",
];

export default function MediaKitPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#0d1c28] px-6 py-16 md:py-24">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <FadeIn>
                <span className="lorizia-kicker-light">Media Kit</span>
                <h1 className="mt-4 text-[clamp(2.4rem,5.5vw,5.5rem)] font-semibold leading-[0.92] text-white">
                  Lorizia LLC
                  <br />
                  <span className="text-[#e8a85a]">Partner Profile</span>
                </h1>
                <p className="mt-6 max-w-xl text-[17px] leading-8 text-[#8fa5b5]">
                  Performance marketing based in Houston, Texas. Built for paid
                  search, partner acquisition, and acquisition systems that
                  survive platform scrutiny.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Partnership inquiry
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/partnerships" className="btn-ghost-light">
                    View partner criteria
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.15} direction="right">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                  <p className="lorizia-kicker-light mb-6">Company facts</p>
                  <div className="space-y-5">
                    {[
                      { label: "Legal name",   value: "Lorizia LLC" },
                      { label: "Headquarters", value: "Houston, Texas, USA" },
                      { label: "Market",       value: "United States" },
                      { label: "Category",     value: "Performance Marketing" },
                      { label: "Speciality",   value: "Paid search · Affiliate acquisition" },
                      { label: "Contact",      value: "info@loriziallc.com" },
                    ].map(({ label, value }) => (
                      <div key={label} className="border-t border-white/8 pt-4 first:border-0 first:pt-0">
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#6a8899]">
                          {label}
                        </p>
                        <p className="mt-1 text-[16px] font-medium text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="px-6 py-16 md:py-24">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker">What Lorizia Does</span>
              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-[#0d1c28]">
                Acquisition systems built around signal quality.
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[#5a6e78]">
                Lorizia is not a generalist agency. We focus on the specific
                mechanics that determine whether paid traffic generates real
                revenue: buyer intent, destination quality, partner economics,
                and measurement discipline.
              </p>
            </FadeIn>

            <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2" staggerDelay={0.08}>
              {focusAreas.map((area) => (
                <motion.div
                  key={area.number}
                  variants={fadeUpVariant}
                  className="rounded-[24px] border border-[#ddd5c8] bg-white p-7"
                >
                  <span className="font-cormorant text-[48px] font-semibold leading-none text-[#c8622a] opacity-70">
                    {area.number}
                  </span>
                  <h3 className="mt-3 text-[20px] font-semibold text-[#0d1c28]">{area.title}</h3>
                  <p className="mt-2 text-[14px] leading-7 text-[#5a6e78]">{area.body}</p>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Partner fit */}
        <section className="bg-[#f0e8dc] px-6 py-16 md:py-24">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
              <FadeIn direction="left">
                <span className="lorizia-kicker">Partner Fit</span>
                <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-[#0d1c28]">
                  Who Lorizia works with.
                </h2>
                <p className="mt-4 text-[16px] leading-8 text-[#5a6e78]">
                  Lorizia qualifies every partnership before committing traffic.
                  The criteria below reflect what makes a strong working relationship.
                </p>
                <div className="mt-8">
                  <Link href="/partnerships" className="btn-primary inline-flex">
                    Full partner criteria
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.1} direction="right">
                <div className="rounded-[28px] border border-[#ddd5c8] bg-white p-8">
                  <ul className="space-y-4">
                    {partnerFit.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 border-t border-[#f0e8dc] pt-4 first:border-0 first:pt-0">
                        <span className="mt-0.5 shrink-0 text-[12px] font-bold text-[#c8622a]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[15px] leading-7 text-[#4a5c66]">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Brand assets */}
        <section className="px-6 py-16 md:py-24">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker">Brand Assets</span>
              <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-[#0d1c28]">
                Logo & colors.
              </h2>
            </FadeIn>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* Logo preview */}
              <FadeIn direction="left">
                <div className="lorizia-panel p-8">
                  <p className="lorizia-kicker mb-6">Primary logo — light backgrounds</p>
                  <div className="flex items-center justify-center rounded-2xl bg-[#f7f2eb] px-10 py-12">
                    <LoriziaLogo className="h-14 w-auto" variant="dark" />
                  </div>
                  <p className="lorizia-kicker mt-6 mb-6">Primary logo — dark backgrounds</p>
                  <div className="flex items-center justify-center rounded-2xl bg-[#0d1c28] px-10 py-12">
                    <LoriziaLogo className="h-14 w-auto" variant="light" />
                  </div>
                  <div className="mt-6">
                    <a
                      href="/lorizia-logo.png"
                      download
                      className="btn-ghost inline-flex text-[14px]"
                    >
                      <Download className="h-4 w-4" />
                      Download logo PNG
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Color palette */}
              <FadeIn delay={0.1} direction="right">
                <div className="lorizia-panel p-8">
                  <p className="lorizia-kicker mb-6">Brand colour palette</p>
                  <div className="grid grid-cols-2 gap-3">
                    {brandColors.map(({ name, hex, bg, text, border }) => (
                      <div key={name} className="overflow-hidden rounded-2xl border border-[#e8e0d6]">
                        <div className={`${bg} ${border ? "border border-[#ddd5c8]" : ""} h-16`} />
                        <div className="bg-white px-4 py-3">
                          <p className="text-[13px] font-semibold text-[#0d1c28]">{name}</p>
                          <p className="font-mono text-[12px] text-[#8a9da8]">{hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl bg-[#f7f2eb] px-5 py-4">
                    <p className="text-[13px] font-semibold text-[#0d1c28]">Typography</p>
                    <p className="mt-1 text-[13px] text-[#5a6e78]">
                      Display — Cormorant Garamond (serif)
                      <br />
                      Body & UI — Manrope (sans-serif)
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Social presence */}
        <section className="bg-[#0d1c28] px-6 py-16 md:py-24">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <FadeIn>
                <span className="lorizia-kicker-light">Social Presence</span>
                <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-white">
                  Find Lorizia across platforms.
                </h2>
                <p className="mt-4 max-w-xl text-[16px] leading-8 text-[#8fa5b5]">
                  Lorizia maintains a public presence on the channels below. For
                  partner-facing links and handles, see the{" "}
                  <Link href="/socials" className="text-[#e8a85a] hover:underline">
                    socials page
                  </Link>
                  .
                </p>
                <div className="mt-8">
                  <SocialLinks theme="dark" label="Follow Lorizia" />
                </div>
              </FadeIn>

              <FadeIn delay={0.12} direction="right">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-8">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a85a]" />
                    <div>
                      <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#6a8899]">Email</p>
                      <a href="mailto:info@loriziallc.com" className="mt-1 block text-[16px] font-medium text-white hover:text-[#e8a85a] transition-colors">
                        info@loriziallc.com
                      </a>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3 border-t border-white/8 pt-5">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a85a]" />
                    <div>
                      <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-[#6a8899]">Location</p>
                      <p className="mt-1 text-[16px] font-medium text-white">Houston, Texas, USA</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#c8622a] px-6 py-16 md:py-20">
          <div className="lorizia-grid absolute inset-0 opacity-20 pointer-events-none" />
          <FadeIn className="lorizia-shell relative">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="max-w-3xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-white">
                  Ready to submit a partnership inquiry?
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#ffe3c0]">
                  Include the offer URL, payout structure, and buyer details.
                  We'll review it against our qualification criteria and respond
                  within one business day.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0d1c28] px-7 py-4 text-[15px] font-semibold text-white transition-all hover:bg-[#162535]"
              >
                Contact Lorizia
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
