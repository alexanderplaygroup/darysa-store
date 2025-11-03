import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { HistoryTimeline } from './components/HistoryTimeline';
import Purpose from './components/Purpose';
const aboutBanner = {
  desktop: '/about/heroBanner.png',
  mobile: '/about/heroBanner.png',
  title: 'Soluciones Industriales Darysa',
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
  ];

  return (
    <>
      <Container size="full">
        {' '}
        <HeroBanner banner={aboutBanner} />
      </Container>
      <Container className="grid grid-cols-2 gap-14">
        <video
          src="/home/videoHome.mp4"
          loop
          muted
          autoPlay
          playsInline
          controls
          className="aspect-video w-full rounded-lg"
        />
        <div>
          <span>Soluciones de Higiene para tu hogar</span>
          <Heading variant="heading">Sobre Nosotros</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum
            condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida
            venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius
            ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis, integer
            sodales facilisi fusce pellentesque. 
          </p>
          <button>Ver Video</button>
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
        <Purpose />
      </Container>
    </>
  );
};
