'use client';

import { AppImage } from '@/common/components/custom-ui/AppImage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbnails,
} from '@/common/components/shadcn-ui/carousel';

type ProductImageCarouselProps = {
  images: string[];
};

export function ProductImageCarousel({ images }: ProductImageCarouselProps) {
  return (
    <Carousel opts={{ loop: true }} className="flex gap-2.5 sm:gap-6">
      <div className="relative flex-1">
        {/* Slides principales */}
        <CarouselContent className="-ml-6 size-96 md:size-104">
          {images.map((src, i) => (
            <CarouselItem key={i} className="pl-6">
              <div className="border-darysa-gris-800/20 relative aspect-square w-full overflow-hidden rounded-xl border">
                <AppImage src={src} alt={`Imagen ${i + 1} del producto`} fill sizes="625px" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Overlay de botones */}
        <CarouselPrevious className="bg-darysa-gris-800 left-5 size-12 border-none text-white hover:bg-black/70 hover:text-white" />
        <CarouselNext className="bg-darysa-gris-800 right-5 size-12 border-none text-white hover:bg-black/70 hover:text-white" />
      </div>
      {/* Thumbnails debajo */}
      <CarouselThumbnails images={images} className="hidden h-102 w-21.5 lg:flex" />
    </Carousel>
  );
}
