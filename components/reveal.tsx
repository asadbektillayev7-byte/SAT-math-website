"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "span" | "h1" | "h2" | "h3" | "p";
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-visible");
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("reveal-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${direction} ${className}`}
    >
      {children}
    </Tag>
  );
}
