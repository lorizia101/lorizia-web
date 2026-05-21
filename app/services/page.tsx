import Link from "next/link";
import { BarChart3, ClipboardCheck, Search, Waypoints } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const services = [
  {
    icon: Search,
    title: "Paid search campaign execution",
    body: "Search campaigns built around high-intent demand, tighter keyword discipline, cleaner routing, and measured launch logic instead of broad hopeful spend.",
  },
  {
    icon: Waypoints,
    title: "Landing-path and bridge-page design",
    body: "We structure the click path so the traffic has context, the destination looks legitimate, and the visitor is moved toward the next step without sloppy claims.",
  },
  {
    icon: ClipboardCheck,
    title: "Offer and partner qualification",
    body: "Before traffic goes live, we evaluate whether the economics, market demand, and destination quality are even worth testing in the first place.",
  },
  {
    icon: BarChart3,
    title: "Tracking and optimization review",
    body: "We focus on signal quality, event clarity, and reporting that can support decisions without fantasy math hiding underneath.",
  },
];

export default function Services() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="px-6 py-12 md:py-18">
        <div className="lorizia-shell rounded-[30px] bg-[#173047] p-8 text-white md:p-10">
          <span className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#f2b161]">
            Services
          </span>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.96] md:text-6xl">
            We work on the acquisition layers that determine whether paid traffic is viable at all.
          </h1>
          <p className="mt-6 max-w-3xl text-[17px] leading-8 text-[#d2dde5]">
            Lorizia is built for offer qualification, paid search execution,
            landing-path clarity, and reporting discipline. We stay close to the
            mechanics that affect revenue instead of drifting into generic brand fluff.
          </p>
        </div>

        <div className="lorizia-shell mt-10 grid gap-5 md:grid-cols-2">
          {services.map(({ icon: Icon, title, body }) => (
            <div key={title} className="lorizia-panel p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#efe4d5] text-[#b85b20]">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-[30px] font-semibold text-[#173047]">{title}</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#58676d]">{body}</p>
            </div>
          ))}
        </div>

        <div className="lorizia-shell mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lorizia-panel p-8">
            <span className="lorizia-kicker">What we optimize for</span>
            <h2 className="mt-4 text-4xl font-semibold text-[#173047] md:text-5xl">
              Signal quality, not dashboard theater.
            </h2>
            <p className="mt-5 text-[16px] leading-8 text-[#55646a]">
              The goal is not to touch every tool. The goal is to make sure the
              path from query to landing page to conversion is trustworthy enough to
              support action.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#e3d7ca] bg-[#f7f2ea] p-8">
            <span className="lorizia-kicker">What we do not do</span>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#4f5d63]">
              {[
                "We do not treat weak offers as copy problems that can be charmed into profitability.",
                "We do not push irresponsible ad claims just to goose click-through rate.",
                "We do not call broken tracking good enough because the dashboard looks busy.",
                "We do not scale before the fundamentals deserve it.",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lorizia-shell mt-10">
          <div className="rounded-[30px] bg-[#b85b20] px-8 py-10 text-white md:px-10">
            <h2 className="text-4xl font-semibold md:text-5xl">
              If the opportunity is real, the system should read clearly.
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[#fff0de]">
              That is the standard. If you want help building or tightening that
              path, start with the contact page.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#173047] transition-colors hover:bg-[#fff3e8]"
            >
              Talk to Lorizia
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
