"use client";

import Link from "next/link";
import { Building2, Compass, LineChart, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FadeIn, StaggerChildren, fadeUpVariant } from "@/components/fade-in";

const principles = [
  {
    icon: Compass,
    title: "Buyer intent first",
    body: "We prefer channels and partner structures where commercial intent is already present instead of trying to manufacture demand out of weak traffic.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance is operational",
    body: "Landing quality, disclosures, destination trust, and review-readiness are part of the build. They are not cleanup work after the fact.",
  },
  {
    icon: LineChart,
    title: "Signal before scale",
    body: "We would rather prove one path cleanly than spread attention across noisy campaigns that teach nothing useful.",
  },
  {
    icon: Building2,
    title: "Small-company judgment",
    body: "Lorizia stays intentionally focused. That keeps decision-making tighter and reduces the nonsense that creeps in when too many layers want to look busy.",
  },
];

const facts = [
  ["Business", "Lorizia LLC"],
  ["Base", "Houston, Texas"],
  ["Primary market", "United States"],
  ["Focus", "Paid search · Partner acquisition"],
];

export default function About() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        {/* Page hero */}
        <section className="bg-[#0d1c28] px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <FadeIn direction="up">
                <span className="lorizia-kicker-light">About Lorizia</span>
                <h1 className="mt-5 text-[clamp(2.6rem,6vw,6.5rem)] font-semibold leading-[0.9] text-white">
                  A performance marketing business built around cleaner acquisition decisions.
                </h1>
                <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#8fa5b5]">
                  Lorizia LLC is a Houston-based company focused on paid search,
                  partner acquisition, landing-path quality, and reporting discipline.
                </p>
              </FadeIn>

              <FadeIn delay={0.15} direction="right">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-10">
                  <span className="lorizia-kicker-light">Company facts</span>
                  <div className="mt-6 space-y-4">
                    {facts.map(([label, value]) => (
                      <div key={label} className="border-t border-white/8 pt-4 first:border-0 first:pt-0">
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#6a8899]">
                          {label}
                        </p>
                        <p className="mt-1.5 text-[17px] font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* What we are */}
        <section className="px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <FadeIn direction="left" className="lg:sticky lg:top-28">
                <span className="lorizia-kicker">What we are</span>
                <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-[#0d1c28]">
                  Intentionally focused on the problems that matter most.
                </h2>
              </FadeIn>

              <FadeIn delay={0.1} direction="right">
                <div className="space-y-6 text-[16px] leading-8 text-[#4a5c66]">
                  <p>
                    Lorizia is not trying to be a giant agency with a thousand service
                    lines. The business is structured around a smaller set of
                    acquisition problems where judgment matters: search intent, partner
                    fit, destination quality, and conversion visibility.
                  </p>
                  <p>
                    That means we spend more time on whether an offer can survive paid
                    traffic than on theater, vanity metrics, or clever wording trying to
                    rescue weak economics.
                  </p>
                  <p>
                    Our operating preference is simple: one clean path, one readable
                    system, and one evidence-based decision at a time.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-[#f0e8dc] px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker">Operating principles</span>
              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-[#0d1c28]">
                Four ideas that shape how decisions get made.
              </h2>
            </FadeIn>

            <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2" staggerDelay={0.09}>
              {principles.map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUpVariant}
                  className="rounded-[28px] border border-[#ddd5c8] bg-white p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0e8dc] text-[#c8622a]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-[24px] font-semibold text-[#0d1c28]">{title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#5a6e78]">{body}</p>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Best fit */}
        <section className="px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <FadeIn>
              <div className="rounded-[36px] border border-[#ddd5c8] bg-white p-8 md:p-12">
                <span className="lorizia-kicker">Who we are best for</span>
                <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] text-[#0d1c28]">
                  Businesses that want disciplined growth, not noise.
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Offer owners who want legitimate paid acquisition, not junk traffic.",
                    "SaaS programs that need an affiliate partner who understands conversion quality.",
                    "Operators who care about what the numbers actually mean.",
                    "Teams willing to qualify the opportunity before forcing scale.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#e8e0d6] bg-[#f7f2eb] px-6 py-5 text-[15px] leading-7 text-[#4a5c66]"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8622a]" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/contact" className="btn-primary inline-flex">
                    Start the conversation
                    <ArrowRight className="h-4 w-4" />
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
