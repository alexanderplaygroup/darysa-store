import { AppImage } from '@/common/components/custom-ui/AppImage';
import { CloseCircleIcon } from '@/common/components/icons/CloseCircleIcon';
import { EditCircleIcon } from '@/common/components/icons/EditCircleIcon';
import { Button } from '@/common/components/shadcn-ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';

export function CartItemMobile() {
  return (
    <div className="flex flex-col gap-3 md:hidden">
      <div className="flex items-start gap-4">
        {/* Imagen */}
        <div className="relative aspect-square w-20 overflow-hidden rounded-md border">
          <AppImage src="/product/product.png" alt="Lejía Daryza" fill sizes="80px" />
        </div>

        {/* Info producto */}
        <div className="flex flex-1 flex-col">
          <h3 className="text-darysa-gris-950 line-clamp-1 font-bold">Lejía 5% Daryza x 3.8L</h3>
          <p className="font-barlow text-darysa-gris-800 text-xs">SKU 505476611 Daryza</p>
          <span className="text-darysa-gris-950 mt-1 font-semibold">S/100</span>
        </div>

        {/* Acciones */}
        <div className="flex flex-col items-center gap-2">
          <button
            aria-label="Editar producto"
            className="text-darysa-gris-950 hover:text-darysa-gris-800"
          >
            <EditCircleIcon size={22} />
          </button>
          <button
            aria-label="Eliminar producto del carrito"
            className="text-darysa-red-400 hover:text-red-500"
          >
            <CloseCircleIcon size={22} />
          </button>
        </div>
      </div>

      {/* Controles cantidad + total */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button variant="default" size="icon" className="size-7.5 rounded">
            <MinusIcon strokeWidth={4} />
          </Button>

          <span className="border-darysa-gris-950 flex size-7.5 items-center justify-center rounded border px-5 text-center text-sm font-bold">
            2
          </span>

          <Button variant="default" size="icon" className="size-7.5 rounded">
            <PlusIcon strokeWidth={4} />
          </Button>
        </div>

        <span className="text-darysa-gris-950 font-semibold">Total: S/100</span>
      </div>
    </div>
  );
}
