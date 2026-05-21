import Link from "next/link";
import { Building2, Compass, LineChart, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

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

export default function About() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="px-6 py-12 md:py-18">
        <div className="lorizia-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] bg-[#173047] p-8 text-white md:p-10">
            <span className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#f2b161]">
              About Lorizia
            </span>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.96] md:text-6xl">
              A performance marketing business built around cleaner acquisition decisions.
            </h1>
            <p className="mt-6 text-[17px] leading-8 text-[#cedae2]">
              Lorizia LLC is a Houston-based company focused on paid search,
              partner acquisition, landing-path quality, and reporting discipline.
            </p>
          </div>

          <div className="lorizia-panel p-8 md:p-10">
            <span className="lorizia-kicker">What we are</span>
            <div className="mt-5 space-y-5 text-[16px] leading-8 text-[#506066]">
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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Business", "Lorizia LLC"],
                ["Base", "Houston, Texas"],
                ["Primary market", "United States"],
                ["Focus", "Paid search and partner acquisition"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-[#e5dbcf] bg-[#fcfbf8] px-5 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8e6d51]">
                    {label}
                  </p>
                  <p className="mt-2 text-[16px] font-semibold text-[#173047]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lorizia-shell mt-10 grid gap-5 md:grid-cols-2">
          {principles.map(({ icon: Icon, title, body }) => (
            <div key={title} className="lorizia-panel p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe4d5] text-[#b85b20]">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-[28px] font-semibold text-[#173047]">{title}</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#5b696f]">{body}</p>
            </div>
          ))}
        </div>

        <div className="lorizia-shell mt-10">
          <div className="rounded-[30px] border border-[#e1d6c8] bg-[#f7f2ea] px-8 py-10 md:px-10">
            <span className="lorizia-kicker">Who we are best for</span>
            <h2 className="mt-4 text-4xl font-semibold text-[#173047] md:text-5xl">
              Businesses that want disciplined growth, not noise.
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Offer owners who want legitimate paid acquisition, not junk traffic.",
                "SaaS programs that need an affiliate partner who understands conversion quality.",
                "Operators who care about what the numbers actually mean.",
                "Teams willing to qualify the opportunity before forcing scale.",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-4 text-[15px] leading-7 text-[#4f5d63] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#173047] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#102332]"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
