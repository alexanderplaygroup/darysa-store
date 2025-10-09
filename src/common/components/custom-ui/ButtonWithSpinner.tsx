'use client';

import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';

interface ButtonWithSpinnerProps extends ComponentPropsWithoutRef<'button'> {
  isLoading?: boolean;
  loadingText?: string;
}

export function ButtonWithSpinner({
  isLoading = false,
  loadingText = 'Cargando...',
  children,
  className,
  disabled,
  ...props
}: ButtonWithSpinnerProps) {
  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={cn(
        'flex cursor-pointer items-center justify-center gap-2',
        isLoading && 'cursor-default opacity-50',
        className
      )}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
}
