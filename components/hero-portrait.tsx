import Image from "next/image";

export default function HeroPortrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <Image
        src="/team/davronbek-portrait.png"
        alt="Davronbek Namozov — SAT Math Mentor"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
        priority
      />
    </div>
  );
}
