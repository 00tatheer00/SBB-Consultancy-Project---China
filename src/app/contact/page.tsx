"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";

export default function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <div className="pt-28">
        <ContactSection />
        <FAQSection />
      </div>
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
