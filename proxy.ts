import { getToken } from "@/lib/token";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const token = getToken();

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Protect dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
