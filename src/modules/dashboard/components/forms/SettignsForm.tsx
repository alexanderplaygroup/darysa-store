'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shadcnui/button';
import { Checkbox } from '@shadcnui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shadcnui/form';
import { Input } from '@shadcnui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

//
// ✅ Schema alineado con react-hook-form
//
const formSchema = z
  .object({
    full_name: z.string().min(1, 'El nombre es obligatorio'),
    email: z.email('El correo electrónico no es válido'),
    dni: z.string().regex(/^\d{8}$/, 'Debe tener 8 dígitos'),
    phone: z.string().regex(/^\d{9}$/, 'Debe tener 9 dígitos'),
    is_company: z.boolean(), // <--- obligatorio con valor por defecto
    ruc: z.string().optional(),
    social_reason: z.string().optional(),
  })
  .refine((data) => !data.is_company || (!!data.ruc && /^\d{11}$/.test(data.ruc)), {
    path: ['ruc'],
    message: 'El RUC es obligatorio y debe tener 11 dígitos si activas datos de empresa',
  })
  .refine((data) => !data.is_company || !!data.social_reason?.trim(), {
    path: ['social_reason'],
    message: 'La razón social es obligatoria si activas datos de empresa',
  });

type FormSchema = z.infer<typeof formSchema>;

export default function SettingsForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: '',
      email: '',
      dni: '',
      phone: '',
      is_company: false, // ✅ debe estar
      ruc: '',
      social_reason: '',
    },
  });

  const { control, handleSubmit, watch } = form;
  const isCompany = watch('is_company');

  const onSubmit = (data: FormSchema) => {
    console.log('📦 Datos enviados:', data);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={control}
            name="full_name"
            render={({ field }) => (
              <FormItem className="gap-3">
                <FormLabel className="text-darysa-gris-950">Nombre Completo</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Escribe Aquí" className="h-11" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem className="gap-3">
                <FormLabel className="text-darysa-gris-950">Teléfono</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Escribe Aquí" className="h-11" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={control}
            name="dni"
            render={({ field }) => (
              <FormItem className="gap-3">
                <FormLabel className="text-darysa-gris-950">DNI</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Escribe Aquí" className="h-11" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className="gap-3">
                <FormLabel className="text-darysa-gris-950">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Escribe Aquí" className="h-11" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center space-x-2">
          <FormField
            control={control}
            name="is_company"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-y-0 space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                </FormControl>
                <FormLabel className="text-darysa-gris-950">
                  Datos de Facturación (opcional)
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {isCompany && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={control}
              name="ruc"
              render={({ field }) => (
                <FormItem className="gap-3">
                  <FormLabel className="text-darysa-gris-950">RUC</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Escribe Aquí" className="h-11" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="social_reason"
              render={({ field }) => (
                <FormItem className="gap-3">
                  <FormLabel className="text-darysa-gris-950">Razón Social</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Escribe Aquí" className="h-11" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <Button type="submit" size="lg" className="h-12 w-full max-w-[200px] rounded-md">
          Guardar Cambios
        </Button>
      </form>
    </Form>
  );
}
