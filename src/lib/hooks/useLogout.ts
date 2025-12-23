// common/hooks/useLogout.ts
'use client';

import { showCustomToast } from '@/common/components/custom-ui/ShowCustomToast';
import { useAuthStore } from '@/common/store/auth/useAuthStore';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logout();

    if (result.success) {
      showCustomToast({
        variant: 'success',
        title: result.message,
      });
    } else {
      showCustomToast({
        variant: 'error',
        title: 'Error',
        message: result.message,
      });
    }

    router.replace('/');
  };

  return {
    handleLogout,
  };
};
