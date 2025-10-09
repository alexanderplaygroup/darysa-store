import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { Fragment } from 'react';
import { JobApplicationForm } from './components/JobApplicationForm';
import { PreviewPositionCard } from './components/PreviewPositionCard';

export const JobsView = () => {
  const previewPositions = [
    {
      imageUrl: '/about/positionPhoto.png',
      imageAlt: 'Equipo de desarrollo',
      title: 'Desarrollador Frontend',
      description: 'Encargado de crear interfaces modernas y optimizadas.',
      path: '/trabajos/empleos/frontend-developer',
    },
    {
      imageUrl: '/about/positionPhoto.png',
      imageAlt: 'Backend APIs',
      title: 'Desarrollador Backend',
      description: 'Diseña la lógica y los servicios detrás del producto.',
      path: '/trabajos/empleos/frontend-developer',
    },
    {
      imageUrl: '/about/positionPhoto.png',
      imageAlt: 'Diseño UI/UX',
      title: 'Diseñador UI/UX',
      description: 'Transforma ideas en experiencias visuales intuitivas.',
      path: '/trabajos/empleos/frontend-developer',
    },
    {
      imageUrl: '/about/positionPhoto.png',
      imageAlt: 'Equipo de desarrollo',
      title: 'Desarrollador Frontend',
      description: 'Encargado de crear interfaces modernas y optimizadas.',
      path: '/trabajos/empleos/frontend-developer',
    },
    {
      imageUrl: '/about/positionPhoto.png',
      imageAlt: 'Backend APIs',
      title: 'Desarrollador Backend',
      description: 'Diseña la lógica y los servicios detrás del producto.',
      path: '/trabajos/empleos/frontend-developer',
    },
    {
      imageUrl: '/about/positionPhoto.png',
      imageAlt: 'Diseño UI/UX',
      title: 'Diseñador UI/UX',
      description: 'Transforma ideas en experiencias visuales intuitivas.',
      path: '/trabajos/empleos/frontend-developer',
    },
  ];
  return (
    <Fragment>
      <Container className="mb-6 space-y-20">
        <div className="grid grid-cols-1 gap-x-44 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {previewPositions.map((position, index) => (
            <PreviewPositionCard key={index} {...position} />
          ))}
        </div>

        <div className="w-full">
          <button className="bg-darysa-verde-oscuro mx-auto flex h-12 w-full max-w-[320px] items-center justify-center rounded-lg font-bold text-white">
            Ver Más Ofertas
          </button>
        </div>
      </Container>
      <Container className="mb-10 grid grid-cols-[0.8fr_1.2fr] items-stretch gap-16">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <AppImage src="/about/aboutProm.png" alt="image" fill sizes="440px" />
        </div>
        <JobApplicationForm />
      </Container>
    </Fragment>
  );
};
