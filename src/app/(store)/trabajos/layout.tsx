import { Container } from '@/common/components/custom-ui/Container';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { SearchBar } from '@/modules/jobs/components/SearchBar';

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const aboutBanner = {
    desktop: '/about/heroBanner.png',
    mobile: '/about/heroBanner.png',
    title: 'Soluciones Industriales Darysa',
    link: '/productos',
  };
  return (
    <>
      <Container size="full" className="relative mb-8 p-0">
        <HeroBanner banner={aboutBanner} />
        <Container className="absolute inset-x-0 -bottom-7 py-0">
          <SearchBar />
        </Container>
      </Container>
      {children}
    </>
  );
}
