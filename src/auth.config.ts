import CredentialsProvider from 'next-auth/providers/credentials';

import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './config/env.config';

const users = [
  {
    id: '1',
    email: 'test@example.com',
    password: '123456', // ¡en producción nunca guardes así!
    name: 'Usuario Test',
  },
];
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
      // id: "credentials",
      // name: "Credentials",
      // type: "credentials",
      credentials: {
        email: { label: 'Correo electrónico', type: 'text' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        console.log('✅ authorize ejecutándose...');

        // Busca usuario de prueba
        const user = users.find(
          (u) => u.email === credentials?.email && u.password === credentials?.password
        );

        if (!user) {
          // Retorna null si no coincide
          return null;
        }

        // Devuelve el objeto que se guarda en session
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          accessToken: 'test-token', // token de prueba
        };
        // try {
        //   const res = await fetch(`${API_URL}/auth/login`, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       email: credentials.email,
        //       password: credentials.password,
        //     }),
        //   });

        //   const user = await res.json();

        //   if (!res.ok) {
        //     // Lanza el error compleot aqui
        //     return null;

        //     // throw new Error(user?.message)
        //   }

        //   const { accessToken, tokenType, expiresIn } = user.data;

        //   return {
        //     id: '1',
        //     email: credentials?.email as string,
        //     accessToken,
        //     tokenType,
        //     expiresIn,
        //   };
        // } catch (error) {
        //   // console.error("🛑 Error en authorize():", error)
        //   // Este error se transforma en `Default` en el frontend

        //   if (error instanceof Error) {
        //     throw new Error(error.message);
        //   }

        //   throw new Error('Fallo inesperado al iniciar sesión');
        // }
      },
    }),
  ],
} satisfies NextAuthConfig;
