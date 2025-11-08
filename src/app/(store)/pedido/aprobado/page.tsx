import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import Link from 'next/link';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Pedido Aprobado', isCurrent: true },
];
export default function page() {
  return (
    <>
      <Container className="bg-darysa-gris-800/20 mb-5 h-px" />

      {/* Header y Breadcrumb */}
      <Container className="mb-5 space-y-4">
        <AppBreadcrumb items={breadcrumbItems} className="sm:gap-1.5" />
      </Container>

      <Container className="flex w-full flex-col items-center justify-center gap-6 py-10">
        <div className="relative aspect-square w-[300px]">
          <AppImage
            src="/order/approved.png"
            alt=""
            fill
            sizes="300px"
            className="object-contain"
          />
        </div>{' '}
        <Heading variant="heading" className="text-darysa-gris-950 md:text-3xl">
          !Gracias por tu compra!
        </Heading>
        <Text variant="body" className="text-darysa-gris-750 mx-auto max-w-[450px] text-center">
          Tu orden <strong>[NÚMERO DEL PEDIDO]</strong> fue completada con éxito podras ver todo los
          detalles en tu perfil de usuario o correo.
        </Text>
        <Link
          href="#"
          className="bg-darysa-gris-950 flex h-12 w-full max-w-[250px] items-center justify-center rounded-lg text-lg font-bold text-white"
        >
          {' '}
          Ir a Mi Perfil
        </Link>
      </Container>
    </>
  );
}
