"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";

type Booking = {
  date: string;
  time: string;
  section: "premium" | "standard" | "racing";
  players: number;
  name: string;
  phone: string;
};

export default function AdminPage() {
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("game-lobby-latest-booking");
      if (raw) setBooking(JSON.parse(raw));
    } catch {}
  }, []);

  function copyJson() {
    if (!booking) return;
    navigator.clipboard.writeText(JSON.stringify(booking, null, 2)).catch(() => {});
  }

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-heading text-3xl text-white mb-6">Admin • Latest Booking</h1>
      <div className="neon-card p-6">
        {booking ? (
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-white/70 text-sm">Date</p>
              <p className="text-white font-medium">
                {format(new Date(booking.date), "EEE, dd MMM yyyy")} at {booking.time}
              </p>
            </div>
            <div>
              <p className="text-white/70 text-sm">Section</p>
              <p className="text-white font-medium capitalize">{booking.section}</p>
            </div>
            <div>
              <p className="text-white/70 text-sm">Players</p>
              <p className="text-white font-medium">{booking.players}</p>
            </div>
            <div>
              <p className="text-white/70 text-sm">Contact</p>
              <p className="text-white font-medium">{booking.name} • {booking.phone}</p>
            </div>
            <div className="sm:col-span-2 mt-2 flex gap-3">
              <button className="btn-primary" onClick={copyJson}>Copy JSON</button>
              <a className="inline-flex h-10 items-center px-5 rounded-full glass" href="#" onClick={() => location.reload()}>Refresh</a>
            </div>
          </div>
        ) : (
          <p className="text-white/80">No booking found in this browser. Submit the form once to populate.</p>
        )}
      </div>

      <p className="text-white/60 text-sm mt-4">
        Note: This demo reads only the latest booking from this device's browser. With Google Sheets enabled, data is stored centrally via the webhook.
      </p>
    </main>
  );
}


