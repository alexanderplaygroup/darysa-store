'use client';

import { cn } from '@/lib/utils'; // usa tu helper cn (de shadcn)
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  name: string;
  href: string;
  icon?: LucideIcon;
  isActive?: boolean; // opcional si quieres forzar activo manualmente
}

export const ActiveLink = ({ name, href, icon: Icon, isActive }: Props) => {
  const pathname = usePathname();
  const active = isActive ?? pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-darysa-gris-950 flex h-10 w-full items-center gap-4 rounded-md px-6 text-sm font-semibold transition-colors duration-300 ease-in-out',
        active
          ? 'bg-darysa-green-500 hover:bg-darysa-green-500 text-white'
          : 'hover:bg-darysa-green-500/10'
      )}
    >
      {Icon && <Icon size={24} strokeWidth={2} />}
      <span className="hidden md:inline">{name}</span>
    </Link>
  );
};
