import { Heart, MapPin, Menu, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { AppImage } from '../../custom-ui/AppImage';
import { Container } from '../../custom-ui/Container';
import { Button } from '../../shadcn-ui/button';
import { Input } from '../../shadcn-ui/input';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
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
            <span className="bg-darysa-verde flex aspect-square size-10 items-center justify-center rounded-md">
              <Search className="size-5.5 text-white" />
            </span>
          </div>

          <div className="flex items-center gap-10">
            <Heart className="size-6" />
            <ShoppingCart className="size-6" />
            <Link href="/login">
              <User className="size-6" />
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-10">
            <Button className="bg-darysa-gris-oscuro flex h-10 items-center gap-2.5 rounded-md !px-4 text-sm">
              <Menu className="size-5" />
              Todas las Categorías
            </Button>
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
