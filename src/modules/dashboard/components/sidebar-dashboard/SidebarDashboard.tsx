'use client';
import { UserAvatar } from '@/common/components/custom-ui/UserAvatar';
import { Heart, LogOut, ShoppingCart, TicketPercent, Truck, User } from 'lucide-react';
// import { usePathname } from 'next/navigation';
import { ActiveLink } from './ActiveLink';

export const SidebarDashboard = () => {
  // const pathname = usePathname();
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
        <UserAvatar name="María López" size="lg" />
        <span className="text-darysa-gris-400 text-sm font-bold">María López</span>
      </div>
      <div className="flex w-full max-w-[200px] flex-col gap-4">
        {links.map((link) => {
          return <ActiveLink key={link.name} {...link} />;
        })}
        <button className="text-darysa-gris-950 flex h-10 w-full items-center gap-4 rounded-md px-6 text-sm font-semibold transition-colors duration-300 ease-in-out">
          <LogOut size={24} strokeWidth={2} /> Cerrar Sesión
        </button>
      </div>
    </div>
  );
};
