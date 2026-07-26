"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GitCompare,
  DollarSign,
  ShieldCheck,
  Briefcase,
  Globe2,
  Sparkles
} from "lucide-react";
import { Badge } from "./ui/badge";

export const ComparisonSection: React.FC = () => {
  const [countryA, setCountryA] = useState<string>("China");
  const [countryB, setCountryB] = useState<string>("UK");

  const countryMatrix: Record<
    string,
    {
      flag: string;
      tuition: string;
      scholarship: string;
      visaRate: string;
      workPermit: string;
      prPathway: string;
      language: string;
    }
  > = {
    China: {
      flag: "🇨🇳",
      tuition: "$2,500 - $4,500 / yr",
      scholarship: "100% Full CSC + Dorm + Monthly Stipend",
      visaRate: "99.2%",
      workPermit: "Part-time internship approved on campus",
      prPathway: "High talent / Academic research work visa",
      language: "100% English medium (Zero HSK year 1)",
    },
    UK: {
      flag: "🇬🇧",
      tuition: "£12,000 - £22,000 / yr",
      scholarship: "Up to £5,000 Merit Bursaries",
      visaRate: "97.8%",
      workPermit: "20 hrs/week part-time + 2-Yr Post Study Work (PSW)",
      prPathway: "Skilled Worker Visa (5 years to PR)",
      language: "IELTS 6.0 - 6.5 (Medium of instruction waiver)",
    },
    Turkey: {
      flag: "🇹🇷",
      tuition: "$3,000 - $7,500 / yr",
      scholarship: "100% Türkiye Bursları Government Grant",
      visaRate: "98.5%",
      workPermit: "Part-time work permitted post 1st year",
      prPathway: "Turquoise Card / Investment & Work Visa",
      language: "English medium or 1-Yr Turkish course",
    },
    Malaysia: {
      flag: "🇲🇾",
      tuition: "$4,000 - $8,000 / yr",
      scholarship: "20% - 50% Academic Merit Waivers",
      visaRate: "99.0%",
      workPermit: "Part-time during semester breaks",
      prPathway: "Employment Pass Category 1/2",
      language: "100% English medium for all degrees",
    },
    Germany: {
      flag: "🇩🇪",
      tuition: "€0 - €3,000 / yr (Tuition-Free)",
      scholarship: "DAAD Grants & Stipendium",
      visaRate: "96.5%",
      workPermit: "120 full days / 240 half days per year",
      prPathway: "18-Month Job Seeker Visa -> Fast PR",
      language: "English taught Masters / German B2 for Public",
    },
  };

  const dataA = countryMatrix[countryA] || countryMatrix["China"];
  const dataB = countryMatrix[countryB] || countryMatrix["UK"];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <GitCompare className="w-3.5 h-3.5" /> Decision Intelligence
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Side-by-Side <span className="text-[#1E90FF]">Country Comparison</span> Matrix
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Compare key parameters across target countries to select the ideal destination for your academic budget, visa requirements, and long-term career goals.
          </p>
        </div>

        {/* Selector Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Country A:</span>
            <select
              value={countryA}
              onChange={(e) => setCountryA(e.target.value)}
              className="font-bold text-slate-900 text-sm focus:outline-none bg-transparent"
            >
              {Object.keys(countryMatrix).map((c) => (
                <option key={c} value={c}>
                  {countryMatrix[c].flag} {c}
                </option>
              ))}
            </select>
          </div>

          <span className="text-xs font-extrabold text-[#1E90FF] uppercase tracking-widest px-2">VS</span>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Country B:</span>
            <select
              value={countryB}
              onChange={(e) => setCountryB(e.target.value)}
              className="font-bold text-slate-900 text-sm focus:outline-none bg-transparent"
            >
              {Object.keys(countryMatrix).map((c) => (
                <option key={c} value={c}>
                  {countryMatrix[c].flag} {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 max-w-4xl mx-auto overflow-x-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden min-w-[640px]">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-slate-900 text-white p-4 font-bold text-sm items-center text-center">
              <div className="col-span-4 text-left pl-4 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                Parameter
              </div>
              <div className="col-span-4 text-center flex items-center justify-center gap-2 text-base">
                <span>{dataA.flag}</span>
                <span>{countryA}</span>
              </div>
              <div className="col-span-4 text-center flex items-center justify-center gap-2 text-base">
                <span>{dataB.flag}</span>
                <span>{countryB}</span>
              </div>
            </div>

            {/* Row 1: Tuition */}
            <div className="grid grid-cols-12 p-4 border-b border-slate-100 text-xs items-center">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#1E90FF]" /> Avg. Tuition Fee
              </div>
              <div className="col-span-4 text-center font-semibold text-slate-700">{dataA.tuition}</div>
              <div className="col-span-4 text-center font-semibold text-slate-700">{dataB.tuition}</div>
            </div>

            {/* Row 2: Scholarship */}
            <div className="grid grid-cols-12 p-4 border-b border-slate-100 text-xs items-center bg-slate-50/50">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#1E90FF]" /> Max Scholarship Potential
              </div>
              <div className="col-span-4 text-center font-bold text-[#1E90FF]">{dataA.scholarship}</div>
              <div className="col-span-4 text-center font-bold text-[#1E90FF]">{dataB.scholarship}</div>
            </div>

            {/* Row 3: Visa Rate */}
            <div className="grid grid-cols-12 p-4 border-b border-slate-100 text-xs items-center">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1E90FF]" /> Embassy Visa Success
              </div>
              <div className="col-span-4 text-center font-bold text-emerald-700">{dataA.visaRate}</div>
              <div className="col-span-4 text-center font-bold text-emerald-700">{dataB.visaRate}</div>
            </div>

            {/* Row 4: Work Permit */}
            <div className="grid grid-cols-12 p-4 border-b border-slate-100 text-xs items-center bg-slate-50/50">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#1E90FF]" /> Post-Study Work Permit
              </div>
              <div className="col-span-4 text-center text-slate-700 font-medium">{dataA.workPermit}</div>
              <div className="col-span-4 text-center text-slate-700 font-medium">{dataB.workPermit}</div>
            </div>

            {/* Row 5: Language */}
            <div className="grid grid-cols-12 p-4 text-xs items-center">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#1E90FF]" /> Language Requirement
              </div>
              <div className="col-span-4 text-center text-slate-700 font-medium">{dataA.language}</div>
              <div className="col-span-4 text-center text-slate-700 font-medium">{dataB.language}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
