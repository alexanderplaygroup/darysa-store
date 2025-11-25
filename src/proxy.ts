// app/middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PRIVATE_PATHS = ['/dashboard', '/checkout', '/profile', '/pedidos', '/favoritos'];

export default async function proxy(req: NextRequest) {
  const jwt = req.cookies.get('jwt')?.value;
  const pathname = req.nextUrl.pathname;

  if (!PRIVATE_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (!jwt) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|_next/data|favicon.ico).*)'],
};
