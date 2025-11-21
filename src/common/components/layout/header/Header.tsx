'use client';
import { useCloseOnScroll } from '@/common/hooks/useCloseOnScroll';
import { useUserSession } from '@/common/hooks/useUserSession';
import { useUIStore } from '@/common/store/useUIStore';
import { cn } from '@/lib/utils';
import { Heart, MapPin, Menu, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { AppImage } from '../../custom-ui/AppImage';
import { Container } from '../../custom-ui/Container';
import { SearchCustomIcon } from '../../icons/SearchIcon';
import { Badge } from '../../shadcn-ui/badge';
import { Input } from '../../shadcn-ui/input';
import { MegaMenu } from './MegaMenu';
import { UserMenu } from './UserMenu';

export const Header = () => {
  const { user, isLoading, isAuthenticated } = useUserSession();

  useEffect(() => {
    console.log('Usuario cambió:', user);
  }, [user]);

  // const isScrolled = useScrolled(0); // 👈 mucho más limpio

  // 👇 Cerrar mega menú al hacer scroll
  useCloseOnScroll('megaMenu');

  const { openUI } = useUIStore();

  return (
    <header className="headerCustomize sticky top-0 z-50 w-full bg-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.15)] transition-shadow duration-300">
      <Container className="mb-0 space-y-0.5 px-0! pt-1.5 lg:py-1.5">
        <div className="flex w-full items-center justify-between px-2.5 py-0 lg:px-4 2xl:px-0">
          <div className="flex items-center gap-4.5 sm:gap-6">
            <button
              type="button"
              className="relative flex size-10 w-fit cursor-pointer items-center justify-center lg:hidden"
              onClick={() => openUI('mobileMenu')}
              aria-label="Abrir carrito de compras"
            >
              <Menu className="size-6.5" />
            </button>
            {/* Logo */}
            <Link
              href="/"
              className="flex max-w-[130px] items-center outline-none sm:max-w-[150px]"
            >
              <AppImage src="/logo-light.svg" alt="Darysa" width={150} height={30} priority />
            </Link>
          </div>

          <div className="hidden w-full items-center gap-2 lg:flex lg:max-w-[400px] xl:max-w-[652px]">
            <Input
              placeholder="Buscar"
              className="h-8 w-full rounded-sm border-none bg-[#0000000A] p-4 focus-visible:ring-0"
            />
            <span className="bg-darysa-green-500 flex aspect-square size-8 items-center justify-center rounded-sm">
              <Search className="size-4.5 text-white" />
            </span>
          </div>

          <div className="mr-2 flex items-center gap-4.5 min-[450px]:gap-7 lg:mr-0 lg:gap-10">
            <div className="relative flex size-10 w-fit items-center justify-center lg:hidden">
              <SearchCustomIcon className="size-6" strokeWidth={1.5} />
            </div>
            <div className="relative flex size-10 w-fit items-center justify-center">
              <Badge className="bg-darysa-green-500 absolute top-0 -right-2.5 h-4.5 min-w-4.5 rounded-full px-1 font-mono text-[10px] leading-none tabular-nums">
                3
              </Badge>
              <Heart className="size-6" />
            </div>
            <button
              type="button"
              className="relative flex size-10 w-fit cursor-pointer items-center justify-center"
              onClick={() => openUI('cart')}
              aria-label="Abrir carrito de compras"
            >
              <Badge className="bg-darysa-green-500 absolute top-0 -right-2.5 h-4.5 min-w-4.5 rounded-full px-1 font-mono text-[10px] leading-none tabular-nums">
                2
              </Badge>
              <ShoppingCart className="size-6" />
            </button>
            <div className="hidden lg:block">
              <UserMenu isLoading={isLoading} isAuthenticated={isAuthenticated} user={user} />
            </div>
          </div>
        </div>
        <div className="bg-darysa-gris-100 px-2.5 lg:bg-transparent lg:px-4 2xl:px-0">
          <div className="flex w-full items-center lg:justify-between">
            <div className="flex h-10 items-center gap-10">
              <div className="hidden lg:block">
                <MegaMenu />
              </div>

              <nav aria-label="Main navigation">
                <ul className="hidden items-center gap-10 lg:flex">
                  <li>
                    <Link
                      href="/nosotros"
                      className={cn(
                        'text-darysa-gris-550 relative mb-2.5 w-fit cursor-pointer text-sm font-medium transition-colors',
                        'after:bg-darysa-gris-550 after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-0 after:transition-all after:duration-300',
                        'hover:after:left-0 hover:after:w-full'
                      )}
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/distribuidores"
                      className={cn(
                        'text-darysa-gris-550 relative mb-2.5 w-fit cursor-pointer text-sm font-medium transition-colors',
                        'after:bg-darysa-gris-550 after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-0 after:transition-all after:duration-300',
                        'hover:after:left-0 hover:after:w-full'
                      )}
                    >
                      Distribuidores
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className={cn(
                        'text-darysa-gris-550 relative mb-2.5 w-fit cursor-pointer text-sm font-medium transition-colors',
                        'after:bg-darysa-gris-550 after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-0 after:transition-all after:duration-300',
                        'hover:after:left-0 hover:after:w-full'
                      )}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className={cn(
                        'text-darysa-gris-550 relative mb-2.5 w-fit cursor-pointer text-sm font-medium transition-colors',
                        'after:bg-darysa-gris-550 after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-0 after:transition-all after:duration-300',
                        'hover:after:left-0 hover:after:w-full'
                      )}
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <p className="text-darysa-gris-800-alt flex items-center gap-1.5 text-xs font-normal lg:text-sm">
              <MapPin className="size-4 text-black" />
              Dirección de usuario a registrarse
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};
