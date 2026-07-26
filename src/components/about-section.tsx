"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Users,
  Compass,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const companyValues = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#1E90FF]" />,
      title: "100% Fee Transparency",
      description: "No hidden agency surcharges, zero inflated university fees, and direct itemized receipts straight from official campus portals."
    },
    {
      icon: <Award className="w-5 h-5 text-[#1E90FF]" />,
      title: "Academic Distinction",
      description: "Exclusive partnerships with WHO, ECFMG, WDOMS, and QS Top 500 accredited international state universities."
    },
    {
      icon: <Users className="w-5 h-5 text-[#1E90FF]" />,
      title: "End-to-End Care",
      description: "Dedicated student advisors accompanying you from initial profile evaluation, visa interview prep, to dormitory key pickup."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#1E90FF]" />,
      title: "Global Career Pathway",
      description: "Post-study graduate work permit advice, licensing exam prep (USMLE, PLAB, AMC), and international job search support."
    }
  ];

  const timelineSteps = [
    {
      year: "2016",
      title: "SBB Founding & Initial Charter",
      description: "Established headquarters with a vision to democratize affordable medical and technical education globally."
    },
    {
      year: "2018",
      title: "China CSC Government Partnership",
      description: "Secured official delegation status with top Chinese state universities for 100% full scholarship admissions."
    },
    {
      year: "2021",
      title: "European & UK Campus Expansion",
      description: "Extended direct admission channels across the UK, Turkey, Malaysia, and Schengen zone European universities."
    },
    {
      year: "2024",
      title: "5,000+ Student Milestone",
      description: "Crossed 5,000 successful visa approvals with a 98% embassy clearance record."
    },
    {
      year: "2026",
      title: "Next-Gen AI Advisory Hub",
      description: "Launched instant cost comparison calculators, digital university portals, and global alumni networks."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <Sparkles className="w-3.5 h-3.5" /> About Study Beyond Borders
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pioneering Ethical & Premium <span className="text-[#1E90FF]">Global Education</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Founded by international educational scholars and career advisors, Study Beyond Borders (SBB) bridges the gap between ambitious students and world-class universities across 4 continents.
          </p>
        </div>

        {/* Mission vs Vision Card */}
        <div className="mt-12 max-w-4xl mx-auto">
          <GlassCard className="p-8 border border-slate-200 bg-white">
            {/* Tabs Header */}
            <div className="flex justify-center border-b border-slate-200 pb-4 gap-4">
              <button
                onClick={() => setActiveTab("mission")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === "mission"
                    ? "bg-[#1E90FF] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Target className="w-4 h-4" /> Our Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === "vision"
                    ? "bg-[#1E90FF] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Eye className="w-4 h-4" /> Our Vision
              </button>
            </div>

            {/* Tab Body */}
            <div className="mt-6 text-center sm:text-left">
              {activeTab === "mission" ? (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                    <Target className="w-5 h-5 text-[#1E90FF]" /> Empathetic, Honest & Professional Guidance
                  </h3>
                  <p className="text-slate-600 text-base font-normal leading-relaxed">
                    To eliminate predatory education agency practices by delivering transparent, zero-surprise advisory services. We match students with reputable, WHO-recognized universities that maximize scholarship awards while honoring financial reality.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1E90FF]" /> Direct Official Campus Agreements
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1E90FF]" /> Full Visa Filing Integrity
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                    <Eye className="w-5 h-5 text-[#1E90FF]" /> The World's Most Trusted Education Consultancy
                  </h3>
                  <p className="text-slate-600 text-base font-normal leading-relaxed">
                    To build a globally recognized bridge connecting talent from developing nations to world-leading research hubs, nurturing future doctors, engineers, AI specialists, and corporate leaders.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1E90FF]" /> Global Alumni Mentorship Network
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1E90FF]" /> Seamless Multi-Country Options
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </GlassCard>
        </div>

        {/* 4 Core Values Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((val, index) => (
            <GlassCard key={index} className="p-6 text-left border border-slate-200 bg-white">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] border border-[#1E90FF]/20 flex items-center justify-center mb-4">
                {val.icon}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1.5">{val.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">{val.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Timeline Component */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Journey of <span className="text-[#1E90FF]">Excellence</span>
            </h3>
            <p className="text-sm font-medium text-slate-500 mt-1">A decade of continuous innovation and student empowerment</p>
          </div>

          <div className="relative border-l-2 border-[#1E90FF]/40 ml-4 sm:ml-32 space-y-8">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#1E90FF] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-white" />
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm max-w-xl">
                  <span className="text-xs font-extrabold text-[#1E90FF] uppercase tracking-wider">
                    {step.year}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-0.5">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
