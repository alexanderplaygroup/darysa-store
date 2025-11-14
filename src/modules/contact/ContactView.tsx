import { Container } from '@/common/components/custom-ui/Container';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { ContactBlock } from './components/ContactBlock';
import InformationContact from './components/InformationContact';

const ContactView = () => {
  const contactBlocks = [
    {
      image: '/contact/previewContactoDetail.png',
      title: 'Centro de',
      highlight: 'ayuda',
      items: [
        { text: 'Deseo soporte para comprar en la página web' },
        { text: 'Quiero conocer el status de mi pedido online' },
        { text: 'Dudas sobre métodos de pago o facturación.' },
      ],
      link: '/contacto/centro-de-ayuda',
    },
    {
      image: '/contact/previewContactoDetail.png',
      title: 'Quiero ser parte de',
      highlight: 'la red de distribuidores',
      items: [
        { text: 'Requisitos para ser distribuidor o socio comercial. ' },
        { text: 'Capacitación o materiales para ventas.' },
        { text: 'Actualización de datos como distribuidor actual' },
      ],
      link: '/contacto/red-comercial',
    },
    {
      image: '/contact/previewContactoDetail.png',
      title: 'Contactar con un',
      highlight: 'asesor comercial',
      items: [
        { text: 'Quiero solicitar una cotización' },
        { text: 'Deseo asesoría para el proceso de compra' },
        { text: 'Información sobre disponibilidad o tiempos de entrega.' },
      ],
      link: '/contacto/asesoria',
    },
    {
      image: '/contact/previewContactoDetail.png',
      title: 'Servicio al ',
      highlight: 'cliente',
      items: [
        { text: 'Consulta sobre uso de productos' },
        { text: 'Documentación de productos ' },
        { text: 'Tengo una queja o reclamo ' },
        { text: 'Encuesta de satisfacción / sugerencias de mejora.  ' },
      ],
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
