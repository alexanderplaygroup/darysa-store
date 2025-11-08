import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { Text } from '@/common/components/custom-ui/Text';
import { Button } from '@/common/components/shadcn-ui/button';
import { BrandForm } from './components/BrandForm';
import BrandProducts from './components/BrandProducts';
import Purpose from './components/Purpose';
const aboutBanner = {
  desktop: '/about/heroBanner.png',
  mobile: '/about/heroBanner.png',
  link: '/productos',
};

export const LandingView = () => {
  return (
    <>
      <Container size="full">
        {' '}
        <HeroBanner banner={aboutBanner} />
      </Container>
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
        <video
          src="/home/videoHome.mp4"
          loop
          muted
          autoPlay
          playsInline
          controls
          className="order-2 mx-auto aspect-video w-full max-w-xl rounded-lg lg:order-1 lg:max-w-2xl"
        />
        <div className="order-1 flex flex-col items-center justify-between gap-6 lg:order-2 lg:items-start">
          <div className="text-center lg:text-start">
            <Text variant="small" className="text-darysa-gris-800 font-semibold md:text-lg">
              Subtítulo
            </Text>
            <Heading variant="heading" className="mb-2">
              Sobre la marca
            </Heading>
            <Text variant="small" className="text-darysa-gris-800 leading-loose text-balance">
              Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum
              condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida
              venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius
              ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis,
              integer sodales facilisi fusce pellentesque. 
            </Text>
          </div>
          <Button className="h-10 w-full max-w-[150px] text-sm font-semibold text-white lg:h-12 lg:max-w-[300px] lg:text-base">
            Ver Video
          </Button>
        </div>
      </Container>

      <Container>
        <Purpose />
      </Container>
      <Container>
        <BrandProducts />
      </Container>
      <Container className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch xl:gap-10">
        <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg">
          <AppImage src="/about/aboutProm.png" alt="image" fill sizes="440px" />
        </div>
        <BrandForm />
      </Container>
    </>
  );
};
