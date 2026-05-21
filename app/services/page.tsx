"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, ClipboardCheck, Search, Waypoints, X } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FadeIn, StaggerChildren, fadeUpVariant } from "@/components/fade-in";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Paid search campaign execution",
    body: "Search campaigns built around high-intent demand, tighter keyword discipline, cleaner routing, and measured launch logic instead of broad hopeful spend.",
    points: [
      "Intent-matched keyword architecture",
      "Quality Score and destination alignment",
      "Launch sequencing with measured checkpoints",
      "Budget discipline tied to signal, not hope",
    ],
  },
  {
    number: "02",
    icon: Waypoints,
    title: "Landing-path and bridge-page design",
    body: "We structure the click path so the traffic has context, the destination looks legitimate, and the visitor is moved toward the next step without sloppy claims.",
    points: [
      "Pre-sell and bridge page architecture",
      "Platform review-readiness built in",
      "Conversion context without misleading claims",
      "Mobile-first and load-time considered",
    ],
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Offer and partner qualification",
    body: "Before traffic goes live, we evaluate whether the economics, market demand, and destination quality are even worth testing in the first place.",
    points: [
      "Payout-to-CPA viability check",
      "Destination and funnel quality audit",
      "Market demand and buyer intent assessment",
      "Traffic restriction and compliance review",
    ],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Tracking and optimization review",
    body: "We focus on signal quality, event clarity, and reporting that can support decisions without fantasy math hiding underneath.",
    points: [
      "Conversion event mapping and validation",
      "Attribution logic review",
      "Dashboard cleanup — signal vs. noise",
      "Optimization tied to real margin data",
    ],
  },
];

const notDone = [
  "We do not treat weak offers as copy problems that can be charmed into profitability.",
  "We do not push irresponsible ad claims just to goose click-through rate.",
  "We do not call broken tracking good enough because the dashboard looks busy.",
  "We do not scale before the fundamentals deserve it.",
];

export default function Services() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        {/* Page hero */}
        <section className="bg-[#0d1c28] px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker-light">Services</span>
              <h1 className="mt-5 max-w-5xl text-[clamp(2.6rem,6vw,6.5rem)] font-semibold leading-[0.9] text-white">
                We work on the acquisition layers that determine whether paid traffic is viable at all.
              </h1>
              <p className="mt-7 max-w-3xl text-[17px] leading-8 text-[#8fa5b5]">
                Lorizia is built for offer qualification, paid search execution,
                landing-path clarity, and reporting discipline. We stay close to the
                mechanics that affect revenue.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Service cards */}
        <section className="px-6 py-20 md:py-28">
          <div className="lorizia-shell space-y-7">
            {services.map((svc, i) => (
              <FadeIn key={svc.number} delay={i * 0.06}>
                <article className="overflow-hidden rounded-[36px] border border-[#ddd5c8] bg-white">
                  <div className="grid gap-0 lg:grid-cols-[auto_1fr_1fr]">
                    {/* Number */}
                    <div className="flex items-start justify-center border-b border-[#f0e8dc] p-8 lg:border-b-0 lg:border-r lg:py-10">
                      <span className="lorizia-numeral select-none opacity-70">{svc.number}</span>
                    </div>

                    {/* Title + body */}
                    <div className="border-b border-[#f0e8dc] p-8 lg:border-b-0 lg:border-r lg:py-10">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0e8dc] text-[#c8622a]">
                        <svc.icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-5 text-[clamp(1.5rem,2.5vw,2.3rem)] font-semibold leading-[1.05] text-[#0d1c28]">
                        {svc.title}
                      </h2>
                      <p className="mt-4 text-[15px] leading-7 text-[#5a6e78]">{svc.body}</p>
                    </div>

                    {/* Bullet points */}
                    <div className="p-8 lg:py-10">
                      <p className="lorizia-kicker mb-5">What this covers</p>
                      <ul className="space-y-3">
                        {svc.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-3 text-[14px] leading-7 text-[#4a5c66]">
                            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8622a]" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* What we don't do */}
        <section className="bg-[#f0e8dc] px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <FadeIn direction="left">
                <span className="lorizia-kicker">What we optimize for</span>
                <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-[#0d1c28]">
                  Signal quality, not dashboard theater.
                </h2>
                <p className="mt-5 text-[16px] leading-8 text-[#4a5c66]">
                  The goal is not to touch every tool. The goal is to make sure the
                  path from query to landing page to conversion is trustworthy enough
                  to support action.
                </p>
              </FadeIn>

              <FadeIn delay={0.12} direction="right">
                <div className="rounded-[32px] border border-[#ddd5c8] bg-white p-8">
                  <span className="lorizia-kicker">What we don&apos;t do</span>
                  <div className="mt-6 space-y-4">
                    {notDone.map((item) => (
                      <div key={item} className="flex items-start gap-4 rounded-2xl border border-[#f0e8dc] bg-[#f7f2eb] px-5 py-4">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-[#c8622a]" />
                        <p className="text-[14px] leading-7 text-[#4a5c66]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#c8622a] px-6 py-20 md:py-24">
          <div className="lorizia-grid absolute inset-0 opacity-20 pointer-events-none" />
          <FadeIn className="lorizia-shell relative">
            <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[0.92] text-white">
              If the opportunity is real, the system should read clearly.
            </h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#ffe3c0]">
              That is the standard. If you want help building or tightening that
              path, start with the contact page.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0d1c28] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-[#162535] hover:shadow-[0_8px_32px_rgba(13,28,40,0.4)]"
              >
                Talk to Lorizia
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
