/* eslint-disable @typescript-eslint/no-explicit-any */

import { AppImage } from '@/common/components/custom-ui/AppImage';
import { parseSoles } from '@/common/helpers/product';
import { FC } from 'react';

// Componente del producto
export const ProductItem: FC = () => {
  const product: any = {
    id: '1',
    name: 'Zapatillas Urbanas Deportivas Hombre',
    sku: 'SKU12345',
    slug: 'zapatillas-urbanas-hombre',
    color: 'Negro',
    brand: 'Nike',
    size: '42',
    quantity: 2,
    priceUnit: 189.9,
    priceTotal: 379.8,
  };

  return (
    <div className="grid grid-cols-[1.5fr_0.5fr]">
      <div className="flex items-center gap-4">
        <div className="border-darysa-gris-300 relative aspect-square w-full max-w-[70px] overflow-hidden rounded-lg border">
          <AppImage
            src="/product/product.png"
            alt="prducto"
            fill
            sizes="300px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="line-clamp-1 text-sm leading-5 text-[#474747]">{product.name}</h3>
          <p className="text-sm leading-5 text-[#474747]">Cantidad: {product.quantity}</p>
          <p className="text-sm leading-5 text-[#474747]">
            P. Unitario: {parseSoles(product.priceUnit)}
          </p>
        </div>
      </div>
      <p className="flex items-center justify-end text-sm font-semibold text-[#474747] sm:justify-start sm:text-base">
        {parseSoles(product.priceTotal)}
      </p>
    </div>
  );
};
