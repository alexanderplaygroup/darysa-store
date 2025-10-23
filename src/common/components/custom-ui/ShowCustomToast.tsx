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
  variant?: 'success' | 'error' | 'info' | 'warning' | 'cart' | 'wishlist' | 'shipping' | 'login';
  title: string;
  message?: string;
  duration?: number;
  position?: 'top-center' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
}) {
  toast.custom(() => <CustomToast variant={variant} title={title} message={message} />, {
    duration,
    position,
  });
}
