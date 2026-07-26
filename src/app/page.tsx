"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { DESTINATIONS, PROGRAMS } from "@/data/mock-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProcessSection } from "@/components/process-section";
import { StoriesSection } from "@/components/stories-section";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { ArrowRight, Globe, Stethoscope } from "lucide-react";
import { ChinaFlag } from "@/components/ui/china-flag";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white selection:bg-[#DC2626] selection:text-white">
      {/* Navbar */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <HeroSection onOpenBooking={() => setBookingOpen(true)} />

      {/* 1. Sleek China Cities Hub Highlights */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200">
            <div>
              <Badge variant="primary" className="mb-2">
                <ChinaFlag size="sm" /> Premier Study Hubs 🇨🇳
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Featured <span className="text-[#DC2626]">China University Cities</span>
              </h2>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#DC2626] hover:underline"
            >
              <span>Explore All 15+ China Cities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {DESTINATIONS.slice(0, 3).map((dest) => (
              <GlassCard key={dest.id} className="p-0 overflow-hidden border border-slate-200 bg-white shadow-xs group">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="text-xl font-bold flex items-center gap-1.5">
                      <ChinaFlag size="sm" /> {dest.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">{dest.tagline}</p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-xs text-emerald-800 bg-emerald-50 p-2 rounded-lg font-bold border border-emerald-100">
                    {dest.scholarshipsAvailable}
                  </p>
                  <Link href={`/destinations/${dest.id}`} className="block w-full text-center py-2 bg-slate-100 hover:bg-[#FEF2F2] text-slate-800 hover:text-[#DC2626] font-bold text-xs rounded-xl transition-colors">
                    View City & Campus Guide →
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Sleek Programs Preview */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200">
            <div>
              <Badge variant="primary" className="mb-2">
                <Stethoscope className="w-3.5 h-3.5 text-[#DC2626]" /> English-Medium Degrees 🇨🇳
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Top Degree <span className="text-[#DC2626]">Programs in China</span>
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#DC2626] hover:underline"
            >
              <span>View All Degree Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {PROGRAMS.slice(0, 3).map((prog) => (
              <GlassCard key={prog.id} className="p-6 border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                <div className="space-y-3">
                  <Badge variant="accent" className="text-[10px]">{prog.category}</Badge>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{prog.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 font-normal">{prog.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link href={`/programs/${prog.id}`} className="inline-flex items-center justify-between w-full text-xs font-bold text-[#DC2626] hover:underline">
                    <span>Program Details & Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 100% CSC Scholarship Highlight Banner */}
      <section className="py-12 bg-[#990000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="accent" className="mx-auto text-amber-300 border-amber-300/30">100% Full CSC Scholarship Applications Open</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold">Study in China With Zero Tuition & Free En-Suite Dormitory</h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto">
            100% Tuition Exemption + Free Campus Accommodation + Monthly Stipend (CNY 2,500 - 3,500/mo) + Medical Insurance.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="md" onClick={() => setBookingOpen(true)} className="text-xs font-bold bg-[#DC2626]">
              Check Scholarship Eligibility
            </Button>
            <Link href="/scholarships" className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors border border-white/20">
              Browse All CSC Grants →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 7-Step Admission Stepper */}
      <ProcessSection onOpenBooking={() => setBookingOpen(true)} />

      {/* 5. Verified Testimonials & Visa Proof */}
      <StoriesSection />

      {/* Footer */}
      <Footer />

      {/* Booking Consultation Modal Drawer */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
