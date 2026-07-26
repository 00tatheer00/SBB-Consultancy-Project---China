"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Mail, Send, Check } from "lucide-react";
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
            <a href="#hero" className="inline-block bg-white/95 p-2 rounded-2xl border border-white/20 shadow-md">
              <img src="/sbb-logo.png" alt="Study Beyond Borders" className="h-12 w-auto object-contain" />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Study Beyond Borders (SBB) is China's premier international education consultancy connecting students to 100+ top-ranked state universities across Beijing, Shanghai, Hangzhou, Nanjing, Wuhan, Guangzhou & Xi'an with 100% CSC Government Scholarship support and 99% JW202 visa success.
            </p>

            <div className="pt-2 flex items-center gap-4 text-slate-400 text-xs">
              <span className="flex items-center gap-1 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-[#1E90FF]" /> WHO & ECFMG Listed
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-[#1E90FF]" /> 5,000+ Students in China
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3 text-xs text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">China Universities</h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#universities" className="hover:text-[#1E90FF] transition-colors">Tsinghua University (QS #20)</a></li>
              <li><a href="#universities" className="hover:text-[#1E90FF] transition-colors">Peking University (QS #14)</a></li>
              <li><a href="#universities" className="hover:text-[#1E90FF] transition-colors">Zhejiang University (QS #44)</a></li>
              <li><a href="#universities" className="hover:text-[#1E90FF] transition-colors">Fudan University (QS #39)</a></li>
              <li><a href="#universities" className="hover:text-[#1E90FF] transition-colors">Shanghai Jiao Tong (QS #45)</a></li>
            </ul>
          </div>

          {/* Col 3: CSC Grants */}
          <div className="space-y-3 text-xs text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">CSC Scholarships</h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#scholarships" className="hover:text-[#1E90FF] transition-colors">CSC Type A & B Full Grants</a></li>
              <li><a href="#scholarships" className="hover:text-[#1E90FF] transition-colors">Zhejiang Provincial Waiver</a></li>
              <li><a href="#scholarships" className="hover:text-[#1E90FF] transition-colors">Shanghai Gov SGS Class A</a></li>
              <li><a href="#scholarships" className="hover:text-[#1E90FF] transition-colors">Jiangsu Jasmine Belt & Road</a></li>
              <li><a href="#scholarships" className="hover:text-[#1E90FF] transition-colors">Presidential Waiver Awards</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div className="space-y-4 text-xs text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-slate-400">
              Subscribe for 2026 Chinese university deadline alerts and CSC stipend opening notices.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 text-emerald-300 rounded-xl border border-emerald-800 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
                <Button variant="primary" size="sm" type="submit" className="w-full text-xs font-bold" icon={<Send className="w-3.5 h-3.5" />}>
                  Subscribe Updates
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Study Beyond Borders (SBB) Ltd. Official Chinese State University Admission Representatives.</p>
          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">MOE Compliance</a>
            <a href="#" className="hover:text-slate-300 transition-colors">JW202 Verification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
