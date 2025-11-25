// app/middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const jwt = req.cookies.get('jwt')?.value;

  // Rutas públicas que no necesitan autenticación
  const PUBLIC_PATHS = ['/login', '/register', '/api'];

  const pathname = req.nextUrl.pathname;

  // Permitir rutas públicas
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Si no hay token, redirigir a login
  if (!jwt) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Si hay token, dejar pasar
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'], // proteger todo excepto assets y API
};
