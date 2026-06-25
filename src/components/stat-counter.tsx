"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
}

export function StatCounter({ end, suffix = "", duration = 2000, label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function: easeOutQuart
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends exactly on the number
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div className="text-4xl font-bold tracking-tight text-foreground flex items-baseline">
        {count}
        <span className="text-primary ml-0.5">{suffix}</span>
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
