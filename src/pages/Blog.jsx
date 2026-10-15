import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Search, ShieldCheck, HeartPulse, Stethoscope, Briefcase } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";
import { cn } from "@/lib/utils";

const posts = [
  {
    title: "The Complete Family Guide to Life & Health Coverage",
    excerpt: "Why the most resilient families rest on two foundations — life insurance and health coverage — and how to build both without overcomplicating your life.",
    category: "Life Insurance",
    date: "Oct 8, 2026",
    read: "6 min",
    featured: true,
  },
  { title: "Term vs. Whole Life: Which Protection Fits Your Family?", excerpt: "Cut through the jargon and understand which life insurance fits your family.", category: "Life Insurance", date: "Sep 30, 2026", read: "5 min" },
  { title: "Open Enrollment: How to Choose the Right Health Plan", excerpt: "Networks, premiums, deductibles, and subsidies — a practical checklist for picking a plan.", category: "Health Insurance", date: "Sep 21, 2026", read: "7 min" },
  { title: "Medicare 101: Parts A, B, C, and D, Explained Simply", excerpt: "Turning 65? Here's the plain-English guide to Medicare you've been looking for.", category: "Medicare", date: "Sep 12, 2026", read: "4 min" },
  { title: "Critical Illness & Disability: The Coverage Most Families Skip", excerpt: "The policies that protect your income when a diagnosis changes everything.", category: "Health Insurance", date: "Sep 2, 2026", read: "6 min" },
  { title: "The First Five Years: Building a Career in Insurance", excerpt: "What it really takes to start and grow a purpose-driven insurance practice.", category: "Career", date: "Aug 24, 2026", read: "8 min" },
];

const categories = ["All", "Life Insurance", "Health Insurance", "Medicare", "Career"];

const categoryMeta = {
  "Life Insurance": { icon: ShieldCheck, badge: "bg-gradient-to-br from-rose-400 to-red-600 shadow-rose-500/30" },
  "Health Insurance": { icon: HeartPulse, badge: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-emerald-500/30" },
  "Medicare": { icon: Stethoscope, badge: "bg-gradient-to-br from-sky-400 to-blue-600 shadow-blue-500/30" },
  "Career": { icon: Briefcase, badge: "bg-gradient-to-br from-violet-400 to-purple-600 shadow-violet-500/30" },
};

export default function Blog() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);
  const filtered = rest.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="Insights"
        title={<>Practical wisdom on <span className="text-gold-gradient">life & health coverage.</span></>}
        subtitle="Clear, jargon-free perspectives on life insurance, health plans, Medicare, and protecting what you've worked hard to build."
        actions={<CTAButton to="/contact">Get Started</CTAButton>}
      />

      {/* FEATURED */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span className="hero-eyebrow mb-5 text-primary">Featured Article</span>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-primary">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="font-heading text-9xl text-accent">TY</span>
                </div>
                <div className="absolute bottom-6 left-6 text-primary-foreground">
                  <span className="inline-block bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent-foreground">{featured.category}</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                <span>{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.read} read</span>
              </div>
              <h2 className="mt-4 text-balance font-heading text-3xl font-light leading-tight sm:text-4xl">{featured.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <Link to="/blog" className="group mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                    active === c ? "bg-primary text-primary-foreground" : "bg-card text-foreground/70 hover:text-accent"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const meta = categoryMeta[p.category];
              return (
              <article key={p.title} className="group flex flex-col border border-border bg-card p-7 shadow-md transition-all hover:-translate-y-1.5 hover:border-accent hover:shadow-xl">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${meta.badge}`}>
                  <meta.icon className="h-7 w-7" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {p.category}
                </div>
                <h3 className="mt-2 font-heading text-2xl font-semibold leading-tight text-foreground">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-foreground/75">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                </div>
              </article>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <p className="mt-10 text-center text-muted-foreground">No articles match your search.</p>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl">Get insights in your inbox.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Occasional, thoughtful perspectives on life and health insurance. No spam, ever.</p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 border border-border bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none"
            />
            <button type="submit" className="bg-accent px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-colors hover:bg-accent/90">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}