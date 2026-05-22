import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Terms of Use | Lorizia LLC",
  description:
    "Terms governing use of Lorizia LLC services, partnership arrangements, and this website.",
};

const EFFECTIVE_DATE = "January 1, 2025";

const sections = [
  {
    id: "overview",
    title: "Overview",
    body: [
      "Lorizia LLC (“Lorizia”, “we”, “us”) is a Houston-based performance marketing company. These terms apply to anyone who visits this website or engages with Lorizia in a business capacity.",
      "By accessing this site or entering a partnership arrangement with Lorizia, you agree to these terms. If you don't agree, don't use the site or engage with our services.",
    ],
  },
  {
    id: "services",
    title: "Services",
    body: [
      "Lorizia provides paid search campaign management, landing-path strategy, offer and partner qualification, and tracking and reporting services. The specific scope of any engagement is defined in a separate written agreement between Lorizia and the client or partner.",
      "We do not guarantee specific revenue outcomes. Performance marketing involves real commercial risk, and results depend on offer quality, market conditions, and platform factors outside our control.",
    ],
  },
  {
    id: "partnerships",
    title: "Partnerships & Affiliate Arrangements",
    body: [
      "Lorizia participates in affiliate and performance marketing partnerships where we earn compensation tied to measurable commercial outcomes (clicks, leads, sales). Any such arrangement is disclosed where required by law or platform policy.",
      "Partners submitting inquiries through this site understand that Lorizia reviews all opportunities independently and does not guarantee acceptance. We pass on offers that don't meet our qualification standards.",
      "Partners are responsible for ensuring their offers, landing pages, and program terms are accurate, compliant with applicable laws, and do not contain misleading claims. Lorizia reserves the right to terminate any partnership where this standard is not met.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    body: [
      "You may not use this website or any communication with Lorizia to transmit spam, fraudulent offers, or deceptive business proposals. You may not attempt to reverse-engineer, scrape, or systematically copy content from this site.",
      "All content on this site — copy, design, and structure — belongs to Lorizia LLC. You may not reproduce or repurpose it without written permission.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers & Limitations",
    body: [
      "This site and its content are provided as-is. Lorizia makes no warranties about the accuracy or completeness of information presented here.",
      "Lorizia's liability in any dispute arising from use of this site or our services is limited to the amount paid for the relevant service in the prior 30 days. We are not liable for indirect, incidental, or consequential damages.",
      "These terms are governed by the laws of the State of Texas, USA. Any disputes shall be resolved in Harris County, Texas.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: [
      "We may update these terms from time to time. The effective date above reflects the most recent revision. Continued use of the site after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "Questions about these terms can be directed to info@loriziallc.com or by using the contact form on this site.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        {/* Page hero */}
        <section className="bg-[#0d1c28] px-6 py-16 md:py-20">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker-light">Legal</span>
              <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.92] text-white">
                Terms of Use
              </h1>
              <p className="mt-4 text-[15px] text-[#6a8899]">
                Effective {EFFECTIVE_DATE} · Lorizia LLC · Houston, Texas
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-16 md:py-24">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">

              {/* Sidebar TOC */}
              <FadeIn direction="left" className="hidden lg:block lg:sticky lg:top-28">
                <nav aria-label="Table of contents">
                  <p className="lorizia-kicker mb-4">Contents</p>
                  <ul className="space-y-2">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="block text-[14px] text-[#6b7f8a] transition-colors hover:text-[#c8622a]"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </FadeIn>

              {/* Body */}
              <FadeIn delay={0.08}>
                <div className="space-y-10">
                  {sections.map((s, i) => (
                    <article
                      key={s.id}
                      id={s.id}
                      className={`rounded-[24px] border border-[#ddd5c8] bg-white p-7 md:p-8 ${
                        i === 0 ? "border-l-4 border-l-[#c8622a]" : ""
                      }`}
                    >
                      <h2 className="text-[22px] font-semibold text-[#0d1c28]">
                        {s.title}
                      </h2>
                      <div className="mt-4 space-y-4">
                        {s.body.map((para, j) => (
                          <p
                            key={j}
                            className="text-[15px] leading-7 text-[#4a5c66]"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </article>
                  ))}

                  {/* Footer note */}
                  <div className="rounded-[24px] bg-[#f0e8dc] px-7 py-6 md:px-8">
                    <p className="text-[14px] leading-7 text-[#6b5a48]">
                      For partnership inquiries or questions about these terms, reach us at{" "}
                      <a
                        href="mailto:info@loriziallc.com"
                        className="font-semibold text-[#c8622a] hover:underline"
                      >
                        info@loriziallc.com
                      </a>{" "}
                      or via the{" "}
                      <Link href="/contact" className="font-semibold text-[#c8622a] hover:underline">
                        contact page
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
