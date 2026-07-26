"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { ProgramsSection } from "@/components/programs-section";
import { CalculatorSection } from "@/components/calculator-section";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";

export default function ProgramsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <div className="pt-28">
        <ProgramsSection onOpenBooking={() => setBookingOpen(true)} />
        <CalculatorSection onOpenBooking={() => setBookingOpen(true)} />
      </div>
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
