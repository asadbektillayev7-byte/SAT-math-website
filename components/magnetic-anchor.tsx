"use client";

import { useMagnetic } from "@/hooks/use-magnetic";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export default function MagneticAnchor({ children, className = "", ...props }: Props) {
  const ref = useMagnetic();
  return (
    <a ref={ref} className={className} style={{ transition: "transform 0.2s ease" }} {...props}>
      {children}
    </a>
  );
}
