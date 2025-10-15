'use client';

import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { Skeleton } from '../shadcn-ui/skeleton';

type AppImageProps = ImageProps & {
  /**
   * Si la imagen falla o no hay src, se muestra un bloque de fallback.
   */
};

export function AppImage({
  src,
  alt = 'Imagen no disponible',
  className,
  ...props
}: AppImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // ⚠️ Fallback por error o sin src
  if (!src || hasError) {
    return (
      <div
        className={cn(
          'bg-accent flex h-full w-full items-center justify-center rounded-lg text-sm text-gray-500',
          className
        )}
      >
        Imagen no disponible
      </div>
    );
  }

  const isFill = 'fill' in props && props.fill === true;

  // 🧩 Caso 1: Imagen con fill (no envolvemos)
  if (isFill) {
    return (
      <>
        {isLoading && <Skeleton className={cn('absolute inset-0', className)} />}
        <Image
          {...props}
          src={src}
          alt={alt}
          className={cn(
            'object-cover transition-opacity duration-500',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
        />
      </>
    );
  }

  // 🧩 Caso 2: Imagen con width / height (envolvemos para mantener layout)
  return (
    <div className={cn('relative inline-block', className)}>
      {isLoading && <Skeleton className="absolute inset-0 h-full w-full rounded-lg" />}
      <Image
        {...props}
        src={src}
        alt={alt}
        className={cn(
          'object-cover transition-opacity duration-500',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
