"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  ClipboardCheck,
  Quote,
  Search,
  Waypoints,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FadeIn, StaggerChildren, fadeUpVariant } from "@/components/fade-in";

/* ── Data ─────────────────────────────────────────── */

const systems = [
  {
    number: "01",
    label: "Traffic",
    title: "Search-first acquisition built around real buyer intent.",
    body: "We prefer channels where the customer is already looking. That keeps the work grounded in demand instead of pretending weak traffic can be bullied into revenue.",
  },
  {
    number: "02",
    label: "Destination",
    title: "Landing paths designed to survive review and still convert.",
    body: "The click path has to make sense to users, partners, and platform reviewers at the same time. That is part of the system, not a separate cleanup project.",
  },
  {
    number: "03",
    label: "Partnerships",
    title: "Offer and partner economics screened before traffic gets permission.",
    body: "We do not assume a payout is good just because it exists. We qualify the commercial path first so money does not get wasted proving something weak is weak.",
  },
];

const services = [
  {
    icon: Search,
    title: "Paid search execution",
    body: "High-intent campaigns with keyword discipline, clean routing, and measured launch logic.",
  },
  {
    icon: Waypoints,
    title: "Landing-path design",
    body: "Click paths that satisfy users, partners, and platform reviewers simultaneously.",
  },
  {
    icon: ClipboardCheck,
    title: "Offer qualification",
    body: "Economics, destination quality, and demand pressure checked before traffic goes live.",
  },
  {
    icon: BarChart3,
    title: "Tracking & optimisation",
    body: "Signal quality and event clarity that supports real decisions, not flattering dashboards.",
  },
];

const testimonials = [
  {
    quote:
      "Lorizia qualified our program properly before accepting a single click. Most affiliates just take the traffic — they actually want to know if the economics work.",
    name: "S. Nakamura",
    role: "Partner Program Lead",
  },
  {
    quote:
      "We had worked with three agencies before Lorizia. None of them bothered checking whether our funnel held up under paid scrutiny. They found the break in the first week.",
    name: "K. Adeyemi",
    role: "Growth Director",
  },
  {
    quote:
      "They passed on the first version of our offer. When we tightened the economics and came back, the partnership was clean from day one.",
    name: "M. Laurent",
    role: "Affiliate Program Manager",
  },
];

const tickerItems = [
  "Paid Search",
  "Partner Qualification",
  "Destination Quality",
  "Signal-First Acquisition",
  "Conversion Visibility",
  "Reporting Discipline",
  "Search Intent",
  "Performance Marketing",
];

/* ── Hero (client, animated) ──────────────────────── */

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function HeroSection() {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section className="relative overflow-hidden bg-[#0d1c28] px-6 py-20 md:py-28">
      {/* Grid overlay */}
      <div className="lorizia-grid absolute inset-0 pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute left-[-10%] top-[-15%] h-[500px] w-[500px] rounded-full bg-[#c8622a]/12 blur-3xl pointer-events-none" />
      <div className="absolute right-[-8%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-[#1a3347]/60 blur-3xl pointer-events-none" />

      <div className="lorizia-shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Left: copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={item} className="lorizia-kicker-light">
              Lorizia LLC · Houston, TX
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.88] text-white"
            >
              Performance
              <br />
              <em className="not-italic text-[#e8a85a]">marketing</em>
              <br />
              with operating
              <br />
              discipline.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-[18px] leading-8 text-[#8fa5b5] md:text-[20px]"
            >
              We build acquisition systems for businesses that need cleaner
              traffic, stronger destination quality, and reporting that still
              makes sense after the dashboard stops flattering everyone.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/contact" className="btn-primary">
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/partnerships" className="btn-ghost-light">
                Review partnership fit
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              {
                kicker: "Focus",
                stat: "Paid Search",
                sub: "High-intent, buyer-first channels",
              },
              {
                kicker: "Standard",
                stat: "Signal Quality",
                sub: "Reporting that supports real decisions",
              },
              {
                kicker: "Approach",
                stat: "Qualify First",
                sub: "Economics screened before traffic",
              },
              {
                kicker: "Base",
                stat: "Houston, TX",
                sub: "United States · Performance marketing",
              },
            ].map((card, i) => (
              <motion.div
                key={card.kicker}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease: EASE }}
                className="rounded-[24px] border border-white/8 bg-white/5 p-6 backdrop-blur-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#e8a85a]">
                  {card.kicker}
                </p>
                <p className="mt-2 text-[22px] font-semibold leading-tight text-white">
                  {card.stat}
                </p>
                <p className="mt-1.5 text-[13px] leading-6 text-[#6a8899]">
                  {card.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── Marquee ticker ───────────────────────────────── */

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-y border-[#ddd5c8] bg-[#f0e8dc] py-4">
      <div className="lorizia-marquee">
        {items.map((t, i) => (
          <span
            key={i}
            className="mx-6 flex shrink-0 items-center gap-6 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#8a6848]"
          >
            {t}
            <span className="h-1 w-1 rounded-full bg-[#c8622a]" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection />

        {/* Ticker */}
        <Ticker />

        {/* Systems */}
        <section className="px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <FadeIn>
              <div className="mb-4">
                <span className="lorizia-kicker">The System</span>
              </div>
              <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[0.92] text-[#0d1c28]">
                Three decisions that determine if paid traffic deserves to scale.
              </h2>
            </FadeIn>

            <div className="mt-14 space-y-6">
              {systems.map((item, index) => (
                <FadeIn key={item.number} delay={index * 0.1}>
                  <article className="group overflow-hidden rounded-[36px] border border-[#ddd5c8] bg-white transition-shadow hover:shadow-[0_12px_48px_rgba(13,28,40,0.1)]">
                    <div className={`grid gap-6 p-8 md:p-10 lg:grid-cols-[auto_1fr_1fr] lg:items-center ${index % 2 !== 0 ? "" : ""}`}>
                      <div className="lorizia-numeral shrink-0 select-none opacity-80">
                        {item.number}
                      </div>
                      <div>
                        <span className="lorizia-kicker">{item.label}</span>
                        <h3 className="mt-3 text-[clamp(1.6rem,3vw,2.8rem)] font-semibold leading-[1.05] text-[#0d1c28]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[16px] leading-8 text-[#5a6e78] lg:border-l lg:border-[#e8e0d6] lg:pl-10">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[#0d1c28] px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker-light">Services</span>
              <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,4.5rem)] font-semibold leading-[0.92] text-white">
                We build the acquisition infrastructure.
              </h2>
              <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#8fa5b5]">
                Four layers — each one required before the next can be trusted.
              </p>
            </FadeIn>

            <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
              {services.map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUpVariant}
                  className="group rounded-[28px] border border-white/8 bg-white/5 p-7 transition-all hover:border-[#c8622a]/40 hover:bg-white/8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c8622a]/15 text-[#e8845a] transition-colors group-hover:bg-[#c8622a]/25">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-[22px] font-semibold leading-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-[#6a8899]">{body}</p>
                </motion.div>
              ))}
            </StaggerChildren>

            <FadeIn className="mt-10 flex justify-start">
              <Link href="/services" className="btn-ghost-light">
                Full service overview
                <ChevronRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker">What Partners Say</span>
              <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.92] text-[#0d1c28]">
                Operators who have been through the qualification process.
              </h2>
            </FadeIn>

            <StaggerChildren
              className="mt-12 grid gap-6 md:grid-cols-3"
              staggerDelay={0.1}
            >
              {testimonials.map(({ quote, name, role }) => (
                <motion.div
                  key={name}
                  variants={fadeUpVariant}
                  className="flex flex-col rounded-[28px] border border-[#ddd5c8] bg-white p-8"
                >
                  <Quote className="h-7 w-7 text-[#c8622a] opacity-60 mb-5 shrink-0" />
                  <p className="flex-1 text-[16px] leading-8 text-[#3a4a54] italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="mt-7 border-t border-[#e8e0d6] pt-5">
                    <p className="text-[14px] font-semibold text-[#0d1c28]">{name}</p>
                    <p className="text-[13px] text-[#8a9da8]">{role}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Who it fits */}
        <section className="bg-[#f0e8dc] px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <FadeIn direction="left">
                <div className="rounded-[36px] bg-[#0d1c28] px-8 py-10 text-white md:px-10 md:py-12">
                  <span className="lorizia-kicker-light">Who This Fits</span>
                  <h2 className="mt-4 text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-[0.92]">
                    Better for the right operators than vaguely useful to everyone.
                  </h2>
                </div>
              </FadeIn>

              <StaggerChildren className="grid gap-4 sm:grid-cols-2" staggerDelay={0.09}>
                {[
                  {
                    title: "Affiliate offers",
                    body: "With believable paid-traffic economics and a destination that holds up under scrutiny.",
                  },
                  {
                    title: "SaaS programs",
                    body: "That need a serious acquisition partner, not just volume from any source.",
                  },
                  {
                    title: "Destination quality teams",
                    body: "Fixing landing paths and measurement, not just headline metrics.",
                  },
                  {
                    title: "Signal-over-theater operators",
                    body: "Who care more about clean data than impressive-looking reports.",
                  },
                ].map(({ title, body }) => (
                  <motion.div
                    key={title}
                    variants={fadeUpVariant}
                    className="rounded-[24px] border border-[#ddd5c8] bg-white p-6 shadow-[0_2px_16px_rgba(13,28,40,0.05)]"
                  >
                    <h3 className="text-[18px] font-semibold text-[#0d1c28]">{title}</h3>
                    <p className="mt-2 text-[14px] leading-7 text-[#5a6e78]">{body}</p>
                  </motion.div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#c8622a] px-6 py-20 md:py-24">
          <div className="lorizia-grid absolute inset-0 opacity-20 pointer-events-none" />
          <FadeIn className="lorizia-shell relative">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#ffe3c0]">
                  Ready to start?
                </span>
                <h2 className="mt-4 max-w-4xl text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[0.92] text-white">
                  If the commercial path is real, we can build the system around it.
                </h2>
                <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#ffe3c0]">
                  If it is weak, we would rather say that early than waste money
                  trying to make a broken lane look sophisticated.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0d1c28] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-[#162535] hover:shadow-[0_8px_32px_rgba(13,28,40,0.4)] active:scale-[0.98]"
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
