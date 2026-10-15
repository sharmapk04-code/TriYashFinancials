import React from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, CalendarCheck } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";
import ConsultationScheduler from "@/components/ConsultationScheduler";
import { SITE } from "@/lib/siteConfig";

export default function Contact() {
  const contactItems = [
  { icon: Phone, label: "Call Us", value: SITE.phone, href: `tel:${SITE.phone}`, badge: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-emerald-500/30" },
  { icon: Mail, label: "Email Us", value: SITE.email, href: `mailto:${SITE.email}`, badge: "bg-gradient-to-br from-sky-400 to-blue-600 shadow-blue-500/30" },
  { icon: MapPin, label: "Visit Us", value: SITE.address, badge: "bg-gradient-to-br from-rose-400 to-red-600 shadow-rose-500/30" },
  { icon: Clock, label: "Office Hours", value: SITE.hours, badge: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/30" }];


  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Let's Talk"
        title={<>Your family's protection starts with a <span className="text-gold-gradient">conversation.</span></>}
        subtitle="Tell us a little about your goals and we'll connect you with the right advisor. No pressure, no jargon — just honest guidance."
        actions={<CTAButton to="/services" variant="outline">Explore Services</CTAButton>} />
      

      {/* SCHEDULE A CONSULTATION */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 text-white shadow-lg shadow-indigo-500/30">
                <CalendarCheck className="h-8 w-8" />
              </div>
              <span className="hero-eyebrow mb-5 text-primary">Book a Consultation</span>
              <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl">
                Pick a time that works for you.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Choose a preferred date and time window for a one-on-one consultation, by phone or video.
                We'll confirm your appointment by email or phone within one business day.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                "Complimentary, no-obligation consultation",
                "Roughly 30 minutes with a licensed advisor",
                "Evening windows available for working families"].
                map((item) =>
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                )}
              </ul>

              <div className="mt-10 border border-border bg-primary p-8 text-primary-foreground">
                <h3 className="font-heading text-2xl">Reach Us Directly</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">Prefer to reach out the old-fashioned way? We're here.</p>
                <ul className="mt-8 space-y-6">
                  {contactItems.map((c) =>
                  <li key={c.label} className="flex items-start gap-4">
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${c.badge}`}>
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/55">{c.label}</div>
                        {c.href ?
                      <a href={c.href} className="mt-1 block text-base text-primary-foreground hover:text-accent">{c.value}</a> :

                      <div className="mt-1 text-base text-primary-foreground">{c.value}</div>
                      }
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ConsultationScheduler />
            </div>
          </div>
        </div>
      </section>
    </>);

}