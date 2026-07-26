"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "success";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-[#EAF4FF] text-[#1E90FF] border border-[#1E90FF]/30 hover:border-[#1E90FF]/60 hover:bg-[#D8EAFF]",
    secondary:
      "bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-slate-200",
    accent:
      "bg-amber-50 text-amber-700 border border-amber-200/80 hover:bg-amber-100",
    outline:
      "bg-white/80 backdrop-blur-md text-slate-700 border border-slate-300 hover:border-[#1E90FF] hover:text-[#1E90FF]",
    success:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-extrabold rounded-full transition-all duration-200 hover:scale-105 select-none",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
