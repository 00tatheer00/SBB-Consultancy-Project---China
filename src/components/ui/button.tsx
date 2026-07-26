"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/40 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#1E90FF] text-white hover:bg-[#0077E6] shadow-sm hover:shadow-md border border-[#1E90FF]",
      secondary:
        "bg-[#EAF4FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white border border-[#1E90FF]/25",
      outline:
        "bg-white text-slate-800 border border-slate-300 hover:border-[#1E90FF] hover:text-[#1E90FF] shadow-xs",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-[#1E90FF]",
      dark:
        "bg-slate-900 text-white hover:bg-slate-800 shadow-sm border border-slate-800",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3.5 text-base gap-2.5",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="inline-flex">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
