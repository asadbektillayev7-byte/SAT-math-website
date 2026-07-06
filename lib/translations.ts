import enMessages from "@/messages/en.json";
import uzMessages from "@/messages/uz.json";

export function getMessages(locale: string): Record<string, unknown> {
  return (locale === "uz" ? uzMessages : enMessages) as Record<string, unknown>;
}

export function getTranslation(locale: string, key: string): string {
  const messages = getMessages(locale);
  const value = key.split(".").reduce<unknown>((obj, part) => {
    if (obj && typeof obj === "object") {
      return (obj as Record<string, unknown>)[part];
    }
    return undefined;
  }, messages);
  return typeof value === "string" ? value : key;
}

export function getRawMessage(locale: string, key: string): unknown {
  const messages = getMessages(locale);
  return key.split(".").reduce<unknown>((obj, part) => {
    if (obj && typeof obj === "object") {
      return (obj as Record<string, unknown>)[part];
    }
    return undefined;
  }, messages);
}
