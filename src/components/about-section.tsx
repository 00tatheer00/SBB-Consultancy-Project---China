"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Award,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  Eye,
  Heart
} from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { ChinaFlag } from "./ui/china-flag";

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const coreValues = [
    { title: "Direct Campus Agreements", icon: Building2, desc: "Direct admission representations with China's top MOE state universities, bypassing intermediate agency margins." },
    { title: "100% Scholarship Success", icon: Award, desc: "Specializing in securing 100% Chinese Government CSC Grants, Shanghai SGS, and Provincial Waivers." },
    { title: "JW202 Embassy Assurance", icon: ShieldCheck, desc: "99% student X1 visa approval ratio through official ministry JW202 clearance and interview coaching." },
    { title: "On-Ground Student Care", icon: Heart, desc: "Dedicated China advisory desks in Beijing, Shanghai, Hangzhou, and Wuhan for airport pick-up and dorm check-in." }
  ];

  const milestones = [
    { year: "2018", title: "Foundation in Beijing", detail: "SBB established in Beijing as an accredited international student admission desk." },
    { year: "2020", title: "CSC Portal Integration", detail: "Authorized partner for direct university Type B CSC Chinese Government Scholarship filing." },
    { year: "2022", title: "50+ State Campuses", detail: "Expanded direct admission seats with Zhejiang Univ, Fudan, SJTU, Capital Medical, and HUST." },
    { year: "2024", title: "5,000+ Students Placed", detail: "Crossed 5,000 successful international student admissions with 99% JW202 visa approval." },
    { year: "2026", title: "Global China Network", detail: "Full online application tracking, instant CSC estimator, and on-ground student assistance desks." }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <Globe2 className="w-3.5 h-3.5 text-[#DC2626]" /> Official China Higher Education Portal 🇨🇳
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <span>About</span>
            <span className="text-[#DC2626]">Study Beyond Borders (SBB)</span>
            <ChinaFlag size="lg" />
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            For over 8 years, SBB has stood as the premier international admissions bridge to China's leading state universities, securing full CSC scholarships and embassy visa approvals.
          </p>
        </div>

        {/* Mission / Vision Tabs Showcase */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "mission"
                  ? "bg-[#DC2626] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Target className="w-4 h-4" /> Our Mission
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "vision"
                  ? "bg-[#DC2626] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Eye className="w-4 h-4" /> Our Vision
            </button>
          </div>

          <GlassCard className="p-8 border border-slate-200 bg-[#FAFCFF] text-left">
            {activeTab === "mission" ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#DC2626]" /> Connecting Ambitious Students to China's Top State Campuses
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  Our mission is to empower international students by providing direct, transparent, and hassle-free access to WHO/ECFMG accredited medical degrees, AI engineering programs, and 100% CSC Chinese Government Scholarships with zero hidden fees.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#DC2626]" /> 100% Official MOE Direct Admissions
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#DC2626]" /> Fast-Track JW202/JW201 Ministry Approval
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#DC2626]" /> To Be Asia's #1 Most Trusted China Admissions Desk
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  We envision a seamless global portal where any qualified student, regardless of background, can easily compare Chinese university cities, apply for full tuition & dormitory grants, and arrive safely on campus with 24/7 on-ground assistance.
                </p>
              </div>
            )}
          </GlassCard>
        </div>

        {/* 4 Core Values Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <GlassCard key={idx} className="p-6 border border-slate-200 bg-white">
                <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center mb-4 border border-[#DC2626]/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{val.title}</h4>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">{val.desc}</p>
              </GlassCard>
            );
          })}
        </div>

        {/* 5-Stage Company Timeline */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Journey of <span className="text-[#DC2626]">Academic Excellence in China</span>
            </h3>
            <p className="text-xs sm:text-sm font-normal text-slate-500 mt-1">
              8+ years of dedicated service to international medical, engineering, and business students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {milestones.map((m, idx) => (
              <GlassCard key={idx} className="p-5 border border-slate-200 bg-white text-left space-y-2">
                <span className="text-xs font-extrabold text-[#DC2626] bg-[#FEF2F2] px-2.5 py-1 rounded-md inline-block">
                  {m.year}
                </span>
                <h4 className="text-xs font-bold text-slate-900">{m.title}</h4>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">{m.detail}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
