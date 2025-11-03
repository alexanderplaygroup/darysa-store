'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ButtonWithSpinner } from '@/common/components/custom-ui/ButtonWithSpinner';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Textarea } from '@/common/components/shadcn-ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shadcnui/form';
import { Input } from '@shadcnui/input';
import { useTransition } from 'react';

const formSchema = z.object({
  fullName: z.string().min(2, 'El nombre es obligatorio'),
  lastName: z.string().min(2, 'El apellido es obligatorio'),
  email: z.email('Correo inválido'),
  phone: z.string().min(6, 'Número inválido'),
  companyName: z.string().nonempty('El nombre de la empresa es obligatorio'), // nuevo campo
  rucOrDni: z.string().nonempty('Este campo es obligatorio'),
  comments: z.string().optional(), // Comentarios opcional
});

type JobApplicationValues = z.infer<typeof formSchema>;

const DEFAULT_VALUES: JobApplicationValues = {
  fullName: '',
  lastName: '',
  email: '',
  phone: '',
  rucOrDni: '',
  companyName: '',
  comments: '',
};

export function AboutForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<JobApplicationValues>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const handleSubmit = (values: JobApplicationValues) => {
    startTransition(async () => {
      // Simula petición async
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form submitted:', values);
      form.reset();
    });
  };

  return (
    <div className="space-y-7">
      <Heading as="h1" variant="subheading">
        Servicio al <span className="font-black">Obtén más Información</span>
      </Heading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Nombre y Apellido */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Nombre Completo <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Nombre Completo"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Apellido Completo <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Apellido Completo"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email y Teléfono */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Correo Electrónico <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      disabled={isPending}
                      placeholder="Correo Electrónico"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Teléfono de Contacto <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      disabled={isPending}
                      placeholder="Teléfono"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/*  RUC/DNI */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Nombre de la empresa <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Agrega aquí"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rucOrDni"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Número de RUC / DNI <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="RUC / DNI"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-700 font-semibold">Comentarios</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isPending}
                    placeholder="Escribe aquí tus comentarios"
                    className="h-32"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Submit */}
          <ButtonWithSpinner
            type="submit"
            isLoading={isPending}
            loadingText="Enviando..."
            className="bg-darysa-gris-800 h-12 w-full max-w-[250px] rounded-lg text-base text-white"
          >
            Enviar Información
          </ButtonWithSpinner>
        </form>
      </Form>
    </div>
  );
}
