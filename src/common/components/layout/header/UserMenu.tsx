'use client';

import { UserAvatar } from '@/common/components/custom-ui/UserAvatar';
import { Skeleton } from '@/common/components/shadcn-ui/skeleton';
import { useAuthStore } from '@/common/store/auth/useAuthStore';
import { User as UserIcon } from 'lucide-react';
import Link from 'next/link';

export const UserMenu = () => {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  if (isLoading) {
    return <Skeleton className="size-10 rounded-full" />;
  }

  if (isAuthenticated && user) {
    return (
      <Link href="/pedidos" aria-label="Ir a pedidos">
        <UserAvatar
          image={user.photo} // 🔥 aquí
          name={user.full_name ?? 'Usuario'}
          size="md"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      aria-label="Ir a login"
      className="flex h-10 w-10 items-center justify-center"
    >
      <UserIcon className="h-6 w-6" />
    </Link>
  );
};
