import Airtable from "airtable";
import { getCached, setCache } from "./cache";

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey || !baseId) {
  console.warn("Airtable keys are missing. Make sure env vars are set.");
}

const base = new Airtable({ apiKey }).base(baseId);

export async function getBookings() {
  const cacheKey = "bookings_all";
  const cached = getCached(cacheKey);
  if (cached) return cached;
  const records = await base("Bookings").select({
    view: "Grid view",
    pageSize: 100
  }).all();
  const data = records.map(r => ({ id: r.id, ...r.fields }));
  setCache(cacheKey, data, 15);
  return data;
}

export async function getBookingById(id: string) {
  const rec = await base("Bookings").find(id);
  return { id: rec.id, ...rec.fields }
}

export async function getAgents() {
  const cacheKey = "agents_all";
  const cached = getCached(cacheKey);
  if (cached) return cached;
  const records = await base("Agents").select({ view: "Grid view" }).all();
  const data = records.map(r => ({ id: r.id, ...r.fields }));
  setCache(cacheKey, data, 60);
  return data;
}

export async function getTransactionsForAgent(agentId: string) {
  const records = await base("Transactions").select({
    view: "Grid view",
    filterByFormula: `{agent_id} = "${agentId}"`
  }).all();
  return records.map(r => ({ id: r.id, ...r.fields }));
}
