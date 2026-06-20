import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { FadeIn, StaggerChildren, fadeUpVariant } from "@/components/fade-in";
import { resourceArticles } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources | Lorizia LLC",
  description:
    "Practical software reviews, comparison guides, and operator-focused buying content for small businesses and creators.",
};

export default function ResourcesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#0d1c28] px-6 py-20 md:py-24">
          <div className="lorizia-grid absolute inset-0 pointer-events-none" />
          <div className="absolute left-[-8%] top-[-12%] h-[360px] w-[360px] rounded-full bg-[#c8622a]/16 blur-3xl pointer-events-none" />
          <div className="lorizia-shell relative">
            <FadeIn>
              <span className="lorizia-kicker-light">Resources</span>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[0.9] text-white">
                Software buying guides built for operators, not hype.
              </h1>
              <p className="mt-6 max-w-2xl text-[18px] leading-8 text-[#8fa5b5]">
                These pages help small businesses and creators choose tools with a
                clearer view of fit, tradeoffs, and operating reality.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="px-6 py-18 md:py-24">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker">Live Library</span>
              <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.92] text-[#0d1c28]">
                First-wave B2B affiliate content, published with a real buying
                point of view.
              </h2>
            </FadeIn>

            <StaggerChildren className="mt-12 grid gap-6 lg:grid-cols-2" staggerDelay={0.08}>
              {resourceArticles.map((article) => (
                <div
                  key={article.slug}
                  className="rounded-[30px] border border-[#ddd5c8] bg-white p-8 shadow-[0_12px_36px_rgba(13,28,40,0.07)]"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="lorizia-kicker">{article.category}</span>
                    <span className="rounded-full bg-[#f0e8dc] px-3 py-1 text-[12px] font-semibold text-[#8a6848]">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[clamp(1.8rem,3vw,2.7rem)] font-semibold leading-[1] text-[#0d1c28]">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#5a6e78]">
                    {article.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-[#8a9da8]">
                    <span>Primary lane: {article.primaryOffer}</span>
                    <span className="h-1 w-1 rounded-full bg-[#c8622a]" />
                    <span>Updated {article.publishedLabel}</span>
                  </div>
                  <div className="mt-7">
                    <Link href={`/resources/${article.slug}`} className="btn-primary">
                      Read article
                    </Link>
                  </div>
                </div>
              ))}
            </StaggerChildren>

            <FadeIn className="mt-12 rounded-[30px] border border-[#ddd5c8] bg-[#f0e8dc] p-8">
              <span className="lorizia-kicker">Next in queue</span>
              <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[#4b5d68]">
                The next wave is already lined up: <strong>the first SEO-tool comparison</strong>,
                supporting internal-link upgrades, and partner-link insertion as approvals come in.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
