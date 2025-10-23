'use client';
import { useCloseOnScroll } from '@/common/hooks/useCloseOnScroll';
import { useScrolled } from '@/common/hooks/useScrolled';
import { useUserSession } from '@/common/hooks/useUserSession';
import { useUIStore } from '@/common/store/useUIStore';
import { cn } from '@/lib/utils';
import { Heart, MapPin, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { AppImage } from '../../custom-ui/AppImage';
import { Container } from '../../custom-ui/Container';
import { Badge } from '../../shadcn-ui/badge';
import { Input } from '../../shadcn-ui/input';
import { MegaMenu } from './MegaMenu';
import { UserMenu } from './UserMenu';

export const Header = () => {
  const { user, isLoading, isAuthenticated } = useUserSession();

  console.log('asdasdasdsa:', user);

  const isScrolled = useScrolled(0); // 👈 mucho más limpio

  // 👇 Cerrar mega menú al hacer scroll
  useCloseOnScroll('megaMenu');

  const { openUI } = useUIStore(); // <-- Aquí traemos la función para abrir

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
        isScrolled && 'shadow-sm'
      )}
    >
      <Container className="mb-0 space-y-2 py-3.5">
        <div className="flex w-full items-center justify-between py-0">
          {/* Logo */}
          <Link href="/">
            <AppImage src="/logo-light.svg" alt="Darysa" width={150} height={30} priority />
          </Link>

          <div className="hidden w-full max-w-[652px] items-center gap-2 xl:flex">
            <Input
              placeholder="Buscar"
              className="h-10 w-full rounded-md border-none bg-[#0000000A] p-4 focus-visible:ring-0"
            />
            <span className="bg-darysa-green-500 flex aspect-square size-10 items-center justify-center rounded-md">
              <Search className="size-5.5 text-white" />
            </span>
          </div>

          <div className="flex items-center gap-10">
            <div className="relative flex size-10 w-fit items-center justify-center">
              <Badge className="bg-darysa-green-500 absolute -top-[2.5px] -right-3 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
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
              <Badge className="bg-darysa-green-500 absolute -top-[2.5px] -right-3 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                2
              </Badge>
              <ShoppingCart className="size-6" />
            </button>
            <UserMenu isLoading={isLoading} isAuthenticated={isAuthenticated} user={user} />
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-10">
            <MegaMenu />

            <nav aria-label="Main navigation">
              <ul className="hidden items-center gap-10 lg:flex">
                <li>
                  <Link
                    href="#"
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
                    href="#"
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

          <p className="text-darysa-gris-oscuro-alt hidden items-center gap-1.5 text-sm font-normal sm:flex">
            <MapPin className="size-4 text-black" />
            Dirección de usuario a registrarse
          </p>
        </div>
      </Container>
    </header>
  );
};
