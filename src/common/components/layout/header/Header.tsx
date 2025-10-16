'use client';
import { useCloseOnScroll } from '@/common/hooks/useCloseOnScroll';
import { useScrolled } from '@/common/hooks/useScrolled';
import { cn } from '@/lib/utils';
import { Heart, MapPin, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { AppImage } from '../../custom-ui/AppImage';
import { Container } from '../../custom-ui/Container';
import { Badge } from '../../shadcn-ui/badge';
import { Input } from '../../shadcn-ui/input';
import { MegaMenu } from './MegaMenu';

export const Header = () => {
  const isScrolled = useScrolled(0); // 👈 mucho más limpio
  // 👇 Cerrar mega menú al hacer scroll
  useCloseOnScroll('megaMenu');

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

          <div className="flex w-full max-w-[652px] items-center gap-2">
            <Input
              placeholder="Buscar"
              className="h-10 w-full rounded-md border-none bg-[#0000000A] p-4 focus-visible:ring-0"
            />
            <span className="bg-darysa-green-500 flex aspect-square size-10 items-center justify-center rounded-md">
              <Search className="size-5.5 text-white" />
            </span>
          </div>

          <div className="flex items-center gap-10">
            <div className="relative">
              <Badge className="bg-darysa-green-500 absolute -top-[9px] -right-3 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                3
              </Badge>
              <Heart className="size-6" />
            </div>
            <div className="relative">
              <Badge className="bg-darysa-green-500 absolute -top-[9px] -right-3 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                2
              </Badge>
              <ShoppingCart className="size-6" />
            </div>
            <Link href="/login">
              <User className="size-6" />
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-10">
            {/* <Button
              className="bg-darysa-gris-oscuro flex h-10 items-center gap-2.5 rounded-md !px-4 text-sm"
              onClick={() => toggleUI('megaMenu')}
            >
              <Menu className="size-5" />
              Todas las Categorías
            </Button> */}

            <MegaMenu />

            {/* <CategoryMegaMenu /> */}
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-10">
                <li>
                  <Link
                    href="#"
                    className="hover:text-darysa-amarillo text-darysa-gris-medio text-sm transition-colors"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-darysa-amarillo text-darysa-gris-medio text-sm transition-colors"
                  >
                    Distribuidores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-darysa-amarillo text-darysa-gris-medio text-sm transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="hover:text-darysa-amarillo text-darysa-gris-medio text-sm transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <p className="text-darysa-gris-oscuro-alt flex items-center gap-1.5 text-sm font-normal">
            <MapPin className="size-4 text-black" />
            Dirección de usuario a registrarse
          </p>
        </div>
      </Container>
    </header>
  );
};
