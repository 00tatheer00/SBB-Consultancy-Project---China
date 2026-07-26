"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "success";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all";

  const variants = {
    primary:
      "bg-[#FEF2F2] text-[#DC2626] border border-[#DC2626]/20 shadow-2xs",
    secondary:
      "bg-slate-100 text-slate-700 border border-slate-200/80",
    accent:
      "bg-amber-500/10 text-amber-600 border border-amber-500/20",
    success:
      "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
