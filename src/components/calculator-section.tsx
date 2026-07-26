"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Building,
  Utensils,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface CalculatorSectionProps {
  onOpenBooking: () => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onOpenBooking }) => {
  const [country, setCountry] = useState<string>("China");
  const [programType, setProgramType] = useState<string>("Medical (MBBS)");
  const [scholarshipLevel, setScholarshipLevel] = useState<string>("100%");
  const [housingStyle, setHousingStyle] = useState<string>("Dorm");

  const countryData: Record<string, { baseTuition: number; baseLiving: number }> = {
    China: { baseTuition: 3500, baseLiving: 2000 },
    UK: { baseTuition: 18000, baseLiving: 9000 },
    Turkey: { baseTuition: 4500, baseLiving: 2500 },
    Malaysia: { baseTuition: 5500, baseLiving: 3000 },
    Germany: { baseTuition: 500, baseLiving: 8000 },
    Australia: { baseTuition: 22000, baseLiving: 12000 },
    Canada: { baseTuition: 20000, baseLiving: 10000 },
  };

  const currentCountry = countryData[country] || countryData["China"];

  let scholarshipDiscount = 0;
  if (scholarshipLevel === "100%") scholarshipDiscount = 1;
  else if (scholarshipLevel === "50%") scholarshipDiscount = 0.5;
  else if (scholarshipLevel === "25%") scholarshipDiscount = 0.25;

  const finalTuition = currentCountry.baseTuition * (1 - scholarshipDiscount);
  const housingMultiplier = housingStyle === "Dorm" ? 1 : 1.5;
  const finalLiving = currentCountry.baseLiving * housingMultiplier;
  const totalAnnualCost = finalTuition + finalLiving;

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <Calculator className="w-3.5 h-3.5" /> Interactive Financial Tool
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tuition & Living Cost <span className="text-[#1E90FF]">Calculator</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Estimate your net annual study cost by selecting your destination, degree program, scholarship tier, and living arrangement.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="mt-14 max-w-4xl mx-auto">
          <GlassCard className="p-8 border border-slate-200 bg-[#FAFCFF] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Form Controls */}
              <div className="lg:col-span-7 space-y-5 text-left">
                {/* Country */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Target Study Country:
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#1E90FF] bg-white"
                  >
                    <option value="China">🇨🇳 China (CSC Scholarships Available)</option>
                    <option value="UK">🇬🇧 United Kingdom (1-Yr Master's)</option>
                    <option value="Turkey">🇹🇷 Turkey (Bologna EU Standard)</option>
                    <option value="Malaysia">🇲🇾 Malaysia (Dual Branch Campuses)</option>
                    <option value="Germany">🇩🇪 Germany (Tuition-Free Public)</option>
                    <option value="Australia">🇦🇺 Australia (Group of 8)</option>
                    <option value="Canada">🇨🇦 Canada (Co-op Internships)</option>
                  </select>
                </div>

                {/* Program Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Academic Program:
                  </label>
                  <select
                    value={programType}
                    onChange={(e) => setProgramType(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#1E90FF] bg-white"
                  >
                    <option value="Medical (MBBS)">Medical (MBBS / BDS / Dental)</option>
                    <option value="Engineering">Engineering (Software, Civil, AI)</option>
                    <option value="Business">Business (MBA, MSc Finance)</option>
                    <option value="Pharmacy">Pharmacy & Healthcare</option>
                  </select>
                </div>

                {/* Scholarship Tier */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Expected Scholarship Support Tier:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["100%", "50%", "25%", "0%"].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setScholarshipLevel(tier)}
                        className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                          scholarshipLevel === tier
                            ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                            : "bg-white text-slate-700 border border-slate-200 hover:border-[#1E90FF]"
                        }`}
                      >
                        {tier} Waiver
                      </button>
                    ))}
                  </div>
                </div>

                {/* Housing Style */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Accommodation Style:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setHousingStyle("Dorm")}
                      className={`p-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                        housingStyle === "Dorm"
                          ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                          : "bg-white text-slate-700 border border-slate-200"
                      }`}
                    >
                      <Building className="w-4 h-4" /> University Dormitory
                    </button>
                    <button
                      type="button"
                      onClick={() => setHousingStyle("Apartment")}
                      className={`p-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                        housingStyle === "Apartment"
                          ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                          : "bg-white text-slate-700 border border-slate-200"
                      }`}
                    >
                      <Utensils className="w-4 h-4" /> Private Apartment
                    </button>
                  </div>
                </div>
              </div>

              {/* Display Card */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold text-[#1E90FF] uppercase tracking-wider">
                    Estimated Annual Budget
                  </span>
                  <h4 className="text-3xl font-extrabold text-slate-900 mt-1">
                    ${totalAnnualCost.toLocaleString()}{" "}
                    <span className="text-xs font-medium text-slate-500">/ year</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Includes estimated tuition + room & board for {country}
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center text-slate-600">
                    <span className="flex items-center gap-1 font-medium">
                      <GraduationCap className="w-3.5 h-3.5 text-[#1E90FF]" /> Net Annual Tuition:
                    </span>
                    <span className="font-bold text-slate-900">${finalTuition.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span className="flex items-center gap-1 font-medium">
                      <Building className="w-3.5 h-3.5 text-[#1E90FF]" /> Est. Living & Housing:
                    </span>
                    <span className="font-bold text-slate-900">${finalLiving.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-700 font-bold bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    <span>Est. Scholarship Savings:</span>
                    <span>-${(currentCountry.baseTuition * scholarshipDiscount).toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenBooking}
                  className="w-full text-xs"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Lock In Scholarship Rate
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
