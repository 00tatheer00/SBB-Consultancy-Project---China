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
      "group inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/40 active:scale-95 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

    const variants = {
      primary:
        "bg-[#1E90FF] text-white hover:bg-[#0077E6] shadow-sm hover:shadow-lg hover:shadow-[#1E90FF]/35 border border-[#1E90FF] hover:-translate-y-0.5",
      secondary:
        "bg-[#EAF4FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white border border-[#1E90FF]/25 hover:shadow-md hover:-translate-y-0.5",
      outline:
        "bg-white text-slate-800 border border-slate-300 hover:border-[#1E90FF] hover:text-[#1E90FF] shadow-xs hover:shadow-md hover:bg-[#FAFCFF] hover:-translate-y-0.5",
      ghost:
        "bg-transparent text-slate-700 hover:bg-[#EAF4FF] hover:text-[#1E90FF]",
      dark:
        "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-lg border border-slate-800 hover:-translate-y-0.5",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs gap-2",
      md: "px-5 py-2.5 text-sm gap-2.5",
      lg: "px-8 py-3.5 text-base gap-3",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="inline-flex items-center shrink-0 group-hover:-translate-x-0.5 transition-transform duration-300">
            {icon}
          </span>
        )}
        <span className="inline-flex items-center gap-2 leading-none whitespace-nowrap">
          {children}
        </span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex items-center shrink-0 group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
