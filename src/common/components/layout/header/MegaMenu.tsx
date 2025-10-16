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
  const { open, toggleUI, closeUI } = useUIStore();
  const [selected, setSelected] = React.useState(categories[0]);

  return (
    <Popover open={open.megaMenu} onOpenChange={() => toggleUI('megaMenu')}>
      <PopoverTrigger asChild>
        <Button className="bg-darysa-gris-oscuro flex h-10 items-center gap-2.5 rounded-md !px-4 text-sm">
          <Menu className="size-5" />
          Todas las Categorías
        </Button>
      </PopoverTrigger>
      {/* 👇 Este contenido se renderiza justo debajo del trigger */}
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
            <div className="py-2">
              {categories.map((category) => {
                const isSelected = selected.id === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelected(category)}
                    className={cn(
                      'group flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left transition-colors',
                      isSelected
                        ? 'bg-darysa-green-500 text-white'
                        : 'text-gray-300 hover:bg-white/10'
                    )}
                  >
                    <Package />
                    <span className="line-clamp-1 text-sm">{category.name}</span>

                    {/* 🔹 Aparece solo en hover o cuando está activo */}
                    <ChevronRight
                      className={cn(
                        'h-4 w-4 opacity-0 transition-opacity duration-200',
                        'group-hover:opacity-70', // visible al hacer hover
                        isSelected && 'opacity-70' // visible si está activo
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
                  <h4 className="text-darysa-green-500 mb-2 cursor-pointer font-medium hover:underline">
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
