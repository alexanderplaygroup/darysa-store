'use client';

import { AppImage } from '@/common/components/custom-ui/AppImage';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@shadcnui/accordion';
import { Checkbox } from '@shadcnui/checkbox';
import { Slider } from '@shadcnui/slider';

import { Label } from '@shadcnui/label';
import { CircleDollarSign, Palette, Percent, Ruler, ShoppingBag, Tag, X } from 'lucide-react';
import { Fragment, useState } from 'react';

interface FiltersAccordionProps {
  className?: string;
}

export const FiltersSection = ({ className }: FiltersAccordionProps) => {
  const [range, setRange] = useState<[number, number]>([50, 500]);

  // Datos de ejemplo (mock)
  const productCategories = [
    { id: '1', name: 'Ropa' },
    { id: '2', name: 'Accesorios' },
  ];
  const productSubCategories = [
    { id: '1', name: 'Polos' },
    { id: '2', name: 'Pantalones' },
  ];
  const productColors = [
    { id: '1', name: 'Rojo' },
    { id: '2', name: 'Negro' },
  ];
  const productSizes = [
    { id: '1', name: 'S' },
    { id: '2', name: 'M' },
    { id: '3', name: 'L' },
  ];
  const productPriceRange = { min: 50, max: 500 };
  const images = [
    '/product/filtros/logo1.png',
    '/product/filtros/logo2.png',
    '/product/filtros/logo3.png',
    '/product/filtros/logo4.png',
  ];

  return (
    <Fragment>
      <div className="bg-darysa-verde-oscuro flex items-center justify-between rounded-t-lg border-b border-black/20 px-6 py-4">
        <h2 className="text-lg font-semibold text-white">Filtros</h2>
        <button className="flex items-center gap-2 text-sm font-semibold text-white transition-colors">
          <X className="h-4 w-4" />
          Limpiar
        </button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={['category', 'price_range']}
        className={cn('w-full', className)}
      >
        {/* Categorías */}
        <AccordionItem className="border-0" value="category">
          <AccordionTrigger className="focus-visible:text-brand-black rounded-l-none rounded-r-none px-8 hover:no-underline focus-visible:ring-0 data-[state=open]:bg-black/40 data-[state=open]:text-white">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5" />
              Categorías
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 flex flex-col gap-2.5 pl-8 text-balance">
            {productCategories.map((category) => (
              <div key={category.id} className="flex items-center gap-3">
                <Label htmlFor={category.id}>
                  <Checkbox
                    id={category.id}
                    className="data-[state=checked]:bg-darysa-verde-oscuro size-5 border-none bg-white data-[state=checked]:text-white"
                  />
                  <p className="ml-1">{category.name}</p>
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Subcategorías */}
        <AccordionItem className="border-0" value="subcategory">
          <AccordionTrigger className="focus-visible:text-brand-black rounded-l-none rounded-r-none px-8 hover:no-underline focus-visible:ring-0 data-[state=open]:bg-black/40 data-[state=open]:text-white">
            <div className="flex items-center gap-3">
              <Tag className="h-5 w-5" />
              Subcategorías
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 flex flex-col gap-2.5 pl-8 text-balance">
            {productSubCategories.map((subcategory) => (
              <div key={subcategory.id} className="flex items-center gap-3">
                <Label htmlFor={subcategory.id}>
                  <Checkbox
                    id={subcategory.id}
                    className="data-[state=checked]:bg-darysa-verde-oscuro size-5 border-none bg-white data-[state=checked]:text-white"
                  />
                  <p className="ml-1">{subcategory.name}</p>
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Colores */}
        <AccordionItem className="border-0" value="colors">
          <AccordionTrigger className="focus-visible:text-brand-black rounded-l-none rounded-r-none px-8 hover:no-underline focus-visible:ring-0 data-[state=open]:bg-black/40 data-[state=open]:text-white">
            <div className="flex items-center gap-3">
              <Palette className="h-5 w-5" />
              Colores
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 flex flex-col gap-2.5 pl-8 text-balance">
            {productColors.map((color) => (
              <div key={color.id} className="flex items-center gap-3">
                <Label htmlFor={color.id}>
                  <Checkbox
                    id={color.id}
                    className="data-[state=checked]:bg-darysa-verde-oscuro size-5 border-none bg-white data-[state=checked]:text-white"
                  />
                  <p className="ml-1">{color.name}</p>
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Tamaños */}
        <AccordionItem className="border-0" value="sizes">
          <AccordionTrigger className="focus-visible:text-brand-black rounded-l-none rounded-r-none px-8 hover:no-underline focus-visible:ring-0 data-[state=open]:bg-black/40 data-[state=open]:text-white">
            <div className="flex items-center gap-3">
              <Ruler className="h-5 w-5" />
              Tamaño
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 flex flex-col gap-2.5 pl-8 text-balance">
            {productSizes.map((size) => (
              <div key={size.id} className="flex items-center gap-3">
                <Label htmlFor={size.id}>
                  <Checkbox
                    id={size.id}
                    className="data-[state=checked]:bg-darysa-verde-oscuro size-5 border-none bg-white data-[state=checked]:text-white"
                  />
                  <p className="ml-1">{size.name}</p>
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Ofertas */}
        <AccordionItem className="border-0" value="in_promotion">
          <AccordionTrigger className="focus-visible:text-brand-black rounded-l-none rounded-r-none px-8 hover:no-underline focus-visible:ring-0 data-[state=open]:bg-black/40 data-[state=open]:text-white">
            <div className="flex items-center gap-3">
              <Percent className="size-5" /> Ofertas
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 flex flex-col gap-2.5 pl-8 text-balance">
            <Label>
              <Checkbox
                id="promo"
                className="data-[state=checked]:bg-darysa-verde-oscuro size-5 border-none bg-white data-[state=checked]:text-white"
              />
              <p className="ml-1">Descuentos</p>
            </Label>
          </AccordionContent>
        </AccordionItem>

        {/* Rango de precios */}
        <AccordionItem className="border-0" value="price_range">
          <AccordionTrigger className="focus-visible:text-brand-black rounded-l-none rounded-r-none px-8 hover:no-underline focus-visible:ring-0 data-[state=open]:bg-black/40 data-[state=open]:text-white">
            <div className="flex items-center gap-3">
              <CircleDollarSign className="h-5 w-5" />
              Rango de precios
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 flex flex-col gap-5.5 px-8 pb-10 text-balance">
            <Label>
              Seleccionado: S/.{range[0]} – S/.{range[1]}
            </Label>
            <Slider
              value={range}
              min={productPriceRange.min}
              max={productPriceRange.max}
              onValueChange={(val) => setRange(val as [number, number])}
              showValues
            />
          </AccordionContent>
        </AccordionItem>

        {/* <div className="mt-10 flex justify-center">
          <Button className="text-brand-black">Aplicar filtros</Button>
        </div> */}
      </Accordion>

      <div className="mt-10 ml-8 space-y-4.5">
        <h4>Marcas asociadas</h4>
        <div className="grid w-fit grid-cols-2 items-center justify-center gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square h-24 w-24 overflow-hidden rounded-xl border bg-white"
            >
              <AppImage src={src} alt={`Imagen ${index + 1}`} className="object-cover" fill />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
