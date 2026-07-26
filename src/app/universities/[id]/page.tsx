"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { UNIVERSITIES } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowLeft, Award, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function UniversityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [bookingOpen, setBookingOpen] = useState(false);

  const uni = UNIVERSITIES.find((u) => u.id === id);

  if (!uni) {
    return (
      <main className="min-h-screen pt-40 text-center">
        <h1 className="text-3xl font-bold">University Not Found</h1>
        <Link href="/universities" className="text-[#1E90FF] underline mt-4 inline-block">Return to Universities Directory</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/universities" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#1E90FF] mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to State Universities Directory
          </Link>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <Badge variant="primary" className="text-xs px-3 py-1 font-bold">
                  <Award className="w-3.5 h-3.5 text-amber-400" /> QS World Rank #{uni.qsRank}
                </Badge>
                <h1 className="text-3xl sm:text-5xl font-extrabold flex items-center gap-3">
                  {uni.name} 🇨🇳
                </h1>
                <p className="text-sm text-slate-300 font-medium flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#1E90FF]" /> {uni.city}, {uni.country}
                </p>
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={() => setBookingOpen(true)}
                className="text-xs font-bold px-8 shadow-lg shrink-0"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Apply to {uni.name.split(" ")[0]} Now
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            <div className="lg:col-span-8 space-y-8">
              <GlassCard className="p-8 border border-slate-200 bg-white space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Accreditation & Standing</h3>
                <p className="text-slate-600 text-sm font-medium">{uni.accreditation}</p>
                <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-bold">
                  Scholarship Quota Tier: {uni.scholarshipTier}
                </div>
              </GlassCard>

              <GlassCard className="p-8 border border-slate-200 bg-[#FAFCFF] space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Popular English Majors</h3>
                <div className="flex flex-wrap gap-2">
                  {uni.popularFields.map((f, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-800 text-xs font-bold rounded-lg">
                      {f}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <GlassCard className="p-6 border border-slate-200 bg-white space-y-4 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">Tuition & Admission</h4>
                <div className="space-y-2 text-xs">
                  <span className="text-slate-500 font-medium block">Estimated Tuition:</span>
                  <span className="font-bold text-slate-900 text-sm">{uni.tuitionRange}</span>
                </div>
                <Button variant="primary" size="md" onClick={() => setBookingOpen(true)} className="w-full text-xs font-bold">
                  Submit Direct Application
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
