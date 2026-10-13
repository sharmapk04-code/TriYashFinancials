import React from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, ShieldCheck, Users, TrendingUp, Award, ArrowRight } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";

const pillars = [
  { icon: ShieldCheck, title: "Protect", desc: "Safeguarding families against life's uncertainties with disciplined risk management." },
  { icon: TrendingUp, title: "Grow", desc: "Building wealth steadily through time-tested, compounding strategies." },
  { icon: Users, title: "Preserve", desc: "Passing prosperity across generations with thoughtful estate and legacy planning." },
];

const values = [
  { icon: Heart, title: "Family at the Center", desc: "Every plan is designed around the people who depend on you." },
  { icon: Award, title: "Excellence in Advice", desc: "We hold ourselves to the highest standard of professional guidance." },
  { icon: Target, title: "Clarity Over Complexity", desc: "We translate the complicated into the understandable." },
];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Our Story"
        title={<>A practice built to <span className="text-gold-gradient">protect families</span>, not products.</>}
        subtitle="TriYash Financial Services LLC was founded on a simple conviction: that lasting wealth is built one family at a time, with patience, integrity, and a plan that spans generations."
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
                The name "TriYash" reflects our three-part philosophy: <strong className="text-foreground">Tri</strong> — the three pillars of Protect, Grow, and Preserve — and <strong className="text-foreground">Yash</strong> — the prosperity and success we help families achieve. Together, they form the architecture of a secure financial future.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We are not tied to a single product or provider. Our advisors act as fiduciary-minded partners, building strategies that fit your life — not the other way around.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="grid gap-5 sm:grid-cols-3">
                {pillars.map((p, i) => (
                  <div key={p.title} className="bg-secondary/50 p-7 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center bg-primary text-accent">
                      <p.icon className="h-7 w-7" />
                    </div>
                    <div className="mt-4 font-heading text-2xl text-accent">0{i + 1}</div>
                    <h3 className="mt-1 font-heading text-xl text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
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
              <Target className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-heading text-3xl">Our Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
                To empower families to achieve financial independence through honest advice, disciplined planning, and strategies built to endure across generations.
              </p>
            </div>
            <div>
              <Eye className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-heading text-3xl">Our Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
                To become the most trusted family financial partner — a firm known not for what it sells, but for the security it provides and the futures it protects.
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
              <div key={v.title} className="border border-border bg-card p-8 transition-colors hover:border-accent">
                <v.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-5 font-heading text-2xl text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
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