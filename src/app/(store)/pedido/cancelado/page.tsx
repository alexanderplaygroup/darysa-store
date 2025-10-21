import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import Link from 'next/link';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Pedido Cancelado', isCurrent: true },
];
export default function page() {
  return (
    <>
      <Container className="bg-darysa-gris-800/20 mb-5 h-[1px]" />

      {/* Header y Breadcrumb */}
      <Container className="mb-5 space-y-4">
        <AppBreadcrumb items={breadcrumbItems} className="sm:gap-1.5" />
      </Container>

      <Container className="flex w-full flex-col items-center justify-center gap-6 py-10">
        <div className="relative aspect-square w-[300px]">
          <AppImage
            src="/order/canceled.png"
            alt=""
            fill
            sizes="300px"
            className="object-contain"
          />
        </div>{' '}
        <Heading
          variant="heading"
          className="text-darysa-gris-950 mx-auto max-w-[450px] text-center md:text-3xl"
        >
          Hubo un Problema con tu orden [NÚMERO DE PEDIDO]
        </Heading>
        <Text variant="body" className="text-darysa-gris-750 mx-auto max-w-[450px] text-center">
          Por favor revisa todos tus datos de pago e intentalo de nuevo. Si necesitas mayor
          información, por favor comunícate con nosotros.
        </Text>
        <div className="flex flex-col items-center justify-center gap-1 text-center">
          <Heading
            variant="cardTitle"
            className="text-darysa-gris-750 mx-auto max-w-[450px] text-center !text-base"
          >
            Horario de Atención{' '}
          </Heading>
          <div className="text-darysa-gris-750 flex flex-col gap-0.5 text-sm">
            <span>Lunes-Viernes: 8:00 AM - 5:15 PM</span>
            <span>Sábado: 8:00 AM - 12:15 PM</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-center">
          <Heading
            variant="cardTitle"
            className="text-darysa-gris-750 mx-auto max-w-[450px] text-center !text-base"
          >
            Teléfono{' '}
          </Heading>
          <span className="text-darysa-gris-750 text-sm">(01) 3153600</span>
        </div>
        <Link
          href="#"
          className="bg-darysa-gris-950 flex h-12 w-full max-w-[250px] items-center justify-center rounded-lg text-lg font-bold text-white"
        >
          {' '}
          Continuar
        </Link>
      </Container>
    </>
  );
}
