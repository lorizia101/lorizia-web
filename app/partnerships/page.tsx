"use client";

import Link from "next/link";
import { ArrowRight, BadgeDollarSign, SearchCheck, ShieldCheck, Users2 } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FadeIn, StaggerChildren, fadeUpVariant } from "@/components/fade-in";

const requirements = [
  {
    icon: BadgeDollarSign,
    title: "Acquisition economics that can survive paid traffic",
    body: "The payout has to be strong enough to support real customer acquisition costs without forcing desperate tactics.",
  },
  {
    icon: SearchCheck,
    title: "A destination that holds up under review",
    body: "Landing pages, sales flows, and conversion paths need enough quality and clarity to survive platform scrutiny.",
  },
  {
    icon: Users2,
    title: "A believable market and buyer journey",
    body: "We look for offers and programs with actual demand, not wishful demand that only exists in the owner's head.",
  },
  {
    icon: ShieldCheck,
    title: "Rules we can operate inside cleanly",
    body: "Traffic restrictions, compliance expectations, and attribution rules need to be clear enough to work with seriously.",
  },
];

const beforeYes = [
  "We look at the sales path, not just the headline payout.",
  "We care whether the funnel is something paid traffic can enter without embarrassment.",
  "We reject exaggerated claims, weak destination quality, and economics that depend on fantasy conversion rates.",
  "We would rather pass on a weak partnership than build traffic around a broken offer.",
];

const whatToSend = [
  "The offer or product name and the live destination URL.",
  "Your payout structure, approval flow, and any traffic restrictions.",
  "The primary buyer you want to reach and the commercial action that matters.",
  "Anything important about attribution, tracking, or partner rules.",
];

export default function Partnerships() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        {/* Page hero */}
        <section className="bg-[#0d1c28] px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <FadeIn direction="up">
                <span className="lorizia-kicker-light">Partnerships</span>
                <h1 className="mt-5 text-[clamp(2.6rem,6vw,6.5rem)] font-semibold leading-[0.9] text-white">
                  Lorizia works with offers that can withstand disciplined acquisition.
                </h1>
                <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[#8fa5b5]">
                  We are interested in partnerships where the economics are real, the
                  destination quality is defensible, and the reporting path can support
                  practical growth decisions.
                </p>
              </FadeIn>

              <FadeIn delay={0.15} direction="right">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                  <span className="lorizia-kicker-light">Best fit</span>
                  <div className="mt-6 space-y-5">
                    {[
                      "Affiliate offers with clear buyer demand and believable economics.",
                      "SaaS partner programs that want a serious paid-acquisition operator.",
                      "Businesses that value clean traffic and readable reporting over inflated stories.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 border-t border-white/8 pt-5 first:border-0 first:pt-0">
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8a85a]" />
                        <p className="text-[15px] leading-7 text-[#8fa5b5]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker">What we look for</span>
              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-[#0d1c28]">
                Four criteria every partnership needs to clear.
              </h2>
            </FadeIn>

            <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2" staggerDelay={0.09}>
              {requirements.map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUpVariant}
                  className="rounded-[28px] border border-[#ddd5c8] bg-white p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0e8dc] text-[#c8622a]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-[22px] font-semibold leading-tight text-[#0d1c28]">{title}</h3>
                  <p className="mt-3 text-[14px] leading-7 text-[#5a6e78]">{body}</p>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Before we say yes / What to send */}
        <section className="bg-[#f0e8dc] px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">

              <FadeIn direction="left">
                <div className="rounded-[32px] border border-[#ddd5c8] bg-white p-8">
                  <span className="lorizia-kicker">Before we say yes</span>
                  <div className="mt-6 space-y-4">
                    {beforeYes.map((item) => (
                      <div key={item} className="flex items-start gap-4 rounded-2xl border border-[#f0e8dc] bg-[#f7f2eb] px-5 py-4">
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8622a]" />
                        <p className="text-[14px] leading-7 text-[#4a5c66]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.12} direction="right">
                <div className="rounded-[32px] border border-[#ddd5c8] bg-white p-8">
                  <span className="lorizia-kicker">What to send us</span>
                  <div className="mt-6 space-y-4">
                    {whatToSend.map((item, i) => (
                      <div key={item} className="flex items-start gap-4 border-t border-[#f0e8dc] pt-4 first:border-0 first:pt-0">
                        <span className="mt-0.5 shrink-0 text-[13px] font-bold text-[#c8622a]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[14px] leading-7 text-[#4a5c66]">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary inline-flex">
                      Submit a partnership inquiry
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
              Qualify the opportunity before committing traffic to it.
            </h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#ffe3c0]">
              If your offer passes qualification, we build the acquisition path around it properly.
              If it does not, we tell you why — that is more useful than wasted spend.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0d1c28] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-[#162535] hover:shadow-[0_8px_32px_rgba(13,28,40,0.4)]"
              >
                Start the conversation
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
