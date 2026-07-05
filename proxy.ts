import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/");
  const first = segments[1];

  if (first !== "en" && first !== "uz") {
    const url = new URL(`/en${pathname === "/" ? "" : pathname}`, request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|brand).*)",
};
