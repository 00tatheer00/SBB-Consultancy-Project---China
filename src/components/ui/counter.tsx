"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  suffix = "",
  duration = 2,
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
