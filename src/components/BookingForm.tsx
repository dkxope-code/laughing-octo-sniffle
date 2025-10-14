"use client";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, isWeekend, setHours, setMinutes } from "date-fns";

const schema = z.object({
  date: z.string().min(1, "Select a date"),
  time: z.string().min(1, "Select a time"),
  section: z.enum(["premium", "standard", "racing"], {
    required_error: "Choose a section",
  }),
  players: z.coerce.number().int().min(1).max(6),
  name: z.string().min(2),
  phone: z.string().min(8),
});

export type BookingInput = z.infer<typeof schema>;

type Slot = { label: string; value: string };

function generateSlots(date: Date): Slot[] {
  const isWknd = isWeekend(date);
  const startHour = isWknd ? 9 : 11; // Weekends: 9 AM, Weekdays: 11 AM
  const endHour = 23; // 11 PM
  const slots: Slot[] = [];
  for (let hour = startHour; hour < endHour; hour++) {
    const slotStart = setMinutes(setHours(date, hour), 0);
    const slotLabel = format(slotStart, "h a");
    const slotValue = format(slotStart, "HH:mm");
    slots.push({ label: `${slotLabel} - ${format(setHours(date, hour + 1), "h a")}`, value: slotValue });
  }
  return slots;
}

export function BookingForm() {
  const [confirmed, setConfirmed] = useState<BookingInput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const todayIso = format(new Date(), "yyyy-MM-dd");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({ resolver: zodResolver(schema), defaultValues: { players: 1 } });

  const selectedDate = watch("date");
  const slotOptions = useMemo(() => {
    const parsed = selectedDate ? new Date(selectedDate + "T00:00:00") : new Date();
    return generateSlots(parsed);
  }, [selectedDate]);

  async function onSubmit(values: BookingInput) {
    setError(null);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Unable to confirm booking, try again.");
      }
      localStorage.setItem("game-lobby-latest-booking", JSON.stringify(values));
      setConfirmed(values);
      setToast("Booking confirmed! Check your WhatsApp for updates if needed.");
      reset({ players: 1 });
    } catch (e: any) {
      setError(e?.message || "Something went wrong.");
    }
  }

  return (
    <div className="neon-card p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/80">Date</label>
          <input type="date" min={todayIso} className="glass mt-1 w-full h-10 px-3 rounded-md bg-transparent text-white" {...register("date")} />
          {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/80">Time</label>
          <select className="glass mt-1 w-full h-10 px-3 rounded-md bg-transparent text-white" {...register("time")}>
            <option value="">Select a slot</option>
            {slotOptions.map((s) => (
              <option key={s.value} value={s.value} className="bg-[#0a0a0f]">
                {s.label}
              </option>
            ))}
          </select>
          {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/80">Section</label>
          <select className="glass mt-1 w-full h-10 px-3 rounded-md bg-transparent text-white" {...register("section")}>
            <option value="">Choose</option>
            <option value="premium">Premium PS5 Zone</option>
            <option value="standard">Standard PS5 Zone</option>
            <option value="racing">Racing Simulator</option>
          </select>
          {errors.section && <p className="text-red-400 text-sm mt-1">{errors.section.message as string}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/80">Players</label>
          <input type="number" min={1} max={6} className="glass mt-1 w-full h-10 px-3 rounded-md bg-transparent text-white" {...register("players", { valueAsNumber: true })} />
          {errors.players && <p className="text-red-400 text-sm mt-1">{errors.players.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/80">Name</label>
          <input type="text" className="glass mt-1 w-full h-10 px-3 rounded-md bg-transparent text-white" placeholder="Your name" {...register("name")} />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/80">Phone</label>
          <input type="tel" className="glass mt-1 w-full h-10 px-3 rounded-md bg-transparent text-white" placeholder="WhatsApp / phone" {...register("phone")} />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div className="md:col-span-2 flex items-center justify-between mt-2">
          <p className="text-white/70 text-sm">Weekdays: 11 AM – 11 PM • Weekends: 9 AM – 11 PM</p>
          <button disabled={isSubmitting} className="btn-primary disabled:opacity-60">Confirm Booking</button>
        </div>
      </form>

      {confirmed && (
        <div className="mt-6 glass p-4 rounded-lg">
          <p className="text-white">Booking confirmed! 🎉</p>
          <p className="text-white/80 text-sm mt-1">
            {format(new Date(confirmed.date), "EEE, dd MMM yyyy")} at {confirmed.time} • {confirmed.section} • {confirmed.players} player(s)
          </p>
        </div>
      )}
      {error && (
        <div className="mt-4 glass p-3 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-white/90 shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}


