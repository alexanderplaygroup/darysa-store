import { AppImage } from '@/common/components/custom-ui/AppImage';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export interface ImageSlideProps {
  srcDesktop: string;
  srcMobile?: string;
  alt: string;
  link?: string;
  className?: string;
}

export function ImageSlide({ srcDesktop, srcMobile, alt, link, className }: ImageSlideProps) {
  if (!srcDesktop) return null;

  const ImageContent = (
    <picture
      className={cn(
        'relative block aspect-square h-full w-full overflow-hidden md:aspect-16/4',
        className
      )}
    >
      {srcMobile && <source media="(max-width: 768px)" srcSet={srcMobile} />}
      <AppImage src={srcDesktop} alt={alt} fill sizes="100vw" className="object-center" />
    </picture>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
      {ImageContent}
    </a>
  ) : (
    ImageContent
  );
}

type VideoSlideProps = {
  src: string;
  height?: number;
  loop?: boolean;
  muted?: boolean;
  onFullscreenChange?: (isFullscreen: boolean) => void;
};

export function VideoSlide({
  src,
  loop = true,
  muted = true,
  onFullscreenChange,
}: VideoSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Detectar cambios de fullscreen
  useEffect(() => {
    const handler = () => {
      const video = videoRef.current;
      if (!video) return;

      const isFull = document.fullscreenElement === video;
      setIsFullscreen(isFull);

      if (isFull) {
        // 👉 Entró a fullscreen
        video.currentTime = 0; // 👈 reinicia desde el inicio
        video.muted = false;
        video.volume = 0.5;
        video.play();
      } else {
        // 👉 Salió de fullscreen
        video.muted = true; // solo se silencia, pero sigue corriendo
      }

      // Avisamos al carrusel
      onFullscreenChange?.(isFull);
    };

    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, [onFullscreenChange]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <div className="relative h-full w-full cursor-pointer">
      <video
        ref={videoRef}
        src={src}
        loop={loop}
        muted={muted}
        autoPlay
        playsInline
        className="h-full w-full object-cover"
      />

      {/* Overlay hasta que el user haga clic */}
      {!isFullscreen && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/40"
          onClick={handleClick}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="60" fill="#8F8F8F" fillOpacity="0.1" />
            <circle cx="60" cy="60" r="59.5" stroke="#949494" strokeOpacity="0.3" />
            <circle cx="60" cy="60" r="40" fill="white" />
            <path
              d="M74.5 59.134C75.1667 59.5189 75.1667 60.4811 74.5 60.866L53.5 72.9904C52.8333 73.3753 52 72.8942 52 72.1244V47.8756C52 47.1058 52.8333 46.6247 53.5 47.0096L74.5 59.134Z"
              fill="#646464"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
