import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

const handler = createMiddleware({
  locales: ["en", "uz"],
  defaultLocale: "en",
  localeDetection: false,
});

export function proxy(request: NextRequest) {
  return handler(request);
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|brand).*)",
};
