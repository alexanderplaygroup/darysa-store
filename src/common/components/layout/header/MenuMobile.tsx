'use client';

import { Button } from '@/common/components/shadcn-ui/button';
import { useUIStore } from '@/common/store/useUIStore';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@shadcnui/sheet';
import { ChevronLeft, ChevronRight, User, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MenuMobile() {
  const { open, openUI, closeUI } = useUIStore();
  const isOpen = open.mobileMenu;

  const [activeMenu, setActiveMenu] = useState<'main' | string>('main');

  const handleBack = () => setActiveMenu('main');

  const categories = [
    { id: 'cat1', name: 'Limpieza', subcategories: ['Escobas', 'Trapeadores', 'Baldes'] },
    { id: 'cat2', name: 'Cocina', subcategories: ['Utensilios', 'Contenedores', 'Bolsas'] },
    { id: 'cat3', name: 'Baño', subcategories: ['Dispensadores', 'Toallas', 'Jabones'] },
  ];

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(val) => (val ? openUI('mobileMenu') : closeUI('mobileMenu'))}
    >
      <SheetContent
        showCloseButton={false}
        side="left"
        className="bg-darysa-gris-950 w-full gap-0 border-r-0 p-0 text-white sm:max-w-[420px]"
      >
        {/* Header */}
        <SheetHeader className="bg-darysa-gris-1000 flex h-16 flex-row items-center justify-between border-b border-white/10 px-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.15)]">
          <SheetTitle className="flex items-center gap-3.5 text-base font-semibold text-white">
            <User className="size-6 text-white/70" />
            <Link href="/login" className="font-semibold hover:underline">
              Iniciar sesión
            </Link>
          </SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            className="w-fit cursor-pointer hover:bg-transparent"
            onClick={() => closeUI('mobileMenu')}
          >
            <X className="text-darysa-green-500 size-6.5" />
          </Button>
        </SheetHeader>

        <div className="bg-darysa-gris-1050 relative h-[calc(100vh-4rem)] overflow-hidden">
          {/* Nivel 1: menú principal */}
          <div
            className={cn(
              'absolute inset-0 flex flex-col gap-2 overflow-y-auto p-8 transition-transform duration-300',
              activeMenu !== 'main' && '-translate-x-full'
            )}
          >
            <nav className="flex flex-col space-y-6 text-base">
              <Link href="/nosotros" className="hover:underline hover:underline-offset-4">
                Nosotros
              </Link>
              <Link href="/distribuidores" className="hover:underline hover:underline-offset-4">
                Distribuidores
              </Link>
              <Link href="/blog" className="hover:underline hover:underline-offset-4">
                Blog
              </Link>
              <Link href="/contacto" className="hover:underline hover:underline-offset-4">
                Contacto
              </Link>
            </nav>

            <div className="my-6 border-t border-white/10"></div>

            <div className="flex flex-col space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className="flex w-full items-center justify-between rounded-md py-3 text-left font-medium hover:underline hover:underline-offset-4"
                  onClick={() => setActiveMenu(cat.id)}
                >
                  <span>{cat.name}</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Nivel 2: subcategorías */}
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={cn(
                'absolute inset-0 flex flex-col transition-transform duration-300',
                activeMenu === cat.id ? 'translate-x-0' : 'translate-x-full'
              )}
            >
              <Button
                variant="ghost"
                size="icon"
                className="my-4 flex w-fit items-center gap-2 pl-8 text-white hover:bg-transparent hover:text-white hover:underline hover:underline-offset-4"
                onClick={handleBack}
              >
                <ChevronLeft className="h-5 w-5 text-white" />
                <span className="text-base font-semibold">{cat.name}</span>
              </Button>
              <div className="bg-darysa-gris-300/20 h-px w-full"></div>
              <div className="flex flex-col gap-2 p-8">
                {cat.subcategories.map((sub, i) => (
                  <Link
                    key={i}
                    href="#"
                    // href={`/categoria/${sub.toLowerCase()}`}
                    className="rounded-md py-3 hover:underline hover:underline-offset-4"
                    // onClick={() => closeUI('mobileMenu')}
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
