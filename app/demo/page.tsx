import SiteHeader from "../../components/SiteHeader";

export default function DemoPage(){
  const sample = [
    { id: "demo1", booking_uuid:"demo-001", customer_name:"Alice", service_title:"Haircut", start_time:"2025-10-15T10:00:00Z", status:"confirmed", price_cents:2500 }
  ];
  return (
    <html><body className="min-h-screen bg-white">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">Public Demo</h2>
        <p className="text-sm text-slate-600">View-only demo data. No login required.</p>
        <div className="mt-6 bg-white rounded shadow p-4">
          <pre>{JSON.stringify(sample, null, 2)}</pre>
        </div>
      </main>
    </body></html>
  );
}
