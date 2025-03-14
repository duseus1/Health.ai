import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  try {
    const supabase = createMiddlewareClient({ req, res })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    // If the user is not signed in and trying to access the root path or dashboard, redirect to /signup
    if (!session && (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/dashboard")) {
      console.log("Redirecting unauthenticated user to signup page")
      return NextResponse.redirect(new URL("/signup", req.url))
    }

    // If the user is signed in and trying to access /login or /signup, redirect to /
    if (session && (req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup"))) {
      console.log("Redirecting authenticated user to dashboard")
      return NextResponse.redirect(new URL("/", req.url))
    }
  } catch (error) {
    console.error("Middleware error:", error)
  }

  return res
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
}

