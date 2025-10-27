'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shadcnui/tabs';
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

export interface ProductDetailsTabsProps {
  description?: string;
  specification?: Dimension;
  technicalSheets?: TechnicalSheet[];
}

export function ProductDetailsTabs({
  description,
  specification,
  technicalSheets,
}: ProductDetailsTabsProps) {
  // Datos de prueba si no vienen props
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

  // Convertimos specs en array dinámico
  const specEntries = Object.entries(specs).filter(([_, value]) => value !== undefined);

  return (
    <Tabs defaultValue="description" className="flex-row items-start gap-12">
      {/* Menú lateral */}
      <TabsList className="flex h-auto w-full max-w-[340px] flex-col gap-7 bg-white p-0">
        <TabsTrigger
          value="description"
          className="data-[state=active]:bg-darysa-green-500 border-darysa-green-500 text-darysa-green-500 w-full justify-center border py-5 text-base font-bold data-[state=active]:text-white"
        >
          Descripción
        </TabsTrigger>
        <TabsTrigger
          value="specs"
          className="data-[state=active]:bg-darysa-green-500 border-darysa-green-500 text-darysa-green-500 w-full justify-center border py-5 text-base font-bold data-[state=active]:text-white"
        >
          Especificaciones
        </TabsTrigger>
        <TabsTrigger
          value="download"
          className="data-[state=active]:bg-darysa-green-500 border-darysa-green-500 text-darysa-green-500 w-full justify-center border py-5 text-base font-bold data-[state=active]:text-white"
        >
          Descargar Ficha Técnica
        </TabsTrigger>
      </TabsList>

      {/* Contenido de cada tab */}
      <div className="flex-1">
        {/* Descripción */}
        <TabsContent
          value="description"
          className="border-darysa-gris-800/20 size-full rounded-lg border px-10 py-12"
        >
          <p className="text-[#5C5F6A]">
            {description ?? 'No hay descripción disponible para este producto.'}
          </p>
        </TabsContent>

        {/* Especificaciones */}
        <TabsContent value="specs" className="grid grid-cols-2 gap-10">
          {/** Dividimos el array en dos mitades */}
          {Array.from({ length: 2 }).map((_, colIndex) => {
            const start = colIndex * Math.ceil(specEntries.length / 2);
            const end = start + Math.ceil(specEntries.length / 2);
            const items = specEntries.slice(start, end);

            return (
              <div
                key={colIndex}
                className="border-darysa-gris-800/20 text-darysa-gris-800 space-y-2 rounded-lg border px-8 py-10"
              >
                {items.map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 border-t pt-2 first:border-t-0 first:pt-0"
                  >
                    <p>{specLabels[key]}:</p>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </TabsContent>

        {/* Fichas técnicas */}
        <TabsContent value="download">
          <div className="space-y-7">
            {sheets.length > 0 ? (
              sheets.map((sheet) => (
                <a
                  key={sheet.id}
                  href={sheet.url}
                  download
                  className="border-darysa-gris-800/20 flex h-[66px] w-full items-center gap-2 rounded-lg border px-16 hover:underline"
                >
                  <FileDownIcon className="text-brand-red h-5 w-5" />
                  <span className="text-brand-black text-base">{sheet.url.split('/').pop()}</span>
                </a>
              ))
            ) : (
              <p className="text-sm text-gray-500">No hay fichas técnicas disponibles.</p>
            )}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
