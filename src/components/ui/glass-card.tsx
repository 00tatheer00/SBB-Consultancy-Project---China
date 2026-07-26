"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = true,
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative rounded-3xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 ${
        hoverEffect ? "hover:border-[#DC2626]/40 hover:shadow-md" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};
