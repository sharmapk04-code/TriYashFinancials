import React from "react";
import { ShieldCheck, TrendingUp, LineChart, GraduationCap, Home, Landmark, ArrowRight, Check } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";

const services = [
  { icon: ShieldCheck, title: "Financial Protection", desc: "Life insurance and income protection strategies that shield your family from the unexpected, keeping your plan on track no matter what happens.", points: ["Term & whole life solutions", "Income protection", "Critical illness cover"] },
  { icon: TrendingUp, title: "Wealth Accumulation", desc: "Disciplined, long-term accumulation plans that turn steady contributions into meaningful, compounding wealth over time.", points: ["Goal-based investing", "Asset allocation", "Tax-efficient growth"] },
  { icon: LineChart, title: "Retirement Planning", desc: "Retirement roadmaps that convert today's savings into a dependable income stream for the rest of your life.", points: ["Retirement income design", "Pension & 401(k) strategy", "Withdrawal planning"] },
  { icon: GraduationCap, title: "Education Funding", desc: "Structured plans to fund your children's education without compromising your own retirement goals.", points: ["529 & education savings", "Multi-child planning", "Scholarship strategy"] },
  { icon: Home, title: "Mortgage & Debt Strategy", desc: "Smart debt management and mortgage planning to free up cash flow and accelerate your path to financial freedom.", points: ["Debt elimination plans", "Mortgage review", "Cash-flow optimization"] },
  { icon: Landmark, title: "Estate & Legacy Planning", desc: "Thoughtful estate and legacy structures that pass on what you've built — efficiently, and according to your wishes.", points: ["Wealth transfer", "Trust & beneficiary review", "Legacy planning"] },
];

const steps = [
  { n: "01", title: "Discovery", desc: "We listen to your story, your goals, and the people who depend on you." },
  { n: "02", title: "Strategy", desc: "We design a personalized plan across all three pillars — protect, grow, preserve." },
  { n: "03", title: "Implementation", desc: "We put your plan into action with clear, prioritized steps and the right solutions." },
  { n: "04", title: "Ongoing Care", desc: "We review and adjust your plan as life evolves, keeping you on course for decades." },
];

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What We Offer"
        title={<>Comprehensive strategies for <span className="text-gold-gradient">every season of life.</span></>}
        subtitle="From protecting your income to preserving your legacy, our services work together as one coordinated plan for your family's financial future."
        actions={
          <>
            <CTAButton to="/contact">Get Started</CTAButton>
            <CTAButton to="/contact" variant="outline">Schedule a Consultation</CTAButton>
          </>
        }
      />

      {/* SERVICES GRID */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group flex flex-col border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-accent" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-primary py-20 sm:py-28 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="hero-eyebrow mb-5">How We Work</span>
            <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl lg:text-5xl">A clear, four-step path to confidence.</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="font-heading text-5xl font-light text-accent/40">{s.n}</div>
                <h3 className="mt-3 font-heading text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl">Not sure where to start? We can help.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Book a complimentary consultation and we'll map out the right plan for your family.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact">Contact Us</CTAButton>
            <CTAButton to="/business-opportunity" variant="outline">Business Opportunity</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}