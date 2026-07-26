import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline" | "accent" | "success" | "dark";
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const variants = {
    primary: "bg-[#EAF4FF] text-[#1E90FF] border border-[#1E90FF]/25 font-semibold",
    secondary: "bg-slate-100 text-slate-700 border border-slate-200 font-medium",
    outline: "bg-white text-slate-700 border border-slate-300 font-medium",
    accent: "bg-[#1E90FF] text-white font-semibold shadow-sm",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold",
    dark: "bg-slate-900 text-white font-semibold",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs rounded-full",
    md: "px-3 py-1 text-xs rounded-full",
    lg: "px-4 py-1.5 text-sm rounded-full",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 transition-all duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
