"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";


export default function About() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />

      {/* Page hero */}
      <div
        className="py-20 px-6 text-white"
        style={{ background: "linear-gradient(135deg, #122840 0%, #1b3a5c 100%)" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-widest text-orange-300">
            About Lorizia LLC
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            A Lean Performance Marketing Operation —{" "}
            <span className="text-[#f5c842]">Built on Data, Not Guesswork</span>
          </h1>
          <p className="text-[17px] text-blue-200 max-w-xl">
            Houston-based. Focused. Every campaign follows the same disciplined
            playbook from offer selection through to the first scaling decision.
          </p>
        </div>
      </div>

      {/* Body */}
      <section className="pt-20 pb-8 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
              Who We Are
            </span>
            <h2
              className="text-3xl font-bold text-[#1b3a5c] mt-3 mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Business Behind the Campaigns
            </h2>
            {[
              <>Lorizia LLC is a <strong>Houston-based performance marketing firm</strong> focused on building profitable, repeatable systems for affiliate and partner revenue.</>,
              <>We operate across <strong>Google Search Ads</strong>, using a funnel model built around high-intent keywords, educational bridge pages, and strict conversion tracking.</>,
              <>Our affiliate partnerships span three revenue engines: <strong>health and wellness supplements</strong> on ClickBank (Engine 1), <strong>SaaS and business software</strong> through PartnerStack and impact.com (Engine 2), and <strong>broader business affiliate inventory</strong> through Awin and FlexOffers (Engine 3).</>,
              <>We are a <strong>small, focused operation</strong> — not an agency juggling hundreds of clients. When we take on a partner offer, it gets our full attention until it&apos;s working.</>,
            ].map((para, i) => (
              <p key={i} className="text-[16px] text-[#64748b] mb-5 leading-relaxed">
                {para}
              </p>
            ))}

            <div className="mt-8 border border-[#dde4ed] rounded-xl overflow-hidden text-[14px]">
              {[
                { label: "Business registration", value: "Lorizia LLC, Texas" },
                { label: "Primary market", value: "United States" },
                { label: "Platforms", value: "ClickBank · PartnerStack · impact.com · Awin · FlexOffers" },
                { label: "Email", value: "info@loriziallc.com", href: "mailto:info@loriziallc.com" },
                { label: "Phone", value: "346-341-5848", href: "tel:+13463415848" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center px-5 py-3.5 border-b border-[#dde4ed] last:border-b-0"
                >
                  <span className="text-[#64748b] font-medium">{row.label}</span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-[#e8460a] font-semibold hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-[#1b3a5c] font-semibold">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
              Operating Principles
            </span>
            <h2
              className="text-3xl font-bold text-[#1b3a5c] mt-3 mb-8"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              How We Make Every Decision
            </h2>
            <div className="grid grid-cols-1 gap-5">
              {[
                {
                  icon: "📊",
                  title: "Data Before Decisions",
                  body: "No optimization call is made before $75–$100 in spend and 50+ clicks. We wait for statistically meaningful data before drawing any conclusions.",
                },
                {
                  icon: "🔬",
                  title: "One Change at a Time",
                  body: "We isolate every variable. Never multiple changes simultaneously — ever. Each change has a 5–7 day evaluation window before the next.",
                },
                {
                  icon: "✅",
                  title: "Compliance First",
                  body: "Every page, every ad, every claim is reviewed against Google Ads policy and FTC guidelines before it goes live.",
                },
                {
                  icon: "⚡",
                  title: "Simple Systems",
                  body: "Complexity kills repeatability. Our playbooks scale because they are lean, documented, and consistently executed.",
                },
                {
                  icon: "🛡️",
                  title: "Kill Rules Are Sacred",
                  body: "If $100 spend produces zero conversions, we pause. We protect capital first — scale comes after proven profitability.",
                },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" as const }}
                  className="bg-[#f4f7fb] border border-[#dde4ed] rounded-xl p-6"
                >
                  <span className="text-2xl mb-3 block">{v.icon}</span>
                  <h3
                    className="text-[16px] font-bold text-[#1b3a5c] mb-2"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-[14px] text-[#64748b] leading-relaxed">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team illustration */}
      <section className="pt-4 pb-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#dde4ed]">
            <Image
              src="/contact-us.png"
              alt="Lorizia LLC — Houston-based performance marketing"
              width={1100}
              height={500}
              className="w-full object-cover max-h-[320px]"
            />
          </div>
        </div>
      </section>

      {/* Revenue models */}
      <section className="py-20 px-6 bg-[#f4f7fb]">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-widest text-[#e8460a]">
            Revenue Models
          </span>
          <h2
            className="text-3xl font-bold text-[#1b3a5c] mt-3 mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            How the Business Makes Money
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                bg: "bg-[#1b3a5c]",
                num: "01",
                title: "Paid Search → Affiliate Commission",
                body: "Primary model. Google Search Ads → Bridge Page → Affiliate Sales Page → Commission. Every dollar of ad spend is tracked against revenue generated.",
                flow: ["Search Ad", "Bridge Page", "Offer Sales Page", "Commission"],
              },
              {
                bg: "bg-[#e8460a]",
                num: "02",
                title: "Traffic → Lead → Email Monetization",
                body: "Secondary model. Traffic → Lead Capture → Email Follow-up → Affiliate / SaaS monetization. Builds an owned audience for recurring revenue.",
                flow: ["Traffic", "Lead Capture", "Email Sequence", "Monetization"],
              },
            ].map((m) => (
              <div key={m.title} className={`${m.bg} text-white rounded-2xl p-10`}>
                <span className="text-6xl font-black opacity-20 leading-none block mb-2">
                  {m.num}
                </span>
                <h3
                  className="text-[20px] font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {m.title}
                </h3>
                <p className="text-[14px] opacity-85 mb-6 leading-relaxed">{m.body}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {m.flow.map((f, i) => (
                    <span key={f} className="flex items-center gap-2">
                      <span className="text-[12px] font-semibold bg-white/20 rounded-full px-3 py-1">
                        {f}
                      </span>
                      {i < m.flow.length - 1 && (
                        <span className="opacity-50 text-sm">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[600px] mx-auto bg-[#1b3a5c] rounded-2xl p-10 text-center text-white">
          <h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Want to Work Together?
          </h3>
          <p className="text-[15px] text-blue-200 mb-7">
            If you have an offer or program you want promoted with legitimate
            paid traffic, reach out directly.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#e8460a] hover:bg-[#c73a08] text-white px-8 py-3.5 rounded-lg font-bold text-[15px] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
