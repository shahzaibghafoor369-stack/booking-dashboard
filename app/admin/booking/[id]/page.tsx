import { getBookingById } from "../../../../lib/airtable";

export default async function BookingPage({ params }: { params: { id: string } }) {
  const booking = await getBookingById(params.id);
  if (!booking) {
    return <div className="p-6">Booking not found.</div>;
  }
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Booking {booking.booking_uuid ?? booking.id}</h2>
      <pre className="mt-4 bg-white p-4 rounded shadow">{JSON.stringify(booking, null, 2)}</pre>
    </div>
  );
}
