'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@shadcnui/accordion';
import { FileDownIcon } from 'lucide-react';

export interface Dimension {
  width?: string | number;
  height?: string | number;
  large?: string | number;
  weight?: string | number;
  depth?: string | number;
}

export interface TechnicalSheet {
  id: string;
  url: string;
}

export interface ProductDetailsAccordionProps {
  description?: string;
  specification?: Dimension;
  technicalSheets?: TechnicalSheet[];
}

export function ProductDetailsAccordion({
  description,
  specification,
  technicalSheets,
}: ProductDetailsAccordionProps) {
  const specs: Dimension = specification ?? {
    width: '15 cm',
    height: '25 cm',
    large: '10 cm',
    weight: '500 g',
    depth: '5 cm',
  };

  const sheets: TechnicalSheet[] = technicalSheets ?? [
    { id: '1', url: '/docs/ficha-tecnica-1.pdf' },
    { id: '2', url: '/docs/ficha-tecnica-2.pdf' },
  ];

  const specLabels: Record<string, string> = {
    width: 'Ancho',
    height: 'Alto',
    large: 'Largo',
    weight: 'Peso',
    depth: 'Profundidad',
  };

  const specEntries = Object.entries(specs).filter(([_, value]) => value !== undefined);

  return (
    <Accordion type="single" collapsible className="w-full space-y-3 lg:hidden">
      {/* --- Descripción --- */}
      <AccordionItem value="description" className="flex flex-col gap-3">
        <AccordionTrigger className="text-darysa-green-500 data-[state=open]:bg-darysa-green-500 border-darysa-green-500 [&[data-state=closed]>svg]:text-darysa-green-500 border px-7 py-3.5 font-semibold hover:no-underline data-[state=open]:text-white [&[data-state=open]>svg]:text-white">
          Descripción
        </AccordionTrigger>
        <AccordionContent className="border-darysa-gris-800/20 rounded-lg border border-x px-6 py-4 text-[#5C5F6A]">
          {description ?? 'No hay descripción disponible para este producto.'}
        </AccordionContent>
      </AccordionItem>

      {/* --- Especificaciones --- */}
      <AccordionItem value="specs" className="flex flex-col gap-3">
        <AccordionTrigger className="text-darysa-green-500 data-[state=open]:bg-darysa-green-500 border-darysa-green-500 [&[data-state=closed]>svg]:text-darysa-green-500 border px-7 py-3.5 font-semibold hover:no-underline data-[state=open]:text-white [&[data-state=open]>svg]:text-white">
          Especificaciones
        </AccordionTrigger>
        <AccordionContent className="border-darysa-gris-800/20 rounded-lg border border-x px-6 py-4 text-[#5C5F6A]">
          <div className="grid grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, colIndex) => {
              const start = colIndex * Math.ceil(specEntries.length / 2);
              const end = start + Math.ceil(specEntries.length / 2);
              const items = specEntries.slice(start, end);

              return (
                <div key={colIndex} className="space-y-2">
                  {items.map(([key, value]) => (
                    <div
                      key={key}
                      className="text-darysa-gris-800 flex items-center gap-2 border-t pt-2 first:border-t-0 first:pt-0"
                    >
                      <p>{specLabels[key]}:</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* --- Fichas técnicas --- */}
      <AccordionItem value="download" className="flex flex-col gap-3">
        <AccordionTrigger className="text-darysa-green-500 data-[state=open]:bg-darysa-green-500 border-darysa-green-500 [&[data-state=closed]>svg]:text-darysa-green-500 border px-7 py-3.5 font-semibold hover:no-underline data-[state=open]:text-white [&[data-state=open]>svg]:text-white">
          Descargar Ficha Técnica
        </AccordionTrigger>
        <AccordionContent className="border-darysa-gris-800/20 rounded-lg border border-x px-6 py-4 text-[#5C5F6A]">
          {sheets.length > 0 ? (
            <div className="space-y-4">
              {sheets.map((sheet) => (
                <a
                  key={sheet.id}
                  href={sheet.url}
                  download
                  className="flex w-full items-center gap-2 rounded-lg underline"
                >
                  <FileDownIcon className="text-brand-red h-5 w-5" />
                  <span className="text-brand-black text-base">{sheet.url.split('/').pop()}</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No hay fichas técnicas disponibles.</p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
