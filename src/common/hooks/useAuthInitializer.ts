'use client';

import { useAuthStore } from '@/common/store/auth/useAuthStore';
import { useEffect } from 'react';

export default function AuthInitializer({ shouldFetch }: { shouldFetch: boolean }) {
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    if (shouldFetch) {
      fetchUser();
    }
  }, [shouldFetch, fetchUser]);

  return null;
}
