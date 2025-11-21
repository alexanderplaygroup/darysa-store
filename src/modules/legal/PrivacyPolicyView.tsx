import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Política Anticorrupción y Antisoborno', isCurrent: true },
];
export const PrivacyPolicyView = () => {
  return (
    <>
      {/* <Container className="bg-darysa-gris-800/20 mt-2 mb-0 h-px"></Container> */}
      <Container className="mt-8">
        <div className="mb-5 space-y-4">
          <AppBreadcrumb items={breadcrumbItems} />
          <Heading as="h1" variant="heading" className="md:text-3xl">
            Política Anticorrupción y Antisoborno
          </Heading>{' '}
        </div>
        <div
          className="text-darysa-gris-900 space-y-3.5 text-justify text-sm"
          dangerouslySetInnerHTML={{
            __html: `
      <p>
        En DARYZA estamos comprometidos a llevar nuestro negocio de acuerdo a los más altos estándares de Buen Gobierno Corporativo y éticos, y entendemos que nuestra conducta de negocio debe estar alineada a una conducta transparente y ética.
      </p>

      <p>
        Comprender los principios de nuestra organización y esta Política Anti-Corrupción es esencial para salvaguardar nuestra reputación y nuestro bienestar económico a lo largo del tiempo, por lo que cumplir con nuestras políticas y procedimientos es nuestra responsabilidad individual y no hacerlo puede traer como resultado consecuencias negativas para DARYZA y todos los involucrados.
      </p>

      <p>
        La postura de DARYZA con respecto a los sobornos y la corrupción es clara: la Empresa no tolerará ningún tipo de ofrecimiento, pago, autorización, solicitud o aceptación de sobornos en cualquiera de sus formas, por lo que expresamos que DARYZA maneja una tolerancia cero con respecto a sobornos y corrupción.
      </p>

      <p>
        El éxito de DARYZA se basa en su reputación y la confianza que depositan en nosotros nuestros clientes, lograda a partir de la honestidad y seriedad comercial con la que trabajamos, por lo que no podemos exponer por beneficios provenientes de un negocio obtenido por medios indebidos a nuestra Empresa.
      </p>

      <p>
        Si bien esta Política aborda una serie de situaciones que puede enfrentar cualquiera de nosotros en algún momento dado, no es posible que se cubran todas las situaciones que pueden presentarse. Si no está seguro sobre la forma correcta de actuar, es nuestro deber consultar o reportar tales situaciones a través de los mecanismos establecidos para tal fin.
      </p>

      <h2>MARCO GENERAL</h2>
      <h3>2.1 OBJETO</h3>

      <p>
        El objeto de esta Política Anticorrupción y Antisoborno es establecer las directrices y lineamientos generales, orientar a las normas y reglamentos que deben seguir todos los empleados, directores, funcionarios, proveedores y terceros relacionados con DARYZA para prevenir y detectar, de manera oportuna, actos de corrupción y soborno, dando así cumplimiento a la normativa y estándares internacionales anticorrupción definidos.
      </p>
    `,
          }}
        />
      </Container>
    </>
  );
};
