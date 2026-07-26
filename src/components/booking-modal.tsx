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
    country: "China",
    program: "Medical (MBBS)",
    name: "",
    email: "",
    phone: "",
    date: "",
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
    <Modal isOpen={isOpen} onClose={handleClose} title="Book Free Global Education Consultation">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle className="w-8 h-8" />
          </div>
          <Badge variant="success" className="mx-auto">Consultation Confirmed</Badge>
          <h3 className="text-xl font-bold text-slate-900">Session Scheduled!</h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto">
            Thank you <span className="font-bold text-slate-900">{bookingData.name}</span>. An SBB senior education counselor has been assigned to your profile for <span className="font-bold text-[#1E90FF]">{bookingData.country} ({bookingData.program})</span>. We will contact your phone ({bookingData.phone}) shortly.
          </p>
          <Button variant="primary" size="sm" onClick={handleClose} className="w-full text-xs font-semibold">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {step === 1 && (
            <div className="space-y-4">
              <Badge variant="primary">Step 1 of 2: Select Preferences</Badge>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Study Country:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["China", "UK", "Turkey", "Malaysia", "Germany", "Australia", "Canada"].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setBookingData({ ...bookingData, country: c })}
                      className={`p-2.5 rounded-xl text-xs font-semibold transition-all border ${
                        bookingData.country === c
                          ? "bg-[#1E90FF] text-white border-[#1E90FF] font-bold shadow-xs"
                          : "bg-white text-slate-700 border-slate-200 hover:border-[#1E90FF]"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Degree Interest:</label>
                <select
                  value={bookingData.program}
                  onChange={(e) => setBookingData({ ...bookingData, program: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:outline-none focus:border-[#1E90FF]"
                >
                  <option value="Medical (MBBS)">MBBS / BDS / Medical Specialist</option>
                  <option value="Software / AI">Computer Science / Software & AI</option>
                  <option value="Engineering">Civil / Mechanical Engineering</option>
                  <option value="MBA / Business">MBA & International Business</option>
                </select>
              </div>

              <Button
                variant="primary"
                size="sm"
                type="button"
                onClick={() => setStep(2)}
                className="w-full text-xs font-semibold"
              >
                Next Step: Contact Details
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Badge variant="primary">Step 2 of 2: Student Details</Badge>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zain Ahmed"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1E90FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1E90FF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1E90FF]"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 text-xs"
                >
                  Back
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  className="w-2/3 text-xs font-semibold"
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  Confirm Free Booking
                </Button>
              </div>
            </div>
          )}
        </form>
      )}
    </Modal>
  );
};
