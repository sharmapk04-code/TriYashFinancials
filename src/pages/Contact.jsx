import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import PageHero, { CTAButton } from "@/components/PageHero";
import { SITE } from "@/lib/siteConfig";

const reasons = [
  { value: "consultation", label: "Schedule a consultation" },
  { value: "services", label: "Ask about a service" },
  { value: "opportunity", label: "Business opportunity" },
  { value: "event", label: "Reserve an event seat" },
  { value: "other", label: "Something else" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "consultation", message: "" });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { icon: Phone, label: "Call Us", value: SITE.phone, href: `tel:${SITE.phone}` },
    { icon: Mail, label: "Email Us", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Visit Us", value: SITE.address },
    { icon: Clock, label: "Office Hours", value: SITE.hours },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Let's Talk"
        title={<>Your family's plan starts with a <span className="text-gold-gradient">conversation.</span></>}
        subtitle="Tell us a little about your goals and we'll connect you with the right advisor. No pressure, no jargon — just honest guidance."
        actions={<CTAButton to="/services" variant="outline">Explore Services</CTAButton>}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* FORM */}
            <div className="lg:col-span-7">
              <span className="hero-eyebrow mb-5 text-primary">Send a Message</span>
              <h2 className="text-balance font-heading text-3xl font-light sm:text-4xl">We'll respond within one business day.</h2>

              {submitted ? (
                <div className="mt-8 flex items-start gap-4 border border-accent bg-secondary/40 p-8">
                  <CheckCircle2 className="mt-0.5 h-7 w-7 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-heading text-2xl text-foreground">Thank you, {form.name || "friend"}.</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Your message has been received. A TriYash advisor will reach out to you shortly at the email or phone you provided.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", reason: "consultation", message: "" }); }}
                      className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                    <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">How can we help?</label>
                      <select
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                      >
                        {reasons.map((r) => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                      placeholder="Tell us a little about your goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>

            {/* CONTACT INFO */}
            <div className="lg:col-span-5">
              <div className="border border-border bg-primary p-8 text-primary-foreground">
                <h3 className="font-heading text-2xl">Reach Us Directly</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">Prefer to reach out the old-fashioned way? We're here.</p>
                <ul className="mt-8 space-y-6">
                  {contactItems.map((c) => (
                    <li key={c.label} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent/15 text-accent">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/55">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="mt-1 block text-base text-primary-foreground hover:text-accent">{c.value}</a>
                        ) : (
                          <div className="mt-1 text-base text-primary-foreground">{c.value}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border border-border bg-secondary/40 p-8">
                <h3 className="font-heading text-xl text-foreground">Office Location</h3>
                <div className="mt-4 aspect-[4/3] bg-primary/5">
                  <iframe
                    title="TriYash office location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.70%2C-73.98%2C40.72&layer=mapnik"
                    className="h-full w-full grayscale"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
      />
    </div>
  );
}