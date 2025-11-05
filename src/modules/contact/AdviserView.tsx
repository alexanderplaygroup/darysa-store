import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { AdviserForm } from './components/adviser/AdviserForm';
import InformationContact from './components/InformationContact';

const AdviserView = () => {
  const aboutBanner = {
    desktop: '/about/heroBanner.png',
    mobile: '/about/heroBanner.png',
    link: '/productos',
  };

  return (
    <>
      <Container size="full" className="relative lg:mb-36">
        <HeroBanner banner={aboutBanner} />
        <Container className="absolute inset-x-0 -bottom-[120px] hidden lg:block">
          <InformationContact />
        </Container>
      </Container>
      <Container className="block overflow-hidden rounded-lg bg-white lg:hidden">
        <InformationContact />
      </Container>

      <Container className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch xl:gap-10">
        <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg">
          <AppImage src="/about/aboutProm.png" alt="image" fill sizes="440px" />
        </div>
        <AdviserForm />
      </Container>
    </>
  );
};

export default AdviserView;
