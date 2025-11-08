'use client';

import { Button } from '@/common/components/shadcn-ui/button';
import { Upload, XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef, useState, type ChangeEvent } from 'react';
import { toast } from 'sonner';

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

interface FormImagePaidProps {
  paymentId: string;
}

export default function FormImagePaid({ paymentId }: FormImagePaidProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const validateFile = (file: File) => {
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      toast.error('Solo se permiten imágenes (jpg, png, webp)');
      return false;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      toast.error(`La imagen no debe superar los ${MAX_FILE_SIZE_MB}MB`);
      return false;
    }
    return true;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && validateFile(selected)) {
      setFile(selected);
    }
  };

  const clearFile = () => {
    setFile(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  const uploadFile = async () => {
    if (!file) {
      toast.error('Selecciona una imagen primero');
      return;
    }

    const formData = new FormData();
    formData.append('voucher', file);

    try {
      setIsUploading(true);

      // Construimos la URL completa usando la variable de entorno NEXT_PUBLIC_API_URL
      const apiUrl = `/payments/${paymentId}/voucher`;

      const res = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al subir la imagen');
      }

      toast.success('Imagen subida con éxito en espera de confirmación', {
        duration: 4000,
        position: 'top-center',
        dismissible: false,
        onAutoClose: () => {
          router.push(`/perfil/pedidos`, {
            scroll: false,
          });
        },
      });
      clearFile();
    } catch (error) {
      console.error(error);
      toast.error((error as Error).message || 'Hubo un problema al subir la imagen');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="mb-10 space-y-4 sm:mb-12">
      <h2 className="text-darysa-gris-800 text-sm font-semibold sm:text-base">
        Agregar voucher de pago:
      </h2>

      <div className="flex items-center gap-4">
        <div className="border-darysa-green-500 relative h-[50px] w-full max-w-[500px] overflow-hidden rounded-xl border px-6 text-center transition-colors">
          <input
            ref={inputRef}
            type="file"
            id="file-upload"
            className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
            onChange={onChange}
            accept={ALLOWED_IMAGE_TYPES.join(',')}
            aria-label="Subir voucher de imagen"
          />

          <div className="pointer-events-none relative z-0 flex h-full items-center justify-center gap-2">
            <Upload className="text-darysa-green-500 size-5" />
            <label
              htmlFor="file-upload"
              className="text-darysa-green-500 cursor-pointer text-sm font-semibold sm:text-base"
            >
              Subir imagen
            </label>
          </div>

          {file && (
            <div className="absolute inset-0 z-10 flex h-full items-center justify-between bg-gray-50 px-4 text-sm text-gray-600">
              <span className="truncate pr-8">{file.name}</span>
              <button
                type="button"
                onClick={clearFile}
                aria-label="Eliminar imagen"
                className="text-red-500 hover:text-red-700"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <Button
          disabled={!file || isUploading}
          className="bg-brand-red hover:bg-brand-red rounded-xl px-6 text-white"
          onClick={uploadFile}
        >
          {isUploading ? 'Subiendo...' : 'Subir Voucher'}
        </Button>
      </div>
    </div>
  );
}
