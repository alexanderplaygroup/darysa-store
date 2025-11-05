import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { Button } from '@/common/components/shadcn-ui/button';
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
          className="text-darysa-gris-800 leading-tight tracking-normal lg:min-h-12"
        >
          {description}
        </Text>
      </div>

      {/* Enlace (botón visual) */}
      <Button variant="darizaPrimary" className="px-14!" asChild>
        <Link href={path} aria-label={`Ver más sobre ${title}`}>
          Postular Ahora
        </Link>
      </Button>
    </article>
  );
}
