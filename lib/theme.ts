export function getTashkentTheme(): "day" | "night" {
  const hour = parseInt(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Tashkent",
      hour: "2-digit",
      hour12: false,
    }).format(new Date()),
    10,
  );
  return hour >= 7 && hour < 19 ? "day" : "night";
}
