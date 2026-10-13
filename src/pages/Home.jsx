import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, TrendingUp, Users, HeartPulse, Umbrella, BookOpen, CalendarDays, Quote } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";
import { SITE } from "@/lib/siteConfig";

const stats = [
  { value: "25+", label: "Years of Combined Experience" },
  { value: "1,200+", label: "Families Secured" },
  { value: "$180M+", label: "Coverage in Force" },
  { value: "98%", label: "Client Retention" },
];

const services = [
  { icon: ShieldCheck, title: "Life Insurance", desc: "Term, whole, and universal coverage that protects your family's income and future." },
  { icon: HeartPulse, title: "Health Insurance", desc: "Individual, family, and group medical plans that keep quality care within reach." },
  { icon: Umbrella, title: "Medicare & Supplemental", desc: "Medicare, disability, and critical illness coverage that fills every gap." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity First", desc: "Every recommendation is made in your family's best interest — always." },
  { icon: Users, title: "Family-Centered", desc: "We plan across generations, not just for the next quarter." },
  { icon: TrendingUp, title: "Lifelong Guidance", desc: "We review your coverage as life changes — marriage, children, retirement." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://media.base44.com/images/public/6ace3a79bf97d59236ea95e5/f51f3fffd_generated_image.png')" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/60" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-40 pb-28 sm:pt-48 sm:pb-36 text-center">
          <span className="hero-eyebrow mb-6">Welcome to {SITE.shortName}</span>
          <h1 className="mx-auto max-w-4xl text-balance font-heading text-4xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
            Protection for Your Family's <span className="text-gold-gradient">Life & Health</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {SITE.tagline}. Our advisors help you choose the right coverage — protection that guards your health, your income, and the people you love.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact">Get Started</CTAButton>
            <CTAButton to="/services" variant="outline">Explore Services</CTAButton>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-primary-foreground/15 bg-primary-foreground/[0.03]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-primary-foreground/10 px-5 sm:px-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-8 text-center">
                <div className="font-heading text-3xl font-medium text-accent sm:text-4xl">{s.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground/65">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / WHY */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="hero-eyebrow mb-5 text-primary">Why TriYash</span>
              <h2 className="text-balance font-heading text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl">
                A foundation built on three promises of lasting security.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                "Tri" stands for the three promises at the heart of our practice — <span className="font-semibold text-foreground">protecting your life, safeguarding your health, and securing your family's future</span>. We translate complex insurance decisions into clear, needs-based coverage so your family can move forward with confidence, no matter what life brings.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {values.map((v) => (
                  <div key={v.title} className="border-t border-border pt-5">
                    <v.icon className="h-6 w-6 text-accent" />
                    <h3 className="mt-3 font-heading text-xl text-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="hero-eyebrow mb-5 text-primary">What We Do</span>
            <h2 className="text-balance font-heading text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
              Coverage for every season of life.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group relative bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center bg-primary text-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Quote className="mx-auto h-10 w-10 text-accent" />
          <p className="mt-6 text-balance font-heading text-2xl font-light italic leading-relaxed text-foreground sm:text-3xl">
            "TriYash didn't just sell us a policy — they drew a map for our family's next forty years. For the first time, we feel genuinely secure."
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">— The Patel Family, Clients since 2016</p>
        </div>
      </section>

      {/* OPPORTUNITY + EVENTS + BLOG TEASERS */}
      <section className="bg-primary py-20 sm:py-28 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Users className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-heading text-2xl">Build a Career With Purpose</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                Join a mission-driven team helping families secure their future while building your own.
              </p>
              <Link to="/business-opportunity" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Explore the Opportunity <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-1">
              <CalendarDays className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-heading text-2xl">Upcoming Events</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                Join our seminars and webinars to learn from our advisors and community.
              </p>
              <Link to="/events" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                View Events <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-1">
              <BookOpen className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-heading text-2xl">From the Blog</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                Practical insights on life, health, and Medicare coverage for your family.
              </p>
              <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Read the Blog <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <h2 className="relative mx-auto max-w-2xl text-balance font-heading text-3xl font-light sm:text-4xl lg:text-5xl">
              Ready to secure your family's financial future?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-primary-foreground/80">
              Schedule a complimentary consultation with a TriYash advisor today.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <CTAButton to="/contact">Contact Us</CTAButton>
              <CTAButton to="/about" variant="outline">Learn About Us</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}