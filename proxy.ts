import createMiddleware from "next-intl/middleware";

const handler = createMiddleware({
  locales: ["en", "uz"],
  defaultLocale: "en",
  localeDetection: false,
});

export function proxy(request: Request) {
  return handler(request);
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|brand).*)",
};
