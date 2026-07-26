"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search } from "lucide-react";
import { FAQS } from "@/data/mock-data";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "General", "Scholarships", "Medical (MBBS/BDS)", "Visa & Process", "Finances"];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category.includes(activeCategory);
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? <span className="text-[#1E90FF]">We Have Answers</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Everything you need to know about global university eligibility, scholarship rules, visa approval steps, and pre-departure assistance.
          </p>

          {/* Search Input Bar */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. IELTS, CSC, MBBS, Visa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium bg-white rounded-full border border-slate-200 focus:outline-none focus:border-[#1E90FF] shadow-xs text-slate-900 placeholder:text-slate-400"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  activeCategory === c
                    ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <GlassCard
                key={idx}
                className="p-0 border border-slate-200 overflow-hidden bg-white hover:border-[#1E90FF]/40 shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#1E90FF] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#1E90FF]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 pt-0 border-t border-slate-100"
                    >
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-3.5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
