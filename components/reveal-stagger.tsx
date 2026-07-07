"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export default function RevealStagger({
  children,
  className = "",
  staggerDelay = 100,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll(".reveal-stagger > *").forEach((child) => {
        child.classList.add("reveal-visible");
      });
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll(":scope > *");
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add("reveal-visible");
            }, i * staggerDelay);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [staggerDelay]);

  return (
    <div ref={ref} className={`reveal-stagger ${className}`}>
      {children}
    </div>
  );
}
