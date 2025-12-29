'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ButtonWithSpinner } from '@/common/components/custom-ui/ButtonWithSpinner';
import { Heading } from '@/common/components/custom-ui/Heading';
import { showCustomToast } from '@/common/components/custom-ui/ShowCustomToast';
import { GoogleIcon } from '@/common/components/icons/GoogleIcon';
import { Button } from '@/common/components/shadcn-ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/common/components/shadcn-ui/form';
import { Input } from '@/common/components/shadcn-ui/input';
import { useAuthStore } from '@/common/store/auth/useAuthStore';
import { useGoogleIdentity } from '@/lib/hooks/useGoogleIdentity';
import { useRouter } from 'next/navigation';
import { loginUser, loginWithGoogle } from '../auth.service';

// Esquema de validación con Zod
export const loginSchema = z.object({
  email: z.email('Ingrese un email válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition(); // hook de transición
  const router = useRouter();
  const { setUser } = useAuthStore(); // destructuras directamente

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { prompt: promptGoogle } = useGoogleIdentity(async (credential) => {
    const result = await loginWithGoogle(credential);
    if (!result.success) {
      showCustomToast({ variant: 'error', title: 'Error', message: result.message });
      return;
    }

    setUser(result.data!);
    showCustomToast({
      variant: 'success',
      title: 'Bienvenido',
      message: 'Inicio de sesión con Google exitoso',
    });
    router.replace('/');
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      const result = await loginUser(values);

      if (!result.success) {
        // Muestra error
        showCustomToast({
          variant: 'error',
          title: 'Error al iniciar sesión',
          message: result.message,
        });
        return;
      }
      setUser(result.data!);

      // Login exitoso
      showCustomToast({
        variant: 'success',
        title: result.message,
        message: 'Has iniciado sesión correctamente.',
      });

      // Redirección o actualización
      router.replace('/');
    });
  };

  return (
    <div className="border-darysa-gris-350-alt/60 rounded-xl border bg-white p-8 shadow-lg md:p-12">
      <Heading
        as="h2"
        variant="subheading"
        className="text-darysa-gris-550 mb-8 text-base sm:text-lg md:text-xl"
      >
        Entrar con e-mail y contraseña
      </Heading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4.5">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-550 font-semibold">
                  Email <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Escribe Aquí"
                    className="placeholder:text-darysa-gray-500 h-12 rounded-sm"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-550 font-semibold">
                  Contraseña <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Contraseña"
                      className="placeholder:text-darysa-gray-500 h-12 pr-12"
                      disabled={isPending}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                      aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mb-6.5">
            <Link
              href="/recuperar-contrasena"
              className="text-darysa-gris-750-alt hover:text-foreground text-sm hover:underline"
            >
              Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ButtonWithSpinner
              type="submit"
              isLoading={isPending}
              loadingText="Ingresando..."
              className="bg-darysa-gris-800 h-12 rounded-sm text-base font-semibold text-white hover:bg-[#1a1a1a]"
            >
              Ingresar
            </ButtonWithSpinner>
            <Button
              type="button"
              variant="outline"
              className="border-darysa-gris-800 text-darysa-gris-800 rounded-sm border bg-transparent px-0! text-base font-semibold hover:bg-gray-50"
              asChild
            >
              <Link href="/registro">Crear una Cuenta</Link>
            </Button>
          </div>
        </form>
      </Form>

      {/* Divider */}
      <div className="mt-10 mb-2.5">
        <p className="text-foreground text-base">Puedes iniciar sesión también con:</p>
      </div>

      {/* Google Sign-In */}
      <Button
        type="button"
        variant="outline"
        onClick={promptGoogle}
        className="border-darysa-gris-800 h-14 w-full rounded-sm border bg-transparent text-base font-semibold hover:bg-gray-50"
      >
        <GoogleIcon className="size-4.5" />
        Inicia Sesión con Google
      </Button>
      {/* <div id="google-btn" /> */}
    </div>
  );
}
