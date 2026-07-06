import type { Metadata } from "next";
import { fetchStudentResults } from "@/lib/sheets";
import ResultsGridClient from "@/components/results-grid-client";
import { getTranslation } from "@/lib/translations";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: getTranslation(locale, "home.resultsHeadline") + " — SAT Math | Asliddin Edu Centre",
    description: getTranslation(locale, "home.resultsHeadline"),
  };
}

export default async function ResultsPage({ params }: Props) {
  const { locale } = await params;
  const results = await fetchStudentResults();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <h1 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-2">
        {getTranslation(locale, "home.resultsHeadline")}
      </h1>
      <ResultsGridClient results={results} />
    </section>
  );
}
