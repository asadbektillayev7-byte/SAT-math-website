"use client";

import { useEffect, useRef, useState } from "react";

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
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
      style={delay && visible ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal reveal-${direction} ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
