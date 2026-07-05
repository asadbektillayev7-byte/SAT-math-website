"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { StudentResult } from "@/lib/sheets";

type Props = {
  results: StudentResult[];
};

export default function ResultsGridClient({ results }: Props) {
  const t = useTranslations("courses");
  const [filter, setFilter] = useState<"all" | "math" | "ebrw_math">("all");

  const filtered =
    filter === "all"
      ? results
      : results.filter((r) => r.category === filter);

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-full border transition-colors ${
            filter === "all"
              ? "bg-gold text-ink border-gold"
              : "border-ink/20 text-ink/60 hover:border-ink/40"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("math")}
          className={`font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-full border transition-colors ${
            filter === "math"
              ? "bg-gold text-ink border-gold"
              : "border-ink/20 text-ink/60 hover:border-ink/40"
          }`}
        >
          {t("resultsFilterMath")}
        </button>
        <button
          onClick={() => setFilter("ebrw_math")}
          className={`font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-full border transition-colors ${
            filter === "ebrw_math"
              ? "bg-gold text-ink border-gold"
              : "border-ink/20 text-ink/60 hover:border-ink/40"
          }`}
        >
          {t("resultsFilterBoth")}
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="font-body text-sm text-ink/40 italic">{t("resultsEmpty")}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <a
              key={i}
              href={r.telegram_post}
              target="_blank"
              rel="noopener noreferrer"
              className="result-card group bg-surface rounded-xl border border-ink/5 p-4 flex items-center gap-4 transition-all hover:border-gold/30 hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-ink/10 shrink-0 relative">
                {r.photo ? (
                  <Image
                    src={r.photo}
                    alt={r.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-ink/20 font-mono text-xs">
                    ?
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="font-body font-semibold text-sm text-ink truncate group-hover:text-gold transition-colors">
                  {r.name}
                </p>
                <p className="font-mono text-lg tracking-tight text-gold">
                  {r.score}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
