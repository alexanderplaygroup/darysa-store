'use client';

import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Button } from '@shadcnui/button';

export function SelectedProductsCard() {
  return (
    <div className="sticky top-[150px] h-fit">
      {/* Card */}
      <aside className="border-darysa-green-500 mb-8 w-full rounded-xl border bg-white px-8 py-6 shadow-sm">
        {/* Header */}
        <h3 className="text-darysa-green-500 text-xl font-bold">Productos Seleccionados</h3>

        {/* Product List */}
        <div className="space-y-4 pt-4">
          <div className="flex items-end justify-between gap-4">
            {/* Imagen + Info */}
            <div className="flex items-center gap-4">
              <div className="border-darysa-green-500 relative h-20 w-20 overflow-hidden rounded-md border">
                <AppImage src="/images/producto-demo.png" alt="Producto" fill sizes="80px" />
              </div>

              <div className="flex-1 space-y-0.5">
                <p className="text-darysa-gris-950 text-base font-medium">Nombre del Producto</p>
                <p className="text-xs text-gray-500">SKU123456</p>
              </div>
            </div>

            {/* Precio */}
            <p className="text-xl font-medium text-gray-950">S/ 9,00</p>
          </div>
        </div>

        {/* Separador */}
        <div className="bg-darysa-gris-350 my-6 h-px w-full" />

        {/* Totales */}
        <div className="text-darysa-gris-950 space-y-4 text-sm">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Sub total</span>
              <span>S/ 18,00</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Precio por envío</span>
              <span>S/ 4,50</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">IGV +8%</span>
              <span>S/ 4,50</span>
            </div>
          </div>

          <div className="bg-darysa-gris-350 my-6 h-px w-full" />

          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span>S/ 23,50</span>
          </div>
        </div>

        {/* Botones internos */}
        <div className="mt-6 space-y-3">
          <Button className="bg-darysa-green-500 hover:bg-darysa-green-500 h-12 w-full text-white">
            Pagar
          </Button>

          <Button
            variant="outline"
            className="text-darysa-gris-950 border-darysa-gris-950 h-12 w-full hover:bg-gray-50"
          >
            Adicionar más productos
          </Button>
        </div>
      </aside>

      {/* Botón externo (también fijo gracias al contenedor sticky) */}
      <div className="bg-darysa-gris-750 flex h-[62px] items-center justify-center gap-8 rounded-lg px-12 text-base font-black text-white">
        <div className="relative aspect-square w-10">
          <AppImage src="/checkout/truck.png" alt="" fill className="object-contain" />
        </div>
        <span>Falta S/.74.50 para envió gratis</span>
      </div>
    </div>
  );
}
