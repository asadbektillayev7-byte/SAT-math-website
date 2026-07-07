"use client";

import { useEffect, useRef } from "react";

export function useTilt(maxAngle = 12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const angleX = ((y - cy) / cy) * -maxAngle;
      const angleY = ((x - cx) / cx) * maxAngle;
      el.style.transform = `perspective(600px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };

    const handleLeave = () => {
      el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [maxAngle]);

  return ref;
}
