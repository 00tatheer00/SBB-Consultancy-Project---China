"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, CheckCircle, FileCheck } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChinaFlag } from "./ui/china-flag";

export const VisaTrackerWidget: React.FC = () => {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<null | {
    id: string;
    student: string;
    university: string;
    major: string;
    status: string;
    jw202Number: string;
    steps: { name: string; completed: boolean; date: string }[];
  }>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;

    setResult({
      id: trackingId.toUpperCase(),
      student: "Dr. Zain Ahmed",
      university: "Zhejiang University (QS #44)",
      major: "MBBS (Clinical Medicine)",
      status: "JW202 ISSUED & EMBASSY APPROVED",
      jw202Number: "JW2026-8829-MOE",
      steps: [
        { name: "Document Verification & Marksheets Audit", completed: true, date: "July 02, 2026" },
        { name: "University Admissions Board Approval", completed: true, date: "July 08, 2026" },
        { name: "MOE China JW202 Form Generation", completed: true, date: "July 16, 2026" },
        { name: "Chinese Embassy X1 Student Visa Stamping", completed: true, date: "July 22, 2026" },
      ],
    });
  };

  return (
    <div className="my-12 max-w-4xl mx-auto text-left">
      <GlassCard className="p-8 border border-slate-200 bg-white shadow-md">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="primary">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1E90FF]" /> Live JW202 Visa Tracker 🇨🇳
            </Badge>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
              <ChinaFlag size="sm" /> 99% Approval Rate
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900">
            Track Your JW202 Ministry Application Status
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Enter your SBB Registration ID or Passport Number to track real-time admissions and JW202 visa status.
          </p>

          {/* Form */}
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter SBB ID (e.g. SBB-2026-8829)..."
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm font-bold bg-slate-50 rounded-full border border-slate-200 focus:outline-none focus:border-[#1E90FF] focus:bg-white text-slate-900"
              />
            </div>
            <Button variant="primary" size="md" type="submit" className="text-xs font-bold px-8">
              Track Status Now
            </Button>
          </form>

          {/* Sample ID Click */}
          <p className="text-[11px] text-slate-500 font-medium">
            Try sample ID:{" "}
            <button
              type="button"
              onClick={() => {
                setTrackingId("SBB-2026-8829");
                setResult({
                  id: "SBB-2026-8829",
                  student: "Dr. Zain Ahmed",
                  university: "Zhejiang University (QS #44)",
                  major: "MBBS (Clinical Medicine)",
                  status: "JW202 ISSUED & EMBASSY APPROVED",
                  jw202Number: "JW2026-8829-MOE",
                  steps: [
                    { name: "Document Verification & Marksheets Audit", completed: true, date: "July 02, 2026" },
                    { name: "University Admissions Board Approval", completed: true, date: "July 08, 2026" },
                    { name: "MOE China JW202 Form Generation", completed: true, date: "July 16, 2026" },
                    { name: "Chinese Embassy X1 Student Visa Stamping", completed: true, date: "July 22, 2026" },
                  ],
                });
              }}
              className="text-[#1E90FF] font-bold underline cursor-pointer hover:text-blue-700"
            >
              SBB-2026-8829
            </button>
          </p>

          {/* Results Box */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-[#1E90FF] uppercase tracking-wider">
                    Registration ID: {result.id}
                  </span>
                  <h4 className="text-lg font-extrabold text-slate-900">{result.student}</h4>
                  <p className="text-xs text-slate-500 font-medium">{result.major} @ {result.university}</p>
                </div>
                <div className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-xl text-xs font-black border border-emerald-300 inline-flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>{result.status}</span>
                </div>
              </div>

              {/* Steps timeline */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Approval Progress:</p>
                {result.steps.map((st, i) => (
                  <div key={i} className="flex items-center justify-between text-xs bg-white p-3 rounded-xl border border-slate-200">
                    <span className="flex items-center gap-2 font-bold text-slate-800">
                      <FileCheck className="w-4 h-4 text-[#1E90FF]" /> {st.name}
                    </span>
                    <span className="text-slate-500 font-medium text-[11px]">{st.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </GlassCard>
    </div>
  );
};
