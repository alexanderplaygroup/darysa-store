import CredentialsProvider from 'next-auth/providers/credentials';

import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './config/env.config';
import { loginUser } from './modules/auth/auth.service';

export default {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'select_account',
        },
      },
    }),
    CredentialsProvider({
      credentials: {
        email: { label: 'Correo electrónico', type: 'text' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        // console.log('✅ authorize ejecutándose...');
        if (!credentials) return null;
        const { email, password } = credentials as { email: string; password: string };

        try {
          const response = await loginUser({ email, password });

          // console.log('🔍 Respuesta auth.Service:', response);

          if (!response?.ok) {
            return null;
          }
          const user = response.data;
          if (!user) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.full_name,
          };
        } catch (error) {
          // console.error('🛑 Error en authorize():', error);

          if (error instanceof Error) {
            throw new Error(error.message);
          }

          throw new Error('Fallo inesperado al iniciar sesión');
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
