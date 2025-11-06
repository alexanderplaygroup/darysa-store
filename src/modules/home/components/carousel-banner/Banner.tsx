'use client';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';
import { ImageSlide, VideoSlide } from './CarouselItemCustom';

export function Banner() {
  const autoplayRef = useRef(Autoplay({ delay: 4000, playOnInit: false }));
  const [api, setApi] = useState<CarouselApi>();

  const handleFullscreenChange = (isFullscreen: boolean) => {
    if (!api) return;
    if (isFullscreen) {
      autoplayRef.current.stop();
    } else {
      autoplayRef.current.play();
    }
  };

  useEffect(() => {
    if (!api) return;
    autoplayRef.current.play();
  }, [api]);

  //esta funcion sirve debuguear el carousel
  // useEffect(() => {
  //   if (!api) return;

  //   const onStop = () => console.log('✅ Autoplay detenido');
  //   const onPlay = () => console.log('▶️ Autoplay reanudado');

  //   api.on('autoplay:stop', onStop);
  //   api.on('autoplay:play', onPlay);

  //   return () => {
  //     api.off('autoplay:stop', onStop);
  //     api.off('autoplay:play', onPlay);
  //   };
  // }, [api]);

  return (
    <Carousel
      plugins={[autoplayRef.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="relative w-full"
      setApi={setApi}
      onMouseEnter={() => autoplayRef.current.stop()}
      onMouseLeave={() => autoplayRef.current.play()}
    >
      <CarouselContent className="ml-0 max-h-[50vh] w-full md:max-h-[55vh] lg:aspect-32/13 2xl:max-h-[550px]">
        <CarouselItem className="pl-0">
          <VideoSlide src="/home/videoHome.mp4" onFullscreenChange={handleFullscreenChange} />
        </CarouselItem>
        <CarouselItem className="pl-0">
          <ImageSlide
            srcDesktop="/home/banner-desktop.webp"
            srcMobile="/home/banner-mobile.webp"
            alt="Promoción de limpieza industrial"
            link="https://daryza.com/promocion"
          />
        </CarouselItem>
        <CarouselItem className="pl-0">
          <ImageSlide
            srcDesktop="/home/bannerHome.png"
            srcMobile="/home/banner-mobile-2.jpg"
            alt="Banner institucional"
          />
        </CarouselItem>
      </CarouselContent>

      <CarouselDots className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1.5 shadow" />
    </Carousel>
  );
}
