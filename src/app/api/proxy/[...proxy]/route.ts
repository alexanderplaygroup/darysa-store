/* eslint-disable prefer-const */
import { auth } from '@auth';
import { NextRequest } from 'next/server';

//TODO: PENDIENTE A USAR
// Review if we need this, and why
function stripContentEncoding(result: Response) {
  const responseHeaders = new Headers(result.headers);
  responseHeaders.delete('content-encoding');

  return new Response(result.body, {
    status: result.status,
    statusText: result.statusText,
    headers: responseHeaders,
  });
}

async function handler(request: NextRequest) {
  console.log('🔥 Entró al handler'); // <= VER ESTO EN TERMINAL
  const session = await auth();
  console.log('🧠 Session:', session);
  const headers = new Headers(request.headers);
  headers.set('Authorization', `Bearer ${session?.user.accessToken}`);

  let backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'https://third-party-backend.authjs.dev';

  let url = request.nextUrl.href.replace(request.nextUrl.origin, backendUrl);
  let result = await fetch(url, { headers, body: request.body });

  return stripContentEncoding(result);
}

export const dynamic = 'force-dynamic';

export { handler as GET, handler as POST };
