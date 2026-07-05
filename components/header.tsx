"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  function switchLocale(next: string) {
    const segments = pathname.split("/");
    segments[1] = next;
    return segments.join("/");
  }

  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.dataset.theme === "night";

  return (
    <header className="sticky top-0 z-30 bg-bg/85 backdrop-blur-sm border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-ink hover:text-gold transition-colors"
        >
          <span className="w-8 h-8 rounded bg-gold flex items-center justify-center text-ink font-bold text-xs">
            AE
          </span>
          <span className="hidden sm:inline">Asliddin Edu</span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href={`/${locale}`}
            className="font-body text-sm text-ink/70 hover:text-ink transition-colors"
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/teachers`}
            className="font-body text-sm text-ink/70 hover:text-ink transition-colors"
          >
            {t("teachers")}
          </Link>
          <Link
            href={`/${locale}/courses`}
            className="font-body text-sm text-ink/70 hover:text-ink transition-colors"
          >
            {t("courses")}
          </Link>

          <div className="flex items-center gap-1 ml-4 pl-4 border-l border-ink/10">
            <Link
              href={switchLocale("en")}
              className={`font-mono text-xs tracking-wider uppercase px-2 py-1 rounded transition-colors ${
                locale === "en"
                  ? "text-gold bg-gold/10"
                  : "text-ink/50 hover:text-ink"
              }`}
            >
              EN
            </Link>
            <Link
              href={switchLocale("uz")}
              className={`font-mono text-xs tracking-wider uppercase px-2 py-1 rounded transition-colors ${
                locale === "uz"
                  ? "text-gold bg-gold/10"
                  : "text-ink/50 hover:text-ink"
              }`}
            >
              UZ
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
