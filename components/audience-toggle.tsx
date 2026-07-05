"use client";

type Props = {
  active: "students" | "teachers";
  onChange: (v: "students" | "teachers") => void;
  studentLabel: string;
  teacherLabel: string;
};

export default function AudienceToggle({
  active,
  onChange,
  studentLabel,
  teacherLabel,
}: Props) {
  return (
    <div className="flex gap-1 p-1 rounded-xl bg-ink/5 w-fit">
      <button
        onClick={() => onChange("students")}
        className={`font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all ${
          active === "students"
            ? "bg-surface text-ink shadow-sm"
            : "text-ink/50 hover:text-ink"
        }`}
      >
        {studentLabel}
      </button>
      <button
        onClick={() => onChange("teachers")}
        className={`font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all ${
          active === "teachers"
            ? "bg-surface text-ink shadow-sm"
            : "text-ink/50 hover:text-ink"
        }`}
      >
        {teacherLabel}
      </button>
    </div>
  );
}
