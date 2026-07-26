"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Edit3,
  User,
  Phone,
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "destinations", "programs", "universities", "scholarships", "process", "calculator", "stories", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero", hasDropdown: false },
    { name: "China Cities", href: "#destinations", id: "destinations", hasDropdown: true },
    { name: "Programs", href: "#programs", id: "programs", hasDropdown: true },
    { name: "State Universities", href: "#universities", id: "universities", hasDropdown: true },
    { name: "CSC Scholarships", href: "#scholarships", id: "scholarships", hasDropdown: false },
    { name: "About Us", href: "#about", id: "about", hasDropdown: true },
    { name: "Contact", href: "#contact", id: "contact", hasDropdown: false },
  ];

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
            <a
              href="#contact"
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Apply to China</span>
            </a>
            <a
              href="#contact"
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <User className="w-3.5 h-3.5" />
              <span>JW202 Portal</span>
            </a>
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
            {/* SBB Logo Image Alone (Full Name Removed as Requested) */}
            <a href="#hero" className="flex items-center group shrink-0 py-0.5">
              <img
                src="/sbb-logo.png"
                alt="SBB - Study Beyond Borders"
                className="h-11 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            {/* Navigation Menu Center */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`text-xs sm:text-sm font-semibold transition-all py-1 relative flex items-center gap-1 ${
                      isActive
                        ? "text-[#1E90FF] font-bold border-b-2 border-[#1E90FF]"
                        : "text-slate-700 hover:text-[#1E90FF]"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                  </a>
                );
              })}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-5 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-[#EAF4FF] hover:text-[#1E90FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
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
