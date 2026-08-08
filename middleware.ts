import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = [
  "/images", "/videos", "/_next", "/favicon", "/robots",
  "/sitemap", "/google", "/api",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // No tocar rutas de assets ni API
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Guardar preferencia de idioma si viene del selector
  const localeParam = request.nextUrl.searchParams.get("locale");
  if (localeParam && ["es", "en"].includes(localeParam)) {
    response.cookies.set("locale", localeParam, {
      maxAge: 60 * 60 * 24 * 365, // 1 año
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
