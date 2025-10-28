'use client';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { useResponsiveItemsPerView } from '@/common/hooks/useResponsiveItemsPerView';
import { cn } from '@/lib/utils';
import { products } from '@/modules/home/data';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function CarouselProductosInModal() {
  const autoplayRef = useRef(Autoplay({ delay: 5000, playOnInit: true }));

  const groupSize = useResponsiveItemsPerView({ xl: 3, lg: 3, md: 3, sm: 3, base: 2 });

  return (
    <Carousel
      plugins={[autoplayRef.current]}
      opts={{
        align: 'start',
        loop: true,
        slidesToScroll: groupSize,
      }}
      className="w-full space-y-6"
      onMouseEnter={() => autoplayRef.current.stop()}
      onMouseLeave={() => autoplayRef.current.play()}
    >
      <CarouselContent className="-ml-8">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 pl-8 sm:basis-1/3 md:basis-1/3 lg:basis-1/3 xl:basis-1/3"
          >
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              sku={product.sku}
              brand={product.brand}
              price={product.price}
              discount={product.discount}
              onAddToCart={() => console.log('Add to cart:', product.name)}
              onToggleFavorite={() => console.log('Toggle favorite:', product.name)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselDots
        className="mx-auto w-fit gap-1.5"
        renderDot={(index, isActive, goTo) => (
          <div
            key={index}
            onClick={goTo}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-all duration-400',
              isActive
                ? 'bg-darysa-verde-oscuro w-[34px]'
                : 'bg-darysa-gris-350-alt hover:bg-darysa-gris-300 cursor-pointer'
            )}
          >
            {/* Puedes incluso mostrar mini-previews del grupo */}
            <span className="sr-only">Grupo {index + 1}</span>
          </div>
        )}
      />
    </Carousel>
  );
}
