import { getBookings, getAgents } from "../lib/airtable";
import Link from "next/link";
import { format } from "date-fns";

export default async function AdminBookingsTable(){
  const bookings = await getBookings();
  const agents = await getAgents();
  const agentMap = new Map(agents.map((a:any) => [a.id, a]));

  return (
    <div className="mt-6">
      <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded shadow">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="p-3">Booking</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Service</th>
              <th className="p-3">Agent</th>
              <th className="p-3">Start</th>
              <th className="p-3">Status</th>
              <th className="p-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b:any) => (
              <tr key={b.id} className="border-t">
                <td className="p-3">
                  <Link href={`/admin/booking/${b.id}`} className="text-sky-600 dark:text-sky-400">{b.booking_uuid ?? b.id}</Link>
                </td>
                <td className="p-3">{b.customer_name ?? b.customer}</td>
                <td className="p-3">{b.service_title ?? b.service}</td>
                <td className="p-3">{agentMap.get(b.agent_id)?.name ?? "—"}</td>
                <td className="p-3">{b.start_time ? format(new Date(b.start_time), "PPpp") : "—"}</td>
                <td className="p-3">{b.status ?? "pending"}</td>
                <td className="p-3">{b.price_cents ? `$${(b.price_cents/100).toFixed(2)}` : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
