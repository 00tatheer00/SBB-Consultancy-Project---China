"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  Utensils,
  ShieldCheck,
  Wifi,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { ChinaFlag } from "./ui/china-flag";

export const DormitorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"dorm" | "halal" | "campus">("dorm");

  const dormPhotos = [
    { title: "Single En-Suite Dormitory Room", desc: "Private room with study desk, air conditioner, wardrobe, and attached bathroom.", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80" },
    { title: "Double En-Suite Student Room", desc: "Shared room for 2 international students with high-speed fiber internet and balcony.", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80" },
    { title: "Muslim Halal Campus Canteen", desc: "Official Halal certified dining halls serving fresh Asian, Turkish, and Pakistani dishes.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
    { title: "24/7 Campus Security & Dorm Desk", desc: "Digital keycard entry, CCTV coverage, and international student advisory desk.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <Building className="w-3.5 h-3.5" /> Campus Life & Security 🇨🇳
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <span>Dormitory Rooms &</span>
            <span className="text-[#1E90FF]">Halal Dining Halls</span>
            <ChinaFlag size="lg" />
          </h2>
          <p className="text-slate-600 text-base font-normal">
            All SBB partner state universities feature modern air-conditioned dormitories, free Wi-Fi, and certified Muslim Halal dining halls for comfortable living.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab("dorm")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "dorm"
                  ? "bg-[#1E90FF] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Building className="w-4 h-4" /> En-Suite Rooms
            </button>
            <button
              onClick={() => setActiveTab("halal")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "halal"
                  ? "bg-[#1E90FF] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Utensils className="w-4 h-4" /> Halal Canteens
            </button>
            <button
              onClick={() => setActiveTab("campus")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "campus"
                  ? "bg-[#1E90FF] text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <ShieldCheck className="w-4 h-4" /> 24/7 Security
            </button>
          </div>
        </div>

        {/* Gallery Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dormPhotos.map((item, idx) => (
            <GlassCard key={idx} className="p-0 overflow-hidden border border-slate-200 bg-white text-left group">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="accent" className="text-[10px]">
                    <Sparkles className="w-3 h-3 text-amber-500" /> Included in CSC Grant
                  </Badge>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Included Amenities Checklist */}
        <div className="mt-12 max-w-4xl mx-auto bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4 text-center">
            Standard Campus Amenities Included For International Students:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-slate-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1E90FF]" /> Air Conditioned Rooms
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1E90FF]" /> Free High-Speed Wi-Fi
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1E90FF]" /> Certified Halal Canteen
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1E90FF]" /> 24/7 CCTV & Dorm Guard
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
