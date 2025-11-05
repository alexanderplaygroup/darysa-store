import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { Building2, Car, Factory } from 'lucide-react';
import { DistributorsForm } from './components/distributors/DistributorsForm';
import { InfoCard } from './components/distributors/InfoCard';

const DistributorsView = () => {
  const aboutBanner = {
    desktop: '/contact/fondoDistribuidores.png',
    mobile: '/contact/fondoDistribuidores.png',
  };

  const INFO_CARDS_DATA = [
    {
      icon: Car,
      title: 'Social Comercial',
      description:
        'Nuestro modelo de negocio brinda grandes beneficios y cuenta con el respaldo de Daryza S.A.C.',
    },
    {
      icon: Building2,
      title: 'Expansión Nacional',
      description:
        'Amplía tu red comercial y llega a todo el país con nuestro soporte y experiencia.',
    },
    {
      icon: Factory,
      title: 'Producción Propia',
      description:
        'Contamos con plantas certificadas y procesos eficientes de fabricación de alta calidad.',
    },
    {
      icon: Factory,
      title: 'Herramientas de ventas',
      description:
        'Contamos con plantas certificadas y procesos eficientes de fabricación de alta calidad.',
    },
  ];
  return (
    <>
      <Container size="full" className="relative">
        <HeroBanner banner={aboutBanner} />
      </Container>
      <Container className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch xl:gap-10">
        <div className="relative hidden aspect-3/4 w-full overflow-hidden rounded-lg lg:block">
          <AppImage src="/about/aboutProm.png" alt="image" fill sizes="440px" />
        </div>
        <DistributorsForm />
      </Container>
      <Container className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-12">
        {INFO_CARDS_DATA.map((item, index) => (
          <InfoCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </Container>
    </>
  );
};

export default DistributorsView;
