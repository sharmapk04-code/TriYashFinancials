import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_LINKS, SERVICE_LINKS, SITE } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-xl">
      <div>
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label={SITE.name}>
            <Logo src={SITE.logoLandscapeUrl} className="h-20 w-[271px] sm:h-24 sm:w-[326px]" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.path === "/services" ? (
                <div key={link.path} className="group relative">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "relative flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors",
                        isActive
                          ? "text-accent"
                          : "text-foreground/75 hover:text-accent"
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </NavLink>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="w-[320px] border border-border bg-card py-2 shadow-2xl">
                      <Link
                        to="/services"
                        className="block px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent hover:bg-secondary/60"
                      >
                        All Services
                      </Link>
                      <div className="my-2 border-t border-border" />
                      {SERVICE_LINKS.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className={cn(
                            "block px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/60 hover:text-accent",
                            location.pathname === s.path ? "text-accent" : "text-foreground/80"
                          )}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "relative px-3.5 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors",
                      isActive
                        ? "text-accent"
                        : "text-foreground/75 hover:text-accent"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-none bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto max-w-7xl px-5 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) =>
            link.path === "/services" ? (
              <div key={link.path} className="border-b border-border/40">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/80"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", servicesOpen && "rotate-180")} />
                </button>
                <div className={cn("overflow-hidden transition-[max-height,opacity] duration-300", servicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                  <Link to="/services" className="block py-2.5 pl-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    All Services
                  </Link>
                  {SERVICE_LINKS.map((s) => (
                    <Link key={s.path} to={s.path} className="block py-2.5 pl-4 text-sm font-medium text-foreground/70">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between border-b border-border/40 py-3.5 text-sm font-semibold uppercase tracking-[0.12em]",
                    isActive ? "text-accent" : "text-foreground/80"
                  )
                }
              >
                {link.label}
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            )
          )}
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}