import AdminBookingsTable from "../../components/AdminBookingsTable.server";

export default async function AdminPage(){
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <p className="text-sm text-slate-500">Bookings, payouts, and notifications overview.</p>

        <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white dark:bg-slate-800 rounded p-4 shadow">
            <h3 className="text-lg font-semibold">Earnings (last 30 days)</h3>
            <div className="h-48 flex items-center justify-center text-slate-400">Chart placeholder</div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded p-4 shadow">
            <h3 className="text-lg font-semibold">Quick Stats</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Total bookings: —</li>
              <li>Paid bookings: —</li>
              <li>Pending payouts: —</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold">Recent bookings</h3>
          <AdminBookingsTable />
        </section>
      </main>
    </div>
  );
}
