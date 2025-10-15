import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Términos y Condiciones', isCurrent: true },
];
export const TermsConditionsView = () => {
  return (
    <>
      <Container className="bg-darysa-gris-800/20 mb-0 h-[1px]"></Container>

      <Container className="mt-8">
        <div className="mb-5 space-y-3.5">
          <AppBreadcrumb items={breadcrumbItems} />
          <Heading as="h1" variant="heading" className="md:text-3xl">
            Términos y Condiciones
          </Heading>{' '}
        </div>
        <div
          className="text-darysa-gris-900 space-y-3.5 text-justify text-sm"
          dangerouslySetInnerHTML={{
            __html: `
      <p>
        El acceso y uso de este sitio web www.daryza.com se rige por los términos y condiciones descritos a continuación, así como por la legislación peruana vigente. 
        El sitio web es de titularidad de la empresa DARYZA SAC (en adelante, Daryza), quien se reserva la facultad de modificar en cualquier momento y sin previo aviso 
        la presentación, los contenidos, la funcionalidad, los productos, los servicios y la configuración que pudiera estar contenida en este sitio web.
      </p>

      <h2 class=" ">1. OBJETO</h2>
      <p>
        El objeto de los presentes Términos y Condiciones (en adelante, T&amp;C) es regular el acceso a nuestro sitio web 
        www.daryza.com (en adelante, el “sitio web”), entendiéndose por éste cualquier tipo de contenido, producto y/o servicio 
        que se encuentre a disposición del público dentro del dominio mencionado.
      </p>

      <h2 class=" ">2. VIGENCIA</h2>
      <p>
        Estos Términos y Condiciones entran en vigencia a partir del momento en que el usuario marca el casillero correspondiente indicando 
        que ha leído, comprendido y aceptado expresamente el contenido íntegro de este documento.
         Daryza podrá actualizar y/o modificar los presentes T&amp;C sin previo aviso, pero siempre dentro del marco de lo establecido 
        por el Código de Protección y Defensa del Consumidor. Por este motivo recomendamos revisar los T&amp;C cada vez que utilice la página web, 
        ya que la versión aplicable será la versión que se encuentre colgada al momento de la consulta. 
         Es preciso señalar que todo cambio o modificación a estos T&amp;C operará para las compras que se efectúen bajo su vigencia y no para compras anteriores 
        que se encuentren en etapa de ejecución (por ejemplo, con entrega de productos pendiente).
      </p>
  
      
      

      <h2 class=" ">3. REGISTRO DE CLIENTE</h2>
      <p>
        El registro del cliente en este sitio es obligatorio para comprar a través de la Tienda Virtual.
            Para el registro en el sitio web, el cliente debe crear un usuario y contraseña o clave secreta, además debe proporcionar sus datos de identificación 
        fidedignos y necesarios que el formulario solicite y proveer información adicional los cuales podrán ser validados posteriormente. 
        Es responsabilidad del cliente mantener sus datos actualizados.
        En caso la Tienda Virtual detecte alguna inconsistencia en la información brindada por el cliente al momento del registro o durante el proceso de compra, 
        podrá anular la compra y realizar la devolución o liberación del monto cobrado al medio de pago utilizado.
      </p>
    
    `,
          }}
        />
      </Container>
    </>
  );
};
