"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Edit3,
  User,
  Phone,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Building2,
  Stethoscope,
  Cpu,
  Globe,
  Award
} from "lucide-react";
import { Button } from "./ui/button";
import { DESTINATIONS, PROGRAMS, UNIVERSITIES } from "@/data/mock-data";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 1. Top Announcement Bar (Deep Royal Blue) */}
      <div className="bg-[#003875] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Announcement */}
          <div className="flex items-center gap-2 font-medium">
            <span className="text-base">🇨🇳</span>
            <GraduationCap className="w-4 h-4 text-sky-300" />
            <span>
              <strong className="text-amber-300">100% CSC Chinese Government Scholarship</strong> Applications Open for 2026/2027 Intakes
            </span>
          </div>

          {/* Right Links & Social Icons */}
          <div className="hidden md:flex items-center gap-6 text-xs text-slate-200">
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Apply to China</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <User className="w-3.5 h-3.5" />
              <span>JW202 Portal</span>
            </button>
            <div className="flex items-center gap-3 pl-2 border-l border-white/20">
              <a href="#" className="hover:text-sky-300 transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-sky-300 transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://wa.me/861088291000" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="WhatsApp">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.149 4.197 4.292-1.128z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`bg-white border-b transition-all duration-300 ${
          scrolled ? "border-slate-200 py-2.5 shadow-md" : "border-slate-200/80 py-3 shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* SBB Logo Image Alone */}
            <Link href="/" className="flex items-center group shrink-0 py-0.5">
              <img
                src="/sbb-logo.png"
                alt="SBB - Study Beyond Borders"
                className="h-11 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Navigation Menu Center with Dropdowns */}
            <nav className="hidden lg:flex items-center gap-7">
              {/* Home */}
              <Link
                href="/"
                className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#1E90FF] py-2 transition-colors"
              >
                Home
              </Link>

              {/* China Cities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("cities")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/destinations"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1E90FF] py-2 flex items-center gap-1 transition-colors"
                >
                  China Cities
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "cities" ? "rotate-180 text-[#1E90FF]" : ""}`} />
                </Link>

                <AnimatePresence>
                  {activeDropdown === "cities" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 space-y-1 z-50"
                    >
                      <div className="px-3 py-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 pb-2 mb-1">
                        <span>China Academic Hubs</span>
                        <span>🇨🇳</span>
                      </div>
                      {DESTINATIONS.map((dest) => (
                        <Link
                          key={dest.id}
                          href={`/destinations/${dest.id}`}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-[#EAF4FF] transition-colors group"
                        >
                          <div>
                            <p className="text-xs font-bold text-slate-900 group-hover:text-[#1E90FF] flex items-center gap-1.5">
                              <span>🇨🇳</span> {dest.name}
                            </p>
                            <p className="text-[10px] text-slate-500 font-medium line-clamp-1">{dest.tagline}</p>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                            {dest.visaSuccessRate}
                          </span>
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-slate-100">
                        <Link
                          href="/destinations"
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-50 text-xs font-bold text-[#1E90FF] hover:bg-[#EAF4FF] transition-colors"
                        >
                          <span>Explore All 15+ China Cities</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("programs")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/programs"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1E90FF] py-2 flex items-center gap-1 transition-colors"
                >
                  Programs
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "programs" ? "rotate-180 text-[#1E90FF]" : ""}`} />
                </Link>

                <AnimatePresence>
                  {activeDropdown === "programs" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 space-y-1 z-50"
                    >
                      <div className="px-3 py-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 pb-2 mb-1">
                        <span>English-Medium Degrees in China</span>
                        <Stethoscope className="w-3.5 h-3.5 text-[#1E90FF]" />
                      </div>
                      {PROGRAMS.map((prog) => (
                        <Link
                          key={prog.id}
                          href={`/programs/${prog.id}`}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-[#EAF4FF] transition-colors group"
                        >
                          <div>
                            <p className="text-xs font-bold text-slate-900 group-hover:text-[#1E90FF]">
                              {prog.title}
                            </p>
                            <p className="text-[10px] text-slate-500 font-medium">{prog.duration}</p>
                          </div>
                          <span className="text-[10px] font-bold text-[#1E90FF] bg-[#EAF4FF] px-2 py-0.5 rounded-full">
                            {prog.category}
                          </span>
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-slate-100">
                        <Link
                          href="/programs"
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-50 text-xs font-bold text-[#1E90FF] hover:bg-[#EAF4FF] transition-colors"
                        >
                          <span>View All Degree Programs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* State Universities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("universities")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/universities"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1E90FF] py-2 flex items-center gap-1 transition-colors"
                >
                  State Universities
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "universities" ? "rotate-180 text-[#1E90FF]" : ""}`} />
                </Link>

                <AnimatePresence>
                  {activeDropdown === "universities" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 space-y-1 z-50"
                    >
                      <div className="px-3 py-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 pb-2 mb-1">
                        <span>QS Top Ranked Chinese Campuses</span>
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      {UNIVERSITIES.map((uni) => (
                        <Link
                          key={uni.id}
                          href={`/universities/${uni.id}`}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-[#EAF4FF] transition-colors group"
                        >
                          <div>
                            <p className="text-xs font-bold text-slate-900 group-hover:text-[#1E90FF]">
                              {uni.name}
                            </p>
                            <p className="text-[10px] text-slate-500 font-medium">🇨🇳 {uni.city}, China</p>
                          </div>
                          <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                            QS #{uni.qsRank}
                          </span>
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-slate-100">
                        <Link
                          href="/universities"
                          className="flex items-center justify-between p-2 rounded-xl bg-slate-50 text-xs font-bold text-[#1E90FF] hover:bg-[#EAF4FF] transition-colors"
                        >
                          <span>Browse All 100+ Partner Universities</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CSC Scholarships Direct Link */}
              <Link
                href="/scholarships"
                className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1E90FF] py-2 transition-colors flex items-center gap-1"
              >
                <span>CSC Scholarships</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1E90FF] py-2 transition-colors"
              >
                About Us
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1E90FF] py-2 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Area */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="tel:+861088291000"
                className="hidden xl:flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3.5 py-2 rounded-full border border-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#1E90FF]" />
                <span>+86 10 8829 1000</span>
              </a>

              <Button
                variant="primary"
                size="sm"
                onClick={onOpenBooking}
                className="text-xs px-5 py-2.5 font-bold shadow-sm"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Apply to China
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenBooking}
                className="text-xs px-3 py-1.5"
              >
                Apply
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-5 space-y-2 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-xl text-sm font-bold text-slate-900 hover:bg-[#EAF4FF] hover:text-[#1E90FF]"
              >
                Home
              </Link>

              <div className="pt-2">
                <p className="px-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">China Cities</p>
                <Link
                  href="/destinations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EAF4FF] hover:text-[#1E90FF]"
                >
                  All China Cities & Hubs 🇨🇳
                </Link>
                {DESTINATIONS.map((d) => (
                  <Link
                    key={d.id}
                    href={`/destinations/${d.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-1.5 text-xs text-slate-600 hover:text-[#1E90FF]"
                  >
                    🇨🇳 {d.name}
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <p className="px-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">Programs</p>
                <Link
                  href="/programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EAF4FF] hover:text-[#1E90FF]"
                >
                  All Degree Programs
                </Link>
              </div>

              <div className="pt-2">
                <p className="px-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">Universities</p>
                <Link
                  href="/universities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EAF4FF] hover:text-[#1E90FF]"
                >
                  All 100+ Chinese State Universities
                </Link>
              </div>

              <Link
                href="/scholarships"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EAF4FF] hover:text-[#1E90FF]"
              >
                CSC Scholarships 100%
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EAF4FF] hover:text-[#1E90FF]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EAF4FF] hover:text-[#1E90FF]"
              >
                Contact
              </Link>

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href="tel:+861088291000"
                  className="flex items-center justify-center gap-2 bg-slate-100 py-2.5 rounded-full text-xs font-bold text-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1E90FF]" />
                  <span>+86 10 8829 1000</span>
                </a>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full text-xs font-bold"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Apply to China Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
