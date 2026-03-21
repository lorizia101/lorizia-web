"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Target, Link2, FileText, BarChart2 } from "lucide-react";


const services = [
  {
    num: "01",
    Icon: Target,
    iconBg: "bg-orange-50",
    iconColor: "text-[#e8460a]",
    title: "Paid Search Campaigns",
    body: "We build and manage Google Search Ads campaigns targeting high-intent buyers — people already searching for the problem your product solves. Manual CPC control, tight keyword targeting, no wasted spend.",
    features: [
      { title: "Manual CPC Bidding", body: "Full control over what we pay per click during the testing phase. No automated bidding until conversion data justifies it." },
      { title: "Intent-Based Keywords", body: "Problem keywords first. Solution and research keywords second. Broad match never — until the campaign is profitable." },
      { title: "Negative Keyword Management", body: "Non-buyer terms (free, reddit, youtube, pdf) are excluded before the campaign goes live. Search term reports reviewed weekly." },
      { title: "Weekly Optimization", body: "One controlled change per week — keyword bids, ad copy, or landing page. Never multiple changes simultaneously." },
    ],
    specs: [
      { label: "Bid Strategy", value: "Manual CPC (testing phase)" },
      { label: "Daily Budget", value: "$10–$20 during testing" },
      { label: "Match Types", value: "Exact + Phrase only" },
      { label: "Keyword Volume", value: "10–20 per ad group" },
      { label: "Network", value: "Google Search only" },
    ],
  },
  {
    num: "02",
    Icon: Link2,
    iconBg: "bg-blue-50",
    iconColor: "text-[#1b3a5c]",
    title: "Affiliate Partnerships",
    body: "We promote partner offers through our own paid traffic and conversion funnels. ClickBank and PartnerStack affiliate. You pay on performance — we absorb the ad spend risk.",
    features: [
      { title: "Offer Qualification First", body: "Every offer passes a 5-category scorecard before we commit a single dollar of ad spend. EPC, gravity, commission, funnel quality, compliance." },
      { title: "ClickBank Health Verticals", body: "Tier 1 focus: men's health, weight loss, anti-aging, blood sugar. Proven VSL funnels. Strong search intent. High EPC." },
      { title: "PartnerStack SaaS Programs", body: "Recurring commission programs for B2B tools. Education-based funnels. High-intent business keywords." },
      { title: "Postback Conversion Tracking", body: "ClickBank server-to-server postback configured before launch. Every conversion attributed to its exact keyword and ad." },
    ],
    specs: [
      { label: "Minimum EPC", value: "≥ $1.00" },
      { label: "Minimum Commission", value: "≥ $80" },
      { label: "Gravity Range", value: "20–80" },
      { label: "Minimum CVR", value: "≥ 0.6%" },
      { label: "Testing Budget", value: "$75–$100 before judgment" },
    ],
  },
  {
    num: "03",
    Icon: FileText,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-700",
    title: "Bridge Page Funnels",
    body: "We design and host pre-sell bridge pages that warm up paid traffic before the sale. Educational, trust-building, compliant. Every page follows the same 5-section structure proven to produce 30–50% click-through rates.",
    features: [
      { title: "5-Section Structure", body: "Disclosure bar → headline → problem section → mechanism explanation → soft product introduction. Tested structure for every niche." },
      { title: "Mechanism Explanation", body: "Educational content that explains why the problem exists — DHT accumulation, metabolic slowdown, inflammation — without making medical claims." },
      { title: "CTA Strategy", body: "3–4 CTA buttons placed at natural decision points. Approved language only: 'See How It Works', 'View the Full Presentation'. No 'Buy Now'." },
      { title: "Compliance Pre-Publish", body: "Every page reviewed against Google Destination Requirements and FTC disclosure rules before going live." },
    ],
    specs: [
      { label: "Target CTR to Offer", value: "30–50%" },
      { label: "Kill Signal", value: "< 25% bridge CTR" },
      { label: "Page Load Target", value: "< 3 seconds" },
      { label: "CTA Count", value: "3–4 per page" },
      { label: "Disclosure", value: "Above the fold, required" },
    ],
  },
  {
    num: "04",
    Icon: BarChart2,
    iconBg: "bg-green-50",
    iconColor: "text-emerald-600",
    title: "Conversion Optimization",
    body: "Data-before-decisions optimization. We analyze CTR, bridge page click rate, EPC, and ROAS — then make one controlled change at a time until the funnel is profitable and ready to scale.",
    features: [
      { title: "Search Term Report Analysis", body: "Weekly review of every search term that triggered an ad. Irrelevant terms added as negatives. New high-intent terms added to campaigns." },
      { title: "Keyword Performance Scoring", body: "Four-quadrant scoring: high CTR + conversions → protect budget. Low CTR + no conversions → pause after $10–$15 spend." },
      { title: "Ad Copy Rotation", body: "Minimum 3 ads per ad group, rotated indefinitely. Lowest CTR ad replaced with a new variant after sufficient data." },
      { title: "ROAS-Based Scaling", body: "Scale only when EPC consistently exceeds CPC. Budget increases at 20–30% increments — never double. Algorithm stability preserved." },
    ],
    specs: [
      { label: "Min. Data Before Opt.", value: "50+ clicks or $75–$100 spend" },
      { label: "Changes Per Cycle", value: "One at a time" },
      { label: "Evaluation Window", value: "5–7 days per change" },
      { label: "Scale Trigger", value: "EPC > CPC consistently" },
      { label: "Scale Increment", value: "20–30% budget increase" },
    ],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />

      {/* Hero */}
      <div
        className="py-20 px-6 text-white"
        style={{ background: "linear-gradient(135deg, #122840 0%, #1b3a5c 100%)" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-widest text-orange-300">
            What We Do
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Performance Marketing Services Built Around{" "}
            <span className="text-[#f5c842]">Real Buyer Intent</span>
          </h1>
          <p className="text-[17px] text-blue-200 max-w-xl">
            Every service is tied to a measurable outcome. No fluff, no
            retainers for retainer&apos;s sake.
          </p>
        </div>
      </div>

      {/* Metrics Infographic Dashboard */}
      <section className="py-20 px-6 bg-[#0f2236]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold uppercase tracking-widest text-orange-300">
              Campaign Performance Standards
            </span>
            <h2
              className="text-3xl font-bold text-white mt-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Numbers We&apos;re Held To
            </h2>
            <p className="text-[16px] text-blue-200 mt-3 max-w-xl mx-auto">
              Every campaign is measured against these benchmarks. If we fall short, we pause — not spend.
            </p>
          </div>

          {/* Gauge row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Ad Click-Through Rate", target: "≥ 3%", pct: 72, color: "#e8460a", warn: "< 2% = kill" },
              { label: "Bridge Page CTR", target: "30–50%", pct: 80, color: "#f5c842", warn: "< 25% = fix funnel" },
              { label: "Min. Offer EPC", target: "≥ $1.00", pct: 65, color: "#4ade80", warn: "< $0.50 = kill" },
              { label: "ROAS Target", target: "≥ 1.0×", pct: 60, color: "#60a5fa", warn: "< 0.5 = pause" },
            ].map((m) => {
              const r = 52;
              const circ = 2 * Math.PI * r;
              const dash = (m.pct / 100) * circ;
              return (
                <div key={m.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                  <svg viewBox="0 0 140 140" className="w-28 h-28 mb-3 -rotate-90">
                    {/* Track */}
                    <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12"/>
                    {/* Progress */}
                    <circle
                      cx="70" cy="70" r={r}
                      fill="none"
                      stroke={m.color}
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${dash} ${circ}`}
                    />
                  </svg>
                  <span className="text-[22px] font-black text-white leading-none">{m.target}</span>
                  <span className="text-[12px] font-bold text-blue-200 mt-1 mb-2">{m.label}</span>
                  <span className="text-[11px] text-red-400 font-semibold">{m.warn}</span>
                </div>
              );
            })}
          </div>

          {/* Funnel performance visual */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-[12px] font-bold uppercase tracking-widest text-orange-300 mb-6 text-center">
              Funnel Performance Flow
            </p>
            <div className="flex items-stretch rounded-xl overflow-hidden">
              {[
                { step: "Google Ad", metric: "CTR ≥ 3%", color: "bg-[#1b3a5c]" },
                { step: "Bridge Page", metric: "CTR 30–50%", color: "bg-[#2d5a8c]" },
                { step: "Offer Page", metric: "CVR ≥ 0.6%", color: "bg-[#e8460a]" },
                { step: "Commission", metric: "EPC > CPC", color: "bg-[#b5860d]" },
              ].map((s, i) => (
                <div key={s.step} className="flex items-stretch flex-1">
                  <div className={`${s.color} flex-1 text-white text-center py-6 px-3 flex flex-col items-center justify-center`}>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-2">Step {i + 1}</div>
                    <div className="text-[15px] font-bold leading-tight">{s.step}</div>
                    <div className="text-[11px] font-semibold mt-2 opacity-80">{s.metric}</div>
                  </div>
                  {i < 3 && (
                    <div className="flex items-center justify-center bg-[#0a1a2e] w-7 shrink-0">
                      <span className="text-white/40 font-bold text-sm">›</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Testing Budget", val: "$75–$100", icon: "🧪", note: "before any optimization" },
                { label: "Kill Threshold", val: "$100 spend", icon: "🛑", note: "zero conversions = pause" },
                { label: "Scale Trigger", val: "EPC > CPC", icon: "📈", note: "consistently, not once" },
              ].map((t) => (
                <div key={t.label} className="bg-white/5 rounded-xl px-5 py-4 text-center">
                  <span className="text-2xl">{t.icon}</span>
                  <div className="text-[18px] font-black text-white mt-1">{t.val}</div>
                  <div className="text-[12px] font-bold text-blue-200">{t.label}</div>
                  <div className="text-[11px] text-white/50 mt-0.5">{t.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((svc, si) => (
        <section
          key={svc.num}
          className={`py-20 px-6 ${si % 2 === 0 ? "bg-white" : "bg-[#f4f7fb]"}`}
        >
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={si % 2 !== 0 ? "lg:order-2" : ""}
            >
              <span className="text-6xl font-black text-[#dde4ed] leading-none block mb-3">
                {svc.num}
              </span>
              <div
                className={`${svc.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}
              >
                <svc.Icon className={`${svc.iconColor} w-6 h-6`} />
              </div>
              <h2
                className="text-3xl font-bold text-[#1b3a5c] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {svc.title}
              </h2>
              <p className="text-[16px] text-[#64748b] mb-8 leading-relaxed">
                {svc.body}
              </p>
              <div className="space-y-5">
                {svc.features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" as const }}
                    className="flex gap-4"
                  >
                    <span className="text-[20px] shrink-0 mt-0.5">
                      {["🎯", "🔑", "🚫", "📈"][i] || "✓"}
                    </span>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1b3a5c] mb-1">
                        {f.title}
                      </h4>
                      <p className="text-[14px] text-[#64748b]">{f.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — specs */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className={`${si % 2 !== 0 ? "lg:order-1" : ""} h-full`}
            >
              <div className="bg-white border border-[#dde4ed] rounded-xl overflow-hidden shadow-sm h-full">
                <div className="px-5 py-4 border-b border-[#dde4ed] font-bold text-[13px] text-[#1b3a5c] uppercase tracking-wider">
                  Key Metrics & Thresholds
                </div>
                {svc.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between items-center px-5 py-3.5 border-b border-[#dde4ed] last:border-b-0"
                  >
                    <span className="text-[13px] text-[#64748b] font-medium">
                      {s.label}
                    </span>
                    <span className="text-[13px] text-[#1b3a5c] font-semibold text-right">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 px-6 bg-[#1b3a5c]">
        <div className="max-w-[700px] mx-auto text-center text-white">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to Run a Campaign?
          </h2>
          <p className="text-[17px] text-blue-200 mb-8">
            We take on a limited number of partner offers at a time — so every
            campaign gets full attention.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#e8460a] hover:bg-[#c73a08] text-white px-8 py-3.5 rounded-lg font-bold text-[15px] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
