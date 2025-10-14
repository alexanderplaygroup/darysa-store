import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PreviewPositionCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  path: string;
  className?: string;
}

export function PreviewPositionCard({
  imageUrl,
  imageAlt,
  title,
  description,
  path,
  className = '',
}: PreviewPositionCardProps) {
  return (
    <article className={cn('flex w-full max-w-full flex-col items-start gap-6', className)}>
      {/* Contenedor de imagen con aspect ratio fijo */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <AppImage
          src={imageUrl || '/placeholder.svg'}
          alt={imageAlt}
          fill
          className="object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenido de texto */}
      <div className="w-full space-y-2">
        <Heading as="h5" variant="cardTitle" className="text-darysa-verde-oscuro md:text-2xl">
          {title}
        </Heading>
        <Text
          variant="body"
          className="text-darysa-gris-oscuro min-h-[3rem] leading-tight tracking-normal"
        >
          {description}
        </Text>
      </div>

      {/* Enlace (botón visual) */}
      <Link
        href={path}
        className={cn(
          'bg-darysa-gris-oscuro inline-flex items-center justify-center rounded-lg px-14 py-2 font-bold text-white',
          'transition-colors duration-200 hover:bg-zinc-700',
          'focus-visible:ring-darysa-verde-oscuro focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none'
        )}
        aria-label={`Ver más sobre ${title}`}
      >
        Postular Ahora
      </Link>
    </article>
  );
}
