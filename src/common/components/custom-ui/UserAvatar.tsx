'use client';

import { getInitials } from '@/lib/getInitials';
import { Avatar, AvatarFallback, AvatarImage } from '@shadcnui/avatar';

type UserAvatarProps = {
  name: string;
  image?: string | null;
  size?: 'sm' | 'md' | 'lg';
};

export function UserAvatar({ name, image, size = 'md' }: UserAvatarProps) {
  const initials = getInitials(name);

  const sizes = {
    sm: 'h-7 w-7 text-xs',
    md: 'h-10 w-10 text-base',
    lg: 'h-14 w-14 text-lg',
  };

  return (
    <Avatar
      className={`${sizes[size]} border-darysa-green-500 text-darysa-green-500 border font-medium`}
    >
      {image ? (
        <AvatarImage src={image} alt={name} />
      ) : (
        <AvatarFallback className="bg-transparent">{initials}</AvatarFallback>
      )}
    </Avatar>
  );
}
