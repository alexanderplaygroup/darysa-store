import { Container } from '@/common/components/custom-ui/Container';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const aboutBanner = {
    desktop: '/about/heroBanner.png',
    mobile: '/about/heroBanner.png',
    link: '/productos',
  };
  return (
    <>
      <Container size="full" className="p-0">
        <HeroBanner banner={aboutBanner} />
      </Container>
      {children}
    </>
  );
}
