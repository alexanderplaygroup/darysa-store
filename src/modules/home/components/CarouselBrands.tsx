'use client';
import { AppImage } from '@/common/components/custom-ui/AppImage';
import { useResponsiveItemsPerView } from '@/common/hooks/useResponsiveItemsPerView';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function CarouselBrands() {
  const autoplayRef = useRef(Autoplay({ delay: 5000, playOnInit: true }));
  const groupSize = useResponsiveItemsPerView({ xl: 7, lg: 6, md: 5, sm: 4, base: 3 });

  const images = [
    '/home/brands/brand1.png',
    '/home/brands/brand2.png',
    '/home/brands/brand3.png',
    '/home/brands/brand4.png',
    '/home/brands/brand5.png',
    '/home/brands/brand6.png',
    '/home/brands/brand7.png',
    '/home/brands/brand4.png',
    '/home/brands/brand5.png',
    '/home/brands/brand6.png',
    '/home/brands/brand3.png',
    '/home/brands/brand4.png',
    '/home/brands/brand5.png',
  ];

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
      <CarouselContent className="-ml-6 items-center">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="flex basis-1/3 items-center justify-center pl-6 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/7"
          >
            <div className="flex items-center justify-center opacity-55 grayscale filter transition duration-300 hover:opacity-100 hover:grayscale-0">
              <AppImage
                src={src}
                alt={`Banner ${index + 1}`}
                width={120}
                height={80}
                className="h-auto w-20 min-[450px]:w-[100px] xl:w-[110px]"
              />
            </div>
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
                ? 'bg-darysa-amarillo w-[34px]'
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
