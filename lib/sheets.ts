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
  "https://docs.google.com/spreadsheets/d/1W8EL1c4ISCVqGxQQS8UnoebpObPkFyGt587a94OuH9c/gviz/tq?tqx=out:csv";

export async function fetchStudentResults(): Promise<StudentResult[]> {
  try {
    const res = await fetch(CSV_URL, { next: { revalidate: 300 } });
    const csvText = await res.text();

    const trimmed = csvText.trim();
    if (!trimmed || trimmed.startsWith("<") || trimmed.startsWith("<!DOCTYPE")) {
      return [];
    }

    const parsed = Papa.parse<string[]>(trimmed, {
      header: false,
      skipEmptyLines: true,
    });

    if (!parsed.data || parsed.data.length === 0) {
      return [];
    }

    return parsed.data
      .map((row) => ({
        name: row[0]?.trim() || "",
        photo: normalizeDriveUrl(row[1]?.trim() || ""),
        category: (row[2]?.trim() === "ebrw_math" ? "ebrw_math" : "math") as StudentResult["category"],
        score: (() => {
          const raw = (row[3]?.trim() || "").replace(/\/\d+$/, "");
          const num = parseInt(raw, 10);
          return isNaN(num) ? raw : num >= 1200 ? raw + "/1600" : raw + "/800";
        })(),
        telegram_post: row[4]?.trim() || "",
      }))
      .filter((r) => r.name && r.score);
  } catch {
    return [];
  }
}
