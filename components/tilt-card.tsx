"use client";

import { useTilt } from "@/hooks/use-tilt";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
};

export default function TiltCard({ children, className = "", as: Tag = "div", ...props }: Props) {
  const tiltRef = useTilt();
  return (
    <Tag
      ref={tiltRef as any}
      className={className}
      style={{ transition: "transform 0.15s ease", willChange: "transform" }}
      {...(props as any)}
    >
      {children}
    </Tag>
  );
}
