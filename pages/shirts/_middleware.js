import { NextResponse } from "next/server";

const COOKIE_NAME = "fav-item";

export function middleware(req) {
  const res = NextResponse.next();

  if (!req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, "shirts");
  }

  return res;
}
