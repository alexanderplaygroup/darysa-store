'use client';
import { Heading } from '@/common/components/custom-ui/Heading';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { useResponsiveItemsPerView } from '@/common/hooks/useResponsiveItemsPerView';
import { cn } from '@/lib/utils';
import { products } from '@/modules/home/data';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CarouselProducts() {
  const autoplayRef = useRef(Autoplay({ delay: 5000, playOnInit: true }));
  const [embla, setEmbla] = useState<CarouselApi | null>(null); // Referencia Embla

  const groupSize = useResponsiveItemsPerView({ xl: 4, lg: 4, md: 4, sm: 3, base: 2 });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // Actualizamos el estado cuando Embla cambia de slide
  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };

    onSelect(); // estado inicial
    embla.on('select', onSelect);

    return () => {
      embla.off('select', onSelect);
    };
  }, [embla]);
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading as="h3" variant="heading" className="text-darysa-gris-800">
          Productos en el Blog
        </Heading>

        <div className="flex gap-6">
          <button
            type="button"
            onClick={() => embla?.scrollPrev()}
            disabled={!canPrev}
            className={cn(
              'text-darysa-verde-oscuro transition-colors duration-200',
              canPrev ? 'cursor-pointer' : 'text-darysa-gris-350-alt opacity-50'
            )}
            onMouseEnter={() => autoplayRef.current.stop()}
            onMouseLeave={() => autoplayRef.current.play()}
          >
            <ChevronLeft className="size-8" />
            <span className="sr-only">Anterior</span>
          </button>

          <button
            type="button"
            onClick={() => embla?.scrollNext()}
            disabled={!canNext}
            className={cn(
              'text-darysa-verde-oscuro transition-colors duration-200',
              canNext ? 'cursor-pointer' : 'text-darysa-gris-350-alt opacity-50'
            )}
            onMouseEnter={() => autoplayRef.current.stop()}
            onMouseLeave={() => autoplayRef.current.play()}
          >
            <ChevronRight className="size-8" />
            <span className="sr-only">Siguiente</span>
          </button>
        </div>
      </div>
      <Carousel
        setApi={setEmbla} // ✅ aquí va setApi, no carouselRef
        plugins={[autoplayRef.current]}
        opts={{
          align: 'start',
          loop: false,
          slidesToScroll: groupSize,
        }}
        className="w-full space-y-10"
        onMouseEnter={() => autoplayRef.current.stop()}
        onMouseLeave={() => autoplayRef.current.play()}
      >
        <CarouselContent className="-ml-2.5 lg:-ml-4 xl:-ml-14">
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 pl-2.5 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 lg:pl-4 xl:basis-1/4 xl:pl-14"
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
    </>
  );
}
