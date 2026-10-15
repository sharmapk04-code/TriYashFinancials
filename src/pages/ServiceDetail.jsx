import React from "react";
import { useParams } from "react-router-dom";
import { Check } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";
import { SERVICES } from "@/lib/servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="py-32 text-center">
        <h1 className="font-heading text-4xl font-semibold">Service not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist or is no longer available.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton to="/services">View All Services</CTAButton>
        </div>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title={service.title}
        subtitle={service.tagline}
        actions={
          <>
            <CTAButton to="/contact">Get Started</CTAButton>
            <CTAButton to="/services" variant="outline">All Services</CTAButton>
          </>
        }
      />

      {/* OVERVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <div className={`flex h-20 w-20 items-center justify-center rounded-2xl text-white shadow-lg ${service.badge}`}>
              <Icon className="h-10 w-10" />
            </div>
            <h2 className="mt-6 text-balance font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              {service.overviewTitle}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-8">
            {service.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="hero-eyebrow mb-5 text-primary">Key Benefits</span>
            <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl lg:text-5xl">
              Why families choose {service.shortName}.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {service.highlights.map((h) => (
              <div
                key={h.title}
                className="group border border-border bg-card p-8 text-center shadow-md transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${h.badge}`}>
                  <h.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground sm:text-3xl">{h.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-foreground/75 sm:text-base">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP + WHO IT'S FOR */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-2">
          <div className="border border-border bg-card p-8 shadow-md sm:p-10">
            <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">How We Help</h3>
            <ul className="mt-7 space-y-4">
              {service.help.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-foreground/80 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-primary text-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border bg-primary p-8 text-primary-foreground shadow-md sm:p-10">
            <h3 className="font-heading text-2xl font-semibold sm:text-3xl">Who It's For</h3>
            <ul className="mt-7 space-y-4">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-primary-foreground/85 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-accent text-accent-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl">
            Ready to talk about {service.shortName}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Schedule a complimentary, no-obligation consultation with a licensed TriYash advisor.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact">Book a Consultation</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}