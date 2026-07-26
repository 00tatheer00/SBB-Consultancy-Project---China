"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  ArrowRight,
  Calculator,
  Gift
} from "lucide-react";
import { SCHOLARSHIPS } from "@/data/mock-data";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ScholarshipsSectionProps {
  onOpenBooking: () => void;
}

export const ScholarshipsSection: React.FC<ScholarshipsSectionProps> = ({ onOpenBooking }) => {
  const [selectedBadge, setSelectedBadge] = useState<string>("All");
  const [userScore, setUserScore] = useState<number>(85);
  const [userDegree, setUserDegree] = useState<string>("bachelor");
  const [estimatorResult, setEstimatorResult] = useState<string | null>(null);

  const badges = ["All", "100% Full", "Government", "Partial", "Merit"];

  const filteredScholarships =
    selectedBadge === "All"
      ? SCHOLARSHIPS
      : SCHOLARSHIPS.filter((s) => s.badge === selectedBadge);

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (userScore >= 80) {
      setEstimatorResult("High Eligibility! You qualify for 100% Full Tuition + Monthly Accommodation Stipend grants.");
    } else if (userScore >= 70) {
      setEstimatorResult("Good Eligibility! You qualify for 50% Tuition Waiver & Provincial Merit Bursaries.");
    } else {
      setEstimatorResult("Moderate Eligibility! You qualify for Partial Tuition Waivers and Direct Admissions.");
    }
  };

  return (
    <section id="scholarships" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="accent" className="mx-auto text-xs py-1 px-3">
            <Gift className="w-3.5 h-3.5" /> 100% Full Scholarship Hub
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Study Abroad With <span className="text-[#1E90FF]">Zero Tuition Burden</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            We specialize in securing 100% Full Chinese Government CSC Grants, Türkiye Bursları, European Stipendium Hungaricum, and UK Merit Bursaries for international applicants.
          </p>

          {/* Filter Badges */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {badges.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBadge(b)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  selectedBadge === b
                    ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {b} Grants
              </button>
            ))}
          </div>
        </div>

        {/* Scholarship Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScholarships.map((sch) => (
            <GlassCard
              key={sch.id}
              className="p-6 border border-slate-200 bg-white flex flex-col justify-between hover:border-[#1E90FF]/40 shadow-sm"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <Badge variant="accent" className="text-xs px-2.5 py-0.5 font-bold">
                    {sch.badge} Coverage
                  </Badge>
                  <span className="text-xs font-bold text-slate-600">{sch.country}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {sch.title}
                </h3>

                <p className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  ⚡ {sch.coverage}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Included Benefits:
                  </p>
                  {sch.benefits.map((ben, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#1E90FF] shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

                {/* Deadline */}
                <div className="pt-3 border-t border-slate-100 text-xs">
                  <div className="flex items-center justify-between text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1E90FF]" /> Deadline:
                    </span>
                    <span className="font-bold text-slate-900">{sch.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenBooking}
                  className="w-full text-xs"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Apply For {sch.badge} Grant
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Scholarship Estimator Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <GlassCard className="p-8 border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-3">
                <Badge variant="primary">
                  <Calculator className="w-3.5 h-3.5" /> Instant Assessment
                </Badge>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Check Your Scholarship Eligibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Enter your current academic percentage / GPA to instantly estimate your 100% Full CSC or Merit Scholarship qualification tier.
                </p>
              </div>

              <div className="md:col-span-6 w-full bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Academic Score Percentage:
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="50"
                      max="100"
                      value={userScore}
                      onChange={(e) => setUserScore(Number(e.target.value))}
                      className="w-full accent-[#1E90FF] cursor-pointer"
                    />
                    <span className="text-base font-bold text-[#1E90FF] w-12 text-right">
                      {userScore}%
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Intended Degree Level:
                  </label>
                  <select
                    value={userDegree}
                    onChange={(e) => setUserDegree(e.target.value)}
                    className="w-full p-2.5 text-xs font-medium bg-white rounded-xl border border-slate-300 focus:outline-none focus:border-[#1E90FF]"
                  >
                    <option value="bachelor">Bachelor Degree (MBBS, BDS, BEng, BSc)</option>
                    <option value="master">Master Degree (MSc, MBA, MEng)</option>
                    <option value="phd">PhD / Doctorate Research</option>
                  </select>
                </div>

                <Button variant="primary" size="sm" onClick={handleEstimate} className="w-full text-xs font-semibold">
                  Calculate Qualification Score
                </Button>

                {estimatorResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-[#EAF4FF] text-[#1E90FF] rounded-xl text-xs font-bold text-center border border-[#1E90FF]/30"
                  >
                    {estimatorResult}
                  </motion.div>
                )}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
