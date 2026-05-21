import Link from "next/link";
import { BadgeDollarSign, SearchCheck, ShieldCheck, Users2 } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

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
    body: "We look for offers and programs with actual demand, not wishful demand that only exists in the owner’s head.",
  },
  {
    icon: ShieldCheck,
    title: "Rules we can operate inside cleanly",
    body: "Traffic restrictions, compliance expectations, and attribution rules need to be clear enough to work with seriously.",
  },
];

export default function Partnerships() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="px-6 py-12 md:py-18">
        <div className="lorizia-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="lorizia-panel p-8 md:p-10">
            <span className="lorizia-kicker">Partnerships</span>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.96] text-[#173047] md:text-6xl">
              Lorizia works with offers and programs that can withstand disciplined acquisition.
            </h1>
            <p className="mt-6 max-w-3xl text-[17px] leading-8 text-[#55646a]">
              We are interested in partnerships where the economics are real, the
              destination quality is defensible, and the reporting path can support
              practical growth decisions.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#173047] p-8 text-white md:p-10">
            <span className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#f2b161]">
              Best fit
            </span>
            <div className="mt-5 space-y-4 text-[16px] leading-8 text-[#d4dfe7]">
              <p>Affiliate offers with clear buyer demand and believable economics.</p>
              <p>SaaS partner programs that want a serious paid-acquisition operator.</p>
              <p>Businesses that value clean traffic and readable reporting over inflated stories.</p>
            </div>
          </div>
        </div>

        <div className="lorizia-shell mt-10 grid gap-5 md:grid-cols-2">
          {requirements.map(({ icon: Icon, title, body }) => (
            <div key={title} className="lorizia-panel p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe4d5] text-[#b85b20]">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-[28px] font-semibold text-[#173047]">{title}</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#5a686e]">{body}</p>
            </div>
          ))}
        </div>

        <div className="lorizia-shell mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-[#e2d7c9] bg-[#f7f2ea] p-8">
            <span className="lorizia-kicker">Before we say yes</span>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#4f5d63]">
              {[
                "We look at the sales path, not just the headline payout.",
                "We care whether the funnel is something paid traffic can enter without embarrassment.",
                "We reject exaggerated claims, weak destination quality, and economics that depend on fantasy conversion rates.",
                "We would rather pass on a weak partnership than build traffic around a broken offer.",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lorizia-panel p-8">
            <span className="lorizia-kicker">What to send us</span>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#56656b]">
              {[
                "The offer or product name and the live destination URL.",
                "Your payout structure, approval flow, and any traffic restrictions.",
                "The primary buyer you want to reach and the commercial action that matters.",
                "Anything important about attribution, tracking, or partner rules.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[#e7ddd1] bg-[#fcfbf8] px-5 py-4">
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#b85b20] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#9f4d18]"
            >
              Submit a partnership inquiry
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
