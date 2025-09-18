import {NextRequest, NextResponse} from "next/server";

const locales = ["pt", "en"] as const;
const defaultLocale = "pt";

function preferredFromAcceptLanguage(req: NextRequest): "pt" | "en" {
  const header = req.headers.get("accept-language") || "";
  const tags = header.split(",").map(s => s.split(";")[0].trim().toLowerCase());
  for (const tag of tags) {
    const base = tag.split("-")[0];
    if (locales.includes(base as any)) return base as "pt" | "en";
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/pt" || pathname.startsWith("/pt/") || pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  if (pathname === "/" || pathname === "") {
    const cookie = req.cookies.get("NEXT_LOCALE")?.value as "pt" | "en" | undefined;
    const locale = cookie && locales.includes(cookie) ? cookie : preferredFromAcceptLanguage(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    const res = NextResponse.redirect(url);
    res.cookies.set("NEXT_LOCALE", locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next|.*\\..*).*)"]
};
