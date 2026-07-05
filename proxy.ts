import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "uz"];
const defaultLocale = "en";

function getLocale(pathname: string): string | null {
  const segments = pathname.split("/");
  const first = segments[1];
  if (locales.includes(first)) return first;
  return null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocale(pathname);

  if (!locale) {
    const newUrl = new URL(request.nextUrl);
    newUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(newUrl);
  }

  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", locale, {
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|brand).*)",
};
