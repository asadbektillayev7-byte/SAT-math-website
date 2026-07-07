import type { Metadata } from "next";
import Link from "next/link";
import { Send } from "lucide-react";
import HandDrawnStat from "@/components/hand-drawn-stat";
import HeroPortrait from "@/components/hero-portrait";
import StudentResults from "@/components/student-results";
import { getTranslation, getRawMessage } from "@/lib/translations";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Davronbek Namozov — SAT Math Mentor | Asliddin Edu Centre",
    description: getTranslation(locale, "home.heroSubheadline"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = (key: string) => getTranslation(locale, key);
  const raw = (key: string) => getRawMessage(locale, key);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-5 items-center">
            <div className="md:col-span-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-rust mb-4">
                {t("home.heroEyebrow")}
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold text-ink mb-6">
                {t("home.heroHeadline")}
              </h1>
              <p className="font-body text-lg text-ink/60 leading-relaxed mb-8 max-w-xl">
                {t("home.heroSubheadline")}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://t.me/VIP_Teacher007?text=Assalomu%20alaykum!%20Men%20birinchi%20darsga%20yozilmoqchiman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-6 py-3 rounded-lg bg-gold text-ink hover:bg-gold/80 transition-colors"
                >
                  <Send size={16} />
                  {t("home.heroCta")}
                </a>
                <Link
                  href={`/${locale}/courses`}
                  className="font-body text-sm text-ink/50 hover:text-ink underline underline-offset-4 transition-colors"
                >
                  {t("home.heroSecondaryCta")}
                </Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <HeroPortrait className="aspect-[3/4] w-full max-w-xs mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="bg-surface border-y border-ink/5">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <HandDrawnStat className="text-center">
              <p className="font-heading text-3xl font-semibold text-ink mb-1">
                {t("home.stats.score")}
              </p>
            </HandDrawnStat>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-ink mb-1">
                {t("home.stats.experience")}
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-ink mb-1">
                {t("home.stats.certificate")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="font-body text-lg text-ink/70 leading-relaxed mb-6">
            {t("home.aboutTeaser")}
          </p>
          <Link
            href={`/${locale}/teachers`}
            className="font-mono text-xs tracking-wider uppercase text-gold hover:text-ink transition-colors"
          >
            {t("home.aboutLink")}
          </Link>
        </div>
      </section>

      {/* Torn divider */}
      <div className="torn-divider" />

      {/* Why SAT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-heading text-3xl font-semibold text-ink mb-4">
          {t("home.whySatHeadline")}
        </h2>
        <p className="font-body text-lg text-ink/70 leading-relaxed max-w-2xl mb-6">
          {t("home.whySatBody")}
        </p>
        <Link
          href={`/${locale}/courses`}
          className="font-mono text-xs tracking-wider uppercase text-gold hover:text-ink transition-colors"
        >
          {t("home.whySatLink")}
        </Link>
      </section>

      {/* Course teaser cards */}
      <section className="bg-surface border-y border-ink/5">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-heading text-2xl font-semibold text-ink mb-8">
            {t("home.courseTeaserHeading")}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href={`/${locale}/courses#sat-advanced`}
              className="group bg-bg rounded-xl border border-ink/5 p-6 hover:border-gold/30 transition-all"
            >
              <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-gold transition-colors mb-2">
                SAT Advanced
              </h3>
              <p className="font-body text-sm text-ink/50 leading-relaxed">
                For students already comfortable with core material, aiming to push their Math score toward the top end.
              </p>
            </Link>
            <Link
              href={`/${locale}/courses#pre-sat`}
              className="group bg-bg rounded-xl border border-ink/5 p-6 hover:border-gold/30 transition-all"
            >
              <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-gold transition-colors mb-2">
                Pre-SAT
              </h3>
              <p className="font-body text-sm text-ink/50 leading-relaxed">
                A foundational track for students building up core Math skills before tackling full SAT-level problems.
              </p>
            </Link>
            <Link
              href={`/${locale}/courses#individual-english`}
              className="group bg-bg rounded-xl border border-ink/5 p-6 hover:border-gold/30 transition-all"
            >
              <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-gold transition-colors mb-2">
                Individual English (EBRW)
              </h3>
              <p className="font-body text-sm text-ink/50 leading-relaxed">
                Personalized English/EBRW preparation paced to the student&#39;s starting level.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Results teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-heading text-2xl font-semibold text-ink mb-8">
          {t("home.resultsHeadline")}
        </h2>
        <StudentResults />
        <div className="mt-8">
          <Link
            href={`/${locale}/results`}
            className="font-mono text-xs tracking-wider uppercase text-gold hover:text-ink transition-colors"
          >
            {t("home.resultsLink")}
          </Link>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="bg-ink text-bg py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8">
            {t("home.ctaHeadline")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/VIP_Teacher007?text=Assalomu%20alaykum!%20Men%20birinchi%20darsga%20yozilmoqchiman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-6 py-3 rounded-lg bg-gold text-ink hover:bg-gold/80 transition-colors"
            >
              <Send size={16} />
              {t("home.ctaTelegram")}
            </a>
            <Link
              href={`/${locale}/courses`}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-6 py-3 rounded-lg border border-current text-bg hover:text-gold transition-colors"
            >
              {t("home.ctaCourses")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
