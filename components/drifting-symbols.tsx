"use client";

const SYMBOLS = ["√", "π", "Σ", "x²", "∫", "∞"];

export default function DriftingSymbols() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {SYMBOLS.map((s, i) => (
        <span
          key={i}
          className="symbol-drift absolute font-mono font-semibold text-ink/10"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 30}%`,
            fontSize: `${1.4 + (i % 3) * 0.6}rem`,
            "--dx": `${-30 + i * 15}px`,
            "--dy": `${-50 + i * 25}px`,
            "--dr": `${120 + i * 60}deg`,
            "--dur": `${7 + i * 0.6}s`,
            "--delay": `${i * 0.8}s`,
          } as React.CSSProperties}
        >
          {s}
        </span>
      ))}
    </div>
  );
}
