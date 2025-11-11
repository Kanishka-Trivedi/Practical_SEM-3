// src/app/api/bookings/route.js

let bookings = [
  { id: 1, name: "John Doe", hotel: "The Royal Palace", nights: 3 },
  { id: 2, name: "Alice", hotel: "Sea View Resort", nights: 2 },
];

// GET all bookings
export async function GET() {
  return Response.json(bookings);
}

// POST new booking
export async function POST(req) {
  const data = await req.json();

  const newBooking = {
    id: bookings.length + 1,
    name: data.name || "Guest",
    hotel: data.hotel || "Unknown Hotel",
    nights: data.nights || 1,
  };

  bookings.push(newBooking);
  return Response.json({ message: "Booking created", booking: newBooking });
}
