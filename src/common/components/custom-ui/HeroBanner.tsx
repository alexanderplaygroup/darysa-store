import { AppImage } from './AppImage';

export interface BannerHero {
  desktop: string;
  mobile: string;
  title: string;
  link?: string;
}

interface HeroBannerProps {
  banner: BannerHero;
}

export const HeroBanner = ({ banner }: HeroBannerProps) => {
  const { desktop, mobile, title, link } = banner;

  const Content = (
    <div className="relative aspect-[16/4] w-full md:aspect-[16/4]">
      <picture className="relative block h-full w-full">
        {/* Imagen para pantallas grandes */}
        <source srcSet={desktop} media="(min-width: 768px)" />
        {/* Imagen para móviles */}
        <AppImage src={mobile} alt={title} fill sizes="100vw" className="object-top" />
      </picture>

      {/* Contenido encima de la imagen */}
      <div className="bg-darysa-verde-oscuro absolute top-[13%] left-0 rounded-r-lg py-2.5 pr-10 pl-20">
        <h1 className="text-3xl font-bold text-white drop-shadow-md md:text-5xl">{title}</h1>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="block" aria-label={title} target="_blank">
      {Content}
    </a>
  ) : (
    Content
  );
};
