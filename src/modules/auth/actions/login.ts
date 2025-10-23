'use server';

import * as z from 'zod';

import { signIn } from '@auth';
import { loginSchema } from '../components/LoginForm';

export async function Login(values: z.infer<typeof loginSchema>) {
  try {
    await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    return { success: 'Has iniciado sesión correctamente.' };
  } catch (error) {
    console.error('Error signing in:', error);
    return { error: '¡Correo o contraseña inválida!' };
  }
}
