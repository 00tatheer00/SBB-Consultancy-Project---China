"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
      className={cn(
        "relative rounded-3xl transition-all duration-300",
        hoverEffect && "hover:shadow-xl hover:shadow-[#1E90FF]/12 hover:border-[#1E90FF]/40",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
