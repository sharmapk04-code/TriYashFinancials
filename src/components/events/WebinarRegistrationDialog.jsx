import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format, parseISO } from "date-fns";
import { Clock, Video, CheckCircle2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function WebinarRegistrationDialog({ webinar, open, onClose }) {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setDone(false);
      setError("");
    }
  }, [open]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.email.trim()) {
      setError("Please provide your name and email.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await base44.entities.WebinarRegistration.create({
        webinar_id: webinar.id,
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      });
      setDone(true);
    } catch (err) {
      setError("Something went wrong while registering. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-md">
        {!webinar ? null : done ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
            <h3 className="mt-4 font-heading text-2xl">You're registered!</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We've saved your seat for "{webinar.title}". A confirmation with the webinar link will be
              sent to {form.email}.
            </p>
            <Button onClick={onClose} className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Done
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Register for this webinar</DialogTitle>
              <DialogDescription>{webinar.title}</DialogDescription>
            </DialogHeader>
            <div className="mt-2 space-y-2 border border-border bg-secondary/40 px-4 py-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                {format(parseISO(webinar.start_date), "EEEE, MMMM d, yyyy · h:mm a")}
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 shrink-0 text-accent" />
                {webinar.location || "Live Online"}
              </div>
            </div>
            <form onSubmit={submit} className="mt-4 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="webinar-name">Full name</Label>
                <Input id="webinar-name" value={form.full_name} onChange={set("full_name")} placeholder="Jane Smith" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="webinar-email">Email</Label>
                <Input id="webinar-email" type="email" value={form.email} onChange={set("email")} placeholder="jane@example.com" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="webinar-phone">Phone (optional)</Label>
                <Input id="webinar-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="(972) 400-5149" />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" disabled={submitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {submitting ? "Registering..." : "Register Now"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}