"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { DestinationsSection } from "@/components/destinations-section";
import { ComparisonSection } from "@/components/comparison-section";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";

export default function DestinationsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white selection:bg-[#1E90FF] selection:text-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <div className="pt-28">
        <DestinationsSection onOpenBooking={() => setBookingOpen(true)} />
        <ComparisonSection />
      </div>
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
