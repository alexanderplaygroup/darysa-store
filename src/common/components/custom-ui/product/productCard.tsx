'use client';
import { formatDiscount, getDiscountedPrice, parseSoles } from '@/common/helpers/product';
import { ProductCardProps } from '@/common/interfaces/product';
import { cn } from '@/lib/utils';
import { BadgePercent, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '../../shadcn-ui/button';
import { AppImage } from '../AppImage';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const ProductCard = ({
  image,
  name,
  sku,
  brand,
  price,
  discount,
  onAddToCart,
  onToggleFavorite,
}: ProductCardProps) => {
  const discountedPrice = getDiscountedPrice(price, discount);
  const hasDiscount = formatDiscount(discount);
  return (
    <div className="border-darysa-gris-350-alt/60 w-full max-w-full overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md">
      {/* Product Image Section */}
      <div className="relative flex aspect-square w-full max-w-full items-center justify-center">
        <AppImage src={image} alt={name} fill sizes="300px" />
        {onToggleFavorite && (
          <button
            className="border-darysa-gris-350-alt/60 absolute top-3 right-3 rounded-full border p-1.5 transition-colors hover:bg-white/80"
            aria-label="Agregar a favoritos"
            onClick={onToggleFavorite}
          >
            <Heart className="h-5 w-5 text-green-600" />
          </button>
        )}
      </div>

      {/* Product Info Section */}
      <div className="relative space-y-3.5">
        <div
          className={cn(
            'bg-darysa-gris-800 flex w-fit items-center gap-2.5 rounded-r-md px-3 py-1.5 text-white sm:py-2',
            !hasDiscount && 'invisible'
          )}
        >
          <BadgePercent className="size-4.5" />
          <span className="font-barlow text-xs font-semibold">Mejor Descuento</span>
        </div>

        <div className="space-y-2 px-4.5 pb-4.5">
          {/* Product Name */}
          <Heading as="h4" variant="cardTitle" className="text-darysa-gris-800 line-clamp-1">
            {name}
          </Heading>

          {/* Product Subtitle */}
          {(sku || brand) && (
            <Text variant="caption" className="text-darysa-gris-550-3">
              {[sku, brand].filter(Boolean).join(' / ')}
            </Text>
          )}

          {/* Pricing Section */}
          <div className="flex items-end justify-between pt-1">
            <div className="space-y-3.5">
              <div className={cn('flex items-center gap-2', !hasDiscount && 'invisible')}>
                <span className="text-darysa-gris-550-3 text-xs leading-none line-through">
                  {parseSoles(price)}
                </span>
                <span className="bg-darysa-amarillo rounded px-2 py-1 text-xs font-black text-gray-900">
                  -{discount}%
                </span>
              </div>
              <div className="text-darysa-gris-800 font-inter text-xl leading-none font-black sm:text-2xl">
                {parseSoles(discountedPrice)}
              </div>
            </div>

            {/* Add to Cart Button */}
            {onAddToCart && (
              <Button
                size="icon"
                className="bg-darysa-verde-oscuro size-9 rounded-sm text-white hover:bg-green-700 sm:size-12"
                aria-label="Agregar al carrito"
                onClick={onAddToCart}
              >
                <ShoppingCart className="size-5.5 sm:size-7" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
