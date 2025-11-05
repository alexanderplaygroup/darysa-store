import { AppImage } from '@/common/components/custom-ui/AppImage';
import { CloseCircleIcon } from '@/common/components/icons/CloseCircleIcon';
import { EditCircleIcon } from '@/common/components/icons/EditCircleIcon';
import { Button } from '@/common/components/shadcn-ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';

export function CartItemDesktop() {
  return (
    <div className="hidden py-7 md:grid md:grid-cols-[1fr_100px_150px_100px_50px] md:items-center">
      {/* Producto */}
      <div className="flex items-center gap-4">
        <div className="relative aspect-square w-20 overflow-hidden rounded-md border">
          <AppImage src="/product/product.png" alt="Lejía Daryza" fill sizes="60px" />
        </div>
        <div className="space-y-0.5">
          <h3 className="text-darysa-gris-950 line-clamp-1 font-bold">Lejía 5% Daryza x 3.8L</h3>
          <p className="font-barlow text-darysa-gris-800 text-xs">SKU 505476611 Daryza</p>
        </div>
      </div>

      {/* Precio */}
      <span className="text-start font-medium text-gray-700">S/100</span>

      {/* Controles cantidad */}
      <div className="flex items-center justify-start gap-1">
        <Button variant="default" size="icon" className="size-7.5 rounded">
          <MinusIcon strokeWidth={4} />
        </Button>

        <span className="border-darysa-gris-950 flex size-7.5 items-center justify-center rounded border px-5 text-center text-sm font-bold lg:text-lg">
          2
        </span>

        <Button variant="default" size="icon" className="size-7.5 rounded">
          <PlusIcon strokeWidth={4} />
        </Button>
      </div>

      {/* Total */}
      <span className="text-start font-medium text-gray-700">S/100</span>

      {/* Acciones */}
      <div className="flex flex-col items-center gap-3.5">
        <button
          aria-label="Eliminar producto del carrito"
          className="text-darysa-red-400 hover:text-red-500"
        >
          <CloseCircleIcon size={26} />
        </button>
        <button
          aria-label="Editar producto"
          className="text-darysa-gris-950 hover:text-darysa-gris-800"
        >
          <EditCircleIcon size={26} />
        </button>
      </div>
    </div>
  );
}
