'use client';

import { ChevronRight, Menu, Package, X } from 'lucide-react';
import * as React from 'react';

import { useUIStore } from '@/common/store/useUIStore';
import { cn } from '@/lib/utils';
import { Button } from '../../shadcn-ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../../shadcn-ui/popover';

const categories = [
  {
    id: '1',
    name: 'Frutas y Verduras',
    subcategories: [
      'Frutas Frescas',
      'Verduras Orgánicas',
      'Hierbas Aromáticas',
      'Frutas Tropicales',
      'Verduras de Hoja',
      'Frutas de Temporada',
    ],
  },
  {
    id: '2',
    name: 'Lácteos y Huevos',
    subcategories: [
      'Leche Orgánica',
      'Yogurt Natural',
      'Quesos Artesanales',
      'Huevos de Granja',
      'Mantequilla',
      'Crema',
    ],
  },
  {
    id: '3',
    name: 'Carnes y Pescados',
    subcategories: [
      'Carne de Res',
      'Pollo Orgánico',
      'Pescado Fresco',
      'Mariscos',
      'Carne de Cerdo',
      'Embutidos',
    ],
  },
];

export function MegaMenu() {
  const { open, closeUI, openUI } = useUIStore();
  const [selected, setSelected] = React.useState(categories[0]);

  return (
    <Popover
      open={open.megaMenu}
      onOpenChange={(isOpen) => (isOpen ? openUI('megaMenu') : closeUI('megaMenu'))}
    >
      <PopoverTrigger asChild>
        <Button className="bg-darysa-gris-oscuro hover:bg-darysa-gris-oscuro flex h-10 cursor-pointer items-center gap-2.5 rounded-md !px-4 text-sm">
          <Menu className="size-5" />
          Todas las Categorías
        </Button>
      </PopoverTrigger>

      <PopoverContent
        overlay
        align="start"
        side="bottom"
        sideOffset={14}
        className={cn(
          'w-screen max-w-7xl overflow-hidden rounded-t-none rounded-br-sm rounded-bl-sm border-none bg-white p-0 shadow-lg'
        )}
      >
        <div className="flex h-[500px] overflow-hidden">
          {/* Sidebar */}
          <div className="bg-darysa-gris-800 divide-darysa-gris-650 w-64 divide-y overflow-y-auto px-6 text-white">
            <div className="px-4 py-6">
              <h3 className="text-xl leading-none font-bold">Categorías</h3>
            </div>
            <div className="space-y-2 py-2">
              {categories.map((category) => {
                const isSelected = selected.id === category.id;
                return (
                  <button
                    type="button"
                    key={category.id}
                    onClick={() => setSelected(category)}
                    className={cn(
                      // base
                      'group flex h-10 w-full items-center justify-between rounded-md px-4 text-left transition-all duration-300 ease-in-out',
                      // active
                      isSelected
                        ? 'bg-darysa-green-500 text-white shadow-sm'
                        : 'text-gray-300 hover:bg-white/10'
                    )}
                  >
                    <Package
                      className={cn(
                        'transition-transform duration-300 ease-in-out',
                        isSelected ? 'scale-105' : 'group-hover:scale-105'
                      )}
                    />

                    <span className="line-clamp-1 text-sm">{category.name}</span>

                    <ChevronRight
                      className={cn(
                        'h-4 w-4 transition-all duration-300 ease-in-out',
                        isSelected
                          ? 'translate-x-0.5 opacity-100'
                          : 'opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100'
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="border-darysa-gris-650/20 divide-darysa-gris-650/20 flex-1 divide-y overflow-y-auto border-t bg-white px-10 py-6">
            <div className="flex items-center justify-between pb-6">
              <h3 className="text-xl leading-none font-bold">{selected.name}</h3>
              <button
                onClick={() => closeUI('megaMenu')}
                className="text-darysa-green-500 cursor-pointer"
              >
                <X />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 md:grid-cols-3 lg:grid-cols-4">
              {selected.subcategories.map((sub, i) => (
                <div key={i}>
                  <h4
                    className={cn(
                      'text-darysa-green-500 relative mb-3.5 w-fit cursor-pointer font-medium transition-colors',
                      'after:bg-darysa-green-500 after:absolute after:bottom-[-4px] after:left-1/2 after:h-[1px] after:w-0 after:transition-all after:duration-300',
                      'hover:after:left-0 hover:after:w-full'
                    )}
                  >
                    {sub}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {[
                      'Producto Premium',
                      'Producto Orgánico',
                      'Producto Local',
                      'Producto Especial',
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="group hover:text-darysa-green-500 flex -translate-x-5 cursor-pointer items-center gap-1 transition-all duration-300 ease-in-out"
                      >
                        <ChevronRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
