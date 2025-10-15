'use client';

import { ChevronRight, Menu } from 'lucide-react';
import * as React from 'react';

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

export function CategoryMegaMenu() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(categories[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          onClick={() => setOpen(!open)}
          className="bg-darysa-gris-oscuro hover:bg-darysa-gris-oscuro/80 flex h-10 items-center gap-2.5 rounded-md !px-4 text-sm text-white"
        >
          <Menu className="size-5" />
          Todas las Categorías
        </Button>
      </PopoverTrigger>

      {/* 👇 Este contenido se renderiza justo debajo del trigger */}
      <PopoverContent
        align="start"
        side="bottom"
        sideOffset={14}
        className={cn(
          'w-screen max-w-7xl overflow-hidden rounded-t-none rounded-b-lg border-t border-b-0 border-l-0 bg-white p-0 shadow-lg',
          'animate-in fade-in slide-in-from-top-[14px]'
        )}
      >
        <div className="flex h-[420px] overflow-hidden">
          {/* Sidebar */}
          <div className="bg-darysa-gris-oscuro w-64 overflow-y-auto text-white">
            <div className="border-b border-white/10 p-4">
              <h2 className="text-base font-semibold">Categorías</h2>
            </div>
            <div className="py-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelected(category)}
                  className={cn(
                    'flex w-full items-center justify-between px-4 py-2.5 text-left transition-colors',
                    selected.id === category.id
                      ? 'bg-darysa-verde text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  )}
                >
                  <span className="text-sm">{category.name}</span>
                  <ChevronRight className="h-4 w-4 opacity-70" />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto bg-white p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">{selected.name}</h3>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {selected.subcategories.map((sub, i) => (
                <div key={i}>
                  <h4 className="text-darysa-verde mb-2 cursor-pointer font-medium hover:underline">
                    {sub}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="hover:text-darysa-verde cursor-pointer">Producto Premium</li>
                    <li className="hover:text-darysa-verde cursor-pointer">Producto Orgánico</li>
                    <li className="hover:text-darysa-verde cursor-pointer">Producto Local</li>
                    <li className="hover:text-darysa-verde cursor-pointer">Producto Especial</li>
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
