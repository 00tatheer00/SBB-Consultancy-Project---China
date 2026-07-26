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
  const [cityA, setCityA] = useState<string>("Hangzhou");
  const [cityB, setCityB] = useState<string>("Shanghai");

  const chinaCityMatrix: Record<
    string,
    {
      flag: string;
      tuition: string;
      scholarship: string;
      visaRate: string;
      halalDining: string;
      keyUnis: string;
      lifestyle: string;
    }
  > = {
    Hangzhou: {
      flag: "🇨🇳",
      tuition: "CNY 18,000 - 30,000 / yr ($2,500 - $4,200)",
      scholarship: "100% Full CSC + Zhejiang Provincial Grant (Stipend CNY 2,500/mo)",
      visaRate: "99.5% JW202 Approval",
      halalDining: "Multiple Campus Halal Canteens & Hangzhou Halal Restaurants",
      keyUnis: "Zhejiang University (QS #44), ZJTU",
      lifestyle: "High-tech Alibaba Hub, West Lake Scenic Beauty, Mild Climate",
    },
    Shanghai: {
      flag: "🇨🇳",
      tuition: "CNY 24,000 - 38,000 / yr ($3,300 - $5,200)",
      scholarship: "100% Full CSC + Shanghai Gov SGS Class A Grant",
      visaRate: "99.2% JW202 Approval",
      halalDining: "Established Shanghai Muslim Quarter & Campus Canteens",
      keyUnis: "Fudan Univ (QS #39), SJTU (QS #45), Tongji Univ",
      lifestyle: "Global Financial Megacity, High English Fluency, Modern Metro",
    },
    Beijing: {
      flag: "🇨🇳",
      tuition: "CNY 22,000 - 35,000 / yr ($3,000 - $4,800)",
      scholarship: "100% Full CSC Type A/B + Beijing Belt & Road Fellowship",
      visaRate: "99.0% JW202 Approval",
      halalDining: "Niujie Muslim Street & All University Campus Halal Dining",
      keyUnis: "Tsinghua (QS #20), Peking Univ (QS #14), Capital Medical",
      lifestyle: "Capital Political Heart, Imperial History, Top Research Labs",
    },
    Nanjing: {
      flag: "🇨🇳",
      tuition: "CNY 19,000 - 28,000 / yr ($2,600 - $3,900)",
      scholarship: "100% Full CSC + Jiangsu Jasmine Provincial Full Grant",
      visaRate: "99.3% JW202 Approval",
      halalDining: "Historic Nanjing Muslim Quarter & En-suite Campus Canteens",
      keyUnis: "Nanjing Univ (QS #141), SEU, China Pharmaceutical Univ",
      lifestyle: "Historic Green City, Affordable Living, Premier Pharma Hub",
    },
    Wuhan: {
      flag: "🇨🇳",
      tuition: "CNY 16,000 - 25,000 / yr ($2,200 - $3,500)",
      scholarship: "100% Full CSC + Wuhan Municipal Government Scholarship",
      visaRate: "99.6% JW202 Approval",
      halalDining: "Wuhan Campus Halal Dining Halls & Optics Valley Food Hub",
      keyUnis: "Wuhan Univ (QS #194), Huazhong Univ (HUST)",
      lifestyle: "Largest Student Population City, Ultra Low Cost of Living",
    },
  };

  const dataA = chinaCityMatrix[cityA] || chinaCityMatrix["Hangzhou"];
  const dataB = chinaCityMatrix[cityB] || chinaCityMatrix["Shanghai"];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <GitCompare className="w-3.5 h-3.5" /> China City Decision Matrix 🇨🇳
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Side-by-Side <span className="text-[#1E90FF]">China City Comparison</span> Matrix
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Compare academic hubs across China to select the ideal city for your budget, CSC scholarship quotas, campus dormitories, and lifestyle preferences.
          </p>
        </div>

        {/* Selector Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">City A:</span>
            <select
              value={cityA}
              onChange={(e) => setCityA(e.target.value)}
              className="font-bold text-slate-900 text-sm focus:outline-none bg-transparent"
            >
              {Object.keys(chinaCityMatrix).map((c) => (
                <option key={c} value={c}>
                  🇨🇳 {c} Hub
                </option>
              ))}
            </select>
          </div>

          <span className="text-xs font-extrabold text-[#1E90FF] uppercase tracking-widest px-2">VS</span>

          <div className="flex items-center gap-2 bg-[#1E90FF] text-white px-4 py-2 rounded-2xl border border-[#1E90FF] shadow-xs">
            <span className="text-xs font-semibold opacity-90 text-white">City B:</span>
            <select
              value={cityB}
              onChange={(e) => setCityB(e.target.value)}
              className="font-bold text-white text-sm focus:outline-none bg-transparent"
            >
              {Object.keys(chinaCityMatrix).map((c) => (
                <option key={c} value={c} className="text-slate-900">
                  🇨🇳 {c} Hub
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
                <span>🇨🇳</span>
                <span>{cityA} Hub</span>
              </div>
              <div className="col-span-4 text-center flex items-center justify-center gap-2 text-base">
                <span>🇨🇳</span>
                <span>{cityB} Hub</span>
              </div>
            </div>

            {/* Row 1: Tuition */}
            <div className="grid grid-cols-12 p-4 border-b border-slate-100 text-xs items-center">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#1E90FF]" /> Avg Tuition Fee
              </div>
              <div className="col-span-4 text-center font-semibold text-slate-700">{dataA.tuition}</div>
              <div className="col-span-4 text-center font-semibold text-slate-700">{dataB.tuition}</div>
            </div>

            {/* Row 2: Scholarship */}
            <div className="grid grid-cols-12 p-4 border-b border-slate-100 text-xs items-center bg-slate-50/50">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#1E90FF]" /> Max CSC & Gov Scholarship
              </div>
              <div className="col-span-4 text-center font-bold text-[#1E90FF]">{dataA.scholarship}</div>
              <div className="col-span-4 text-center font-bold text-[#1E90FF]">{dataB.scholarship}</div>
            </div>

            {/* Row 3: Visa Rate */}
            <div className="grid grid-cols-12 p-4 border-b border-slate-100 text-xs items-center">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1E90FF]" /> JW202 Embassy Approval Rate
              </div>
              <div className="col-span-4 text-center font-bold text-emerald-700">{dataA.visaRate}</div>
              <div className="col-span-4 text-center font-bold text-emerald-700">{dataB.visaRate}</div>
            </div>

            {/* Row 4: Key Unis */}
            <div className="grid grid-cols-12 p-4 border-b border-slate-100 text-xs items-center bg-slate-50/50">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#1E90FF]" /> Featured State Campuses
              </div>
              <div className="col-span-4 text-center font-semibold text-slate-700">{dataA.keyUnis}</div>
              <div className="col-span-4 text-center font-semibold text-slate-700">{dataB.keyUnis}</div>
            </div>

            {/* Row 5: Halal Dining */}
            <div className="grid grid-cols-12 p-4 border-b border-slate-100 text-xs items-center">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#1E90FF]" /> Campus Halal Dining
              </div>
              <div className="col-span-4 text-center text-slate-700 font-medium">{dataA.halalDining}</div>
              <div className="col-span-4 text-center text-slate-700 font-medium">{dataB.halalDining}</div>
            </div>

            {/* Row 6: Lifestyle */}
            <div className="grid grid-cols-12 p-4 text-xs items-center bg-slate-50/50">
              <div className="col-span-4 font-bold text-slate-800 flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#1E90FF]" /> City Ecosystem & Vibe
              </div>
              <div className="col-span-4 text-center text-slate-700 font-medium">{dataA.lifestyle}</div>
              <div className="col-span-4 text-center text-slate-700 font-medium">{dataB.lifestyle}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
