'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Lock } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ButtonWithSpinner } from '@/common/components/custom-ui/ButtonWithSpinner';
import { Heading } from '@/common/components/custom-ui/Heading';
import { showCustomToast } from '@/common/components/custom-ui/ShowCustomToast';
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
import { getErrorMessage } from '@/common/helpers/apiMessages';
import { useAuthStore } from '@/common/store/auth/useAuthStore';
import { useGoogleAuth } from '@/lib/hooks/useGoogleIdentity';
import { useRouter } from 'next/navigation';
import { loginWithGoogle, registerUser } from '../auth.service';

const registerSchema = z
  .object({
    full_name: z.string().min(1, 'El nombre completo es obligatorio'),
    email: z.email({ message: 'Ingrese un email válido' }),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string().min(6, 'Debe repetir la contraseña'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Las contraseñas no coinciden',
  });

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const { setUser, isAuthenticated } = useAuthStore();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
  };

  const { renderGoogleButton } = useGoogleAuth({
    isAuthenticated: isAuthenticated,

    onSuccess: async (token) => {
      // AQUÍ 'token' YA ES EL ID TOKEN (JWT)
      const result = await loginWithGoogle(token);

      if (!result.success) {
        showCustomToast({ variant: 'error', title: 'Error', message: result.message });
        return;
      }
      setUser(result.data!);
      window.location.replace('/');
    },
  });

  useEffect(() => {
    // 'google-btn-container' es el ID del div donde se pintará
    renderGoogleButton('google-btn-container-register');
  }, [renderGoogleButton]);

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    startTransition(async () => {
      const payload = {
        full_name: values.full_name,
        email: values.email,
        password: values.password,
      };

      const result = await registerUser(payload);

      if (!result.success) {
        showCustomToast({
          variant: 'error',
          title: result.message || 'Errores de validación',
          message: getErrorMessage(result),
        });
        return; // sale si hay error
      }

      // Registro exitoso
      showCustomToast({
        variant: 'success',
        title: result.message,
      });

      form.reset();
      router.push('/login');
    });
  };

  return (
    <div className="border-darysa-gris-350-alt/60 rounded-xl border bg-white p-8 shadow-lg md:px-12 md:py-10">
      <Heading
        as="h2"
        variant="subheading"
        className="text-darysa-gris-550 mb-8 text-base sm:text-lg md:text-xl"
      >
        Registrarme con e-mail y contraseña
      </Heading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4.5">
          {/* Nombre Completo */}
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-550 font-semibold">
                  Nombre Completo <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Escribe tu nombre completo"
                    className="placeholder:text-darysa-gray-500 h-12 rounded-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
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
                    placeholder="Escribe tu correo"
                    className="placeholder:text-darysa-gray-500 h-12 rounded-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
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

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-550 font-semibold">
                  Repetir Contraseña <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Repite tu contraseña"
                      className="placeholder:text-darysa-gray-500 h-12 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                      aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Link recuperar contraseña */}
          <div className="mb-6.5">
            <Link
              href="/recuperar-contrasena"
              className="text-darysa-gris-750-alt hover:text-foreground text-sm hover:underline"
            >
              Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Botón principal */}
          <ButtonWithSpinner
            type="submit"
            isLoading={isPending}
            loadingText="Ingresando..."
            className="bg-darysa-gris-800 h-12 w-full rounded-sm text-base font-semibold text-white hover:bg-[#1a1a1a]"
          >
            Registrarme
          </ButtonWithSpinner>
        </form>
      </Form>

      {/* Divider */}
      <div className="mt-10 mb-2.5">
        <p className="text-foreground text-base">Puedes iniciar sesión también con:</p>
      </div>

      {/* Google Sign-In */}
      {/* <Button
        type="button"
        variant="outline"
        onClick={handleGoogleSignIn}
        className="border-darysa-gris-800 h-14 w-full rounded-sm border bg-transparent text-base font-semibold hover:bg-gray-50"
      >
        <GoogleIcon className="size-4.5" />
        Inicia Sesión con Google
      </Button> */}
      <div id="google-btn-container-register" />

      {/* Botón adicional */}
      <Button
        type="button"
        variant="outline"
        className="border-darysa-gris-800 mt-3 h-14 w-full rounded-sm border bg-transparent text-base font-semibold hover:bg-gray-50"
        asChild
      >
        <Link href="/login" className="flex items-center gap-2.5">
          <Lock />
          Inicia Sesión con Contraseña
        </Link>
      </Button>
    </div>
  );
}
