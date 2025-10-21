'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shadcnui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shadcnui/form';
import { Input } from '@shadcnui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shadcnui/select';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

//
// ✅ Schema de validación
//
const addressSchema = z.object({
  address: z.string().min(1, 'La dirección es obligatoria'),
  department: z.string().min(1, 'Selecciona un departamento'),
  province: z.string().min(1, 'Selecciona una provincia'),
  district: z.string().min(1, 'Selecciona un distrito'),
  reference: z.string().optional(),
});

type AddressFormSchema = z.infer<typeof addressSchema>;

export default function AddressForm() {
  const form = useForm<AddressFormSchema>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      address: '',
      department: '',
      province: '',
      district: '',
      reference: '',
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: AddressFormSchema) => {
    console.log('📦 Dirección enviada:', data);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Dirección */}
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darysa-gris-950">
                Dirección<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Escribe Aquí" className="h-11" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Departamento / Provincia / Distrito */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FormField
            control={control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">
                  Departamento<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="!h-11 w-full">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lima">Lima</SelectItem>
                      <SelectItem value="arequipa">Arequipa</SelectItem>
                      <SelectItem value="cusco">Cusco</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">
                  Provincia<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="!h-11 w-full">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lima">Lima</SelectItem>
                      <SelectItem value="callao">Callao</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-950">
                  Distrito<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="!h-11 w-full">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="miraflores">Miraflores</SelectItem>
                      <SelectItem value="san-isidro">San Isidro</SelectItem>
                      <SelectItem value="san-juan">San Juan</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Referencia */}
        <FormField
          control={control}
          name="reference"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-darysa-gris-950">Referencia</FormLabel>
              <FormControl>
                <Input placeholder="Escribe Aquí" className="h-11" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Botón */}
        <Button type="submit" size="lg" className="h-12 w-full max-w-[200px] rounded-md">
          Guardar Dirección
        </Button>
      </form>
    </Form>
  );
}
