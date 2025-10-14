import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { Text } from '@/common/components/custom-ui/Text';
import { Button } from '@/common/components/shadcn-ui/button';
import { cn } from '@/lib/utils';
import CarouselProducts from './components/CarouselProducts';
import SearchBlog from './components/Search';

const BlogsView = () => {
  const aboutBanner = {
    desktop: '/about/heroBanner.png',
    mobile: '/about/heroBanner.png',
    title: 'Soluciones Industriales Darysa',
    link: '/productos',
  };

  const blogs = [
    {
      id: 1,
      title: 'Cuidemos nuestro planeta: Los nuevos productos Biodegradables Daryza',
      tags: ['Biodegradable', 'MedioAmbiente', 'Daryza'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis, integer sodales facilisi fusce pellentesque. ',
      image: '/blog/blog1.png',
    },
    {
      id: 2,
      title: 'Comprometidos con la limpieza responsable',
      tags: ['Eco', 'Sostenibilidad', 'Daryza'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis, integer sodales facilisi fusce pellentesque. ',
      image: '/blog/blog2.png',
    },
    {
      id: 3,
      title: 'Cuidemos nuestro planeta: Los nuevos productos Biodegradables Daryza',
      tags: ['Biodegradable', 'MedioAmbiente', 'Daryza'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis, integer sodales facilisi fusce pellentesque. ',
      image: '/blog/blog1.png',
    },
    {
      id: 4,
      title: 'Comprometidos con la limpieza responsable',
      tags: ['Eco', 'Sostenibilidad', 'Daryza'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis, integer sodales facilisi fusce pellentesque. ',
      image: '/blog/blog2.png',
    },
  ];

  return (
    <>
      <Container size="full" className="relative mb-24">
        <HeroBanner banner={aboutBanner} />
        <Container className="absolute inset-x-0 -bottom-[105px] max-w-[787px] overflow-hidden rounded-lg bg-white shadow-lg">
          <SearchBlog />
        </Container>
      </Container>
      <Container className="space-y-14">
        {blogs.map((item, index) => {
          const isEven = index % 2 === 1; // filas alternas

          return (
            <div key={item.id} className="grid grid-cols-2 items-center gap-6">
              {/* Texto */}
              <div
                className={cn(
                  'max-w-[600px] space-y-4',
                  isEven && 'order-2 ml-auto' // alterna orden del texto
                )}
              >
                <Heading
                  as="h3"
                  variant="subheading"
                  className="leading-tight font-bold tracking-normal"
                >
                  {item.title}
                </Heading>

                <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-darysa-gris-800 text-[15px] font-semibold underline underline-offset-4"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Text variant="small" className="text-justify leading-loose tracking-wider">
                  {item.description}
                </Text>
              </div>

              {/* Imagen */}
              <div
                className={cn(
                  'relative aspect-[29/24] overflow-hidden rounded-lg',
                  isEven && 'order-1' // alterna orden de la imagen
                )}
              >
                <AppImage src={item.image} alt={item.title} fill sizes="626px" />
              </div>
            </div>
          );
        })}

        <div className="flex w-full items-center justify-center">
          <Button>Ver más</Button>
        </div>
      </Container>
      <Container className="grid w-full grid-cols-3 gap-6">
        <div className="relative aspect-[203/269] w-full overflow-hidden rounded-lg">
          <AppImage src="/blog/blog1.png" alt="Blog 1" fill sizes="406px" />
        </div>
        <div className="relative aspect-[203/269] w-full overflow-hidden rounded-lg">
          <AppImage src="/blog/blog1.png" alt="Blog 1" fill sizes="406px" />
        </div>
        <div className="relative aspect-[203/269] w-full overflow-hidden rounded-lg">
          <AppImage src="/blog/blog1.png" alt="Blog 1" fill sizes="406px" />
        </div>
      </Container>
      <Container className="space-y-8">
        <CarouselProducts />
      </Container>
    </>
  );
};

export default BlogsView;
