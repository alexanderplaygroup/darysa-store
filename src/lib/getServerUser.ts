import { User } from '@/common/interfaces';
import { cookies } from 'next/headers';

export async function getServerUser(): Promise<User | null> {
  // `cookies()` puede devolver una Promise; await para obtener ReadonlyRequestCookies
  const cookieStore = await cookies();
  const jwtCookie = cookieStore.get('jwt'); // OK, no es promesa

  if (!jwtCookie) return null;

  const token = jwtCookie.value;

  const res = await fetch(`${process.env.API_URL}/v1/auth/me`, {
    headers: { cookie: `jwt=${token}` },
    cache: 'no-store', // importante en SSR para no cachear
  });

  if (!res.ok) return null;
  return res.json();
}
