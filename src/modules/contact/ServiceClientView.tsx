import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import InformationContact from './components/InformationContact';
import { ServiceClientForm } from './components/service-client/ServiceClientForm';

const ServiceClientView = () => {
  const aboutBanner = {
    desktop: '/about/heroBanner.png',
    mobile: '/about/heroBanner.png',
    title: 'Soluciones Industriales Darysa',
    link: '/productos',
  };

  return (
    <>
      <Container size="full" className="relative mb-40">
        <HeroBanner banner={aboutBanner} />
        <Container className="absolute inset-x-0 -bottom-[150px] overflow-hidden rounded-lg bg-white p-0 shadow-lg">
          <InformationContact />
        </Container>
      </Container>

      <Container className="grid grid-cols-[0.8fr_1.2fr] items-stretch gap-16">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <AppImage src="/about/aboutProm.png" alt="image" fill sizes="440px" />
        </div>
        <ServiceClientForm />
      </Container>
    </>
  );
};

export default ServiceClientView;
