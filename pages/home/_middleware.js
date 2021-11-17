import { NextResponse } from "next/server";

const COOKIE_NAME = "fav-item";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/home") {
    const favItem = req.cookies[COOKIE_NAME] || "";
    const res = NextResponse.rewrite(`/home/${favItem}`);

    return res;
  }

  return NextResponse.next();
}
