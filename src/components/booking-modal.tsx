"use client";

import React, { useState } from "react";
import { Modal } from "./ui/modal";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CheckCircle, Send } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    city: "Hangzhou",
    program: "MBBS (Medicine)",
    name: "",
    email: "",
    phone: "",
    marks: "85%",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }
  };

  const handleClose = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Apply to Study in China 🇨🇳">
      {submitted ? (
        <div className="text-center py-8 space-y-4 bg-white">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle className="w-8 h-8" />
          </div>
          <Badge variant="success" className="mx-auto">Application Dossier Received</Badge>
          <h3 className="text-2xl font-extrabold text-slate-900">Application Submitted!</h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
            Thank you <span className="font-bold text-slate-900">{bookingData.name}</span>. An SBB senior China admissions officer has been assigned to your dossier for <span className="font-bold text-[#1E90FF]">{bookingData.city} Hub ({bookingData.program})</span>. We will contact your WhatsApp ({bookingData.phone}) within 2 business hours.
          </p>
          <Button variant="primary" size="sm" onClick={handleClose} className="w-full text-xs font-bold">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-left bg-white">
          {step === 1 && (
            <div className="space-y-5">
              <Badge variant="primary">Step 1 of 2: Select Target China City & Program</Badge>
              
              <div>
                <label className="block text-xs font-extrabold text-slate-800 mb-2 uppercase tracking-wider">
                  Target China Academic City 🇨🇳:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["Hangzhou", "Beijing", "Shanghai", "Nanjing", "Wuhan", "Guangzhou", "Xi'an"].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setBookingData({ ...bookingData, city: c })}
                      className={`p-3 rounded-xl text-xs font-bold transition-all border text-left flex items-center gap-1.5 cursor-pointer ${
                        bookingData.city === c
                          ? "bg-[#1E90FF] text-white border-[#1E90FF] shadow-xs"
                          : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-[#EAF4FF] hover:border-[#1E90FF]"
                      }`}
                    >
                      <span>🇨🇳</span> {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-800 mb-1.5 uppercase tracking-wider">
                  Intended Degree Major:
                </label>
                <select
                  value={bookingData.program}
                  onChange={(e) => setBookingData({ ...bookingData, program: e.target.value })}
                  className="w-full p-3.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 bg-white focus:outline-none focus:border-[#1E90FF] focus:ring-2 focus:ring-[#EAF4FF]"
                >
                  <option value="MBBS (Medicine)">MBBS (Clinical Medicine - WHO Accredited)</option>
                  <option value="BDS (Dentistry)">BDS (Bachelor of Dental Surgery)</option>
                  <option value="Software / AI">Computer Science & Artificial Intelligence</option>
                  <option value="Civil Engineering">Civil & Structural Engineering</option>
                  <option value="PharmD">PharmD / Clinical Pharmacy</option>
                  <option value="MBA / Business">MBA & International E-Commerce</option>
                </select>
              </div>

              <Button
                variant="primary"
                size="md"
                type="button"
                onClick={() => setStep(2)}
                className="w-full text-xs font-bold py-3.5"
              >
                Next Step: Enter Student Information →
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Badge variant="primary">Step 2 of 2: Student Contact & Marksheet Details</Badge>

              <div>
                <label className="block text-xs font-extrabold text-slate-800 mb-1">Full Student Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Zain Ahmed"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E90FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-800 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@gmail.com"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E90FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-800 mb-1">Academic Percentage / FSc Score:</label>
                <input
                  type="text"
                  placeholder="e.g. FSc 82% or A-Levels ABB"
                  value={bookingData.marks}
                  onChange={(e) => setBookingData({ ...bookingData, marks: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E90FF]"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 text-xs font-semibold"
                >
                  ← Back
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  className="w-2/3 text-xs font-bold"
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  Submit Application
                </Button>
              </div>
            </div>
          )}
        </form>
      )}
    </Modal>
  );
};
