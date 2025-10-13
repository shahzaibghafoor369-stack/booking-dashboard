import { getBookings, getAgents } from "../../lib/airtable";

export default async function AgentPage(){
  // For now, show a simple agent overview using sample data
  const agents = await getAgents();
  const sampleAgent = Array.isArray(agents) && agents.length ? agents[0] : null;

  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-semibold">Agent Dashboard</h2>
      <p className="text-sm text-slate-500">Agent view (filtered by login later).</p>

      <div className="mt-6">
        <h3 className="font-semibold">Agent</h3>
        <div className="mt-2 bg-white rounded shadow p-4">
          <div>Name: {sampleAgent?.name ?? "—"}</div>
          <div>Email: {sampleAgent?.email ?? "—"}</div>
        </div>
      </div>
    </div>
  );
}
