import React, { useMemo, useState } from "react";
import {
  addDays, addMonths, format, getDay, isSameDay, isSameMonth,
  parseISO, startOfMonth, subDays, subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WebinarCalendar({ webinars = [], onSelect }) {
  const [month, setMonth] = useState(() => startOfMonth(new Date()));

  const eventsByDay = useMemo(() => {
    const map = new Map();
    webinars.forEach((w) => {
      const key = format(parseISO(w.start_date), "yyyy-MM-dd");
      map.set(key, [...(map.get(key) || []), w]);
    });
    return map;
  }, [webinars]);

  const cells = useMemo(() => {
    const gridStart = subDays(startOfMonth(month), getDay(startOfMonth(month)));
    return Array.from({ length: 42 }, (_, i) => addDays(gridStart, i));
  }, [month]);

  return (
    <div className="border border-border bg-card">
      {/* Month navigation */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h3 className="font-heading text-2xl font-medium">{format(month, "MMMM yyyy")}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMonth((m) => subMonths(m, 1))}
            aria-label="Previous month"
            className="flex h-9 w-9 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMonth((m) => addMonths(m, 1))}
            aria-label="Next month"
            className="flex h-9 w-9 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Weekday header */}
      <div className="grid grid-cols-7 border-b border-border bg-secondary/40 text-center">
        {WEEKDAYS.map((d) => (
          <div key={d} className="py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-px bg-border">
        {cells.map((day) => {
          const key = format(day, "yyyy-MM-dd");
          const dayEvents = eventsByDay.get(key) || [];
          const inMonth = isSameMonth(day, month);
          const today = isSameDay(day, new Date());
          return (
            <div key={key} className={cn("min-h-24 bg-card p-1.5 sm:min-h-28", !inMonth && "bg-muted/40")}>
              <div className="flex items-center justify-end">
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center text-xs",
                    today && "bg-primary font-semibold text-primary-foreground",
                    !today && inMonth && "text-foreground",
                    !today && !inMonth && "text-muted-foreground/50"
                  )}
                >
                  {format(day, "d")}
                </span>
              </div>
              <div className="mt-1 space-y-1">
                {dayEvents.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => onSelect(w)}
                    title={`${format(parseISO(w.start_date), "h:mm a")} — ${w.title}`}
                    className="block w-full truncate bg-accent/15 px-1.5 py-1 text-left text-[11px] font-medium leading-tight text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {w.title}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}