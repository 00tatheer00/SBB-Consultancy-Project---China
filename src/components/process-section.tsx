"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  CheckCircle2,
  Send,
  MailCheck,
  ShieldCheck,
  Plane,
  Sparkles,
  ArrowRight,
  Clock
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/mock-data";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChinaFlag } from "./ui/china-flag";

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (num: number) => {
    switch (num) {
      case 1:
        return <FileText className="w-5 h-5" />;
      case 2:
        return <Search className="w-5 h-5" />;
      case 3:
        return <CheckCircle2 className="w-5 h-5" />;
      case 4:
        return <Send className="w-5 h-5" />;
      case 5:
        return <MailCheck className="w-5 h-5" />;
      case 6:
        return <ShieldCheck className="w-5 h-5" />;
      case 7:
        return <Plane className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <Sparkles className="w-3.5 h-3.5" /> Seamless China Admission Blueprint 🇨🇳
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <span>Your 7-Step Pathway From</span>
            <span className="text-[#DC2626]">Consultation to Campus</span>
            <ChinaFlag size="lg" />
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Our systematic 7-stage roadmap guarantees maximum application accuracy, fast JW202/JW201 Ministry form approval, and 99% Chinese embassy visa success.
          </p>
        </div>

        {/* Horizontal Step Indicator Bar */}
        <div className="mt-14 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center min-w-[768px] justify-between relative px-6">
            {/* Connecting Progress Line */}
            <div className="absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 bg-slate-200 -z-10" />
            <div
              className="absolute top-1/2 left-10 -translate-y-1/2 h-1 bg-[#DC2626] transition-all duration-300 -z-10"
              style={{
                width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 90}%`,
              }}
            />

            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center gap-2 group focus:outline-none cursor-pointer"
                >
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm transition-all ${
                      isActive
                        ? "bg-[#DC2626] text-white shadow-md scale-105 ring-4 ring-[#FEF2F2]"
                        : isPassed
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-500 border border-slate-300 group-hover:border-[#DC2626]"
                    }`}
                  >
                    {getStepIcon(step.stepNumber)}
                  </div>
                  <span
                    className={`text-xs font-bold whitespace-nowrap transition-colors ${
                      isActive
                        ? "text-[#DC2626]"
                        : isPassed
                        ? "text-slate-900"
                        : "text-slate-400"
                    }`}
                  >
                    Step {step.stepNumber}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Details Showcase Card */}
        <div className="mt-10 max-w-4xl mx-auto">
          <GlassCard className="p-8 border border-slate-200 bg-[#FAFCFF] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center font-extrabold text-lg shadow-xs">
                    0{activeStep.stepNumber}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {activeStep.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#DC2626]">{activeStep.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm font-normal leading-relaxed">{activeStep.description}</p>

                {/* Deliverables */}
                <div className="pt-3 border-t border-slate-200/80">
                  <p className="text-xs font-bold text-slate-700 mb-2">Stage Deliverables:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeStep.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 space-y-4 text-center">
                <div className="p-2.5 bg-[#FEF2F2] rounded-xl text-xs font-semibold text-[#DC2626] inline-flex items-center gap-1.5 mx-auto">
                  <Clock className="w-4 h-4" /> Est. Time: {activeStep.duration}
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Ready to start Step {activeStep.stepNumber}? Speak to an official SBB advisor today.
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenBooking}
                  className="w-full text-xs"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Start This Step
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
