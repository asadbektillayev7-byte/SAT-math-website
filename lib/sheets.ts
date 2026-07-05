import Papa from "papaparse";

export interface StudentResult {
  name: string;
  photo: string;
  category: "math" | "ebrw_math";
  score: string;
  telegram_post: string;
}

export function normalizeDriveUrl(shareUrl: string): string {
  const match = shareUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const id = match ? match[1] : null;
  return id
    ? `https://drive.google.com/uc?export=view&id=${id}`
    : shareUrl;
}

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/1W8EL1c4ISCVqGxQQS8UnoebpObPkFyGt587a94OuH9c/export?format=csv&gid=0";

export async function fetchStudentResults(): Promise<StudentResult[]> {
  try {
    const res = await fetch(CSV_URL, { next: { revalidate: 300 } });
    const csvText = await res.text();
    const parsed = Papa.parse<Record<string, string>>(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    if (!parsed.data || parsed.data.length === 0) {
      return [];
    }

    return parsed.data
      .map((row) => ({
        name: row.name || "",
        photo: normalizeDriveUrl(row.photo || ""),
        category: (row.category === "ebrw_math" ? "ebrw_math" : "math") as StudentResult["category"],
        score: row.score || "",
        telegram_post: row.telegram_post || "",
      }))
      .filter((r) => r.name && r.score);
  } catch {
    return [];
  }
}
