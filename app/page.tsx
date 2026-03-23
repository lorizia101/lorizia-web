"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SocialLinks } from "@/components/social-links";
import {
  Target,
  Link2,
  FileText,
  BarChart2,
  CheckCircle2,
} from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />

      {/* ── HERO (dark aurora) ── */}
      <div className="dark">
        <AuroraBackground className="min-h-screen" showRadialGradient>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <Image
                src="/lorizia-logo.png"
                alt="Lorizia LLC"
                width={280}
                height={112}
                className="mx-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-wide text-orange-200 bg-orange-500/20 border border-orange-400/30">
              Performance Marketing · Paid Search · Affiliate
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Marketing That Earns Its{" "}
              <span className="text-[#f5c842]">Return on Every Dollar</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mb-10">
              Lorizia LLC builds and runs performance-based campaigns that
              connect buyers with products they&apos;re already searching for —
              measurable revenue, every dollar tracked.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#e8460a] hover:bg-[#c73a08] text-white px-7 py-3.5 rounded-lg font-bold text-[15px] transition-colors"
              >
                Start a Partnership
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 hover:border-white/70 text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] transition-colors"
              >
                See What We Do
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
              {[
                { num: "Google", label: "Primary Traffic Platform" },
                { num: "$0.00", label: "Spend Without Tracking" },
                { num: "100%", label: "Performance-Based Model" },
                { num: "USA", label: "Primary Market Focus" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <span className="block text-2xl font-bold text-[#f5c842]">
                    {s.num}
                  </span>
                  <span className="text-[13px] text-blue-300 mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AuroraBackground>
      </div>

      {/* ── SERVICES ── */}
      <section className="bg-[#f4f7fb] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
            What We Do
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1b3a5c] mt-3 mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Performance Marketing Built
            <br />
            Around Real Buyer Intent
          </h2>
          <p className="text-[17px] text-[#64748b] max-w-xl mb-12">
            Every service is tied to a measurable outcome — clicks, leads,
            conversions, and revenue. No fluff, no retainers for retainer&apos;s
            sake.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: Target,
                bg: "bg-orange-50",
                color: "text-[#e8460a]",
                title: "Paid Search Campaigns",
                body: "Google Search Ads targeting high-intent buyers — people searching for the problem your product solves. Manual CPC, tight keyword control, no wasted budget.",
              },
              {
                Icon: Link2,
                bg: "bg-blue-50",
                color: "text-[#1b3a5c]",
                title: "Affiliate Partnerships",
                body: "We promote partner offers across three revenue engines — ClickBank direct-response, PartnerStack and impact.com SaaS recurring, and Awin/FlexOffers broader inventory.",
              },
              {
                Icon: FileText,
                bg: "bg-yellow-50",
                color: "text-[#c79b00]",
                title: "Bridge Page Funnels",
                body: "Pre-sell bridge pages that warm up paid traffic before the sale — improving conversion rates and protecting ad account compliance.",
              },
              {
                Icon: BarChart2,
                bg: "bg-green-50",
                color: "text-emerald-600",
                title: "Conversion Optimization",
                body: "Data-before-decisions optimization. One controlled change at a time until the funnel is profitable and scalable.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" as const }}
                className="bg-white border border-[#dde4ed] rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className={`${card.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}
                >
                  <card.Icon className={`${card.color} w-6 h-6`} />
                </div>
                <h3
                  className="text-[18px] font-bold text-[#1b3a5c] mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#64748b] leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
            Our Process
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1b3a5c] mt-3 mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            How Every Campaign Gets Built
          </h2>
          <p className="text-[17px] text-[#64748b] max-w-xl mb-12">
            We follow a strict launch sequence on every campaign — no shortcuts,
            no guesswork.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {[
              {
                n: "1",
                title: "Offer Qualification",
                body: "Hard thresholds — EPC, commission, conversion rate, funnel quality, and compliance — before committing any budget.",
              },
              {
                n: "2",
                title: "Keyword Research",
                body: "Buyer intent first — problem keywords, then solution and research. Long-tail, low-competition, high-intent only.",
              },
              {
                n: "3",
                title: "Funnel Build",
                body: "Compliant bridge page that pre-sells the offer — no medical claims, full disclosure. Built to convert.",
              },
              {
                n: "4",
                title: "Launch & Test",
                body: "Controlled budget. Let data accumulate before any optimization decisions. No premature changes.",
              },
              {
                n: "5",
                title: "Optimize & Scale",
                body: "One change at a time. When EPC beats CPC consistently, we scale — gradually, methodically.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" as const }}
                className="p-6"
              >
                <div className="w-9 h-9 rounded-full bg-[#e8460a] text-white flex items-center justify-center font-bold text-[14px] mb-4">
                  {step.n}
                </div>
                <h3
                  className="text-[16px] font-bold text-[#1b3a5c] mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#64748b] leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERTICALS ── */}
      <section className="py-20 px-6 bg-[#f4f7fb]">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
            Verticals We Operate In
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1b3a5c] mt-3 mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Where We Focus Our Traffic
          </h2>
          <p className="text-[17px] text-[#64748b] max-w-xl mb-12">
            We concentrate on markets where Google Search intent is strong,
            buyer need is clear, and commissions support paid traffic economics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                bg: "bg-[#1b3a5c]",
                title: "Health & Wellness Supplements",
                body: "High-intent search traffic for health concerns — prostate health, blood sugar, weight management, anti-aging. Strong EPC, proven VSL funnels.",
                tags: ["Men's Health", "Blood Sugar", "Weight Loss", "Anti-Aging"],
              },
              {
                bg: "bg-[#122840]",
                title: "SaaS & Business Software",
                body: "Recurring commission programs for B2B tools — project management, email marketing, CRM, and SEO platforms.",
                tags: ["Project Management", "Email Marketing", "CRM", "SEO Tools"],
              },
              {
                bg: "bg-[#e8460a]",
                title: "Business Services & Professional Tools",
                body: "Tax and bookkeeping software, compliance tools, office productivity, and business banking — stable content assets with strong cookie windows.",
                tags: ["Tax Software", "Office Tools", "Compliance", "Business Credit"],
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" as const }}
                className={`${v.bg} rounded-xl p-9 text-white`}
              >
                <h3
                  className="text-[20px] font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-[14px] opacity-85 mb-5 leading-relaxed">
                  {v.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] font-semibold bg-white/20 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP FUNNEL ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
              For Offer Owners & Vendors
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1b3a5c] mt-3 mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              We Drive Buyers to Your Offer on Performance
            </h2>
            <p className="text-[16px] text-[#64748b] mb-4">
              If you have a high-converting offer and want an affiliate who runs
              legitimate paid traffic — Google Search to a compliant bridge page
              to your sales page.
            </p>
            <ul className="space-y-3 my-6">
              {[
                "Google-compliant bridge pages — no policy violations",
                "Verified conversion tracking on every campaign",
                "FTC-compliant disclosures on all landing pages",
                "US-only traffic — high-intent search buyers",
                "Transparent reporting — EPC, CTR, ROAS shared",
                "One offer. One campaign. Full focus.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#344155]">
                  <CheckCircle2 className="w-5 h-5 text-[#e8460a] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/partnerships"
              className="inline-block bg-[#e8460a] hover:bg-[#c73a08] text-white px-7 py-3.5 rounded-lg font-bold text-[15px] transition-colors"
            >
              Discuss a Partnership
            </Link>
          </div>

          {/* Funnel diagram */}
          <div className="bg-[#f4f7fb] border border-[#dde4ed] rounded-2xl p-10">
            <p className="text-[13px] font-bold text-[#7fa8cc] uppercase tracking-wider mb-6 text-center">
              Our Funnel Structure
            </p>
            {[
              { icon: "🔍", label: "Google Search Ad", sub: "High-intent problem keyword", style: "bg-white border-[#dde4ed] text-[#1b3a5c]" },
              { icon: "📄", label: "Bridge Page", sub: "Educational pre-sell — Lorizia hosted", style: "bg-[#1b3a5c] border-[#1b3a5c] text-white" },
              { icon: "💰", label: "Your Sales Page", sub: "Warmed-up, ready-to-buy visitor", style: "bg-white border-[#dde4ed] text-[#1b3a5c]" },
              { icon: "✅", label: "Commission Earned", sub: "Tracked, verified, reported", style: "bg-[#fff7e6] border-[#f5c842] text-[#7a5f00]" },
            ].map((step, i) => (
              <div key={step.label}>
                <div className={`${step.style} border rounded-lg px-5 py-3.5 text-[14px] font-semibold`}>
                  {step.icon}&nbsp;&nbsp;{step.label}
                  <div className="text-[12px] font-normal opacity-70 mt-0.5">{step.sub}</div>
                </div>
                {i < 3 && (
                  <div className="text-center text-[#e8460a] text-xl font-bold my-1">↓</div>
                )}
              </div>
            ))}
            <div className="mt-6 bg-blue-50 rounded-lg px-4 py-3 text-[13px] text-[#1b3a5c]">
              <strong>Kill rule:</strong> If $100 spent with zero conversions, we pause and diagnose before spending further.
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES CTA ── */}
      <section className="py-20 px-6 bg-[#1b3a5c]">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            A Lean Operation — Built on Data, Not Guesswork
          </h2>
          <p className="text-[17px] text-blue-200 max-w-xl mx-auto mb-12">
            Houston-based. Performance-focused. Every campaign follows the same
            disciplined playbook from offer selection through to first scaling decision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { title: "Data Before Decisions", body: "No optimization call before $75–$100 spend and 50+ clicks. Period." },
              { title: "One Change at a Time", body: "We isolate every variable. Never multiple changes simultaneously." },
              { title: "Compliance First", body: "Every page, every ad reviewed against Google and FTC guidelines before launch." },
              { title: "Simple Systems", body: "Complexity kills repeatability. Our playbooks scale because they're lean." },
            ].map((v) => (
              <div key={v.title} className="bg-white/10 rounded-xl p-6 text-left">
                <h4
                  className="text-[14px] font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {v.title}
                </h4>
                <p className="text-[13px] text-blue-200">{v.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#e8460a] hover:bg-[#c73a08] text-white px-7 py-3.5 rounded-lg font-bold text-[15px] transition-colors"
            >
              Work With Us
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/30 hover:border-white/70 text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="mt-10 flex justify-center">
            <SocialLinks theme="dark" label="Follow Us" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
