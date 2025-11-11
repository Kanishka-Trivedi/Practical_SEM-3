"use client";
import { useParams, useRouter } from "next/navigation";

export default function HotelDetailsPage() {
  const { hotelId } = useParams();
  const router = useRouter();

  const hotels = [
    { id: 1, name: "The Royal Palace", location: "Jaipur", price: "₹8,000", rating: "4.5/5" },
    { id: 2, name: "Sea View Resort", location: "Goa", price: "₹10,500", rating: "4.7/5" },
    { id: 3, name: "Mountain Bliss", location: "Manali", price: "₹7,200", rating: "4.6/5" },
  ];

  const hotel = hotels.find((h) => h.id === Number(hotelId));

  if (!hotel) {
    return <h2 style={{ padding: "20px" }}>Hotel not found 😕</h2>;
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>{hotel.name}</h1>
      <p><strong>Location:</strong> {hotel.location}</p>
      <p><strong>Price:</strong> {hotel.price}</p>
      <p><strong>Rating:</strong> {hotel.rating}</p>

      <button
        onClick={() => router.push("/hotels")}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back to Hotels
      </button>
    </div>
  );
}
