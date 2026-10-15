import React, { useState } from "react";
import { CalendarCheck, CheckCircle2, Clock, Send } from "lucide-react";
import { base44 } from "@/api/base44Client";

const TIME_WINDOWS = [
  { value: "morning", label: "Morning (9 AM – 12 PM CT)" },
  { value: "afternoon", label: "Afternoon (12 PM – 5 PM CT)" },
  { value: "evening", label: "Evening (5 PM – 8 PM CT)" },
];

const EMPTY = { full_name: "", email: "", phone: "", preferred_date: "", preferred_time: "morning", notes: "" };

export default function ConsultationScheduler() {
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await base44.functions.invoke("requestConsultation", form);
      if (!res.data?.ok) throw new Error("Request failed");
      setDone(true);
    } catch (err) {
      setError("Something went wrong while booking. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="flex items-start gap-4 border border-accent bg-card p-8">
        <CheckCircle2 className="mt-0.5 h-7 w-7 shrink-0 text-accent" />
        <div>
          <h3 className="font-heading text-2xl text-foreground">Request received.</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Thanks, {form.full_name.split(" ")[0]}. We've noted your preferred date and time window, and an advisor
            will confirm your consultation by email or phone within one business day.
          </p>
          <button
            onClick={() => { setDone(false); setForm(EMPTY); }}
            className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent hover:underline"
          >
            Book another consultation
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="full_name" value={form.full_name} onChange={handleChange} required />
        <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
            Preferred Time <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <select
              name="preferred_time"
              value={form.preferred_time}
              onChange={handleChange}
              className="w-full appearance-none border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground focus:border-accent focus:outline-none"
            >
              {TIME_WINDOWS.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
            Preferred Date <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <CalendarCheck className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="date"
              name="preferred_date"
              value={form.preferred_date}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
              required
              className="w-full border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground focus:border-accent focus:outline-none"
            />
          </div>
        </div>
        <Field label="Notes (optional)" name="notes" value={form.notes} onChange={handleChange} placeholder="Topics you'd like to cover..." />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
      >
        {submitting ? "Booking..." : "Request Consultation"}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required, placeholder }) {
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
        placeholder={placeholder}
        className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
      />
    </div>
  );
}