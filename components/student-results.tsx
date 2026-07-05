import { fetchStudentResults } from "@/lib/sheets";
import ResultsGridClient from "./results-grid-client";

export default async function StudentResults() {
  const results = await fetchStudentResults();

  if (results.length === 0) {
    return null;
  }

  return <ResultsGridClient results={results} />;
}
