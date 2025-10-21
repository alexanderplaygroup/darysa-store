'use client';

import { Toggle } from '@/common/components/shadcn-ui/toggle';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shadcnui/button';
import { Checkbox } from '@shadcnui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shadcnui/form';
import { Input } from '@shadcnui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shadcnui/select';
import { FileText } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const personalDataSchema = z.object({
  email: z.email('Correo requerido'),
  name: z.string().min(1, 'Nombre requerido'),
  lastName: z.string().min(1, 'Apellido requerido'),
  documentType: z.string().min(1, 'Seleccione un tipo de documento'),
  documentNumber: z.string().min(1, 'Número de documento requerido'),
  phone: z.string().min(6, 'Teléfono inválido'),
  wantInvoice: z.boolean(),
  rucNumber: z.string().optional(),
  fiscalAddress: z.string().optional(),
  businessName: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val, 'Debe aceptar los términos'),
  dataAuthorization: z.boolean().refine((val) => val, 'Debe autorizar el uso de datos'),
});

type PersonalDataFormValues = z.infer<typeof personalDataSchema>;

type Props = {
  onSubmit: (data: PersonalDataFormValues) => void;
  defaultValues?: Partial<PersonalDataFormValues>;
};

export function PersonalDataForm({ onSubmit, defaultValues }: Props) {
  const form = useForm<PersonalDataFormValues>({
    resolver: zodResolver(personalDataSchema),
    defaultValues: {
      email: '',
      name: '',
      lastName: '',
      documentType: '',
      documentNumber: '',
      phone: '',
      wantInvoice: false,
      rucNumber: '',
      fiscalAddress: '',
      businessName: '',
      termsAccepted: false,
      dataAuthorization: false,
      ...defaultValues, // esto sobrescribe si vienen valores
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2 space-y-4">
        {/* Correo */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darysa-gris-950">Correo</FormLabel>
              <FormControl>
                <Input
                  placeholder="correo@ejemplo.com"
                  className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Nombre y Apellido */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">Nombre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu nombre"
                    className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                    {...field}
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
                <FormLabel className="text-darysa-gris-950">Apellido</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu apellido"
                    className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Documento de Identidad y Número */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">Documento de Identidad</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 !h-10 w-full">
                      <SelectValue placeholder="Escoger Aquí" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dni">DNI</SelectItem>
                      <SelectItem value="passport">Pasaporte</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="documentNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">Número de Documento</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Número de documento"
                    className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Teléfono */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darysa-gris-950">Teléfono Móvil</FormLabel>
              <FormControl>
                <Input
                  placeholder="999999999"
                  className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Deseo Factura */}
        <FormField
          control={form.control}
          name="wantInvoice"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 py-2">
              <FormControl>
                <Toggle
                  pressed={field.value}
                  onPressedChange={field.onChange}
                  aria-label="Deseo Factura"
                  className={cn(
                    'focus-visible:ring-ring flex h-10 items-center gap-2 rounded-lg border px-4 transition-colors outline-none focus-visible:ring-2',
                    'border-darysa-green-500 text-darysa-green-500 hover:bg-darysa-green-500/10 hover:text-darysa-green-500 bg-transparent',
                    'data-[state=on]:bg-darysa-green-500 data-[state=on]:border-darysa-green-500 data-[state=on]:hover:bg-darysa-green-600 data-[state=on]:text-white data-[state=on]:hover:text-white'
                  )}
                >
                  <FileText className="size-5" />
                  Deseo Factura
                </Toggle>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Datos de Factura */}
        {form.watch('wantInvoice') && (
          <div className="grid grid-cols-1 gap-4 pb-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="rucNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-950">Número de RUC</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Número de RUC"
                      className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fiscalAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-950">Dirección Fiscal</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Dirección Fiscal"
                      className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="text-darysa-gris-950">Razón Social</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Razón Social"
                      className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {/* Checkboxes de Términos */}
        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-darysa-verde-oscuro border-darysa-green-500 data-[state=checked]:border-darysa-green-500 size-4.5 bg-white data-[state=checked]:text-white"
                  />
                </FormControl>
                <FormLabel className="text-darysa-gris-950 leading-none">
                  Mensaje de Términos y Condiciones.
                </FormLabel>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dataAuthorization"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-darysa-verde-oscuro border-darysa-green-500 data-[state=checked]:border-darysa-green-500 size-4.5 bg-white data-[state=checked]:text-white"
                  />
                </FormControl>
                <FormLabel className="text-darysa-gris-950 leading-none">
                  Mensaje de Autorización de Datos Personales.
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full items-center justify-center">
          <Button
            type="submit"
            className="bg-darysa-green-500 hover:bg-darysa-green-500/90 mt-2 h-11 w-full max-w-[150px] rounded-lg font-bold"
          >
            Ir a entrega
          </Button>
        </div>
      </form>
    </Form>
  );
}
