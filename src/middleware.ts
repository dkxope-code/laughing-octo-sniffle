import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/admin")) return NextResponse.next();

  const authHeader = req.headers.get("authorization") || "";
  if (!authHeader.toLowerCase().startsWith("basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic realm=GameLobby" },
    });
  }

  try {
    const base64 = authHeader.split(" ")[1] || "";
    const [user, pass] = atob(base64).split(":");
    const expectedUser = process.env.ADMIN_USER || "admin";
    const expectedPass = process.env.ADMIN_PASS || "changeme";
    if (user === expectedUser && pass === expectedPass) return NextResponse.next();
  } catch {}

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": "Basic realm=GameLobby" },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};



