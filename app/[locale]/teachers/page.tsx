import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Send } from "lucide-react";
import HandDrawnStat from "@/components/hand-drawn-stat";
import HeroPortrait from "@/components/hero-portrait";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "teachers" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function TeachersPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "teachers" });

  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-5 items-start">
          <div className="md:col-span-2">
            <HeroPortrait className="aspect-[3/4] w-full" />
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-rust mb-4">
              TEACHER
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-ink mb-2">
              {t("name")}
            </h1>
            <p className="font-body text-lg text-ink/50 mb-8">{t("role")}</p>

            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              <HandDrawnStat>
                <p className="font-mono text-sm text-ink/40">Score</p>
                <p className="font-heading text-2xl font-semibold text-ink">
                  790/800
                </p>
              </HandDrawnStat>
              <div>
                <p className="font-mono text-sm text-ink/40">Experience</p>
                <p className="font-heading text-2xl font-semibold text-ink">
                  4 years
                </p>
              </div>
              <div>
                <p className="font-mono text-sm text-ink/40">Certificate</p>
                <p className="font-heading text-2xl font-semibold text-ink">
                  77.64 (A+)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-surface border-y border-ink/5">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <blockquote className="font-heading text-xl md:text-2xl leading-relaxed text-ink border-l-4 border-gold pl-6 mb-8">
              {t("philosophy1")}
            </blockquote>
            <p className="font-body text-base text-ink/60 leading-relaxed mb-6">
              {t("philosophy2")}
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-heading text-2xl font-semibold text-ink mb-6">
          {t("credentialsHeading")}
        </h2>
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-3 font-body text-sm text-ink/70">
            <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
            {t("credentialScore")}
          </div>
          <div className="flex items-center gap-3 font-body text-sm text-ink/70">
            <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
            {t("credentialCertificate")}
          </div>
          <div className="flex items-center gap-3 font-body text-sm text-ink/70">
            <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
            {t("credentialExperience")}
          </div>
        </div>
      </section>

      {/* EBRW Teacher */}
      <section className="bg-surface border-y border-ink/5">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-rust mb-3">
              {t("ebrwHeading")}
            </p>
            <p className="font-body text-sm text-ink/60 leading-relaxed mb-4">
              {t("ebrwDescription")}
            </p>
            <a
              href="https://t.me/peaceashit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg bg-gold text-ink hover:bg-gold/80 transition-colors"
            >
              <Send size={14} />
              {t("ebrwCta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
