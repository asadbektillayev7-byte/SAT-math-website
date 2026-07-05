import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "uz"],
  defaultLocale: "en",
  localeDetection: false,
});

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|brand).*)",
};
