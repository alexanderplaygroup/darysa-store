import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { FormBookComplaints } from './components/FormBookComplaints';
import { BookComplaints } from './interfaces';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Libro de Reclamaciones', isCurrent: true },
];
export const ComplaintsBookView = () => {
  const mockBookComplaint: BookComplaints = {
    title: 'libro de reclemaciones',
    queja: 'Si tiene alguna queja relacionada con nuestros servicios, puede registrarla aquí.',
    reclamo: 'Para reclamos relacionados con facturación o servicio recibido, use este formulario.',
    subtitle: 'Información Importante',
    paragraph: `
    <p>
      Asegúrese de completar todos los campos obligatorios. 
      Su reclamo será procesado dentro de los 5 días hábiles siguientes a su envío.
    </p>
    <ul>
      <li>Campos con * son obligatorios</li>
      <li>Adjunte documentos si es necesario (PDF hasta 20MB)</li>
    </ul>
  `,
  };
  return (
    <>
      {/* <Container className="bg-darysa-gris-800/20 mt-2 mb-0 h-px"></Container> */}
      <Container className="mt-8">
        <div className="mb-5 space-y-4">
          <AppBreadcrumb items={breadcrumbItems} />
          <Heading as="h1" variant="heading" className="md:text-3xl">
            Libro de Reclamaciones{' '}
          </Heading>{' '}
        </div>
        <FormBookComplaints data={mockBookComplaint} />
      </Container>
    </>
  );
};
