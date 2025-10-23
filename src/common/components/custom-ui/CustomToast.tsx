'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertTriangle, Check, Heart, Info, LogIn, ShoppingBag, Truck } from 'lucide-react';

/**
 * Configuración de variantes con cva (Class Variance Authority)
 * para manejar color, fondo y estilos por tipo.
 */
const toastVariants = cva(
  'border rounded-lg shadow-lg p-4 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4',
  {
    variants: {
      variant: {
        success: 'bg-green-50 border-green-200 text-green-900',
        error: 'bg-red-50 border-red-200 text-red-900',
        info: 'bg-blue-50 border-blue-200 text-blue-900',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
        cart: 'bg-blue-50 border-blue-200 text-blue-900',
        wishlist: 'bg-pink-50 border-pink-200 text-pink-900',
        shipping: 'bg-purple-50 border-purple-200 text-purple-900',
        login: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  }
);

const iconVariants = cva('flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center', {
  variants: {
    variant: {
      success: 'text-green-600 bg-green-100',
      error: 'text-red-600 bg-red-100',
      info: 'text-blue-600 bg-blue-100',
      warning: 'text-yellow-600 bg-yellow-100',
      cart: 'text-blue-600 bg-blue-100',
      wishlist: 'text-pink-600 bg-pink-100',
      shipping: 'text-purple-600 bg-purple-100',
      login: 'text-emerald-600 bg-emerald-100',
    },
  },
  defaultVariants: {
    variant: 'success',
  },
});

interface CustomToastProps extends VariantProps<typeof toastVariants> {
  title: string;
  message?: string;
}

/**
 * Componente de toast visual reutilizable al estilo ShadCN UI.
 * Puede usarse con Sonner o de forma independiente.
 */
export function CustomToast({ title, message, variant }: CustomToastProps) {
  const getIcon = () => {
    switch (variant) {
      case 'cart':
        return <ShoppingBag className="h-5 w-5" />;
      case 'wishlist':
        return <Heart className="h-5 w-5" />;
      case 'shipping':
        return <Truck className="h-5 w-5" />;
      case 'login':
        return <LogIn className="h-5 w-5" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5" />;
      case 'info':
        return <Info className="h-5 w-5" />;
      default:
        return <Check className="h-5 w-5" />;
    }
  };

  return (
    <div className={cn(toastVariants({ variant }))}>
      <div className={cn(iconVariants({ variant }))}>{getIcon()}</div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        {message && <p className="mt-0.5 text-sm opacity-90">{message}</p>}
      </div>
    </div>
  );
}
