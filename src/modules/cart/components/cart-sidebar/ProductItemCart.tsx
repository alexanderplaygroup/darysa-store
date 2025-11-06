'use client';

import { AppImage } from '@/common/components/custom-ui/AppImage';
import { CloseCircleIcon } from '@/common/components/icons/CloseCircleIcon';
import { EditCircleIcon } from '@/common/components/icons/EditCircleIcon';
import { formatDiscount, getDiscountedPrice, parseSoles } from '@/common/helpers/product';
import { Button } from '@shadcnui/button';
import { BadgePercent, MinusIcon, PlusIcon } from 'lucide-react';
import { FC } from 'react';

interface ProductItem {
  id: string;
  name: string;
  sku: string;
  slug: string;
  color?: string;
  size?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  quantity: number;
  inPromotion?: boolean;
  image?: string;
}

interface ProductItemCartProps {
  product: ProductItem;
  handleRemoveProduct?: (productId: string) => void;
  handleUpdateAmount?: (productId: string, quantity: number) => void;
}

export const ProductItemCart: FC<ProductItemCartProps> = ({
  product,
  handleRemoveProduct,
  handleUpdateAmount,
}) => {
  const handleEditProduct = (slug: string, color?: string, size?: string) => {
    console.log('Editar producto:', { slug, color, size });
  };

  const decreaseQuantity = () => {
    if (product.quantity > 1) handleUpdateAmount?.(product.id, product.quantity - 1);
  };

  const increaseQuantity = () => {
    handleUpdateAmount?.(product.id, product.quantity + 1);
  };

  // 🔹 Helpers coherentes con ProductCard
  const hasDiscount = formatDiscount(product.discount);
  const discountedPrice = getDiscountedPrice(
    product.originalPrice || product.price,
    product.discount
  );

  return (
    <div className="border-darysa-gris-800/20 flex gap-4 border-b px-6 py-6 last:border-0">
      {/* Imagen del producto */}
      <div className="relative aspect-square w-[85px] overflow-hidden rounded-lg border min-[420px]:w-[110px]">
        <AppImage
          src={product.image || '/images/product-item.png'}
          alt={product.name}
          fill
          sizes="100px"
        />
        {product.inPromotion && (
          <div className="bg-darysa-green-500/90 absolute top-2 left-1 z-10 flex items-center gap-1 rounded-sm px-1.5 py-0.5 shadow">
            <BadgePercent className="size-3 text-white" />
            <span className="text-[10px] font-normal text-white">Promoción</span>
          </div>
        )}
      </div>

      {/* Detalle del producto */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-1">
          <h3 className="text-darysa-gris-950 line-clamp-2 text-sm leading-tight font-bold lg:text-lg">
            {product.name}
          </h3>
          <p className="font-barlow text-darysa-gris-800 line-clamp-1 text-xs">
            SKU: <span>{product.sku}</span>
          </p>
        </div>

        {/* Controles de cantidad */}
        <div className="flex items-center gap-1">
          <Button
            variant="default"
            size="icon"
            className="size-7.5 rounded"
            onClick={decreaseQuantity}
          >
            <MinusIcon strokeWidth={4} />
          </Button>

          <span className="border-darysa-gris-950 flex size-7.5 items-center justify-center rounded border px-5 text-center text-sm font-bold lg:text-lg">
            {product.quantity}
          </span>

          <Button
            variant="default"
            size="icon"
            className="size-7.5 rounded"
            onClick={increaseQuantity}
          >
            <PlusIcon strokeWidth={4} />
          </Button>
        </div>
      </div>

      {/* Acciones y precios */}
      <div className="flex flex-col items-end justify-between gap-4">
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleEditProduct(product.slug, product.color, product.size)}
            aria-label="Editar producto"
            className="text-darysa-gris-950 hover:text-darysa-gris-800"
          >
            <EditCircleIcon size={26} />
          </button>
          <button
            onClick={() => handleRemoveProduct?.(product.id)}
            aria-label="Eliminar producto del carrito"
            className="text-darysa-red-400 hover:text-red-500"
          >
            <CloseCircleIcon size={26} />
          </button>
        </div>

        {/* Sección de precios */}
        <div className="space-y-1 text-right">
          {hasDiscount && (
            <div className="flex items-center justify-end gap-2.5">
              <p className="text-darysa-gris-750 text-xs font-medium line-through">
                {parseSoles(product.originalPrice || product.price)}
              </p>
              <span className="bg-darysa-amarillo text-darysa-gris-950 rounded px-1.5 py-1 text-xs font-black">
                -{product.discount}%
              </span>
            </div>
          )}
          <p className="text-darysa-green-500 text-sm font-bold md:text-base">
            {parseSoles(hasDiscount ? discountedPrice : product.price)}
          </p>
        </div>
      </div>
    </div>
  );
};
