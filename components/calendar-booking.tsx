'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, ArrowRight } from 'lucide-react';

/**
 * Calendly-style inline calendar booking component.
 *
 * This is a lightweight custom implementation that mimics Calendly's UX
 * without loading a third-party iframe. It collects a time preference
 * and submits it alongside the lead form data.
 *
 * In production, replace the internal state with an actual Calendly embed:
 *   <InlineWidget url="https://calendly.com/ifbash/intro-call" />
 *
 * Or use the Calendly React component:
 *   npm install react-calendly
 *   import { InlineWidget } from "react-calendly";
 */

interface TimeSlot {
  time: string;
  label: string;
}

interface DaySlots {
  date: Date;
  dayLabel: string;
  dateLabel: string;
  slots: TimeSlot[];
}

function generateSlots(): DaySlots[] {
  const days: DaySlots[] = [];
  const now = new Date();
  const start = new Date(now);
  start.setDate(start.getDate() + 1); // start tomorrow

  // Find next Monday if today is weekend
  const dayOfWeek = start.getDay();
  if (dayOfWeek === 0) start.setDate(start.getDate() + 1);
  if (dayOfWeek === 6) start.setDate(start.getDate() + 2);

  const times: TimeSlot[] = [
    { time: '09:00', label: '9:00 AM' },
    { time: '10:00', label: '10:00 AM' },
    { time: '11:00', label: '11:00 AM' },
    { time: '14:00', label: '2:00 PM' },
    { time: '15:00', label: '3:00 PM' },
    { time: '16:00', label: '4:00 PM' },
  ];

  for (let i = 0; i < 5; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    // Skip weekends
    if (d.getDay() === 0) { d.setDate(d.getDate() + 1); i--; continue; }
    if (d.getDay() === 6) { d.setDate(d.getDate() + 2); i--; continue; }

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    days.push({
      date: d,
      dayLabel: dayNames[d.getDay()],
      dateLabel: `${monthNames[d.getMonth()]} ${d.getDate()}`,
      slots: times,
    });
  }
  return days;
}

export function CalendarBooking({
  onSelect,
  onClose,
}: {
  onSelect: (slot: { date: string; time: string }) => void;
  onClose: () => void;
}) {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const days = generateSlots();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  function confirm() {
    if (selectedSlot === null) return;
    const d = days[selectedDay];
    onSelect({
      date: d.date.toISOString().split('T')[0],
      time: selectedSlot,
    });
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-2xl border border-white/10 overflow-hidden flex flex-col"
        style={{ background: '#181312', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-onink-line">
          <div className="flex items-center gap-2.5">
            <Calendar className="h-5 w-5 text-sea-soft" />
            <div>
              <div className="text-sm font-semibold text-white">Book a scoping call</div>
              <div className="text-[11px] text-onink-faint">20 minutes · Senior consultant</div>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors" aria-label="Close">
            <X className="h-4 w-4 text-onink-faint" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {/* Day selector */}
          <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
            {days.map((d, i) => (
              <button
                key={d.dateLabel}
                onClick={() => { setSelectedDay(i); setSelectedSlot(null); }}
                className={`flex flex-col items-center justify-center min-w-[72px] h-[68px] rounded-xl border transition-all ${
                  selectedDay === i
                    ? 'border-sea bg-sea/10 text-sea-soft'
                    : 'border-onink-line text-onink-muted hover:border-onink-faint hover:text-onink'
                }`}
              >
                <span className="text-[10px] font-medium uppercase">{d.dayLabel}</span>
                <span className="text-sm font-semibold mt-0.5">{d.dateLabel}</span>
              </button>
            ))}
          </div>

          {/* Time slots */}
          <div className="text-[11px] font-semibold uppercase tracking-wide text-onink-faint mb-3">
            Available times — {days[selectedDay].dayLabel}, {days[selectedDay].dateLabel}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {days[selectedDay].slots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => setSelectedSlot(slot.time)}
                className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all border ${
                  selectedSlot === slot.time
                    ? 'border-sea bg-sea/15 text-sea-soft'
                    : 'border-onink-line text-onink-muted hover:border-onink-faint hover:text-onink'
                }`}
              >
                {slot.label}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-onink-line flex items-center justify-between">
          <p className="text-[11px] text-onink-faint">
            Times shown in your local timezone
          </p>
          <button
            onClick={confirm}
            disabled={!selectedSlot}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
            style={{
              background: selectedSlot ? 'linear-gradient(135deg, #B23A2B, #C8482F)' : undefined,
              boxShadow: selectedSlot ? '0 4px 16px rgba(178,58,43,0.35)' : undefined,
            }}
          >
            Confirm booking <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
