'use client';

import { AppImage } from '@/common/components/custom-ui/AppImage';
import { ButtonWithSpinner } from '@/common/components/custom-ui/ButtonWithSpinner';
import { Heading } from '@/common/components/custom-ui/Heading';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shadcnui/button';
import { Checkbox } from '@shadcnui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@shadcnui/dialog';
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
import { Upload, X } from 'lucide-react';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
];

// ✅ Validation schema
const formSchema = z.object({
  firstName: z.string().min(2, 'Nombre es requerido'),
  lastName: z.string().min(2, 'Apellido es requerido'),
  email: z.email('Correo electrónico inválido'),
  phone: z.string().min(6, 'Debe tener al menos 6 dígitos').max(15, 'Número demasiado largo'),
  resume: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      'El archivo debe ser más pequeño que 2 MB'
    )
    .refine(
      (file) =>
        !file ||
        /\.(pdf|doc|docx|txt)$/i.test(file.name) ||
        ACCEPTED_FILE_TYPES.includes(file.type),
      'Solo se permiten archivos PDF o Word (.pdf, .doc, .docx)'
    ),
  privacy: z.literal(true, {
    message: 'Debes aceptar la Política de Privacidad',
  }),
});

export function JoinTeamModalForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      privacy: true,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      // 📨 Simulated API call
      await new Promise((res) => setTimeout(res, 2000));
      console.log('Form submitted:', values);
      form.reset();
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-darysa-gris-800 h-16 w-full text-xl font-bold text-white hover:bg-gray-900">
          Postular
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        preventOutsideClose
        className="p-0 sm:max-w-2xl lg:max-w-4xl"
      >
        <DialogClose className="text-darysa-verde-oscuro absolute -top-4 -right-4 flex size-12 cursor-pointer items-center justify-center rounded-full border bg-white drop-shadow-lg">
          <X size={30} strokeWidth={3.5} />
        </DialogClose>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side (image) */}
          <div className="relative h-full w-full overflow-hidden rounded-l-lg">
            <AppImage src="/about/aboutProm.png" alt="Team image" fill sizes="440px" />
          </div>

          {/* Right side (form) */}
          <div className="px-8 py-12">
            <DialogHeader className="mb-8">
              <DialogTitle asChild>
                <Heading
                  as="h2"
                  variant="subheading"
                  className="flex flex-col font-bold md:text-2xl"
                >
                  Sé parte de un <span className="text-4xl font-black">Gran Equipo</span>
                </Heading>
              </DialogTitle>
              <DialogDescription className="sr-only">un gran equipo!</DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-darysa-gris-700 font-semibold">
                        Nombre Completo
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Escribe Aquí"
                          {...field}
                          className="h-10"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-darysa-gris-700 font-semibold">
                        Apellido Completo
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Escribe Aquí"
                          {...field}
                          className="h-10"
                          disabled={isPending}
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
                      <FormLabel className="text-darysa-gris-700 font-semibold">
                        Correo Electrónico
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Escribe Aquí"
                          {...field}
                          className="h-10"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-darysa-gris-700 font-semibold">Teléfono</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Escribe Aquí"
                          {...field}
                          className="h-10"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Resume Upload */}
                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="resume" className="text-darysa-gris-700 font-semibold">
                        Adjuntar CV
                      </FormLabel>
                      <FormControl>
                        <div className="relative h-10 w-full">
                          <Input
                            id="resume"
                            type="file"
                            accept=".pdf,.doc,.docx,.txt"
                            onChange={(e) => field.onChange(e.target.files?.[0])}
                            className="hidden"
                            disabled={isPending}
                          />
                          <label
                            htmlFor="resume"
                            className={cn(
                              'border-darysa-amarillo relative z-10 flex h-10 w-full items-center justify-center rounded-md border px-4 transition-colors',
                              isPending
                                ? 'cursor-not-allowed opacity-50'
                                : 'cursor-pointer hover:bg-yellow-50'
                            )}
                          >
                            <Upload className="text-darysa-amarillo mr-2 h-5 w-5" />
                            <span className="text-darysa-amarillo text-sm">Subir Archivo</span>
                          </label>
                        </div>
                      </FormControl>
                      <FormDescription>
                        {field.value
                          ? field.value.name
                          : 'Formatos permitidos: PDF, Word (máx 2MB)'}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Privacy Checkbox */}
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex items-start gap-2 pt-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="text-darysa-gris-500 text-sm leading-tight">
                        Acepto haber leído la
                        <a href="/privacy-policy" className="text-green-600 underline">
                          Política de Privacidad.
                        </a>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <DialogFooter className="pt-4">
                  <ButtonWithSpinner
                    type="submit"
                    isLoading={isPending}
                    loadingText="Enviando..."
                    className="bg-darysa-gris-800 mx-auto h-12 w-full max-w-[250px] rounded-lg text-base text-white"
                  >
                    Enviar Información
                  </ButtonWithSpinner>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
