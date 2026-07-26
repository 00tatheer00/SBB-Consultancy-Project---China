"use client";

import React, { useState } from "react";
import { Globe, ArrowRight, ShieldCheck, Mail, Send, Check } from "lucide-react";
import { Button } from "./ui/button";

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-900">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1E90FF] to-blue-600 flex items-center justify-center text-white shadow-md">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Study Beyond <span className="text-[#1E90FF]">Borders</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Study Beyond Borders (SBB) is a premier international education consultancy connecting students to 100+ top-ranked accredited universities across China, the UK, Europe, Turkey, Malaysia, Australia, and Canada with full scholarship support and 98% visa success.
            </p>

            <div className="pt-2 flex items-center gap-4 text-slate-400 text-xs">
              <span className="flex items-center gap-1 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-[#1E90FF]" /> WHO & ECFMG Listed
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-[#1E90FF]" /> 5,000+ Students
              </span>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase">
              Study Hubs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#destinations" className="hover:text-[#1E90FF] transition-colors">Study in China (CSC Grants)</a></li>
              <li><a href="#destinations" className="hover:text-[#1E90FF] transition-colors">Study in UK (1-Yr Master's)</a></li>
              <li><a href="#destinations" className="hover:text-[#1E90FF] transition-colors">Study in Turkey (BDS / MBBS)</a></li>
              <li><a href="#destinations" className="hover:text-[#1E90FF] transition-colors">Study in Malaysia (Branch Unis)</a></li>
              <li><a href="#destinations" className="hover:text-[#1E90FF] transition-colors">Study in Germany & EU</a></li>
              <li><a href="#destinations" className="hover:text-[#1E90FF] transition-colors">Study in Australia & Canada</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase">
              Degrees & Fields
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#programs" className="hover:text-[#1E90FF] transition-colors">MBBS (Medicine)</a></li>
              <li><a href="#programs" className="hover:text-[#1E90FF] transition-colors">BDS (Dentistry)</a></li>
              <li><a href="#programs" className="hover:text-[#1E90FF] transition-colors">Software & AI Engineering</a></li>
              <li><a href="#programs" className="hover:text-[#1E90FF] transition-colors">MBA & Fintech</a></li>
              <li><a href="#programs" className="hover:text-[#1E90FF] transition-colors">PharmD & Nursing</a></li>
              <li><a href="#scholarships" className="hover:text-[#1E90FF] transition-colors">100% Full Scholarships</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3 text-left">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to get instant alerts on CSC scholarship announcements, intake deadlines, and visa rule updates.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950 text-emerald-400 text-xs rounded-xl flex items-center gap-2 font-semibold">
                <Check className="w-4 h-4" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#1E90FF]"
                />
                <Button variant="primary" size="sm" type="submit" className="w-full text-xs">
                  Subscribe for Alerts
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Study Beyond Borders (SBB) Global Advisory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#hero" className="hover:text-slate-300">Terms of Service</a>
            <a href="#hero" className="hover:text-slate-300">Embassy Verification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
