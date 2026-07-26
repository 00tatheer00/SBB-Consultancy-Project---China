import React from "react";

interface ChinaFlagProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const ChinaFlag: React.FC<ChinaFlagProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-3 rounded-xs",
    md: "w-5 h-3.5 rounded-xs",
    lg: "w-6 h-4 rounded-sm",
  };

  return (
    <img
      src="https://flagcdn.com/w40/cn.png"
      srcSet="https://flagcdn.com/w80/cn.png 2x"
      alt="China Flag"
      className={`inline-block object-cover shadow-xs align-middle ${sizeClasses[size]} ${className}`}
    />
  );
};
