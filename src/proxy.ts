import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale } from "./i18n/locales";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
