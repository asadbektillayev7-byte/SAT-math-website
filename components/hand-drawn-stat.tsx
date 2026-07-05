type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function HandDrawnStat({ children, className = "" }: Props) {
  return (
    <div className={`hand-circle ${className}`}>
      <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="60"
          cy="24"
          rx="58"
          ry="12"
          stroke="#FFBA28"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="3 4"
          transform="rotate(-2, 60, 24)"
        />
      </svg>
      {children}
    </div>
  );
}
