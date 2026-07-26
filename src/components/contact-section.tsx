"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
  Building,
  Globe2
} from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "China",
    program: "MBBS / Medical",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    { city: "Beijing Office", address: "Chaoyang District, Tech Tower 8B, Beijing, China", phone: "+86 10 8829 1000" },
    { city: "London Liaison", address: "25 Old Broad Street, EC2N 1HN, London, UK", phone: "+44 20 7946 0912" },
    { city: "Istanbul Hub", address: "Maslak Square Plaza No. 14, Istanbul, Turkey", phone: "+90 212 312 4500" },
    { city: "Kuala Lumpur Branch", address: "KLCC Tower 2, Level 18, Kuala Lumpur, Malaysia", phone: "+60 3 2181 9000" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="primary" className="mx-auto">
            <PhoneCall className="w-3.5 h-3.5" /> Start Your Academic Journey
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Book a Free 1-on-1 <span className="text-[#1E90FF]">Consultation</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Speak directly with our senior educational advisors for transcript evaluation, scholarship profiling, and university shortlist recommendations.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 border border-slate-200 bg-white shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Consultation Request Received!</h3>
                  <p className="text-sm font-medium text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. An SBB senior educational advisor will contact you via WhatsApp & Email within 2 business hours.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Zain Ahmed"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1E90FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1E90FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1E90FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Target Country
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1E90FF] bg-white"
                      >
                        <option value="China">🇨🇳 China (CSC Scholarships)</option>
                        <option value="UK">🇬🇧 United Kingdom</option>
                        <option value="Turkey">🇹🇷 Turkey</option>
                        <option value="Malaysia">🇲🇾 Malaysia</option>
                        <option value="Europe">🇪🇺 Germany / Europe</option>
                        <option value="Australia">🇦🇺 Australia</option>
                        <option value="Canada">🇨🇦 Canada</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Intended Program
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1E90FF] bg-white"
                    >
                      <option value="MBBS / Medical">MBBS / BDS / Clinical Medicine</option>
                      <option value="Engineering">Software / Civil / Electrical Eng</option>
                      <option value="Computer Science">Computer Science & AI</option>
                      <option value="Business / MBA">MBA / International Business</option>
                      <option value="Pharmacy">PharmD / Pharmacy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Academic Qualifications & Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us your high school / Bachelor score percentage, budget preferences, or specific queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1E90FF]"
                    />
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="w-full text-xs sm:text-sm font-semibold"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Submit Booking Request
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

          {/* Right Column: WhatsApp Direct & Global Offices */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* WhatsApp Quick Connect Card */}
            <div className="bg-emerald-600 text-white p-6 rounded-3xl border border-emerald-700 shadow-lg space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/20 rounded-2xl">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold">Instant WhatsApp Support</h4>
                  <p className="text-xs text-emerald-100 font-medium">Average response time: 5 minutes</p>
                </div>
              </div>
              <p className="text-xs text-emerald-100 font-normal leading-relaxed">
                Need urgent assistance regarding 2026 intake deadlines or embassy document checklist? Connect directly with our live advisory desk.
              </p>
              <a
                href="https://wa.me/861088291000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white text-emerald-900 rounded-full font-bold text-xs hover:bg-emerald-50 transition-colors shadow-xs"
              >
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Global Offices Directory */}
            <GlassCard className="p-6 border border-slate-200 bg-white space-y-4 shadow-sm">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#1E90FF]" /> Global Office Locations
              </h4>

              <div className="space-y-3 divide-y divide-slate-100">
                {offices.map((off, i) => (
                  <div key={i} className="pt-2 text-xs space-y-1">
                    <p className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#1E90FF]" /> {off.city}
                    </p>
                    <p className="text-slate-600 font-normal pl-5">{off.address}</p>
                    <p className="text-[#1E90FF] font-semibold pl-5">{off.phone}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Map Visual */}
            <div className="relative h-44 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Global Locations Map Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                <span className="bg-white px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-2 border border-slate-200">
                  <MapPin className="w-4 h-4 text-[#1E90FF]" /> Global Advisory Hub Network
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
