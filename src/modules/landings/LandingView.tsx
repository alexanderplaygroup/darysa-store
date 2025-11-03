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
  title: 'Soluciones Industriales Darysa',
  link: '/productos',
};

export const LandingView = () => {
  return (
    <>
      <Container size="full">
        {' '}
        <HeroBanner banner={aboutBanner} />
      </Container>
      <Container className="grid grid-cols-2 gap-14">
        <video
          src="/home/videoHome.mp4"
          loop
          muted
          autoPlay
          playsInline
          controls
          className="aspect-video w-full rounded-lg"
        />
        <div className="flex flex-col items-start justify-between">
          <div>
            <Text className="text-darysa-gris-800 text-xl! font-semibold">Subtítulo</Text>
            <Heading variant="heading">Sobre la marca</Heading>
            <Text variant="small" className="text-darysa-gris-800 leading-loose">
              Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum
              condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida
              venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius
              ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis,
              integer sodales facilisi fusce pellentesque. 
            </Text>
          </div>
          <Button className="h-12 w-full max-w-[300px] text-base font-semibold text-white">
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
      <Container className="mb-16 grid grid-cols-[0.8fr_1.2fr] items-stretch gap-16">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <AppImage src="/about/aboutProm.png" alt="image" fill sizes="440px" />
        </div>
        <BrandForm />
      </Container>
    </>
  );
};
