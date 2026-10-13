import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PageHero({ eyebrow, title, subtitle, crumb, actions, dark = true, children }) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28",
        dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
      )}
    >
      {/* Decorative gold thread */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center">
        {crumb && (
          <nav className="mb-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] opacity-70">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-accent">{crumb}</span>
          </nav>
        )}
        {eyebrow && <span className="hero-eyebrow mb-5">{eyebrow}</span>}
        <h1 className="mx-auto max-w-4xl text-balance font-heading text-4xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed opacity-80 sm:text-lg">
            {subtitle}
          </p>
        )}
        {actions && <div className="mt-10 flex flex-wrap items-center justify-center gap-4">{actions}</div>}
        {children}
      </div>
    </section>
  );
}

export function CTAButton({ to, children, variant = "primary", className }) {
  const styles = {
    primary:
      "bg-accent text-accent-foreground hover:bg-accent/90",
    outline:
      "border border-accent text-accent hover:bg-accent hover:text-accent-foreground",
    ghost:
      "border border-current/30 text-current hover:border-accent hover:text-accent",
  };
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-all",
        styles[variant],
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}