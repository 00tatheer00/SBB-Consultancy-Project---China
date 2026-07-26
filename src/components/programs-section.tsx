"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Smile,
  Pill,
  HeartPulse,
  Cpu,
  Terminal,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Clock,
  Briefcase,
  CheckCircle2
} from "lucide-react";
import { PROGRAMS, Program } from "@/data/mock-data";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";

interface ProgramsSectionProps {
  onOpenBooking: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const categories = ["All", "Medical", "Engineering", "Technology", "Business"];

  const filteredPrograms =
    activeCategory === "All"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-[#1E90FF]" />;
      case "Smile":
        return <Smile className="w-5 h-5 text-[#1E90FF]" />;
      case "Pill":
        return <Pill className="w-5 h-5 text-[#1E90FF]" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-[#1E90FF]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#1E90FF]" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-[#1E90FF]" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#1E90FF]" />;
      default:
        return <Stethoscope className="w-5 h-5 text-[#1E90FF]" />;
    }
  };

  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <Sparkles className="w-3.5 h-3.5" /> High Demand Fields
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Globally Accredited Academic <span className="text-[#1E90FF]">Degree Programs</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Choose from career-focused Bachelor, Master, and Doctorate qualifications taught entirely in English with WHO, ECFMG, and international accreditation.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  activeCategory === cat
                    ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat} Programs
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <GlassCard
              key={prog.id}
              className="p-6 border border-slate-200 bg-white flex flex-col justify-between group hover:border-[#1E90FF]/40"
            >
              <div className="space-y-4">
                {/* Header Icon & Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] border border-[#1E90FF]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(prog.iconName)}
                  </div>
                  <Badge variant="secondary" className="text-[11px] font-semibold">
                    {prog.category}
                  </Badge>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#1E90FF] transition-colors">
                    {prog.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mt-1">
                    <Clock className="w-3.5 h-3.5 text-[#1E90FF]" />
                    <span>Duration: {prog.duration}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-normal line-clamp-3 leading-relaxed">
                  {prog.description}
                </p>

                {/* Career Pathways */}
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-[#1E90FF]" /> Career Pathways:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {prog.careerPathways.slice(0, 3).map((path, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Study Hubs */}
                <div className="flex items-center justify-between text-xs pt-1 text-slate-500 font-medium">
                  <span>Top Destinations:</span>
                  <span className="font-bold text-slate-800">{prog.topCountries.join(", ")}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProgram(prog)}
                  className="w-1/2 text-xs"
                >
                  Syllabus Guide
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenBooking}
                  className="w-1/2 text-xs"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Apply
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <Modal
          isOpen={!!selectedProgram}
          onClose={() => setSelectedProgram(null)}
          title={selectedProgram.title}
        >
          <div className="space-y-6">
            <div className="p-4 bg-[#EAF4FF] border border-[#1E90FF]/20 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-xs">
                {getIcon(selectedProgram.iconName)}
              </div>
              <div>
                <Badge variant="primary">{selectedProgram.category}</Badge>
                <p className="text-xs text-slate-700 font-semibold mt-1">Duration: {selectedProgram.duration}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Program Overview</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">{selectedProgram.description}</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
              <p className="text-xs font-bold text-slate-900">Academic Prerequisites</p>
              <p className="text-xs text-slate-600 font-medium">{selectedProgram.prerequisites}</p>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900 mb-2">Global Career Pathways & Salary Benchmark</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedProgram.careerPathways.map((path, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E90FF]" /> {path}
                  </span>
                ))}
              </div>
              <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                Average Entry Level Salary Range: {selectedProgram.startingSalary}
              </p>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <Button variant="outline" className="w-1/2" onClick={() => setSelectedProgram(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                className="w-1/2"
                onClick={() => {
                  setSelectedProgram(null);
                  onOpenBooking();
                }}
              >
                Apply for {selectedProgram.category}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
