'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ButtonWithSpinner } from '@/common/components/custom-ui/ButtonWithSpinner';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Checkbox } from '@shadcnui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shadcnui/form';
import { Input } from '@shadcnui/input';
import { useTransition } from 'react';

const formSchema = z.object({
  fullName: z.string().min(2, 'El nombre es obligatorio'),
  lastName: z.string().min(2, 'El apellido es obligatorio'),
  email: z.email('Correo inválido'),
  phone: z.string().min(6, 'Número inválido'),
  address: z.string().nonempty('La dirección es obligatoria'),
  department: z.string().nonempty('Selecciona un departamento'),
  province: z.string().nonempty('Selecciona una provincia'),
  district: z.string().nonempty('Selecciona un distrito'),
  numberOfSellers: z
    .string()
    .regex(/^\d+$/, 'Debe ser un número')
    .nonempty('Este campo es obligatorio'),
  rucOrDni: z.string().nonempty('Este campo es obligatorio'),
  companyOrFullName: z.string().nonempty('Este campo es obligatorio'),
  otherProducts: z.string().optional(),
  acceptedPolicy: z.boolean().refine((v) => v === true, 'Debes aceptar la política'),
});

type JobApplicationValues = z.infer<typeof formSchema>;

const DEFAULT_VALUES: JobApplicationValues = {
  fullName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  department: '',
  province: '',
  district: '',
  numberOfSellers: '',
  rucOrDni: '',
  companyOrFullName: '',
  otherProducts: '',
  acceptedPolicy: true,
};

export function DistributorsForm() {
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
      form.reset(DEFAULT_VALUES);
    });
  };

  return (
    <div className="space-y-7">
      <Heading as="h1" variant="subheading">
        Sé parte de nuestra <span className="font-black">Red de Distribuidores </span>
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

          {/* Dirección */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-700 font-semibold">
                  Dirección <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} placeholder="Dirección" className="h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Departamento, Provincia, Distrito */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Departamento <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Departamento"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Provincia <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Provincia"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Distrito <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Distrito"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numberOfSellers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Número de Vendedores
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Número de Vendedores"
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
            {/* Razón Social / Nombre Completo */}
            <FormField
              control={form.control}
              name="companyOrFullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Razón Social / Nombre Completo <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Razón Social / Nombre Completo"
                      className="h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Otros productos */}
          <FormField
            control={form.control}
            name="otherProducts"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-700 font-semibold">
                  ¿Qué otros productos distribuye?
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Otros productos"
                    className="h-10"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Checkbox */}
          <FormField
            control={form.control}
            name="acceptedPolicy"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3.5 py-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isPending}
                  />
                </FormControl>
                <FormLabel className="text-sm leading-relaxed text-gray-700">
                  Acepto haber leído la Política de Privacidad Web.
                </FormLabel>
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
