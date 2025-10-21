'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shadcnui/button';
import { Checkbox } from '@shadcnui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shadcnui/form';
import { Input } from '@shadcnui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const addressSchema = z.object({
  department: z.string().min(1, 'El departamento es obligatorio'),
  province: z.string().min(1, 'La provincia es obligatoria'),
  district: z.string().min(1, 'El distrito es obligatorio'),
  address: z.string().min(1, 'La dirección es obligatoria'),
  number: z.string().optional(),
  floor: z.string().optional(),
  reference: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val, 'Debe aceptar los términos'),
});

export type AddressFormValues = z.infer<typeof addressSchema>;

type Props = {
  onSubmit: (data: AddressFormValues) => void;
  defaultValues?: Partial<AddressFormValues>;
};

export function AddressForm({ onSubmit, defaultValues }: Props) {
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      department: '',
      province: '',
      district: '',
      address: '',
      number: '',
      floor: '',
      reference: '',
      termsAccepted: false,
      ...defaultValues,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Departamento */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">Departamento</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Departamento"
                    className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Provincia */}
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">Provincia</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Provincia"
                    className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Distrito */}
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">Distrito</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Distrito"
                    className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Dirección */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">Dirección</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Dirección"
                    className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Número y Piso/Dpto */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">Número</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Número"
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
            name="floor"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">Piso / Dpto</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Piso / Dpto"
                    className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Referencia */}
        <FormField
          control={form.control}
          name="reference"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darysa-gris-950">Referencia</FormLabel>
              <FormControl>
                <Input
                  placeholder="Referencia"
                  className="border-darysa-green-500 placeholder:text-darysa-gris-250 text-darysa-gris-950 h-10"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Checkbox de términos */}
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
                  Acepto los términos y condiciones.
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-darysa-green-500 hover:bg-darysa-green-500/90 mt-2 h-11 w-full max-w-[150px] rounded-lg font-bold"
          >
            Continuar Pago
          </Button>
        </div>
      </form>
    </Form>
  );
}
