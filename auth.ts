/* eslint-disable @typescript-eslint/no-unused-vars */

import authConfig from '@/auth.config';
import { API_URL } from '@/config/env.config';
import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  // basePath: "/auth",
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/error',
  },
  // debug: process.env.NODE_ENV === "development",
  debug: process.env.NODE_ENV !== 'production',
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === 'google' && user) {
        // Aquí intercambias token Google por JWT backend
        const backendToken = await fetch(`${API_URL}/auth/login-google`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: account.id_token }),
        }).then((res) => res.json());

        token.accessToken = backendToken.data.accessToken; // el JWT que responde tu backend
        token.tokenType = backendToken.data.tokenType;
        token.expiresIn = backendToken.data.expiresIn;
      }

      // ✅ Login por credentials
      if (account?.provider === 'credentials' && user) {
        token.accessToken = user.accessToken;
        token.tokenType = user.tokenType;
        token.expiresIn = user.expiresIn;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }: { session: DefaultSession; token: JWT }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
        tokenType: token.tokenType,
        expiresIn: token.expiresIn,
        email: token.email ?? session.user?.email ?? '',
      };
      return session;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}`;
    },
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,

  // TODO: REVISAR MAXAGE
  // jwt: {
  //     secret: process.env.NEXTAUTH_SECRET,
  //     maxAge: 30 * 24 * 60 * 60,
  // },
});
