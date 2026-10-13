import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag, Search } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";
import { cn } from "@/lib/utils";

const posts = [
  {
    title: "The Three Pillars: A Family's Guide to Protect, Grow, Preserve",
    excerpt: "Why the most resilient financial plans rest on three foundations — and how to build each one without overcomplicating your life.",
    category: "Foundations",
    date: "Oct 8, 2026",
    read: "6 min",
    featured: true,
  },
  { title: "Life Insurance 101: Term vs. Whole Life, Explained Simply", excerpt: "Cut through the jargon and understand which protection fits your family.", category: "Protection", date: "Sep 30, 2026", read: "5 min" },
  { title: "How to Talk to Your Parents About Their Estate", excerpt: "A compassionate, practical guide to the conversation every family needs to have.", category: "Legacy", date: "Sep 21, 2026", read: "7 min" },
  { title: "Market Volatility: Why Boring Beats Brilliant", excerpt: "The case for disciplined, long-term investing when headlines scream otherwise.", category: "Investing", date: "Sep 12, 2026", read: "4 min" },
  { title: "Funding College Without Sacrificing Retirement", excerpt: "You can do both — with the right sequencing and a clear set of priorities.", category: "Education", date: "Sep 2, 2026", read: "6 min" },
  { title: "The First Five Years: Building a Career in Financial Services", excerpt: "What it really takes to start and grow a purpose-driven advisory practice.", category: "Career", date: "Aug 24, 2026", read: "8 min" },
];

const categories = ["All", "Foundations", "Protection", "Investing", "Legacy", "Education", "Career"];

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
        title={<>Practical wisdom for <span className="text-gold-gradient">family wealth.</span></>}
        subtitle="Clear, jargon-free perspectives on protecting, growing, and passing on what you've worked hard to build."
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
            {filtered.map((p) => (
              <article key={p.title} className="group flex flex-col border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  <Tag className="h-3.5 w-3.5" /> {p.category}
                </div>
                <h3 className="mt-4 font-heading text-2xl leading-tight text-foreground">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                </div>
              </article>
            ))}
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
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Occasional, thoughtful perspectives on family wealth. No spam, ever.</p>
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