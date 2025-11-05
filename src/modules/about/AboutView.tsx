import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { Text } from '@/common/components/custom-ui/Text';
import { Button } from '@/common/components/shadcn-ui/button';
import { AboutForm } from './components/AboutForm';
import { HistoryTimeline } from './components/HistoryTimeline';
import Purpose from './components/Purpose';
import SustainabilityBioProducts from './components/SustainabilityBioProducts';
const aboutBanner = {
  desktop: '/about/banner-fondo.png',
  mobile: '/about/banner-fondo.png',
  link: '/productos',
};

export const AboutView = () => {
  const timelineData = [
    {
      year: '2015',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis, integer sodales facilisi fusce pellentesque. ',
    },
    {
      year: '2017',
      description:
        'Logramos nuestro primer contrato importante con una cadena de retail nacional, desarrollando una plataforma de ecommerce personalizada.',
    },
    {
      year: '2019',
      description:
        'Abrimos nuestras primeras oficinas fuera del país y ampliamos nuestro equipo de desarrollo y soporte técnico para atender a clientes globales.',
    },
    {
      year: '2021',
      description:
        'Lanzamos nuestro primer producto SaaS enfocado en la automatización de procesos logísticos, integrando IA y análisis predictivo.',
    },
    {
      year: '2024',
      description:
        'Nos consolidamos como un referente en soluciones digitales integrales, ayudando a cientos de empresas a mejorar su presencia online y eficiencia operativa.',
    },
    {
      year: '2025',
      description:
        'Lanzamos nuestro primer producto SaaS enfocado en la automatización de procesos logísticos, integrando IA y análisis predictivo.',
    },
    {
      year: '2026',
      description:
        'Nos consolidamos como un referente en soluciones digitales integrales, ayudando a cientos de empresas a mejorar su presencia online y eficiencia operativa.',
    },
  ];

  return (
    <>
      <Container size="full">
        {' '}
        <HeroBanner banner={aboutBanner} />
      </Container>
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
        <video
          src="/home/videoHome.mp4"
          loop
          muted
          autoPlay
          playsInline
          controls
          className="order-2 mx-auto aspect-video w-full max-w-xl rounded-lg lg:order-1 lg:max-w-2xl"
        />
        <div className="order-1 flex flex-col items-center justify-between gap-6 lg:order-2 lg:items-start">
          <div className="text-center lg:text-start">
            <Text variant="small" className="text-darysa-gris-800 font-semibold md:text-lg">
              Soluciones de Higiene para tu hogar
            </Text>
            <Heading variant="heading" className="mb-2">
              Sobre Nosotros
            </Heading>
            <Text variant="small" className="text-darysa-gris-800 leading-loose text-balance">
              Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum
              condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida
              venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius
              ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis,
              integer sodales facilisi fusce pellentesque. 
            </Text>
          </div>
          <Button className="h-10 w-full max-w-[150px] text-sm font-semibold text-white lg:h-12 lg:max-w-[300px] lg:text-base">
            Ver Video
          </Button>
        </div>
      </Container>
      <Container>
        <HistoryTimeline
          items={timelineData}
          title="Nuestra Historia"
          subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida venenatis nisl lacinia scelerisque."
        />
      </Container>
      <Container>
        <Purpose />
      </Container>
      <Container>
        <SustainabilityBioProducts />
      </Container>
      <Container className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch xl:gap-10">
        <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg">
          <AppImage src="/about/aboutProm.png" alt="image" fill sizes="440px" />
        </div>
        <AboutForm />
      </Container>
    </>
  );
};
