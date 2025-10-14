import { Container } from '@/common/components/custom-ui/Container';
import { Button } from '@/common/components/shadcn-ui/button';
import { JoinTeamModalForm } from './components/JoinTeamModalForm';

export interface JobDetailProps {
  id?: number;
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
  location: string;
  modality: string;
  vacancies: number;
}

export const JobDetailView = ({
  title,
  description,
  requirements,
  benefits,
  location,
  modality,
  vacancies,
}: JobDetailProps) => {
  return (
    <>
      <Container className="mb-6">
        <h2 className="text-darysa-verde-oscuro text-2xl font-bold md:text-4xl">{title}</h2>
      </Container>
      <Container className="grid grid-cols-1 gap-20 md:grid-cols-[1.2fr_0.8fr]">
        {/* Información Principal */}
        <article className="space-y-6">
          <p className="text-darysa-gris-500">{description}</p>

          {/* Requisitos */}
          <div>
            <h3 className="text-darysa-gris-500 mb-2 text-2xl font-bold">Requisitos</h3>
            <ul className="text-darysa-gris-500 list-inside list-disc space-y-0.5 pl-4">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Beneficios */}
          <div>
            <h3 className="text-darysa-gris-500 mb-2 text-2xl font-bold">Beneficios</h3>
            <ul className="text-darysa-gris-500 list-inside list-disc space-y-0.5 pl-4">
              {benefits.map((ben, index) => (
                <li key={index}>{ben}</li>
              ))}
            </ul>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="border-darysa-gris-claro-alt/60 space-y-6 rounded-lg border px-8 py-6">
            <div>
              <h3 className="text-darysa-verde-oscuro font-barlow text-sm font-semibold uppercase">
                Ubicación
              </h3>
              <p className="text-darysa-gris-500 text-xl font-bold">{location}</p>
            </div>
            <div>
              <h3 className="text-darysa-verde-oscuro font-barlow text-sm font-semibold uppercase">
                Modalidad
              </h3>
              <p className="text-darysa-gris-500 text-xl font-bold">{modality}</p>
            </div>
            <div>
              <h3 className="text-darysa-verde-oscuro font-barlow text-sm font-semibold uppercase">
                Número de Vacantes
              </h3>
              <p className="text-darysa-gris-500 text-xl font-bold">
                {vacancies} Vacante{vacancies > 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-6">
            <JoinTeamModalForm />
            <Button variant="outline" className="h-16 w-full text-xl font-bold">
              Buscar más ofertas
            </Button>
          </div>
        </aside>
      </Container>
    </>
  );
};
