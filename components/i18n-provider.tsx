"use client";

import { createContext, useContext, useCallback } from "react";

type I18nContext = {
  locale: string;
  t: (key: string) => string;
  raw: (key: string) => unknown;
};

const ctx = createContext<I18nContext>({
  locale: "en",
  t: () => "",
  raw: () => "",
});

export function useTranslation() {
  return useContext(ctx);
}

export function useLocale() {
  return useContext(ctx).locale;
}

export default function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Record<string, unknown>;
  children: React.ReactNode;
}) {
  const getValue = useCallback(
    (key: string): unknown => {
      return key.split(".").reduce<unknown>((obj, part) => {
        if (obj && typeof obj === "object") {
          return (obj as Record<string, unknown>)[part];
        }
        return undefined;
      }, messages);
    },
    [messages],
  );

  const t = useCallback(
    (key: string): string => {
      const val = getValue(key);
      return typeof val === "string" ? val : key;
    },
    [getValue],
  );

  const raw = useCallback(
    (key: string): unknown => {
      return getValue(key);
    },
    [getValue],
  );

  return (
    <ctx.Provider value={{ locale, t, raw }}>{children}</ctx.Provider>
  );
}
