"use client";

import { useEffect, useRef } from "react";
import { getTashkentTheme } from "@/lib/theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    function applyTheme() {
      const theme = getTashkentTheme();
      document.documentElement.dataset.theme = theme;
      document.documentElement.classList.toggle("dark", theme === "night");
    }

    applyTheme();
    intervalRef.current = setInterval(applyTheme, 60_000);

    const handleVisibility = () => {
      if (document.visibilityState === "visible") applyTheme();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <>{children}</>;
}
