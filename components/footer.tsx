"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Send, Phone, MapPin } from "lucide-react";
import { contacts } from "@/data/contacts";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-surface border-t border-ink/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-ink mb-3"
            >
              <span className="w-7 h-7 rounded bg-gold flex items-center justify-center text-ink font-bold text-[10px]">
                AE
              </span>
            </Link>
            <p className="font-body text-sm text-ink/60">{t("tagline")}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-ink mb-3">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={contacts.davronbek.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-ink/70 hover:text-gold transition-colors"
                >
                  <Send size={14} className="text-gold" />
                  {contacts.davronbek.name}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contacts.davronbek.phone}`}
                  className="flex items-center gap-2 font-body text-sm text-ink/70 hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold" />
                  {contacts.davronbek.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-ink mb-3">
              Location
            </h4>
            <p className="flex items-start gap-2 font-body text-sm text-ink/60">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              {contacts.location.name} — {contacts.location.address}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink/5 text-center font-mono text-xs tracking-wider text-ink/40">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
