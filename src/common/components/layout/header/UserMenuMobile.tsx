'use client';

import { UserAvatar } from '@/common/components/custom-ui/UserAvatar';
import { Skeleton } from '@/common/components/shadcn-ui/skeleton';
import { useUIStore } from '@/common/store/useUIStore';
import { User } from 'lucide-react';
import Link from 'next/link';

type UserType = {
  name?: string | null;
  email?: string | null;
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
};

type UserMenuProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: UserType | null;
};

export const UserMenuMobile = ({ isLoading, isAuthenticated, user }: UserMenuProps) => {
  const { closeUI } = useUIStore();

  if (isLoading) {
    return (
      <div className="flex items-center gap-3.5">
        <Skeleton className="size-10 rounded-full" />
        <Skeleton className="h-4 w-24 rounded-md" />
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <Link
        href="/pedidos"
        onClick={() => closeUI('mobileMenu')}
        className="flex items-center gap-3.5 text-base font-semibold text-white"
      >
        <UserAvatar name={user.name ?? 'Usuario'} size="md" />{' '}
        <span className="hover:underline">{user.name}</span>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3.5 text-base font-semibold text-white">
      <User className="size-6 text-white/70" />
      <Link
        href="/login"
        onClick={() => closeUI('mobileMenu')}
        className="font-semibold hover:underline"
      >
        Iniciar sesión
      </Link>
    </div>
  );
};
