import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { Button } from '@/common/components/shadcn-ui/button';
import { JobApplicationForm } from './components/JobApplicationForm';
import { PreviewPositionCard } from './components/PreviewPositionCard';
import { SearchBar } from './components/SearchBar';

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
    <div className="relative w-full">
      <Container className="absolute inset-x-0 -top-[85px] hidden lg:block">
        <SearchBar />
      </Container>
      <Container className="block lg:hidden">
        <SearchBar />
      </Container>
      <Container className="mb-20">
        <div className="mb-20 grid grid-cols-1 gap-x-20 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-28 lg:pt-10 xl:gap-x-44">
          {previewPositions.map((position, index) => (
            <PreviewPositionCard key={index} {...position} />
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <Button
            variant="darizaPrimary"
            className="bg-darysa-green-500 hover:bg-darysa-green-500/90"
          >
            Ver Más Ofertas
          </Button>
        </div>
      </Container>

      <Container className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch xl:gap-10">
        <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg">
          <AppImage src="/about/aboutProm.png" alt="image" fill sizes="440px" />
        </div>
        <JobApplicationForm />
      </Container>
    </div>
  );
};
