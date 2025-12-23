'use client';
import { UserAvatar } from '@/common/components/custom-ui/UserAvatar';
import { Heart, LogOut, ShoppingCart, TicketPercent, Truck, User } from 'lucide-react';
// import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/common/store/auth/useAuthStore';
import { useLogout } from '@/lib/hooks/useLogout';
import { ActiveLink } from './ActiveLink';

export const SidebarDashboard = () => {
  // const pathname = usePathname();
  const { user } = useAuthStore();
  const { handleLogout } = useLogout();

  const links = [
    {
      name: 'Mis Pedidos',
      href: '/pedidos',
      icon: ShoppingCart,
    },
    {
      name: 'Lista de Deseos',
      href: '/favoritos',
      icon: Heart,
    },
    {
      name: 'Cupones',
      href: '/cupones',
      icon: TicketPercent,
    },
    {
      name: 'Direcciones',
      href: '/direcciones',
      icon: Truck,
      // isActive: pathname.includes('/account/dashboard/orders'),
    },
    {
      name: 'Configuración',
      href: '/configuracion',
      icon: User,
      // isActive: pathname.includes('/account/dashboard/products'),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <UserAvatar name={user?.full_name ?? 'No autenticado'} size="lg" />
        <span className="text-darysa-gris-400 text-sm font-bold">
          {user?.full_name ?? 'No autenticado'}
        </span>
      </div>
      <div className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
        {links.map((link) => {
          return <ActiveLink key={link.name} {...link} />;
        })}
        <button
          onClick={handleLogout}
          className="text-darysa-gris-950 hover:bg-darysa-green-500/10 flex h-10 items-center gap-4 rounded-md px-6 text-sm font-semibold transition-colors duration-300 ease-in-out lg:w-full"
        >
          <LogOut size={24} strokeWidth={2} /> Cerrar Sesión
        </button>
      </div>
    </div>
  );
};
