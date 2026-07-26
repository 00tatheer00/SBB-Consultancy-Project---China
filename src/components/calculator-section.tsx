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
import { ChinaFlag } from "./ui/china-flag";

interface CalculatorSectionProps {
  onOpenBooking: () => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onOpenBooking }) => {
  const [city, setCity] = useState<string>("Hangzhou");
  const [programType, setProgramType] = useState<string>("MBBS (Medicine)");
  const [scholarshipLevel, setScholarshipLevel] = useState<string>("100%");
  const [housingStyle, setHousingStyle] = useState<string>("Dorm");

  const chinaCityData: Record<string, { baseTuition: number; baseLiving: number }> = {
    Hangzhou: { baseTuition: 3500, baseLiving: 2200 },
    Shanghai: { baseTuition: 4500, baseLiving: 3200 },
    Beijing: { baseTuition: 4200, baseLiving: 3000 },
    Nanjing: { baseTuition: 3200, baseLiving: 2000 },
    Wuhan: { baseTuition: 2800, baseLiving: 1800 },
    Guangzhou: { baseTuition: 3600, baseLiving: 2400 },
    "Xi'an": { baseTuition: 2600, baseLiving: 1600 },
  };

  const currentCity = chinaCityData[city] || chinaCityData["Hangzhou"];

  let scholarshipDiscount = 0;
  if (scholarshipLevel === "100%") scholarshipDiscount = 1;
  else if (scholarshipLevel === "50%") scholarshipDiscount = 0.5;
  else if (scholarshipLevel === "25%") scholarshipDiscount = 0.25;

  const finalTuition = currentCity.baseTuition * (1 - scholarshipDiscount);
  const housingMultiplier = housingStyle === "Dorm" ? 1 : 1.4;
  const finalLiving = currentCity.baseLiving * housingMultiplier;
  const totalAnnualCost = finalTuition + finalLiving;

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <Calculator className="w-3.5 h-3.5" /> Interactive China Budget Tool 🇨🇳
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <span>China University Tuition & Cost</span>
            <span className="text-[#1E90FF]">Calculator</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Estimate your net annual study cost by selecting your target Chinese city hub, degree program, CSC scholarship tier, and dormitory style.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="mt-14 max-w-4xl mx-auto">
          <GlassCard className="p-8 border border-slate-200 bg-[#FAFCFF] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Form Controls */}
              <div className="lg:col-span-7 space-y-5 text-left">
                {/* City */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Target China Academic City:
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#1E90FF] bg-white"
                  >
                    <option value="Hangzhou">🇨🇳 Hangzhou (Zhejiang Univ & Tech Hub)</option>
                    <option value="Shanghai">🇨🇳 Shanghai (Fudan & SJTU Megacity)</option>
                    <option value="Beijing">🇨🇳 Beijing (Tsinghua & Peking Capital Hub)</option>
                    <option value="Nanjing">🇨🇳 Nanjing (Medical & Pharma Hub)</option>
                    <option value="Wuhan">🇨🇳 Wuhan (HUST & Engineering Hub)</option>
                    <option value="Guangzhou">🇨🇳 Guangzhou (Canton Trade Hub)</option>
                    <option value="Xi'an">🇨🇳 Xi'an (Silk Road Academic Hub)</option>
                  </select>
                </div>

                {/* Program Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Academic Degree Program:
                  </label>
                  <select
                    value={programType}
                    onChange={(e) => setProgramType(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:border-[#1E90FF] bg-white"
                  >
                    <option value="MBBS (Medicine)">MBBS (WHO & ECFMG Accredited Medicine)</option>
                    <option value="BDS (Dentistry)">BDS (Dental Surgery)</option>
                    <option value="Software / AI">Computer Science & Artificial Intelligence</option>
                    <option value="Engineering">Civil & Mechanical Engineering</option>
                    <option value="PharmD">PharmD / Pharmaceutical Science</option>
                  </select>
                </div>

                {/* CSC Scholarship Tier */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    CSC / Government Scholarship Support Tier:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["100%", "50%", "25%", "0%"].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setScholarshipLevel(tier)}
                        className={`py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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
                    Campus Accommodation Style:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setHousingStyle("Dorm")}
                      className={`p-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        housingStyle === "Dorm"
                          ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                          : "bg-white text-slate-700 border border-slate-200"
                      }`}
                    >
                      <Building className="w-4 h-4" /> Campus Dorm (En-Suite)
                    </button>
                    <button
                      type="button"
                      onClick={() => setHousingStyle("Apartment")}
                      className={`p-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        housingStyle === "Apartment"
                          ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                          : "bg-white text-slate-700 border border-slate-200"
                      }`}
                    >
                      <Utensils className="w-4 h-4" /> Private Off-Campus Flat
                    </button>
                  </div>
                </div>
              </div>

              {/* Display Card */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold text-[#1E90FF] uppercase tracking-wider flex items-center gap-1.5">
                    <ChinaFlag size="sm" /> Estimated Annual Budget in {city}
                  </span>
                  <h4 className="text-3xl font-extrabold text-slate-900 mt-1">
                    ${totalAnnualCost.toLocaleString()}{" "}
                    <span className="text-xs font-medium text-slate-500">/ year</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Estimated tuition + room & board in {city}, China
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
                    <span>Est. CSC Scholarship Savings:</span>
                    <span>-${(currentCity.baseTuition * scholarshipDiscount).toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenBooking}
                  className="w-full text-xs"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Lock In 100% Scholarship Rate
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
