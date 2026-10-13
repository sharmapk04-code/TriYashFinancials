import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Clock, ArrowRight, Video, Users } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";
import { cn } from "@/lib/utils";

const events = [
  {
    date: "NOV 15",
    year: "2026",
    title: "Wealth Foundations: A Family Planning Workshop",
    type: "In-Person Seminar",
    time: "10:00 AM – 12:00 PM CT",
    location: "TriYash Financial Center, New York, NY",
    desc: "An interactive workshop covering the three pillars — protect, grow, and preserve — with a live Q&A from our senior advisors.",
    seats: "Limited seats",
  },
  {
    date: "NOV 22",
    year: "2026",
    title: "Retirement Readiness Webinar",
    type: "Online Webinar",
    time: "7:00 PM – 8:30 PM CT",
    location: "Live Online",
    desc: "Learn how to design a retirement income stream that lasts a lifetime, including pension, 401(k), and withdrawal strategies.",
    seats: "Free to attend",
  },
  {
    date: "DEC 06",
    year: "2026",
    title: "Legacy & Estate Planning Masterclass",
    type: "In-Person Seminar",
    time: "1:00 PM – 4:00 PM CT",
    location: "TriYash Financial Center, New York, NY",
    desc: "A deep dive into passing on wealth efficiently — trusts, beneficiaries, and the conversations that matter most.",
    seats: "Limited seats",
  },
  {
    date: "DEC 13",
    year: "2026",
    title: "Career in Financial Services: Open House",
    type: "Online Webinar",
    time: "6:00 PM – 7:00 PM CT",
    location: "Live Online",
    desc: "Curious about joining TriYash? Meet our advisors and learn what a career helping families really looks like.",
    seats: "Free to attend",
  },
];

const past = [
  { date: "OCT 2026", title: "Protecting Your Income: Insurance Essentials" },
  { date: "SEP 2026", title: "College Funding Without Compromise" },
  { date: "AUG 2026", title: "Market Volatility & the Long-Term Investor" },
];

export default function Event() {
  const [active, setActive] = useState(0);

  return (
    <>
      <PageHero
        crumb="Events"
        eyebrow="Join Us"
        title={<>Learn, connect, and plan at a <span className="text-gold-gradient">TriYash event.</span></>}
        subtitle="From hands-on workshops to live webinars, our events are designed to give families the knowledge and confidence to take the next step."
        actions={
          <>
            <CTAButton to="/contact">Reserve a Seat</CTAButton>
            <CTAButton to="/business-opportunity" variant="outline">Host With Us</CTAButton>
          </>
        }
      />

      {/* UPCOMING EVENTS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="hero-eyebrow mb-5 text-primary">Upcoming Events</span>
            <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl lg:text-5xl">Reserve your place at the table.</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {/* Event list */}
            <div className="lg:col-span-7 space-y-4">
              {events.map((e, i) => (
                <button
                  key={e.title}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full gap-5 border p-5 text-left transition-all sm:p-6",
                    active === i ? "border-accent bg-secondary/40" : "border-border bg-card hover:border-accent/50"
                  )}
                >
                  <div className="shrink-0 text-center">
                    <div className="font-heading text-2xl font-medium leading-none text-accent sm:text-3xl">{e.date.split(" ")[1]}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{e.date.split(" ")[0]}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      {e.type.includes("Online") ? <Video className="h-3.5 w-3.5" /> : <MapPin className="h-3.5 w-3.5" />}
                      {e.type}
                    </div>
                    <h3 className="mt-1.5 font-heading text-xl text-foreground sm:text-2xl">{e.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {e.time}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.location}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 border border-border bg-primary p-8 text-primary-foreground">
                <div className="font-heading text-6xl font-light text-accent">{events[active].date.split(" ")[1]}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">{events[active].date.split(" ")[0]} {events[active].year}</div>
                <h3 className="mt-5 font-heading text-2xl">{events[active].title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">{events[active].desc}</p>
                <dl className="mt-6 space-y-3 border-t border-primary-foreground/15 pt-5 text-sm">
                  <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-accent" /> {events[active].time}</div>
                  <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> {events[active].location}</div>
                  <div className="flex items-center gap-3"><Users className="h-4 w-4 text-accent" /> {events[active].seats}</div>
                </dl>
                <Link
                  to="/contact"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Reserve a Seat <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-6 w-6 text-accent" />
            <h2 className="font-heading text-2xl font-light sm:text-3xl">Past Events</h2>
          </div>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {past.map((p) => (
              <li key={p.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-heading text-lg text-foreground">{p.title}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{p.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}