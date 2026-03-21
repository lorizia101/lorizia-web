"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CheckCircle2, XCircle } from "lucide-react";


export default function Partnerships() {
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
            For Offer Owners & Vendors
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            We Drive{" "}
            <span className="text-[#f5c842]">Qualified Buyers</span> to Your
            Offer on Performance
          </h1>
          <p className="text-[17px] text-blue-200 max-w-xl">
            Google Search Ads → compliant bridge page → your sales page. Every
            campaign is tracked. You pay on results.
          </p>
        </div>
      </div>

      {/* Partner types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
            Who We Work With
          </span>
          <h2
            className="text-3xl font-bold text-[#1b3a5c] mt-3 mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Three Partnership Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                bg: "bg-[#1b3a5c]",
                icon: "💊",
                title: "ClickBank Offer Vendors",
                body: "You have a health supplement, weight loss product, or wellness offer on ClickBank with a proven funnel. We drive Google Search traffic through a compliant bridge page directly to your sales page.",
                items: [
                  "Gravity 20–80 preferred",
                  "EPC ≥ $1.00 required",
                  "Commission ≥ $80 required",
                  "Long-form VSL or sales page",
                  "Google Ads traffic permitted",
                ],
              },
              {
                bg: "bg-[#e8460a]",
                icon: "🖥️",
                title: "SaaS & Software Programs",
                body: "You have a PartnerStack or impact.com affiliate program with recurring commissions. We drive high-intent B2B search traffic with education-based funnels targeting business owners actively seeking solutions.",
                items: [
                  "Free trial or demo offer",
                  "Recurring commission ≥ $15/mo",
                  "Strong brand credibility",
                  "Professional sales page",
                  "B2B or small business focus",
                ],
              },
              {
                bg: "bg-[#2e6b4a]",
                icon: "🏢",
                title: "Business & Affiliate Programs",
                body: "You have a business services, office tools, or professional software program on Awin or FlexOffers. We slot your offer into existing content assets with high-intent traffic already flowing.",
                items: [
                  "Commission ≥ 15% or flat ≥ $30",
                  "Cookie window ≥ 30 days",
                  "Awin or FlexOffers program",
                  "Recognized brand or strong reviews",
                  "Business or productivity focus",
                ],
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" as const }}
                className={`${p.bg} text-white rounded-2xl p-10`}
              >
                <span className="text-4xl mb-5 block">{p.icon}</span>
                <h3
                  className="text-[22px] font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[14px] opacity-88 mb-6 leading-relaxed">
                  {p.body}
                </p>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[14px] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 opacity-80 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we bring */}
      <section className="py-20 px-6 bg-[#f4f7fb]">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
            What We Bring
          </span>
          <h2
            className="text-3xl font-bold text-[#1b3a5c] mt-3 mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            What You Get With Lorizia as Your Affiliate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🔍", title: "Legitimate Paid Traffic", body: "Google Search Ads targeting high-intent buyers — not spam, not black-hat, not incentivized clicks. Real buyers with real intent." },
              { icon: "📄", title: "Compliant Bridge Pages", body: "Every landing page reviewed against Google Destination Requirements and FTC disclosure rules. No policy violations, no account suspensions from our traffic." },
              { icon: "📊", title: "Verified Conversion Tracking", body: "ClickBank postback or Google Tag configured before launch. Every conversion attributed to its exact keyword and ad." },
              { icon: "🇺🇸", title: "US-Only Traffic", body: "Geographic targeting locked to the United States — Presence targeting, not Interest. High-value buyers, relevant market." },
              { icon: "🧪", title: "Controlled Testing Protocol", body: "$75–$100 spend threshold before any optimization decisions. Data drives changes — not assumptions." },
              { icon: "📋", title: "Transparent Reporting", body: "CTR, CPC, bridge CTR, EPC, and ROAS reported openly. If the campaign isn't working, we tell you exactly why and what we're changing." },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" as const }}
                className="bg-white border border-[#dde4ed] rounded-xl p-6"
              >
                <span className="text-3xl mb-4 block">{b.icon}</span>
                <h3
                  className="text-[16px] font-bold text-[#1b3a5c] mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {b.title}
                </h3>
                <p className="text-[14px] text-[#64748b] leading-relaxed">
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification criteria */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
              Offer Qualification
            </span>
            <h2
              className="text-3xl font-bold text-[#1b3a5c] mt-3 mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What Offers Pass Our Scorecard
            </h2>
            <p className="text-[16px] text-[#64748b] mb-8 leading-relaxed">
              Before we commit any ad spend, every offer passes a 5-category
              evaluation. Correct offer selection is the single most important
              factor in campaign success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  pass: true,
                  title: "Strong Marketplace Metrics",
                  body: "EPC ≥ $1.00, gravity 20–80, conversion rate ≥ 0.6%",
                },
                {
                  pass: true,
                  title: "Quality Funnel",
                  body: "Long-form VSL or sales page, testimonials, mechanism explanation, money-back guarantee",
                },
                {
                  pass: true,
                  title: "Commission Economics",
                  body: "Minimum $80 commission — preferred $120+ to support paid traffic margins",
                },
                {
                  pass: true,
                  title: "Market Demand",
                  body: "Consistent keyword search volume, growing gravity, multiple competing products",
                },
                {
                  pass: false,
                  title: "Exaggerated Claims",
                  body: "Miracle cures, guaranteed results, fake before/after — immediately rejected",
                },
                {
                  pass: false,
                  title: "Weak Sales Page",
                  body: "Short ecommerce pages, no storytelling, minimal social proof — weak funnels fail paid traffic",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" as const }}
                  className={`rounded-xl p-5 border ${
                    c.pass
                      ? "bg-white border-[#dde4ed]"
                      : "bg-red-50 border-red-100"
                  }`}
                >
                  <div
                    className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${
                      c.pass ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {c.pass ? "✓ Required" : "✗ Disqualifies"}
                  </div>
                  <h4 className="text-[14px] font-bold text-[#1b3a5c] mb-1.5">
                    {c.title}
                  </h4>
                  <p className="text-[13px] text-[#64748b]">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
              Partnership Timeline
            </span>
            <h2
              className="text-3xl font-bold text-[#1b3a5c] mt-3 mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              From Inquiry to Live Campaign
            </h2>
            <div className="relative pl-12">
              <div className="absolute left-[14px] top-4 bottom-4 w-0.5 bg-[#dde4ed]" />
              {[
                { day: "Day 1–2", title: "Initial Contact & Offer Review", body: "We review your offer metrics, sales page, and affiliate terms. Quick pass/fail determination on the qualification scorecard." },
                { day: "Day 3–7", title: "Offer Evaluation & Keyword Research", body: "Full evaluation of marketplace metrics, funnel quality, commission economics, and compliance. Keyword list built around buyer intent." },
                { day: "Day 8–14", title: "Bridge Page Build & Tracking Setup", body: "Bridge page written and deployed. Conversion tracking configured and verified. Compliance review completed." },
                { day: "Day 15", title: "Campaign Launch", body: "Google Ads campaign activated. 3 ad groups, 30–60 keywords, 9+ ads. Manual CPC, $10–$20 daily budget." },
                { day: "Day 22–30", title: "First Optimization Cycle", body: "Data reviewed, keywords tightened, ad copy improved, ROAS assessed. Scale or optimize decision made." },
              ].map((step, i) => (
                <div key={step.title} className="relative mb-9 last:mb-0">
                  <div className="absolute -left-12 top-0 w-7 h-7 rounded-full bg-[#e8460a] text-white text-[13px] font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <span className="text-[11px] font-bold text-[#e8460a] uppercase tracking-wider">
                    {step.day}
                  </span>
                  <h4
                    className="text-[16px] font-bold text-[#1b3a5c] mt-1 mb-1.5"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-[14px] text-[#64748b]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traffic restrictions note */}
      <section className="py-12 px-6 bg-[#f4f7fb]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#dde4ed] rounded-xl p-6">
              <h4
                className="text-[16px] font-bold text-[#1b3a5c] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                What We Need From You
              </h4>
              <ul className="space-y-3">
                {[
                  "Google Ads traffic explicitly permitted",
                  "Brand keyword bidding rules clarified",
                  "Direct linking rules confirmed",
                  "Affiliate link with unique tracking ID",
                  "Sales page URL and affiliate resources",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] text-[#344155]">
                    <CheckCircle2 className="w-4 h-4 text-[#e8460a] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#dde4ed] rounded-xl p-6">
              <h4
                className="text-[16px] font-bold text-[#1b3a5c] mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                What Disqualifies an Offer
              </h4>
              <ul className="space-y-3">
                {[
                  "Google Ads traffic prohibited",
                  "Commission below $80",
                  "EPC below $1.00",
                  "Weak or short sales page",
                  "Exaggerated or illegal health claims",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] text-[#344155]">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#1b3a5c]">
        <div className="max-w-[700px] mx-auto text-center text-white">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Have an Offer That Qualifies?
          </h2>
          <p className="text-[17px] text-blue-200 mb-8">
            Send us the details — offer name, ClickBank marketplace link, EPC,
            gravity, and commission. We&apos;ll evaluate and respond within one
            business day.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#e8460a] hover:bg-[#c73a08] text-white px-8 py-3.5 rounded-lg font-bold text-[15px] transition-colors"
          >
            Submit Your Offer
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
