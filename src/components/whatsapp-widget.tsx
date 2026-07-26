"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { ChinaFlag } from "./ui/china-flag";

export const WhatsAppWidget: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 sm:w-84 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-left"
          >
            {/* Header */}
            <div className="bg-[#003875] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                    SBB
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#003875] absolute bottom-0 right-0" />
                </div>
                <div>
                  <h4 className="text-sm font-bold flex items-center gap-1.5">
                    <span>SBB China Desk</span> <ChinaFlag size="sm" />
                  </h4>
                  <p className="text-[10px] text-sky-200 font-medium">Online • Typical reply: 2 mins</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-50 space-y-3 text-xs">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-xs space-y-1">
                <p className="font-semibold text-slate-800">Ni Hao! 👋 Welcome to Study Beyond Borders.</p>
                <p className="text-slate-600">
                  How can we help you with 100% CSC Scholarships or MBBS / Engineering admissions in China today?
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-left p-2.5 bg-white hover:bg-[#EAF4FF] rounded-xl border border-slate-200 text-slate-800 font-bold hover:text-[#1E90FF] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>100% CSC Scholarship Requirements</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#1E90FF]" />
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-left p-2.5 bg-white hover:bg-[#EAF4FF] rounded-xl border border-slate-200 text-slate-800 font-bold hover:text-[#1E90FF] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>MBBS in China Eligibility (WHO/ECFMG)</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#1E90FF]" />
                </button>
              </div>
            </div>

            {/* Footer Direct WhatsApp Link */}
            <div className="p-3 bg-white border-t border-slate-100">
              <a
                href="https://wa.me/861088291000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-xs shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl border-2 border-white cursor-pointer relative group"
        aria-label="Open China Support Chat"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white absolute top-0 right-0 animate-ping" />
        <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white absolute top-0 right-0" />
      </motion.button>
    </div>
  );
};
