import { Container } from '@/common/components/custom-ui/Container';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { ContactBlock } from './components/ContactBlock';
import InformationContact from './components/InformationContact';

const ContactView = () => {
  const contactBlocks = [
    {
      image: '/contact/previewContactoDetail.png',
      title: 'Centro de',
      highlight: 'Ayuda',
      items: [
        { text: 'Deseo soporte para comprar en la página web.' },
        { text: 'Quiero conocer el status de mi pedido web.' },
      ],
      link: '/contacto/centro-de-ayuda',
    },
    {
      image: '/contact/previewContactoDetail.png',
      title: 'Quiero ser parte de',
      highlight: 'la red comercial',
      items: [{ text: 'Reclamos o devoluciones.' }],
      link: '/contacto/red-comercial',
    },
    {
      image: '/contact/previewContactoDetail.png',
      title: 'Contacta un',
      highlight: 'asesor comercial',
      items: [
        { text: 'Consultas sobre productos o servicios.' },
        { text: 'Reclamos o devoluciones.' },
      ],
      link: '/contacto/asesoria',
    },
    {
      image: '/contact/previewContactoDetail.png',
      title: 'Servicio al ',
      highlight: 'Cliente',
      items: [{ text: 'Consultas sobre productos o servicios.' }],
      link: '/contacto/servicio-cliente',
    },
  ];

  const aboutBanner = {
    desktop: '/about/heroBanner.png',
    mobile: '/about/heroBanner.png',
    link: '/productos',
  };
  return (
    <>
      <Container size="full" className="relative lg:mb-36">
        <HeroBanner banner={aboutBanner} />
        <Container className="absolute inset-x-0 -bottom-[120px] hidden lg:block">
          <InformationContact />
        </Container>
      </Container>
      <Container className="block overflow-hidden rounded-lg bg-white lg:hidden">
        <InformationContact />
      </Container>
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-9">
        {contactBlocks.map((block) => (
          <ContactBlock key={block.title} {...block} />
        ))}
      </Container>
    </>
  );
};

export default ContactView;
