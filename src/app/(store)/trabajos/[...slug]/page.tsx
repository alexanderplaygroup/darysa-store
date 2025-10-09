import { JobDetailProps, JobDetailView } from '@/modules/jobs/JobDetailView';

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  console.log(slug);
  const jobData: JobDetailProps = {
    id: 123,
    title: 'Frontend Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    requirements: [
      '3+ años de experiencia en desarrollo web',
      'Experiencia con React y TypeScript',
      'Conocimiento en testing y buenas prácticas',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
    benefits: [
      'Seguro de salud',
      'Flexibilidad horaria',
      'Capacitación continua',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
    location: 'Lima, Perú',
    modality: 'Remoto / Híbrido',
    vacancies: 2,
  };

  return <JobDetailView {...jobData} />;
}
