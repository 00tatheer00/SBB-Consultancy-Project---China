"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Check,
  Sparkles,
  ArrowRight,
  DollarSign
} from "lucide-react";
import { DESTINATIONS, Destination } from "@/data/mock-data";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";
import { ChinaFlag } from "./ui/china-flag";

interface DestinationsSectionProps {
  onOpenBooking: () => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onOpenBooking }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [activeModalDestination, setActiveModalDestination] = useState<Destination | null>(null);

  const regions = ["All", "East China", "North China", "Central China", "South China", "Northwest China"];

  const filteredDestinations =
    selectedRegion === "All"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region.includes(selectedRegion));

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="primary">
              <ChinaFlag size="sm" /> Premier Study Hubs in China
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center flex-wrap gap-2">
              <span>Explore Top Academic</span>
              <span className="text-[#1E90FF]">Cities in China</span>
              <ChinaFlag size="lg" />
            </h2>
            <p className="text-slate-600 text-base font-normal">
              Choose from premier university cities across China offering English-medium MBBS, engineering, and tech degrees with 100% CSC Government & Provincial Scholarships.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  selectedRegion === region
                    ? "bg-[#1E90FF] text-white shadow-xs font-bold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <GlassCard
              key={dest.id}
              className="p-0 overflow-hidden border border-slate-200 bg-white flex flex-col justify-between group hover:border-[#1E90FF]/40"
            >
              <div>
                {/* Header Image Frame */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={dest.image}
                    alt={`Study in ${dest.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Flag & Visa Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <ChinaFlag size="md" className="shadow-md" />
                    <Badge variant="primary" className="text-xs px-2.5 py-0.5 font-semibold bg-white/95 text-slate-900 border-none">
                      {dest.visaSuccessRate} JW202 Success
                    </Badge>
                  </div>

                  {/* Name Tag */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <span>{dest.name}</span> <ChinaFlag size="md" />
                    </h3>
                    <p className="text-xs text-slate-300 font-medium line-clamp-1">{dest.tagline}</p>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 space-y-4">
                  {/* Tuition & Scholarship Summary */}
                  <div className="bg-slate-50 rounded-xl p-3 space-y-2 border border-slate-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 text-[#1E90FF]" /> Avg. Tuition:
                      </span>
                      <span className="font-bold text-slate-900">{dest.avgTuition}</span>
                    </div>
                    <div className="flex items-start justify-between text-xs pt-1.5 border-t border-slate-200/60">
                      <span className="text-slate-500 font-medium flex items-center gap-1 shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#1E90FF]" /> Scholarship:
                      </span>
                      <span className="font-semibold text-[#1E90FF] text-right line-clamp-2 pl-2">
                        {dest.scholarshipsAvailable}
                      </span>
                    </div>
                  </div>

                  {/* Featured Programs */}
                  <div>
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Featured Programs
                    </p>
                    <div className="flex flex-[#EAF4FF] flex-wrap gap-1.5">
                      {dest.featuredPrograms.map((prog, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#EAF4FF] text-[#1E90FF] text-[11px] font-semibold"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 pt-1">
                    {dest.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#1E90FF] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveModalDestination(dest)}
                  className="flex-1 text-xs"
                >
                  City Guide
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenBooking}
                  className="flex-1 text-xs"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Apply Now
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Quick Details Modal */}
      {activeModalDestination && (
        <Modal
          isOpen={!!activeModalDestination}
          onClose={() => setActiveModalDestination(null)}
          title={`Study in ${activeModalDestination.name}`}
        >
          <div className="space-y-6">
            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
              <img
                src={activeModalDestination.image}
                alt={activeModalDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  <span>{activeModalDestination.name} Academic Guide</span> <ChinaFlag size="md" />
                </h4>
                <p className="text-xs text-slate-300">{activeModalDestination.tagline}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 font-semibold">Average Tuition in China</p>
                <p className="text-sm font-bold text-slate-900">{activeModalDestination.avgTuition}</p>
              </div>
              <div className="p-4 bg-[#EAF4FF] rounded-xl border border-[#1E90FF]/20">
                <p className="text-xs text-[#1E90FF] font-semibold">JW202 Visa Success Rate</p>
                <p className="text-sm font-bold text-slate-900">{activeModalDestination.visaSuccessRate}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900 mb-2">Featured State Universities</p>
              <div className="flex flex-wrap gap-2">
                {activeModalDestination.popularCities.map((city, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full flex items-center gap-1.5">
                    <ChinaFlag size="sm" /> {city}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900 mb-2">CSC & Provincial Scholarship Coverage</p>
              <p className="text-xs text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200 font-medium">
                {activeModalDestination.scholarshipsAvailable}
              </p>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <Button variant="outline" className="w-1/2" onClick={() => setActiveModalDestination(null)}>
                Close Guide
              </Button>
              <Button
                variant="primary"
                className="w-1/2"
                onClick={() => {
                  setActiveModalDestination(null);
                  onOpenBooking();
                }}
              >
                Apply to {activeModalDestination.name.split(" ")[0]}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
