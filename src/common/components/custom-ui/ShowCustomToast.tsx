'use client';

import { toast } from 'sonner';
import { CustomToast } from './CustomToast';

export function showCustomToast({
  variant = 'success',
  title,
  message,
  duration = 4000,
  position = 'top-center',
}: {
  variant?:
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'cart'
    | 'wishlist'
    | 'shipping'
    | 'login'
    | 'register';
  title: string;
  message?: string;
  duration?: number;
  position?: 'top-center' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
}) {
  toast.custom(
    (t) => (
      <CustomToast
        variant={variant}
        title={title}
        message={message}
        onClose={() => toast.dismiss(t)}
      />
    ),
    {
      duration,
      position,
    }
  );
}
