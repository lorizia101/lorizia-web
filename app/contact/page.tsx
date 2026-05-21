"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

const FORMSPREE_FORM_ID = "mnjgyzaz";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        {/* Page hero */}
        <section className="bg-[#0d1c28] px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <FadeIn>
              <span className="lorizia-kicker-light">Contact</span>
              <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,6vw,6.5rem)] font-semibold leading-[0.9] text-white">
                If the opportunity is serious, send the details.
              </h1>
              <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[#8fa5b5]">
                The clearest starting point is a direct explanation of the offer,
                program, or partnership lane you want evaluated.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact body */}
        <section className="px-6 py-20 md:py-28">
          <div className="lorizia-shell">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

              {/* Left: info */}
              <FadeIn direction="left">
                <div className="space-y-6">
                  <div className="rounded-[32px] border border-[#ddd5c8] bg-white p-8">
                    <span className="lorizia-kicker">Get in touch</span>
                    <div className="mt-6 space-y-5">
                      {[
                        { icon: Mail,   label: "Email",    value: "info@loriziallc.com", href: "mailto:info@loriziallc.com" },
                        { icon: Phone,  label: "Phone",    value: "346-341-5848",        href: "tel:+13463415848" },
                        { icon: MapPin, label: "Location", value: "Houston, Texas, USA", href: null },
                      ].map(({ icon: Icon, label, value, href }) => (
                        <div key={label} className="flex items-start gap-4 border-t border-[#f0e8dc] pt-5 first:border-0 first:pt-0">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0e8dc] text-[#c8622a]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8a9da8]">{label}</p>
                            {href ? (
                              <a href={href} className="mt-1 block text-[16px] font-medium text-[#0d1c28] hover:text-[#c8622a] transition-colors">
                                {value}
                              </a>
                            ) : (
                              <p className="mt-1 text-[16px] font-medium text-[#0d1c28]">{value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[32px] border border-[#ddd5c8] bg-[#f7f2eb] p-8">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#c8622a]" />
                      <div>
                        <p className="text-[14px] font-semibold text-[#0d1c28]">Best inquiries include:</p>
                        <ul className="mt-3 space-y-2 text-[14px] leading-6 text-[#5a6e78]">
                          {[
                            "The live destination URL",
                            "Payout structure and attribution notes",
                            "Traffic restrictions or platform requirements",
                            "Conversion action and buyer journey",
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c8622a]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Right: form */}
              <FadeIn delay={0.12} direction="right">
                <div className="rounded-[32px] border border-[#ddd5c8] bg-white p-8 md:p-10">
                  <span className="lorizia-kicker">Partnership form</span>
                  <h2 className="mt-4 text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[1.0] text-[#0d1c28]">
                    Send the commercial details, not the polished pitch.
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-[#5a6e78]">
                    The faster we can understand the offer, economics, and buyer path,
                    the faster we can judge whether the lane is worth testing.
                  </p>

                  {status === "success" ? (
                    <div className="mt-8 rounded-[24px] border border-green-200 bg-green-50 px-7 py-8">
                      <h3 className="text-[26px] font-semibold text-[#0d1c28]">Message sent.</h3>
                      <p className="mt-3 text-[15px] leading-7 text-[#5a6e78]">
                        Thanks. We will review it and reply within one business day.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-5 btn-primary text-[14px] py-2.5 px-5"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {[
                          { name: "first_name", label: "First name", placeholder: "Alex", type: "text" },
                          { name: "last_name",  label: "Last name",  placeholder: "Babalola", type: "text" },
                        ].map((f) => (
                          <div key={f.name}>
                            <label className="mb-2 block text-[13px] font-semibold text-[#0d1c28]">{f.label}</label>
                            <input
                              type={f.type}
                              name={f.name}
                              placeholder={f.placeholder}
                              required
                              className="lorizia-input"
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-semibold text-[#0d1c28]">Email address</label>
                        <input type="email" name="email" placeholder="you@company.com" required className="lorizia-input" />
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-semibold text-[#0d1c28]">What is this about?</label>
                        <select name="inquiry_type" className="lorizia-input">
                          <option value="">Choose one</option>
                          <option value="affiliate_offer">Affiliate offer or product</option>
                          <option value="saas_program">SaaS partner program</option>
                          <option value="traffic_partnership">Traffic or partner opportunity</option>
                          <option value="general">General inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-semibold text-[#0d1c28]">Message</label>
                        <textarea
                          name="message"
                          rows={6}
                          placeholder="Include the live URL, payout structure, target buyer, restrictions, and anything important about the funnel or attribution."
                          required
                          className="lorizia-input min-h-[160px] resize-y"
                        />
                      </div>

                      {status === "error" && (
                        <p className="rounded-xl bg-red-50 px-4 py-3 text-[13px] text-red-600 border border-red-200">
                          Something failed on submission. Try again or email info@loriziallc.com directly.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === "submitting" ? "Sending..." : "Send inquiry"}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                  )}
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
