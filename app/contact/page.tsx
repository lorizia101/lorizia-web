"use client";

import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

// ─── Formspree setup ────────────────────────────────────────────────────────
// 1. Go to https://formspree.io → sign up free → New Form → copy your Form ID
// 2. Replace the placeholder below with your actual Form ID (looks like: xpwzabcd)
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
    <div className="flex flex-col flex-1">
      <Nav />

      {/* Hero */}
      <div
        className="py-20 px-6 text-white"
        style={{ background: "linear-gradient(135deg, #122840 0%, #1b3a5c 100%)" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[12px] font-bold uppercase tracking-widest text-orange-300">
            Get In Touch
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Let&apos;s Talk About{" "}
            <span className="text-[#f5c842]">Working Together</span>
          </h1>
          <p className="text-[17px] text-blue-200 max-w-xl">
            Whether you have an offer to promote, a SaaS program looking for a
            paid traffic affiliate, or a question about how we operate — reach
            out directly.
          </p>
        </div>
      </div>

      {/* Contact body */}
      <section className="py-20 px-6 bg-white flex-1">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left — info */}
          <div>
            <h3
              className="text-[22px] font-bold text-[#1b3a5c] mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Contact Information
            </h3>
            <div className="space-y-5 mb-10">
              {[
                { Icon: Mail, label: "Email", value: "info@loriziallc.com", href: "mailto:info@loriziallc.com" },
                { Icon: Phone, label: "Phone", value: "346-341-5848", href: "tel:+13463415848" },
                { Icon: MapPin, label: "Location", value: "Houston, Texas, USA", href: null },
                { Icon: Clock, label: "Response Time", value: "Within 1 business day", href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-[#f4f7fb] border border-[#dde4ed] rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#1b3a5c]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-[#64748b] uppercase tracking-widest mb-1">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-[15px] font-semibold text-[#1b3a5c] hover:text-[#e8460a] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-[15px] font-semibold text-[#1b3a5c]">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* What to include */}
            <div className="space-y-4">
              {[
                {
                  title: "For Offer Owners",
                  items: ["Offer name and ClickBank marketplace link", "Current EPC and gravity score", "Average commission amount", "Confirmation Google Ads traffic is permitted"],
                },
                {
                  title: "For SaaS Programs",
                  items: ["Program name and PartnerStack link", "Commission structure (recurring or one-time)", "Free trial or demo availability", "Target audience and use case"],
                },
              ].map((g) => (
                <div key={g.title} className="bg-[#f4f7fb] rounded-xl p-5">
                  <h4 className="text-[13px] font-bold text-[#1b3a5c] uppercase tracking-wider mb-3">
                    {g.title}
                  </h4>
                  <ul className="space-y-2">
                    {g.items.map((item) => (
                      <li key={item} className="flex gap-2 text-[13px] text-[#344155]">
                        <span className="text-[#e8460a] font-bold shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white border border-[#dde4ed] rounded-2xl p-10 shadow-sm">
            <h3
              className="text-[22px] font-bold text-[#1b3a5c] mb-7"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Send Us a Message
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <CheckCircle className="w-14 h-14 text-green-500" />
                <h4 className="text-[20px] font-bold text-[#1b3a5c]">Message Sent</h4>
                <p className="text-[14px] text-[#64748b] max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 1 business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[13px] font-semibold text-[#e8460a] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { name: "first_name", label: "First Name", placeholder: "John", required: true },
                    { name: "last_name", label: "Last Name", placeholder: "Smith", required: true },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[13px] font-semibold text-[#1b3a5c] mb-1.5">
                        {f.label} <span className="text-[#e8460a]">*</span>
                      </label>
                      <input
                        type="text"
                        name={f.name}
                        placeholder={f.placeholder}
                        required={f.required}
                        className="w-full bg-[#f4f7fb] border border-[#dde4ed] rounded-lg px-4 py-3 text-[14px] text-[#1b3a5c] placeholder-[#b0bec9] focus:border-[#e8460a] focus:bg-white outline-none transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <label className="block text-[13px] font-semibold text-[#1b3a5c] mb-1.5">
                    Email Address <span className="text-[#e8460a]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    required
                    className="w-full bg-[#f4f7fb] border border-[#dde4ed] rounded-lg px-4 py-3 text-[14px] text-[#1b3a5c] placeholder-[#b0bec9] focus:border-[#e8460a] focus:bg-white outline-none transition-colors"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[13px] font-semibold text-[#1b3a5c] mb-1.5">
                    I&apos;m reaching out about…
                  </label>
                  <select
                    name="inquiry_type"
                    className="w-full bg-[#f4f7fb] border border-[#dde4ed] rounded-lg px-4 py-3 text-[14px] text-[#1b3a5c] focus:border-[#e8460a] focus:bg-white outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">I have an offer I want promoted</option>
                    <option value="saas">SaaS affiliate program inquiry</option>
                    <option value="partnerstack">PartnerStack partnership</option>
                    <option value="general">General inquiry</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-[13px] font-semibold text-[#1b3a5c] mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your offer, program, or question…"
                    className="w-full bg-[#f4f7fb] border border-[#dde4ed] rounded-lg px-4 py-3 text-[14px] text-[#1b3a5c] placeholder-[#b0bec9] focus:border-[#e8460a] focus:bg-white outline-none transition-colors resize-y min-h-[110px]"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[13px] text-red-600 mb-4">
                    Something went wrong. Please try again or email us directly at info@loriziallc.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#e8460a] hover:bg-[#c73a08] disabled:opacity-60 text-white py-3.5 rounded-lg font-bold text-[15px] transition-colors cursor-pointer"
                >
                  {status === "submitting" ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Want to work together CTA */}
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
            paid traffic, we&apos;d love to hear from you. Fill out the form above
            or reach out directly.
          </p>
          <a
            href="mailto:info@loriziallc.com"
            className="inline-block bg-[#e8460a] hover:bg-[#c73a08] text-white px-8 py-3.5 rounded-lg font-bold text-[15px] transition-colors"
          >
            Email Us Directly
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
