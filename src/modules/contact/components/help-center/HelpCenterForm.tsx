'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ButtonWithSpinner } from '@/common/components/custom-ui/ButtonWithSpinner';
import { Heading } from '@/common/components/custom-ui/Heading';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/shadcn-ui/select';
import { Textarea } from '@/common/components/shadcn-ui/textarea';
import { cn } from '@/lib/utils';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@shadcnui/form';
import { Input } from '@shadcnui/input';
import { Upload } from 'lucide-react';
import { useTransition } from 'react';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain', // TXT (opcional)
];

const formSchema = z.object({
  fullName: z.string().min(2, 'El nombre es obligatorio'),
  lastName: z.string().min(2, 'El apellido es obligatorio'),
  email: z.email('Correo inválido'),
  phone: z.string().min(6, 'Número inválido'),
  contact_reason: z.string().nonempty('Selecciona un área'),
  purchase_document: z.string().nonempty('Selecciona un área'),
  rucOrDni: z.string().nonempty('Este campo es obligatorio'),
  purchaseDate: z.string().nonempty('Este campo es obligatorio'),
  comments: z.string().optional(), // Comentarios opcional
  file: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, 'El archivo debe pesar menos de 8 MB')
    .refine(
      (file) =>
        !file ||
        /\.(pdf|doc|docx|txt)$/i.test(file.name) ||
        ACCEPTED_FILE_TYPES.includes(file.type),
      'Solo se permiten archivos PDF o Word (.pdf, .doc, .docx)'
    ),
});

type JobApplicationValues = z.infer<typeof formSchema>;

const DEFAULT_VALUES: JobApplicationValues = {
  fullName: '',
  lastName: '',
  email: '',
  phone: '',
  rucOrDni: '',
  purchaseDate: '',
  comments: '',
  file: undefined,
  contact_reason: '',
  purchase_document: '',
};

export function HelpCenterForm() {
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
      <Heading as="h1" variant="subheading" className="text-2xl">
        Centro de <span className="font-black">ayuda</span>
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
                      placeholder="Nombre Completo "
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="contact_reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Motivo de la consulta
                  </FormLabel>
                  <Select
                    value={field.value || ''} // <--- aquí
                    onValueChange={field.onChange}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10! w-full">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="soporte-compra">
                        Deseo soporte para comprar en la página web
                      </SelectItem>
                      <SelectItem value="estado-pedido">
                        Quiero conocer el status de mi pedido online
                      </SelectItem>
                      <SelectItem value="problema-pedido">
                        Dudas sobre métodos de pago o facturación
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="purchase_document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Documento de compra
                  </FormLabel>
                  <Select
                    value={field.value || ''} // <--- aquí
                    onValueChange={field.onChange}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger className="h-10! w-full">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="boleta">Boleta</SelectItem>
                      <SelectItem value="factura">Factura </SelectItem>
                    </SelectContent>
                  </Select>
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
                    DNI / CE o RUC
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="DNI / CE o RUC"
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
              name="purchaseDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Fecha de compra<span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Agregar aquí"
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
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="cv" className="text-darysa-gris-700 font-semibold">
                  Adjuntar un Archivo{' '}
                </FormLabel>
                <FormControl>
                  <div className="relative h-10 w-full max-w-[300px]">
                    <Input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                      className="hidden"
                      disabled={isPending}
                    />
                    <label
                      htmlFor="cv"
                      className={cn(
                        'border-darysa-amarillo flex h-10 w-full items-center justify-center rounded-md border px-4 transition-colors',
                        isPending
                          ? 'cursor-not-allowed opacity-50'
                          : 'cursor-pointer hover:bg-yellow-50'
                      )}
                    >
                      <Upload className="text-darysa-amarillo mr-2 h-5 w-5" />
                      <span className="text-darysa-amarillo text-sm">Adjuntar un Archivo</span>
                    </label>
                  </div>
                </FormControl>
                <FormDescription>
                  {field.value ? field.value.name : 'Formatos permitidos: PDF, Word (máx 2MB)'}
                </FormDescription>
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
