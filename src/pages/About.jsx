import React from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, HeartPulse, ShieldCheck, Users, Award, ArrowRight } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";

const pillars = [
  { icon: ShieldCheck, title: "Protect", desc: "Life insurance that shields your family's income and future when the unexpected happens.", badge: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-emerald-500/30" },
  { icon: HeartPulse, title: "Cover", desc: "Health, Medicare, and supplemental plans that keep quality care within reach.", badge: "bg-gradient-to-br from-rose-400 to-red-600 shadow-rose-500/30" },
  { icon: Users, title: "Preserve", desc: "Final expense and legacy coverage that eases the burden on those you love.", badge: "bg-gradient-to-br from-sky-400 to-blue-600 shadow-blue-500/30" },
];

const values = [
  { icon: Heart, title: "Family at the Center", desc: "Every plan is designed around the people who depend on you.", badge: "bg-gradient-to-br from-rose-400 to-pink-600 shadow-rose-500/30" },
  { icon: Award, title: "Excellence in Advice", desc: "We hold ourselves to the highest standard of professional guidance.", badge: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/30" },
  { icon: Target, title: "Clarity Over Complexity", desc: "We translate the complicated into the understandable.", badge: "bg-gradient-to-br from-violet-400 to-purple-600 shadow-violet-500/30" },
];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Our Story"
        title={<>A practice built to <span className="text-gold-gradient">protect families</span>, not products.</>}
        subtitle="TriYash Financial Services LLC was founded on a simple conviction: that every family deserves life and health coverage chosen with patience, integrity, and their best interests at heart."
        actions={
          <>
            <CTAButton to="/contact">Get Started</CTAButton>
            <CTAButton to="/services" variant="outline">Our Services</CTAButton>
          </>
        }
      />

      {/* STORY */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="hero-eyebrow mb-5 text-primary">The TriYash Difference</span>
              <h2 className="text-balance font-heading text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
                Three commitments. One unshakable foundation.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The name "TriYash" reflects our three-part philosophy: <strong className="text-foreground">Tri</strong> — the three promises of Protect, Cover, and Preserve — and <strong className="text-foreground">Yash</strong> — the peace of mind and security we help families achieve. Together, they form the architecture of a fully protected family.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We are independent and not tied to a single carrier. Our advisors shop the market to find coverage that fits your life and your budget — not the other way around.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="grid gap-5 sm:grid-cols-3">
                {pillars.map((p, i) => (
                  <div key={p.title} className="group bg-card p-7 text-center shadow-md ring-1 ring-border/60 transition-all hover:-translate-y-1.5 hover:shadow-xl">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${p.badge}`}>
                      <p.icon className="h-8 w-8" />
                    </div>
                    <div className="mt-4 font-heading text-2xl font-semibold text-accent">0{i + 1}</div>
                    <h3 className="mt-1 font-heading text-2xl font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/75">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-primary py-20 sm:py-28 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 text-white shadow-lg shadow-indigo-500/30">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-heading text-3xl font-semibold sm:text-4xl">Our Mission</h3>
              <p className="mt-4 text-base font-medium leading-relaxed text-primary-foreground/85">
                To protect every family with honest, needs-based life and health insurance guidance — never selling a policy, always solving a problem.
              </p>
            </div>
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-heading text-3xl font-semibold sm:text-4xl">Our Vision</h3>
              <p className="mt-4 text-base font-medium leading-relaxed text-primary-foreground/85">
                To become the most trusted life and health insurance partner — a firm known not for what it sells, but for the families it protects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="hero-eyebrow mb-5 text-primary">What We Stand For</span>
            <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl lg:text-5xl">Values that guide every decision.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="group border border-border bg-card p-8 text-center shadow-md transition-all hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${v.badge}`}>
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground sm:text-3xl">{v.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/75 sm:text-base">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl">Let's build your family's plan together.</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact">Contact Us</CTAButton>
            <CTAButton to="/business-opportunity" variant="outline">Join Our Team</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}