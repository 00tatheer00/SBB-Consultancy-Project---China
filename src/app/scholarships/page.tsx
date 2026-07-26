"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { ScholarshipsSection } from "@/components/scholarships-section";
import { ProcessSection } from "@/components/process-section";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";

export default function ScholarshipsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <div className="pt-28">
        <ScholarshipsSection onOpenBooking={() => setBookingOpen(true)} />
        <ProcessSection onOpenBooking={() => setBookingOpen(true)} />
      </div>
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
