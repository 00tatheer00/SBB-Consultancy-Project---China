"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { DESTINATIONS } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowLeft, CheckCircle2, DollarSign, Sparkles, Building2, ShieldCheck, ArrowRight } from "lucide-react";

export default function DestinationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [bookingOpen, setBookingOpen] = useState(false);

  const destination = DESTINATIONS.find((d) => d.id === id);

  if (!destination) {
    return (
      <main className="min-h-screen pt-40 text-center">
        <h1 className="text-3xl font-bold">China City Hub Not Found</h1>
        <Link href="/destinations" className="text-[#1E90FF] underline mt-4 inline-block">Return to Cities Directory</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#1E90FF] mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to China Cities Directory
          </Link>

          {/* Hero Banner for City */}
          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <Badge variant="accent" className="text-xs px-3 py-1 font-bold">
                  🇨🇳 {destination.region} Hub
                </Badge>
                <h1 className="text-3xl sm:text-5xl font-extrabold flex items-center gap-3">
                  Study in {destination.name} 🇨🇳
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal">{destination.tagline}</p>
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={() => setBookingOpen(true)}
                className="text-xs font-bold px-8 shadow-lg shrink-0"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Apply to {destination.name.split(" ")[0]} Now
              </Button>
            </div>
          </div>

          {/* Details Content */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8 text-left">
              {/* Highlights Card */}
              <GlassCard className="p-8 border border-slate-200 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#1E90FF]" /> Why Study in {destination.name}?
                </h3>
                <div className="space-y-3">
                  {destination.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#1E90FF] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* State Universities */}
              <GlassCard className="p-8 border border-slate-200 bg-[#FAFCFF]">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#1E90FF]" /> State Universities in {destination.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.popularCities.map((uni, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span>🇨🇳</span> {uni}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Right Side Overview Card */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <GlassCard className="p-6 border border-slate-200 bg-white space-y-4 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">Financial & Visa Quick Facts</h4>
                
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-500 font-medium block">Average Annual Tuition:</span>
                    <span className="font-bold text-slate-900 text-sm">{destination.avgTuition}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium block">CSC & Provincial Grant:</span>
                    <span className="font-bold text-[#1E90FF]">{destination.scholarshipsAvailable}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-slate-500 font-medium block">JW202 Visa Success Ratio:</span>
                    <span className="font-extrabold text-emerald-600 text-sm">{destination.visaSuccessRate}</span>
                  </div>
                </div>

                <Button variant="primary" size="md" onClick={() => setBookingOpen(true)} className="w-full text-xs font-bold">
                  Lock In 100% Scholarship Rate
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}
