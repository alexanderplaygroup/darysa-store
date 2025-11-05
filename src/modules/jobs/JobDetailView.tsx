import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
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
        <Heading as="h1" variant="heading">
          {title}
        </Heading>
      </Container>
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        {/* Información Principal */}
        <article className="space-y-6">
          <Text variant="body" className="text-darysa-gris-500">
            {description}
          </Text>

          {/* Requisitos */}
          <div>
            <Heading
              as="h3"
              variant="subheading"
              className="text-darysa-gris-500 mb-2 font-bold md:text-2xl"
            >
              Requisitos
            </Heading>
            <ul className="text-darysa-gris-500 list-inside list-disc space-y-0.5 pl-4">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Beneficios */}
          <div>
            <Heading
              as="h3"
              variant="subheading"
              className="text-darysa-gris-500 mb-2 font-bold md:text-2xl"
            >
              Beneficios
            </Heading>
            <ul className="text-darysa-gris-500 list-inside list-disc space-y-0.5 pl-4">
              {benefits.map((ben, index) => (
                <li key={index}>{ben}</li>
              ))}
            </ul>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="border-darysa-gris-350-alt/60 space-y-6 rounded-lg border px-8 py-6">
            <div>
              <Text
                as="h3"
                variant="small"
                className="text-darysa-verde-oscuro font-barlow text-sm font-semibold uppercase"
              >
                Ubicación{' '}
              </Text>

              <Text variant="body" className="text-darysa-gris-500 font-bold md:text-xl">
                {location}
              </Text>
            </div>
            <div>
              <Text
                as="h3"
                variant="small"
                className="text-darysa-verde-oscuro font-barlow text-sm font-semibold uppercase"
              >
                Modalidad
              </Text>
              <Text variant="body" className="text-darysa-gris-500 font-bold md:text-xl">
                {modality}
              </Text>
            </div>
            <div>
              <Text
                as="h3"
                variant="small"
                className="text-darysa-verde-oscuro font-barlow text-sm font-semibold uppercase"
              >
                Número de Vacantes
              </Text>

              <Text variant="body" className="text-darysa-gris-500 font-bold md:text-xl">
                {vacancies} Vacante{vacancies > 1 ? 's' : ''}
              </Text>
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
