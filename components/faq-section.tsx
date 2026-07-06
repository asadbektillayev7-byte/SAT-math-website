"use client";

import { useState } from "react";
import { useTranslation } from "@/components/i18n-provider";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const { t, raw } = useTranslation();
  const faq = raw("courses.faq") as { q: string; a: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!Array.isArray(faq)) return null;

  return (
    <div className="space-y-3">
      {faq.map((item, i) => (
        <div
          key={i}
          className="bg-surface rounded-xl border border-ink/5 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-body text-sm font-medium text-ink hover:bg-ink/[0.02] transition-colors"
          >
            <span>{item.q}</span>
            <ChevronDown
              size={16}
              className={`text-ink/40 transition-transform shrink-0 ml-4 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4 font-body text-sm text-ink/60 leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
