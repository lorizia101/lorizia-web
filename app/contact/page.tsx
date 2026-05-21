"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

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
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="px-6 py-12 md:py-18">
        <div className="lorizia-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] bg-[#173047] p-8 text-white md:p-10">
            <span className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#f2b161]">
              Contact
            </span>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.96] md:text-6xl">
              If the opportunity is serious, send the details.
            </h1>
            <p className="mt-6 text-[17px] leading-8 text-[#d2dde5]">
              The clearest starting point is a direct explanation of the offer,
              program, or partnership lane you want evaluated.
            </p>

            <div className="mt-8 space-y-4 text-[15px] leading-7 text-[#e7eef3]">
              <div className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#f2b161]" />
                <span>info@loriziallc.com</span>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[#f2b161]" />
                <span>346-341-5848</span>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#f2b161]" />
                <span>Houston, Texas, USA</span>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/6 p-6">
              <div className="flex gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#f2b161]" />
                <p className="text-[14px] leading-7 text-[#d6e1e8]">
                  Best inquiries include the live URL, payout structure,
                  attribution notes, and anything about traffic restrictions or
                  partner requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="lorizia-panel p-8 md:p-10">
            <span className="lorizia-kicker">Partnership form</span>
            <h2 className="mt-4 text-4xl font-semibold text-[#173047] md:text-5xl">
              Send the commercial details, not the polished pitch.
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[#59686e]">
              The faster we can understand the offer, economics, and buyer path,
              the faster we can judge whether the lane is worth testing.
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-[24px] border border-[#d9ead8] bg-[#f2fbf2] px-6 py-8">
                <h3 className="text-[28px] font-semibold text-[#173047]">Message sent.</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#536268]">
                  Thanks. We will review it and reply within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-5 rounded-full bg-[#173047] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#102332]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { name: "first_name", label: "First name", placeholder: "Alex" },
                    { name: "last_name", label: "Last name", placeholder: "Babalola" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="mb-2 block text-[13px] font-semibold text-[#173047]">
                        {field.label}
                      </label>
                      <input
                        type="text"
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        className="w-full rounded-2xl border border-[#dfd7ca] bg-[#fcfbf8] px-4 py-3 text-[14px] text-[#173047] outline-none transition-colors focus:border-[#b85b20] focus:bg-white"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-[#173047]">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="w-full rounded-2xl border border-[#dfd7ca] bg-[#fcfbf8] px-4 py-3 text-[14px] text-[#173047] outline-none transition-colors focus:border-[#b85b20] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-[#173047]">
                    What is this about?
                  </label>
                  <select
                    name="inquiry_type"
                    className="w-full rounded-2xl border border-[#dfd7ca] bg-[#fcfbf8] px-4 py-3 text-[14px] text-[#173047] outline-none transition-colors focus:border-[#b85b20] focus:bg-white"
                  >
                    <option value="">Choose one</option>
                    <option value="affiliate_offer">Affiliate offer or product</option>
                    <option value="saas_program">SaaS partner program</option>
                    <option value="traffic_partnership">Traffic or partner opportunity</option>
                    <option value="general">General inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-[#173047]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={7}
                    placeholder="Include the live URL, payout structure, target buyer, restrictions, and anything important about the funnel or attribution."
                    required
                    className="min-h-[180px] w-full resize-y rounded-2xl border border-[#dfd7ca] bg-[#fcfbf8] px-4 py-3 text-[14px] leading-7 text-[#173047] outline-none transition-colors focus:border-[#b85b20] focus:bg-white"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[13px] text-red-600">
                    Something failed on submission. Try again or email
                    info@loriziallc.com directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex rounded-full bg-[#b85b20] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#9f4d18] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
