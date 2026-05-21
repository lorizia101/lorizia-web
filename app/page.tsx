import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const systems = [
  {
    number: "01",
    label: "Traffic",
    title: "Search-first acquisition built around real buyer intent.",
    body: "We prefer channels where the customer is already looking. That keeps the work grounded in demand instead of pretending weak traffic can be bullied into revenue.",
    tone: "dark",
  },
  {
    number: "02",
    label: "Destination",
    title: "Landing paths designed to survive review and still convert.",
    body: "The click path has to make sense to users, partners, and platform reviewers at the same time. That is part of the system, not a separate cleanup project.",
    tone: "sand",
  },
  {
    number: "03",
    label: "Partnerships",
    title: "Offer and partner economics screened before traffic gets permission.",
    body: "We do not assume a payout is good just because it exists. We qualify the commercial path first so money does not get wasted proving something weak is weak.",
    tone: "light",
  },
];

const signals = [
  "Paid search over vague awareness spend",
  "Destination quality as an operating constraint",
  "Partner programs with believable economics",
  "Measurement strong enough to support decisions",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#f6f0e7] text-[#14212b]">
      <Nav />

      <main>
        <section className="px-6 pb-16 pt-8 md:pb-24 md:pt-12">
          <div className="lorizia-shell">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="relative overflow-hidden rounded-[44px] bg-[#13222c] px-8 py-10 text-white shadow-[0_38px_120px_rgba(19,34,44,0.24)] md:px-12 md:py-14">
                <div className="absolute inset-0 opacity-40">
                  <div className="lorizia-gridline absolute inset-0" />
                  <div className="absolute left-[-8%] top-[-12%] h-[320px] w-[320px] rounded-full bg-[#c56f31]/24 blur-3xl" />
                  <div className="absolute bottom-[-15%] right-[-8%] h-[340px] w-[340px] rounded-full bg-[#3b5568]/30 blur-3xl" />
                </div>
                <div className="relative">
                  <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d9ab72]">
                    Lorizia LLC · Houston
                  </p>
                  <h1 className="mt-7 max-w-5xl text-[3.6rem] font-semibold leading-[0.86] md:text-[6rem] xl:text-[7rem]">
                    Performance
                    <br />
                    marketing with
                    <br />
                    operating discipline.
                  </h1>
                  <p className="mt-8 max-w-2xl text-[18px] leading-8 text-[#d4dee6] md:text-[20px]">
                    We build acquisition systems for businesses that need
                    cleaner traffic, stronger destination quality, and reporting
                    that still makes sense after the dashboard stops flattering everyone.
                  </p>
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c76728] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#ae571f]"
                    >
                      Start a conversation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/partnerships"
                      className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/6"
                    >
                      Review partnership fit
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="overflow-hidden rounded-[34px] border border-[#dbcab7] bg-[#ead9c3] p-7 shadow-[0_18px_50px_rgba(21,33,43,0.08)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#94623b]">
                    Current lane
                  </p>
                  <div className="mt-4 border-t border-[#d2baa0] pt-4">
                    <p className="text-[27px] font-semibold leading-[1.1] text-[#14212b]">
                      Paid search, destination quality, partner qualification, and cleaner signal.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[34px] border border-[#d9cdbc] bg-[#f8f3ec] p-7 shadow-[0_18px_50px_rgba(21,33,43,0.06)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#94623b]">
                    What matters here
                  </p>
                  <div className="mt-5 space-y-4">
                    {signals.map((signal) => (
                      <div
                        key={signal}
                        className="flex items-start gap-3 border-t border-[#e3d8ca] pt-4 text-[15px] leading-7 text-[#4f5e66] first:border-t-0 first:pt-0"
                      >
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#b86128]" />
                        <span>{signal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-8 md:py-14">
          <div className="lorizia-shell">
            <div className="mb-10 flex items-end justify-between gap-6 border-t border-[#d7c9b8] pt-5">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#9a6840]">
                  The system
                </p>
                <h2 className="mt-4 max-w-4xl text-[2.7rem] font-semibold leading-[0.92] text-[#14212b] md:text-[5.4rem]">
                  Three layers decide whether the path deserves scale.
                </h2>
              </div>
            </div>

            <div className="space-y-7">
              {systems.map((item, index) => {
                const dark = item.tone === "dark";
                const sand = item.tone === "sand";
                const wrapper = dark
                  ? "bg-[#13222c] text-white shadow-[0_30px_90px_rgba(19,34,44,0.2)]"
                  : sand
                    ? "bg-[#ead9c3] text-[#14212b] shadow-[0_20px_60px_rgba(21,33,43,0.08)]"
                    : "bg-[#fbf8f3] text-[#14212b] shadow-[0_20px_60px_rgba(21,33,43,0.06)] border border-[#ddd1c4]";
                const body = dark ? "text-[#d1dbe3]" : "text-[#4f5d65]";
                const accent = dark ? "text-[#d9ab72]" : "text-[#b86128]";
                const visual = dark
                  ? "from-[#223745] via-[#13222c] to-[#0e171e]"
                  : sand
                    ? "from-[#f5eee5] via-[#e2c9a9] to-[#c58a4f]"
                    : "from-[#13222c] via-[#4d6777] to-[#d9ab72]";

                return (
                  <article
                    key={item.number}
                    className={`overflow-hidden rounded-[42px] px-8 py-9 md:px-10 md:py-10 ${wrapper}`}
                  >
                    <div
                      className={
                        index % 2 === 0
                          ? "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
                          : "grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
                      }
                    >
                      <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                        <p className={`text-[11px] font-bold uppercase tracking-[0.34em] ${accent}`}>
                          {item.label}
                        </p>
                        <div className="mt-4 flex items-start gap-4">
                          <span className={`text-[60px] font-semibold leading-none md:text-[96px] ${accent}`}>
                            {item.number}
                          </span>
                          <div>
                            <h3 className="max-w-3xl text-[2.2rem] font-semibold leading-[0.92] md:text-[4.3rem]">
                              {item.title}
                            </h3>
                            <p className={`mt-6 max-w-2xl text-[16px] leading-8 ${body}`}>
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className={index % 2 === 0 ? "" : "lg:order-1"}>
                        <div className={`relative min-h-[360px] overflow-hidden rounded-[30px] bg-gradient-to-br ${visual}`}>
                          <div className="lorizia-gridline absolute inset-0 opacity-20" />
                          <div className="absolute left-6 top-6 text-[11px] font-bold uppercase tracking-[0.32em] text-white/70">
                            Lorizia / {item.label}
                          </div>
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="grid gap-3 text-[13px] uppercase tracking-[0.24em] text-white/72 sm:grid-cols-2">
                              <span>Intent</span>
                              <span>Destination</span>
                              <span>Economics</span>
                              <span>Signal</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-22">
          <div className="lorizia-shell">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="rounded-[38px] bg-[#101a22] px-8 py-10 text-white md:px-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d9ab72]">
                  Who this fits
                </p>
                <h2 className="mt-4 text-[2.6rem] font-semibold leading-[0.92] md:text-[5rem]">
                  Better for the right operators than vaguely useful to everyone.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Affiliate offers with believable paid-traffic economics.",
                  "SaaS programs that need serious acquisition partners.",
                  "Teams fixing destination quality and measurement, not just headlines.",
                  "Operators who care more about clean signal than presentation theater.",
                ].map((item) => (
                  <div
                    key={item}
                    className="min-h-[170px] rounded-[28px] border border-[#dccfbe] bg-[#fbf8f3] px-6 py-6 text-[17px] leading-8 text-[#48575f] shadow-[0_18px_50px_rgba(21,33,43,0.05)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-2 md:pb-28">
          <div className="lorizia-shell overflow-hidden rounded-[42px] bg-[#c76728] px-8 py-10 text-white md:px-12 md:py-14">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#ffe3c0]">
                  Contact
                </p>
                <h2 className="mt-4 max-w-4xl text-[2.8rem] font-semibold leading-[0.92] md:text-[5.4rem]">
                  If the commercial path is real, we can build the system around it.
                </h2>
                <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#fff0df]">
                  If it is weak, we would rather say that early than waste money
                  trying to make a broken lane look sophisticated.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16222b] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#10181f]"
              >
                Contact Lorizia
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
