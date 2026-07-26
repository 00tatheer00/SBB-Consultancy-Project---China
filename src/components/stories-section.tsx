"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Quote,
  Star,
  Play,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { SUCCESS_STORIES, PARENT_REVIEWS } from "@/data/mock-data";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";

export const StoriesSection: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState<string | null>(null);

  const visaStamps = [
    { country: "China JW202", type: "X1 Medical Visa", year: "2026", status: "APPROVED" },
    { country: "United Kingdom", type: "Tier 4 Student Visa", year: "2026", status: "APPROVED" },
    { country: "Turkey", type: "Higher Ed Residence Permit", year: "2026", status: "APPROVED" },
    { country: "Malaysia", type: "eVAL Student Pass", year: "2026", status: "APPROVED" },
    { country: "Germany Schengen", type: "National Student D Visa", year: "2026", status: "APPROVED" },
    { country: "Canada", type: "Study Permit & PGWP", year: "2026", status: "APPROVED" }
  ];

  return (
    <section id="stories" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <Sparkles className="w-3.5 h-3.5" /> Verified Alumni & Parent Trust
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Student Stories & <span className="text-[#1E90FF]">Visa Approval Proof</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Hear directly from medical graduates, UK master's alumni, and parents who entrusted SBB with their academic future.
          </p>
        </div>

        {/* Student Testimonials Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story) => (
            <GlassCard
              key={story.id}
              className="p-0 overflow-hidden border border-slate-200 bg-white flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Photo & Video Play Overlay */}
                <div className="relative h-60 w-full overflow-hidden group">
                  <img
                    src={story.image}
                    alt={story.studentName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setVideoPlaying(story.id)}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#1E90FF] text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer border border-white/40"
                    aria-label="Play Student Testimonial"
                  >
                    <Play className="w-5 h-5 ml-0.5" />
                  </button>

                  <div className="absolute top-4 left-4">
                    <span className="text-3xl filter drop-shadow">{story.flag}</span>
                  </div>

                  {/* Bottom Name overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold">{story.studentName}</h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {story.program} @ {story.university}
                    </p>
                  </div>
                </div>

                {/* Quote Body */}
                <div className="p-6 space-y-3">
                  <Quote className="w-6 h-6 text-[#1E90FF]/40" />
                  <p className="text-xs sm:text-sm text-slate-600 font-normal italic leading-relaxed">
                    "{story.quote}"
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#1E90FF]">{story.scholarshipWon}</span>
                    <span className="text-slate-500">{story.roleNow}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Parents Reviews Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why <span className="text-[#1E90FF]">Parents Trust Us</span>
            </h3>
            <p className="text-xs sm:text-sm font-normal text-slate-500 mt-1">
              Safety, dormitory comfort, and 24/7 on-ground assistance for peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARENT_REVIEWS.map((review) => (
              <GlassCard key={review.id} className="p-6 border border-slate-200 bg-white">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                  "{review.review}"
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{review.parentName}</h4>
                    <p className="text-[11px] font-medium text-slate-500">{review.childName}</p>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    {review.destination}
                  </Badge>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Visa Approval Stamps Gallery */}
        <div className="mt-20 bg-slate-950 rounded-3xl p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <Badge variant="accent" className="mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> 98% Visa Success Proof
              </Badge>
              <h3 className="text-2xl font-extrabold">Recent Embassy Approval Gallery</h3>
            </div>
            <p className="text-xs font-normal text-slate-400 max-w-sm">
              All applications processed with official embassy compliance, bank verification assistance, and interview coaching.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {visaStamps.map((stamp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-center space-y-1 relative"
              >
                <span className="text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full inline-block">
                  {stamp.status}
                </span>
                <p className="text-xs font-bold text-white pt-1">{stamp.country}</p>
                <p className="text-[10px] text-slate-400">{stamp.type}</p>
                <p className="text-[9px] text-slate-500 font-mono">STAMP #{202600 + idx}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
