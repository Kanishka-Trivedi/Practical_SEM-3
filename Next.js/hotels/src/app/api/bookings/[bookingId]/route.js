// src/app/api/bookings/[bookingId]/route.js

let bookings = [
  { id: 1, name: "John Doe", hotel: "The Royal Palace", nights: 3 },
  { id: 2, name: "Alice", hotel: "Sea View Resort", nights: 2 },
];

// GET booking by ID
export async function GET(req, { params }) {
  const bookingId = parseInt(params.bookingId);
  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) {
    return Response.json({ error: "Booking not found" }, { status: 404 });
  }

  return Response.json(booking);
}

// DELETE booking by ID
export async function DELETE(req, { params }) {
  const bookingId = parseInt(params.bookingId);
  const index = bookings.findIndex((b) => b.id === bookingId);

  if (index === -1) {
    return Response.json({ error: "Booking not found" }, { status: 404 });
  }

  const deletedBooking = bookings[index];
  bookings.splice(index, 1);

  return Response.json({ message: "Booking deleted", deletedBooking });
}
