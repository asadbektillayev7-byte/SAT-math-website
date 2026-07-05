import { getTashkentTheme } from "@/lib/theme";

export default function ThemeScript() {
  const theme = getTashkentTheme();
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.dataset.theme="${theme}";${theme === "night" ? 'document.documentElement.classList.add("dark");' : ""}`,
      }}
    />
  );
}
