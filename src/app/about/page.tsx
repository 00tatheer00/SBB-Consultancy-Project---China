"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/about-section";
import { DormitorySection } from "@/components/dormitory-section";
import { StoriesSection } from "@/components/stories-section";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { WhatsAppWidget } from "@/components/whatsapp-widget";

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <div className="pt-28">
        <AboutSection />
        <DormitorySection />
        <StoriesSection />
      </div>
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <WhatsAppWidget onOpenBooking={() => setBookingOpen(true)} />
    </main>
  );
}
