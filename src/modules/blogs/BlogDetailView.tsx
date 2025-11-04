import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { HeroBanner } from '@/common/components/custom-ui/HeroBanner';
import { Text } from '@/common/components/custom-ui/Text';
import { FacebookIcon } from '@/common/components/icons/FacebookIcon';
import { InstagramIcon } from '@/common/components/icons/InstagramIcon';
import { LinkedInIcon } from '@/common/components/icons/LinkedInIcon';
import { TikTokIcon } from '@/common/components/icons/TikTokIcon';
import { YouTubeIcon } from '@/common/components/icons/YouTubeIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/common/components/shadcn-ui/avatar';
import { Button } from '@/common/components/shadcn-ui/button';
import SearchBlog from './components/Search';

const BlogDetailView = () => {
  const aboutBanner = {
    desktop: '/about/heroBanner.png',
    mobile: '/about/heroBanner.png',
    link: '/productos',
  };

  const blogData = {
    title: 'Cuidemos nuestro planeta: Los nuevos productos Biodegradables Daryza',

    content: [
      {
        type: 'paragraph',
        text: `Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida venenatis nisl lacinia scelerisque mattis cum hac curabitur. Dignissim neque varius ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis, integer sodales facilisi fusce pellentesque.`,
      },
      {
        type: 'quote',
        text: `“Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum”`,
      },
      {
        type: 'paragraph',
        text: `Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum massa ultrices tempor semper ridiculus facilisis diam. Dignissim neque varius ullamcorper nec vel luctus, magnis ornare condimentum justo inceptos facilisis, integer sodales facilisi fusce pellentesque. Dignissim neque varius ullamcorper nec vel luctus, magnis. Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum condimentum massa.`,
      },
    ],
    tags: ['Sostenibilidad', 'Biodegradable', 'Innovación', 'Medio Ambiente'],
    author: {
      name: 'María López',
      role: 'Especialista en Sostenibilidad',
      avatarUrl: '/authors/maria-lopez.jpg',
    },
    publishedAt: '2025-10-10',
  };
  const { title, content, author, tags } = blogData;

  return (
    <>
      <Container size="full" className="relative lg:mb-24">
        <HeroBanner banner={aboutBanner} />
        <Container className="absolute inset-x-0 -bottom-[90px] hidden max-w-[787px] px-0! lg:block">
          <SearchBlog />
        </Container>
      </Container>
      <Container className="block max-w-full lg:hidden lg:max-w-[787px]">
        <SearchBlog />
      </Container>
      <Container className="grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-2 xl:gap-12">
        <div className="space-y-6">
          <Heading as="h1" variant="heading" className="text-balance md:text-3xl">
            {title}
          </Heading>

          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-darysa-gris-800 text-[15px] font-semibold underline underline-offset-4"
              >
                {tag}
              </span>
            ))}
          </div>
          {content.map((block, i) =>
            block.type === 'paragraph' ? (
              <Text key={i} variant="small" className="text-justify leading-loose tracking-wider">
                {block.text}
              </Text>
            ) : (
              <Text
                key={i}
                variant="body"
                className="text-darysa-green-500 border-darysa-green-500 rounded-lg border p-6 md:text-xl lg:p-10"
              >
                {block.text}
              </Text>
            )
          )}

          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={author.avatarUrl || '/placeholder.svg'} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <Text variant="body" className="text-darysa-gris-800 font-semibold">
                {author.name}
              </Text>
              <Text variant="small" className="text-darysa-gray-600 text-sm font-normal">
                {author.role}
              </Text>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4.5">
              <FacebookIcon size={30} className="text-darysa-gris-800" />
              <LinkedInIcon size={28} className="text-darysa-gris-800" />
              <InstagramIcon size={30} className="text-darysa-gris-800" />
              <TikTokIcon size={30} className="text-darysa-gris-800" />
              <YouTubeIcon size={30} className="text-darysa-gris-800" />
            </div>
            <span className="text-darysa-green-500 flex items-center gap-2 underline underline-offset-4">
              Compartir Nota
            </span>
          </div>
        </div>
        <div className="relative aspect-3/4 h-full w-full overflow-hidden rounded-lg lg:aspect-square">
          <AppImage src="" alt="" fill sizes="626px" />
        </div>
      </Container>

      <Container>
        <div className="mb-14 grid grid-cols-2 gap-2.5 lg:gap-4 xl:gap-12">
          <div className="relative aspect-614/426 overflow-hidden rounded-lg">
            <AppImage src="" alt="" fill sizes="614px" />{' '}
          </div>
          <div className="relative aspect-614/426 overflow-hidden rounded-lg">
            <AppImage src="" alt="" fill sizes="614px" />{' '}
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <Button
            variant="darizaPrimary"
            className="bg-darysa-green-500 hover:bg-darysa-green-500/90"
          >
            Volver
          </Button>
        </div>
      </Container>
    </>
  );
};

export default BlogDetailView;
