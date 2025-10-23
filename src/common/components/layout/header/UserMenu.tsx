'use client';

import { UserAvatar } from '@/common/components/custom-ui/UserAvatar';
import { Skeleton } from '@/common/components/shadcn-ui/skeleton';
import { User } from 'lucide-react';
import Link from 'next/link';

type UserType = {
  name?: string;
  email?: string;
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
};

type UserMenuProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: UserType | null;
};

export const UserMenu = ({ isLoading, isAuthenticated, user }: UserMenuProps) => {
  if (isLoading) {
    return <Skeleton className="size-10 rounded-full" />;
  }

  if (isAuthenticated && user) {
    return (
      <Link href="/pedidos" aria-label="Ir a pedidos">
        <UserAvatar name={user.name ?? 'Usuario'} size="md" />
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      aria-label="Ir a login"
      className="flex h-10 w-10 items-center justify-center"
    >
      <User className="h-6 w-6" />
    </Link>
  );
};
