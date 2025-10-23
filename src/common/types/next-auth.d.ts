import { DefaultSession } from 'next-auth';
import { JWT as DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  // interface Session {
  // 	user: {
  // 		id: number;
  // 		email: string;
  // 		token?: string;
  // 		// role: string;
  // 	} & DefaultSession['user'];
  // }
  interface User extends DefaultUser {
    accessToken?: string;
    tokenType?: string;
    expiresIn?: number;
    name?: string;
    email?: string; // o opcional si prefieres
  }
  interface Session {
    user: {
      accessToken?: string;
      tokenType?: string;
      expiresIn?: number;
      name?: string;
      email?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    accessToken?: string;
    tokenType?: string;
    expiresIn?: number;
    email?: string;
  }
}
