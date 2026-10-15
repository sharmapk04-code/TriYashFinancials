import React from "react";
import { ShieldCheck, HeartPulse, Stethoscope, Umbrella, Home, Landmark, ArrowRight, Check } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";

const services = [
  { icon: ShieldCheck, title: "Term Life Insurance", badge: "bg-gradient-to-br from-rose-400 to-red-600 shadow-rose-500/30", desc: "Affordable, straightforward protection for the years your family depends on you most — the mortgage, the income, the future.", points: ["Level-term & convertible policies", "Income replacement planning", "Mortgage protection"] },
  { icon: Landmark, title: "Whole & Permanent Life", badge: "bg-gradient-to-br from-violet-400 to-purple-600 shadow-violet-500/30", desc: "Lifelong coverage with cash value that grows over time — protection that never expires and can support your legacy.", points: ["Whole & universal life", "Cash value accumulation", "Estate & final expense funding"] },
  { icon: HeartPulse, title: "Health Insurance", badge: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-emerald-500/30", desc: "Individual, family, and group medical plans that keep quality care within reach — on and off the marketplace.", points: ["Individual & family plans", "Employer & group coverage", "Marketplace & ACA guidance"] },
  { icon: Stethoscope, title: "Medicare & Supplemental", badge: "bg-gradient-to-br from-sky-400 to-blue-600 shadow-blue-500/30", desc: "Turning 65 or already there? We make Medicare simple — from Advantage plans to Medigap and Part D.", points: ["Medicare Advantage (Part C)", "Medigap & supplemental plans", "Prescription drug (Part D)"] },
  { icon: Umbrella, title: "Disability & Critical Illness", badge: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/30", desc: "Income protection and lump-sum benefits that fill the gap when illness or injury keeps you from working.", points: ["Disability income coverage", "Critical illness & cancer policies", "Hospital indemnity plans"] },
  { icon: Home, title: "Final Expense & Legacy", badge: "bg-gradient-to-br from-fuchsia-400 to-purple-600 shadow-fuchsia-500/30", desc: "Modest, guaranteed coverage that eases the burden on loved ones and honors your wishes.", points: ["Final expense & burial insurance", "Annuities for guaranteed income", "Beneficiary & legacy review"] },
];

const steps = [
  { n: "01", title: "Discovery", desc: "We listen to your story, your goals, and the people who depend on you." },
  { n: "02", title: "Strategy", desc: "We design a personalized plan across all three promises — protect, cover, preserve." },
  { n: "03", title: "Implementation", desc: "We put your plan into action with clear, prioritized steps and the right solutions." },
  { n: "04", title: "Ongoing Care", desc: "We review and adjust your plan as life evolves, keeping you on course for decades." },
];

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What We Offer"
        title={<>Comprehensive coverage for <span className="text-gold-gradient">every season of life.</span></>}
        subtitle="From term life to Medicare, our coverage options work together as one coordinated plan for your family's protection."
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
              <div key={s.title} className="group flex flex-col border border-border bg-card p-8 shadow-md transition-all hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${s.badge}`}>
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground sm:text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/75 sm:text-base">{s.desc}</p>
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
                <h3 className="mt-3 font-heading text-2xl font-semibold">{s.title}</h3>
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
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Book a complimentary consultation and we'll map out the right coverage for your family.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact">Contact Us</CTAButton>
            <CTAButton to="/business-opportunity" variant="outline">Business Opportunity</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}