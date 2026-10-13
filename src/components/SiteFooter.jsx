import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUp, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_LINKS, SITE } from "@/lib/siteConfig";

const socialIcons = {
  linkedin: Linkedin,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
};

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo className="h-16 w-auto brightness-0 invert opacity-95" />
            <p className="mt-6 max-w-xs font-heading italic text-lg text-primary-foreground/80">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {Object.entries(SITE.social).map(([key, href]) => {
                const Icon = socialIcons[key];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={href}
                    aria-label={key}
                    className="flex h-10 w-10 items-center justify-center border border-primary-foreground/25 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${SITE.phone}`} className="hover:text-accent">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/55">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/55">
            <Link to="/about" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/about" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>

      <a
        href="#top"
        className="group fixed bottom-6 right-6 z-40 hidden sm:flex h-12 w-12 items-center justify-center bg-accent text-accent-foreground shadow-lg transition-transform hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </footer>
  );
}