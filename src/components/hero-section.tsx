"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Star,
  Users,
  Building2,
  Award,
  Globe2
} from "lucide-react";
import { Button } from "./ui/button";
import { Counter } from "./ui/counter";
import { ChinaFlag } from "./ui/china-flag";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  ];

  return (
    <section id="hero" className="relative pt-36 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Background Graphic & Premium Chinese Campus Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Right Campus & Skyline Image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full opacity-90">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
            alt="Chinese State University Campus Architecture"
            className="w-full h-full object-cover object-center"
          />
          {/* Seamless White Fade Gradient Left-to-Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 lg:via-white/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[480px]">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF2F2] border border-[#DC2626]/30 text-[#DC2626] text-xs sm:text-sm font-semibold shadow-xs"
            >
              <ChinaFlag size="sm" />
              <span>Official China University Admissions Portal</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] flex items-center justify-center lg:justify-start gap-3">
                <span>Study in China</span>
                <ChinaFlag size="lg" className="shadow-md" />
              </h1>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#DC2626] leading-[1.12]">
                Build Your Global Future
              </p>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              We help ambitious international students secure direct admissions and 100% CSC Full Government Scholarships across China's top-ranked state universities.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1"
            >
              {/* Apply Now Primary Button */}
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenBooking}
                icon={
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                }
                className="w-full sm:w-auto text-sm sm:text-base px-8 py-3.5 font-bold shadow-md shadow-[#DC2626]/25 whitespace-nowrap"
              >
                Apply Now
              </Button>

              {/* Book Free Consultation White Glass Button */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-full bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 shadow-sm hover:border-[#DC2626] hover:text-[#DC2626] transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-[#DC2626]" />
                <span>Book Free Consultation</span>
              </button>
            </motion.div>

            {/* Social Proof & Rating Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-xs"
            >
              {/* Avatar Stack */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  {avatars.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="China Student Avatar"
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-medium text-slate-500">Trusted by Students & Parents</p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-slate-200" />

              {/* Rating Stars */}
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-slate-800 text-sm">4.9/5</span>
                <span className="text-slate-500 font-medium text-xs">(2,500+ China Reviews)</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column Spacer */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>

        {/* Floating Bottom Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pl-0 lg:pl-2 pt-2 lg:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#DC2626]/30">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  <Counter value={5000} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">Students Guided to China</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pl-0 lg:pl-6 pt-2 lg:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#DC2626]/30">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  <Counter value={100} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">Chinese Partner Unis</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pl-0 lg:pl-6 pt-4 lg:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#DC2626]/30">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  <Counter value={99} suffix="%" />
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">JW202 Visa Success</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 pl-0 lg:pl-6 pt-4 lg:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#DC2626]/30">
                <Globe2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  <Counter value={15} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-600">China Academic Cities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
