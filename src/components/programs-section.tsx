"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Smile,
  Terminal,
  Cpu,
  Pill,
  HeartPulse,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { PROGRAMS, Program } from "@/data/mock-data";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";
import { ChinaFlag } from "./ui/china-flag";

interface ProgramsSectionProps {
  onOpenBooking: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const categories = ["All", "Medical", "Technology", "Engineering", "Business"];

  const filteredPrograms =
    selectedCategory === "All"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === selectedCategory);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-[#DC2626]" />;
      case "Smile":
        return <Smile className="w-5 h-5 text-[#DC2626]" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-[#DC2626]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#DC2626]" />;
      case "Pill":
        return <Pill className="w-5 h-5 text-[#DC2626]" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-[#DC2626]" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#DC2626]" />;
      default:
        return <Stethoscope className="w-5 h-5 text-[#DC2626]" />;
    }
  };

  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="primary">
              <ChinaFlag size="sm" /> Taught 100% in English
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center flex-wrap gap-2">
              <span>Accredited China</span>
              <span className="text-[#DC2626]">Degree Programs</span>
            </h2>
            <p className="text-slate-600 text-base font-normal">
              Globally recognized medical (MBBS, BDS), artificial intelligence, and infrastructure engineering degrees offered at top Chinese state campuses.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#DC2626] text-white shadow-xs font-bold"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <GlassCard
              key={prog.id}
              className="p-6 border border-slate-200 bg-white flex flex-col justify-between hover:border-[#DC2626]/40 shadow-sm"
            >
              <div className="space-y-4">
                {/* Category & Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#FEF2F2] border border-[#DC2626]/20">
                    {getProgramIcon(prog.iconName)}
                  </div>
                  <Badge variant="accent" className="text-xs font-bold">
                    {prog.duration}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {prog.title}
                </h3>

                <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                  {prog.description}
                </p>

                {/* Top Chinese Universities Offering This */}
                <div className="pt-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Offered At Chinese State Campuses:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {prog.topCountries.map((uniName, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-medium rounded flex items-center gap-1">
                        <ChinaFlag size="sm" /> {uniName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveModalProgram(prog)}
                  className="flex-1 text-xs"
                >
                  View Pathway
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenBooking}
                  className="flex-1 text-xs"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Apply Now
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {activeModalProgram && (
        <Modal
          isOpen={!!activeModalProgram}
          onClose={() => setActiveModalProgram(null)}
          title={activeModalProgram.title}
        >
          <div className="space-y-6">
            <div className="p-4 bg-[#FEF2F2] rounded-2xl border border-[#DC2626]/20 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#DC2626]">Category: {activeModalProgram.category}</p>
                <p className="text-sm font-extrabold text-slate-900">Duration: {activeModalProgram.duration}</p>
              </div>
              <p className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                Starting Salary: {activeModalProgram.startingSalary}
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900 mb-1">Academic Overview</p>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">{activeModalProgram.description}</p>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900 mb-2">Global Licensing & Career Pathways</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalProgram.careerPathways.map((path, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
                    <span>{path}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900 mb-1">Entry Prerequisites</p>
              <p className="text-xs font-semibold text-[#DC2626] bg-red-50/50 p-3 rounded-xl border border-red-100">
                {activeModalProgram.prerequisites}
              </p>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <Button variant="outline" className="w-1/2" onClick={() => setActiveModalProgram(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                className="w-1/2"
                onClick={() => {
                  setActiveModalProgram(null);
                  onOpenBooking();
                }}
              >
                Apply For Seat
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
