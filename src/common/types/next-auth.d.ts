import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User extends DefaultUser {
    id?: string | number;
    accessToken?: string;
    tokenType?: string;
    expiresIn?: number;
    email?: string | null;
    name?: string | null;
  }

  interface Session {
    user: {
      id?: string | number;
      accessToken?: string;
      tokenType?: string;
      expiresIn?: number;
      email?: string | null;
      name?: string | null;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id?: string | number;
    accessToken?: string;
    tokenType?: string;
    expiresIn?: number;
    email?: string | null;
    name?: string | null;
  }
}
