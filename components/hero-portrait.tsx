export default function HeroPortrait({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-ink/10 rounded-2xl flex items-center justify-center ${className}`}
      aria-label="[[NEEDS INPUT: Davronbek's photo — placeholder until provided]]"
    >
      <div className="text-center p-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-ink/10 flex items-center justify-center mb-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-ink/30"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-ink/30">
          [[NEEDS INPUT: photo]]
        </p>
      </div>
    </div>
  );
}
