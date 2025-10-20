'use client';

import { Button } from '@shadcnui/button';
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';

export function SelectedProductsCard() {
  return (
    <div className="border-darysa-green-500/40 w-full rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <div className="border-darysa-green-500/40 border-b px-4 py-3">
        <h3 className="text-darysa-green-500 text-sm font-semibold">Productos Seleccionados</h3>
      </div>

      {/* Product List */}
      <div className="space-y-3 px-4 py-3">
        <div className="flex items-start gap-3">
          {/* Imagen */}
          <div className="relative h-16 w-16 overflow-hidden rounded-md border border-gray-200">
            <Image src="/images/producto-demo.png" alt="Producto" fill className="object-cover" />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium text-gray-800">Nombre del Producto</p>
            <p className="text-xs text-gray-500">SKU123456</p>

            {/* Cantidad */}
            <div className="mt-1 flex items-center gap-2">
              <Button size="icon" variant="outline" className="h-6 w-6 rounded-md">
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-4 text-center text-sm font-medium">1</span>
              <Button size="icon" variant="outline" className="h-6 w-6 rounded-md">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Precio y eliminar */}
          <div className="flex h-full flex-col items-end justify-between">
            <p className="text-sm font-semibold text-gray-800">S/ 9,00</p>
            <button className="text-red-500 hover:text-red-600">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Totales */}
      <div className="space-y-1 border-t border-gray-100 px-4 py-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Sub total</span>
          <span>S/ 18,00</span>
        </div>
        <div className="flex justify-between">
          <span>Precio por envío</span>
          <span>S/ 4,50</span>
        </div>
        <div className="flex justify-between">
          <span>IGV +8%</span>
          <span>S/ 4,50</span>
        </div>
        <div className="flex justify-between border-t pt-2 font-semibold">
          <span>Total</span>
          <span>S/ 23,50</span>
        </div>
      </div>

      {/* Botón principal */}
      <div className="px-4 py-3">
        <Button className="bg-darysa-green-500 hover:bg-darysa-green-600 w-full font-medium text-white">
          Pagar
        </Button>
      </div>

      {/* Botón secundario */}
      <div className="px-4 pb-4">
        <Button
          variant="outline"
          className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Adicionar más productos
        </Button>
      </div>

      {/* Barra inferior */}
      <div className="rounded-b-xl bg-gray-200 py-2 text-center text-sm font-medium text-gray-700">
        Falta <span className="font-semibold text-gray-900">S/ 74,50</span> para envío gratis
      </div>
    </div>
  );
}
