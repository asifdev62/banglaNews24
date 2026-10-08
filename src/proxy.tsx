import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    const { pathname } = request.nextUrl;

  
    if (session) {
        
        if (pathname === "/signIn" || pathname === "/signUp") {
            return NextResponse.redirect(new URL("/", request.url));
        }

        return NextResponse.next();
    }

  
    if (pathname === "/profile") {
        return NextResponse.redirect(new URL("/signIn", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/profile",
        "/signIn",
        "/signUp",
    ],
};