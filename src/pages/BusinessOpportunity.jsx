import React from "react";
import { Users, TrendingUp, Award, Compass, HandHeart, ArrowRight, Check } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";

const benefits = [
  { icon: Compass, title: "Purpose-Driven Work", desc: "Spend every day helping families build real, lasting security.", badge: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-emerald-500/30" },
  { icon: Award, title: "World-Class Training", desc: "A structured development path with mentorship from day one.", badge: "bg-gradient-to-br from-sky-400 to-blue-600 shadow-blue-500/30" },
  { icon: TrendingUp, title: "Unlimited Earning", desc: "A compensation model that rewards dedication and results.", badge: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/30" },
  { icon: HandHeart, title: "Supportive Community", desc: "A team that celebrates your wins and lifts you through challenges.", badge: "bg-gradient-to-br from-rose-400 to-pink-600 shadow-rose-500/30" },
];

const steps = [
  { n: "01", title: "Apply", desc: "Tell us about your goals and what draws you to the insurance industry." },
  { n: "02", title: "Onboard & Train", desc: "Complete our structured onboarding and earn your life & health insurance licenses." },
  { n: "03", title: "Build Your Practice", desc: "Begin serving families with the full backing of our tools and mentors." },
  { n: "04", title: "Grow & Lead", desc: "Expand your team, deepen your impact, and shape the next generation of advisors." },
];

const requirements = [
  "A genuine desire to help families secure their future",
  "Strong communication and relationship-building skills",
  "Coachable mindset and willingness to learn",
  "Self-discipline and an entrepreneurial drive",
];

export default function BusinessOpportunity() {
  return (
    <>
      <PageHero
        crumb="Business Opportunity"
        eyebrow="Partner With Us"
        title={<>Build a career that <span className="text-gold-gradient">protects families</span> — and your own future.</>}
        subtitle="Join a mission-driven team where your work creates lasting impact and your earning potential is limited only by your ambition."
        actions={
          <>
            <CTAButton to="/contact">Partner With TriYash</CTAButton>
            <CTAButton to="/about" variant="outline">Our Story</CTAButton>
          </>
        }
      />

      {/* WHY JOIN */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="hero-eyebrow mb-5 text-primary">Why Join TriYash</span>
            <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl lg:text-5xl">More than a job. A calling.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="group border border-border bg-card p-7 text-center shadow-md transition-all hover:-translate-y-1.5 hover:shadow-xl">
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${b.badge}`}>
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground sm:text-2xl">{b.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/75 sm:text-base">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATH */}
      <section className="bg-primary py-20 sm:py-28 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="hero-eyebrow mb-5">Your Path</span>
            <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl lg:text-5xl">A clear road from day one to leadership.</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative border-l border-primary-foreground/20 pl-6">
                <div className="absolute -left-px top-0 h-10 w-px bg-accent" />
                <div className="font-heading text-4xl font-light text-accent">{s.n}</div>
                <h3 className="mt-2 font-heading text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR + CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="hero-eyebrow mb-5 text-primary">Who We're Looking For</span>
              <h2 className="text-balance font-heading text-3xl font-light leading-tight sm:text-4xl">
                You don't need an insurance background. You need the right heart.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We welcome people from every background who share our commitment to families. If these describe you, we'd love to talk.
              </p>
            </div>
            <div className="lg:col-span-6">
              <ul className="space-y-4">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 border-b border-border pb-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-accent text-accent-foreground">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-base text-foreground/85">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-400 to-purple-600 text-white shadow-lg shadow-fuchsia-500/30">
            <Users className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-balance font-heading text-3xl font-light sm:text-4xl">Ready to build something meaningful?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Start a conversation with our team. There's no obligation — just an honest discussion about whether this path is right for you.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact">Partner With TriYash</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}