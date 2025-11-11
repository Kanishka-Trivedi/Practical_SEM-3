"use client";
import Link from "next/link";

export default function HotelsPage() {
  const hotels = [
    { id: 1, name: "The Royal Palace", location: "Jaipur" },
    { id: 2, name: "Sea View Resort", location: "Goa" },
    { id: 3, name: "Mountain Bliss", location: "Manali" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>🏨 Hotel Listings</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {hotels.map((hotel) => (
          <li key={hotel.id} style={{ marginBottom: "10px" }}>
            <Link href={`/hotels/${hotel.id}`}>
              <strong>{hotel.name}</strong> — {hotel.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
