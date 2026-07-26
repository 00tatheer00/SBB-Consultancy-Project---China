"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { PROGRAMS } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowLeft, CheckCircle2, Stethoscope, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

export default function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [bookingOpen, setBookingOpen] = useState(false);

  const program = PROGRAMS.find((p) => p.id === id);

  if (!program) {
    return (
      <main className="min-h-screen pt-40 text-center">
        <h1 className="text-3xl font-bold">Degree Program Not Found</h1>
        <Link href="/programs" className="text-[#1E90FF] underline mt-4 inline-block">Return to Programs Directory</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/programs" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#1E90FF] mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Programs Directory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-3">
                <Badge variant="primary" className="text-xs px-3 py-1 font-bold">
                  {program.category} Degree Program 🇨🇳
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {program.title}
                </h1>
                <p className="text-sm text-slate-500 font-semibold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#1E90FF]" /> Duration: {program.duration}
                </p>
              </div>

              <GlassCard className="p-8 border border-slate-200 bg-white space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Program Overview</h3>
                <p className="text-slate-600 text-sm font-normal leading-relaxed">{program.description}</p>
              </GlassCard>

              {/* Career Pathways */}
              <GlassCard className="p-8 border border-slate-200 bg-[#FAFCFF] space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#1E90FF]" /> Global Career & Licensing Pathways
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.careerPathways.map((path, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#1E90FF]" />
                      <span>{path}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Side Card */}
            <div className="lg:col-span-4 space-y-6">
              <GlassCard className="p-6 border border-slate-200 bg-white space-y-4 shadow-sm">
                <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">Admissions Summary</h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-500 font-medium block">Starting Global Salary Range:</span>
                    <span className="font-bold text-emerald-600 text-sm">{program.startingSalary}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium block">Entry Prerequisites:</span>
                    <span className="font-semibold text-slate-900">{program.prerequisites}</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setBookingOpen(true)}
                  className="w-full text-xs font-bold"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Apply For {program.category} Seat
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
