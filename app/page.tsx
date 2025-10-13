import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">Booking Platform — Admin</h1>
        <p className="mt-4 text-slate-600">Go to <Link href="/admin" className="text-sky-600">Admin Dashboard</Link> or <Link href="/demo" className="text-sky-600">Demo</Link>.</p>
      </main>
    </div>
  );
}
