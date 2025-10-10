'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ButtonWithSpinner } from '@/common/components/custom-ui/ButtonWithSpinner';
import { cn } from '@/lib/utils';
import { Checkbox } from '@shadcnui/checkbox';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shadcnui/select';
import { useTransition } from 'react';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain', // TXT (opcional)
];

const formSchema = z.object({
  firstName: z.string().min(2, 'El nombre es obligatorio'),
  lastName: z.string().min(2, 'El apellido es obligatorio'),
  email: z.email('Correo inválido'),
  phone: z.string().min(6, 'Número inválido'),
  area: z.string().nonempty('Selecciona un área'),
  position: z.string().nonempty('Selecciona un puesto'),
  location: z.string().nonempty('Selecciona una ubicación'),
  employmentStatus: z.string().nonempty('Selecciona una situación laboral'),
  acceptedPolicy: z.boolean().refine((v) => v === true, 'Debes aceptar la política'),
  cv: z
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
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  area: '',
  position: '',
  location: '',
  employmentStatus: '',
  acceptedPolicy: true,
  cv: undefined,
};

export function JobApplicationForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<JobApplicationValues>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const handleSubmit = (values: JobApplicationValues) => {
    startTransition(async () => {
      // Simula una petición async con await
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 2 segundos de espera
      console.log('Form submitted:', values);
      form.reset(DEFAULT_VALUES);
    });
  };

  return (
    <div>
      <h1 className="text-darysa-verde-oscuro mb-8 text-3xl font-semibold">
        Sé parte de un <span className="font-black">Gran Equipo</span>
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Nombre y Apellido */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                      placeholder="Agregar Aquí"
                      {...field}
                      className="h-10"
                      disabled={isPending}
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
                    Apellido Completo
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Agregar Aquí"
                      {...field}
                      className="h-10"
                      disabled={isPending}
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
                    Correo Electrónico
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Agregar Aquí"
                      {...field}
                      className="h-10"
                      disabled={isPending}
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
                  <FormLabel className="text-darysa-gris-700 font-semibold">Teléfono</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Agregar Aquí"
                      {...field}
                      className="h-10"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Área y Puesto */}
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-700 font-semibold">
                  Área a Postular
                </FormLabel>
                <Select
                  value={field.value || ''} // <--- aquí
                  onValueChange={field.onChange}
                  disabled={isPending}
                >
                  <FormControl>
                    <SelectTrigger className="!h-10 w-full">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ventas">Ventas</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="tecnologia">Tecnología</SelectItem>
                    <SelectItem value="recursos-humanos">Recursos Humanos</SelectItem>
                    <SelectItem value="finanzas">Finanzas</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darysa-gris-700 font-semibold">
                  Puesto a Postular
                </FormLabel>
                <Select
                  value={field.value || ''} // <--- aquí
                  onValueChange={field.onChange}
                  disabled={isPending}
                >
                  <FormControl>
                    <SelectTrigger className="!h-10 w-full">
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="semi-senior">Semi Senior</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                    <SelectItem value="gerente">Gerente</SelectItem>
                    <SelectItem value="director">Director</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Ubicación y Situación */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Lugar a Postular
                  </FormLabel>
                  <Select
                    value={field.value || ''} // <--- aquí
                    onValueChange={field.onChange}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger className="!h-10 w-full">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="remoto">Remoto</SelectItem>
                      <SelectItem value="oficina-central">Oficina Central</SelectItem>
                      <SelectItem value="sucursal-norte">Sucursal Norte</SelectItem>
                      <SelectItem value="sucursal-sur">Sucursal Sur</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="employmentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darysa-gris-700 font-semibold">
                    Situación actual laboral
                  </FormLabel>
                  <Select
                    value={field.value || ''} // <--- aquí
                    onValueChange={field.onChange}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger className="!h-10 w-full">
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="empleado">Empleado</SelectItem>
                      <SelectItem value="desempleado">Desempleado</SelectItem>
                      <SelectItem value="estudiante">Estudiante</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* CV Upload */}
          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="cv" className="text-darysa-gris-700 font-semibold">
                  Adjuntar CV
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
                      <span className="text-darysa-amarillo text-sm">Subir Archivo</span>
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
            className="bg-darysa-gris-oscuro h-12 w-full max-w-[250px] rounded-lg text-base text-white"
          >
            Enviar Información
          </ButtonWithSpinner>
        </form>
      </Form>
    </div>
  );
}
