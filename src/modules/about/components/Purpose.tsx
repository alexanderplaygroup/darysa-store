import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';

const Purpose = () => {
  return (
    <>
      <div className="mb-12 text-center">
        <Heading variant="heading" className="mb-2">
          Nuestro Proposito{' '}
        </Heading>
        <Text variant="small" className="text-darysa-gris-800 mx-auto max-w-[821px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum
          condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida
          venenatis nisl lacinia scelerisque.{' '}
        </Text>
      </div>
      <div className="flex w-full items-center justify-center gap-15">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="relative aspect-square w-full">
            <AppImage src="" alt="" fill sizes="400px" />
          </div>
          <Heading as="h6" variant="cardTitle" className="md:text-2xl">
            Pasión
          </Heading>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="relative aspect-square w-full">
            <AppImage src="" alt="" fill sizes="400px" />
          </div>
          <Heading as="h6" variant="cardTitle" className="md:text-2xl">
            Integridad
          </Heading>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="relative aspect-square w-full">
            <AppImage src="" alt="" fill sizes="400px" />
          </div>
          <Heading as="h6" variant="cardTitle" className="md:text-2xl">
            Creatividad
          </Heading>
        </div>
      </div>
    </>
  );
};

export default Purpose;
