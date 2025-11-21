import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { LoginForm } from './components/LoginForm';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Iniciar Sesión', isCurrent: true },
];

export const LoginView = () => {
  return (
    <>
      {/* <Container className="bg-darysa-gris-800/20 mt-2 mb-0 h-px"></Container> */}
      <Container className="mt-8">
        <div className="mb-8 space-y-4">
          <AppBreadcrumb items={breadcrumbItems} />
          <Heading as="h1" variant="heading" className="md:text-3xl">
            Iniciar Sesión
          </Heading>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-between gap-16 lg:grid-cols-2 lg:gap-28">
          <LoginForm />

          <div className="relative ml-auto aspect-4/3 w-full">
            <AppImage
              src="/home/bannerHome.png"
              alt="Pantalla de inicio de sesión"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" // mobile: 100%, desktop: 50%
              className="rounded-xl"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
