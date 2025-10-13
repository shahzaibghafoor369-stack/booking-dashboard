import Airtable from "airtable";
import { getCached, setCache } from "./cache";

const apiKey = process.env.AIRTABLE_API_KEY || "";
const baseId = process.env.AIRTABLE_BASE_ID || "";

if (!apiKey || !baseId) {
  console.warn("Airtable keys missing. Set AIRTABLE_API_KEY and AIRTABLE_BASE_ID.");
}

const base = new Airtable({ apiKey }).base(baseId);

async function safeSelect(tableName: string, opts?: any) {
  try {
    const records = await base(tableName).select(opts || { view: "Grid view", pageSize: 100 }).all();
    return Array.isArray(records) ? records.map(r => ({ id: r.id, ...r.fields })) : [];
  } catch (err) {
    console.error("Airtable error on", tableName, err);
    return [];
  }
}

export async function getBookings() {
  const cacheKey = "bookings_all_v1";
  const cached = getCached(cacheKey);
  if (cached) return cached;
  const data = await safeSelect("Bookings");
  setCache(cacheKey, data, 15);
  return data;
}

export async function getBookingById(id: string) {
  try {
    const rec = await base("Bookings").find(id);
    return { id: rec.id, ...rec.fields };
  } catch (err) {
    console.error("Airtable find error", err);
    return null;
  }
}

export async function getAgents() {
  const cacheKey = "agents_all_v1";
  const cached = getCached(cacheKey);
  if (cached) return cached;
  const data = await safeSelect("Agents");
  setCache(cacheKey, data, 60);
  return data;
}

export async function getTransactionsForAgent(agentId: string) {
  try {
    const records = await base("Transactions").select({
      view: "Grid view",
      filterByFormula: `{agent_id} = "${agentId}"`
    }).all();
    return Array.isArray(records) ? records.map(r => ({ id: r.id, ...r.fields })) : [];
  } catch (err) {
    console.error("Transactions query error", err);
    return [];
  }
}
