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
      "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DC2626]/40 active:scale-95 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

    const variants = {
      primary:
        "bg-[#DC2626] text-white hover:bg-[#B91C1C] shadow-sm hover:shadow-md border border-[#DC2626]",
      secondary:
        "bg-[#FEF2F2] text-[#DC2626] hover:bg-[#DC2626] hover:text-white border border-[#DC2626]/25",
      outline:
        "bg-white text-slate-800 border border-slate-300 hover:border-[#DC2626] hover:text-[#DC2626] shadow-xs",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-[#DC2626]",
      dark:
        "bg-slate-900 text-white hover:bg-slate-800 shadow-sm border border-slate-800",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs gap-2",
      md: "px-5 py-2.5 text-sm gap-2.5",
      lg: "px-8 py-3.5 text-base gap-3",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="inline-flex items-center shrink-0">{icon}</span>}
        <span className="inline-flex items-center gap-2 leading-none whitespace-nowrap">{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex items-center shrink-0">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
