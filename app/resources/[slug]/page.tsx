import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { FadeIn } from "@/components/fade-in";
import { getResourceBySlug, resourceArticles } from "@/lib/resources";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Lorizia LLC`,
    description: article.description,
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = resourceArticles.filter((entry) => entry.slug !== article.slug).slice(0, 1);

  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1 px-6 py-16 md:py-20">
        <div className="lorizia-shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <article className="rounded-[34px] border border-[#ddd5c8] bg-white p-8 shadow-[0_16px_50px_rgba(13,28,40,0.07)] md:p-10">
              <FadeIn direction="none">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="lorizia-kicker">{article.category}</span>
                  <span className="rounded-full bg-[#f0e8dc] px-3 py-1 text-[12px] font-semibold text-[#8a6848]">
                    {article.readTime}
                  </span>
                </div>

                <h1 className="mt-5 text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.92] text-[#0d1c28]">
                  {article.title}
                </h1>

                <p className="mt-5 max-w-3xl text-[17px] leading-8 text-[#5a6e78]">
                  {article.intro}
                </p>

                <div className="mt-8 rounded-[24px] border-l-[6px] border-[#c8622a] bg-[#fff3e9] px-6 py-5 text-[15px] leading-7 text-[#6c4a32]">
                  <strong>Disclosure:</strong> This page is structured for affiliate use.
                  Affiliate links should only be added after partner approval, and the
                  final live version should keep the disclosure above the first affiliate CTA.
                </div>

                <div className="mt-6 rounded-[24px] border border-[#ddd5c8] bg-[#f7f2eb] p-6">
                  <span className="lorizia-kicker">Quick Answer</span>
                  <p className="mt-3 text-[16px] leading-8 text-[#314550]">
                    {article.quickAnswer}
                  </p>
                </div>
              </FadeIn>

              <FadeIn className="mt-10 overflow-hidden rounded-[26px] border border-[#ddd5c8]" delay={0.05}>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead className="bg-[#f0e8dc]">
                      <tr>
                        <th className="px-5 py-4 text-left text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8a6848]">
                          Tool
                        </th>
                        <th className="px-5 py-4 text-left text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8a6848]">
                          Best for
                        </th>
                        <th className="px-5 py-4 text-left text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8a6848]">
                          What stands out
                        </th>
                        <th className="px-5 py-4 text-left text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8a6848]">
                          Tradeoff
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {article.table.map((row) => (
                        <tr key={row.name} className="border-t border-[#e7ded1] align-top">
                          <td className="px-5 py-4 text-[15px] font-semibold text-[#0d1c28]">{row.name}</td>
                          <td className="px-5 py-4 text-[15px] leading-7 text-[#425762]">{row.bestFor}</td>
                          <td className="px-5 py-4 text-[15px] leading-7 text-[#425762]">{row.standout}</td>
                          <td className="px-5 py-4 text-[15px] leading-7 text-[#425762]">{row.drawback}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeIn>

              <div className="mt-12 space-y-10">
                {article.sections.map((section, index) => (
                  <FadeIn key={section.title} delay={0.08 + index * 0.03}>
                    <section>
                      <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[0.98] text-[#0d1c28]">
                        {section.title}
                      </h2>
                      <div className="mt-4 space-y-4 text-[16px] leading-8 text-[#425762]">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets ? (
                        <ul className="mt-5 space-y-3 pl-5 text-[15px] leading-7 text-[#425762]">
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  </FadeIn>
                ))}
              </div>

              <FadeIn className="mt-12 rounded-[26px] border border-[#ddd5c8] bg-[#f7f2eb] p-7">
                <span className="lorizia-kicker">FAQ</span>
                <div className="mt-5 space-y-5">
                  {article.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="text-[22px] font-semibold leading-tight text-[#0d1c28]">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-[15px] leading-7 text-[#425762]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn className="mt-8 rounded-[26px] border border-[#ddd5c8] bg-white p-7">
                <span className="lorizia-kicker">Source Notes</span>
                <ul className="mt-4 space-y-2 pl-5 text-[14px] leading-7 text-[#5a6e78]">
                  {article.sourceNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn className="mt-8 flex flex-wrap gap-3">
                <Link href="/resources" className="btn-ghost">
                  Back to resources
                </Link>
                {related[0] ? (
                  <Link href={`/resources/${related[0].slug}`} className="btn-primary">
                    Read next guide
                  </Link>
                ) : null}
              </FadeIn>
            </article>

            <aside className="space-y-5 lg:sticky lg:top-[96px]">
              <FadeIn>
                <div className="rounded-[28px] border border-[#ddd5c8] bg-white p-6 shadow-[0_10px_30px_rgba(13,28,40,0.06)]">
                  <span className="lorizia-kicker">Article Status</span>
                  <p className="mt-4 text-[15px] leading-7 text-[#425762]">
                    Published {article.publishedLabel}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[#425762]">
                    Primary lane: <strong>{article.primaryOffer}</strong>
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.04}>
                <div className="rounded-[28px] border border-[#ddd5c8] bg-[#f0e8dc] p-6">
                  <span className="lorizia-kicker">Affiliate Readiness</span>
                  <p className="mt-4 text-[15px] leading-7 text-[#425762]">
                    No affiliate links are inserted yet. Link placement should follow the
                    application tracker and UTM map after program approval.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="rounded-[28px] border border-[#ddd5c8] bg-[#0d1c28] p-6 text-white">
                  <span className="lorizia-kicker-light">Application Note</span>
                  <p className="mt-4 text-[15px] leading-7 text-[#8fa5b5]">
                    {article.applicationNote}
                  </p>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
