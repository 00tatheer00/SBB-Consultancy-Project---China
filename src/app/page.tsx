"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { DestinationsSection } from "@/components/destinations-section";
import { ProgramsSection } from "@/components/programs-section";
import { UniversitiesSection } from "@/components/universities-section";
import { ScholarshipsSection } from "@/components/scholarships-section";
import { ProcessSection } from "@/components/process-section";
import { StoriesSection } from "@/components/stories-section";
import { CalculatorSection } from "@/components/calculator-section";
import { ComparisonSection } from "@/components/comparison-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] flex flex-col font-sans selection:bg-[#1E90FF]/20 selection:text-[#1E90FF]">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Showcase Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Study Destinations */}
        <DestinationsSection onOpenBooking={handleOpenBooking} />

        {/* 4. Programs Showcase */}
        <ProgramsSection onOpenBooking={handleOpenBooking} />

        {/* 5. Partner Universities Directory */}
        <UniversitiesSection onOpenBooking={handleOpenBooking} />

        {/* 6. Scholarship Hub & Eligibility Estimator */}
        <ScholarshipsSection onOpenBooking={handleOpenBooking} />

        {/* 7. 7-Step Admission Journey */}
        <ProcessSection onOpenBooking={handleOpenBooking} />

        {/* 8. Student Stories, Parent Reviews & Visa Stamps */}
        <StoriesSection />

        {/* 9. Interactive Fee & Cost Calculator */}
        <CalculatorSection onOpenBooking={handleOpenBooking} />

        {/* 10. Country Comparison Matrix */}
        <ComparisonSection />

        {/* 11. FAQ Accordion */}
        <FAQSection />

        {/* 12. Contact & Booking Form */}
        <ContactSection />
      </main>

      {/* 13. Luxury Footer */}
      <Footer />

      {/* Consultation Booking Modal Drawer */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
