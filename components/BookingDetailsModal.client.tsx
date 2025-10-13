"use client";
import { useState } from "react";

export default function BookingDetailsModal({ booking }: { booking:any }){
  const [open, setOpen] = useState(false);
  if (!booking) return null;
  return (
    <>
      <button onClick={() => setOpen(true)} className="text-sky-600">View</button>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded p-6 w-full max-w-2xl">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Booking {booking.booking_uuid ?? booking.id}</h3>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div><strong>Customer:</strong> {booking.customer_name}</div>
              <div><strong>Service:</strong> {booking.service_title}</div>
              <div><strong>Start:</strong> {booking.start_time}</div>
              <div><strong>Status:</strong> {booking.status}</div>
              <div className="mt-4 flex gap-3">
                <button className="px-3 py-2 bg-slate-100 rounded">Resend</button>
                <button className="px-3 py-2 bg-red-500 text-white rounded">Refund</button>
                <button className="px-3 py-2 bg-green-500 text-white rounded">Mark Complete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
