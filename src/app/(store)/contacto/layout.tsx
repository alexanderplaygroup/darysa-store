import { Container } from '@/common/components/custom-ui/Container';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import InformationContact from '@/modules/contact/components/InformationContact';

export default function ContactLayout({
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
      <Container size="full" className="relative p-0">
        <HeroBanner banner={aboutBanner} />
        <Container className="absolute inset-x-0 -bottom-[75px] overflow-hidden rounded-lg bg-white p-0 shadow-2xl">
          <InformationContact />
        </Container>
      </Container>
      {children}
    </>
  );
}
