'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shadcnui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shadcnui/form';
import { RadioGroup, RadioGroupItem } from '@shadcnui/radio-group';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Validación Zod
const paymentSchema = z.object({
  method: z.string().refine((val) => val === 'bank_transfer' || val === 'credit_card', {
    message: 'Seleccione un método de pago',
  }),
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

type Props = {
  onSubmit: (data: PaymentFormValues) => void;
  defaultValues?: Partial<PaymentFormValues>;
};

export function PaymentForm({ onSubmit, defaultValues }: Props) {
  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      method: 'bank_transfer',
      ...defaultValues,
    },
  });

  const paymentOptions = [
    { value: 'bank_transfer', label: 'Transferencia Bancaria' },
    { value: 'credit_card', label: 'Pagar con Tarjeta' },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="method"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Método de Pago</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col gap-4"
                >
                  {paymentOptions.map((option) => (
                    <label
                      key={option.value}
                      htmlFor={option.value}
                      className="text-darysa-gris-950 border-darysa-green-500 flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3.5"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="border-darysa-green-500 size-6"
                        iconClassName="fill-darysa-green-500 size-4 stroke-0"
                      />
                      {option.label}
                    </label>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-darysa-green-500 hover:bg-darysa-green-500/90 mt-2 h-11 w-full max-w-[150px] rounded-lg font-bold"
          >
            Confirmar Pago
          </Button>
        </div>
      </form>
    </Form>
  );
}
