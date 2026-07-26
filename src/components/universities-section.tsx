"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Award,
  ArrowRight,
  MapPin
} from "lucide-react";
import { UNIVERSITIES, University } from "@/data/mock-data";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChinaFlag } from "./ui/china-flag";

interface UniversitiesSectionProps {
  onOpenBooking: () => void;
}

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({ onOpenBooking }) => {
  const [filterCity, setFilterCity] = useState<string>("All");

  const chinaCities = ["All", "Beijing", "Shanghai", "Hangzhou", "Nanjing", "Wuhan", "Xi'an"];

  const filteredUnis =
    filterCity === "All"
      ? UNIVERSITIES
      : UNIVERSITIES.filter((u) => u.city === filterCity);

  return (
    <section id="universities" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="primary">
              <Building2 className="w-3.5 h-3.5" /> Official Chinese Campus Representations
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center flex-wrap gap-2">
              <span>Top Ranked</span>
              <span className="text-[#1E90FF]">Chinese Partner Universities</span>
              <ChinaFlag size="lg" />
            </h2>
            <p className="text-slate-600 text-base font-normal">
              Direct official admissions agreements with China's leading state universities featuring accelerated JW202 visa processing and dedicated 100% CSC scholarship quotas.
            </p>
          </div>

          {/* City Filter Selector */}
          <div className="flex flex-wrap gap-2">
            {chinaCities.map((city) => (
              <button
                key={city}
                onClick={() => setFilterCity(city)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  filterCity === city
                    ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60"
                }`}
              >
                {city === "All" ? "All China Cities" : `🇨🇳 ${city}`}
              </button>
            ))}
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredUnis.map((uni) => (
            <GlassCard
              key={uni.id}
              className="p-0 overflow-hidden border border-slate-200 bg-white flex flex-col justify-between group hover:border-[#1E90FF]/40"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* QS Rank Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[11px] font-extrabold flex items-center gap-1 border border-white/20">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>QS #{uni.qsRank}</span>
                  </div>

                  {/* Scholarship Tag */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="accent" className="text-[10px] px-2 py-0.5 font-bold">
                      {uni.scholarshipTier}
                    </Badge>
                  </div>

                  {/* Location Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <ChinaFlag size="sm" /> {uni.city}, {uni.country}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#1E90FF] transition-colors">
                    {uni.name}
                  </h3>

                  <div className="bg-slate-50 p-2.5 rounded-lg text-xs space-y-1 border border-slate-100">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">CSC / Fee Est:</span>
                      <span className="font-bold text-slate-900">{uni.tuitionRange}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                      <span>Accreditation:</span>
                      <span className="font-semibold text-[#1E90FF] line-clamp-1">{uni.accreditation}</span>
                    </div>
                  </div>

                  {/* Popular Majors */}
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Key Majors:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {uni.popularFields.map((field, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-medium rounded"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Button */}
              <div className="p-5 pt-0">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenBooking}
                  className="w-full text-xs"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Apply to {uni.name.split(" ")[0]}
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
