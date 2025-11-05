import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { Button } from '@/common/components/shadcn-ui/button';
import Link from 'next/link';

interface ContactItem {
  text: string;
}

interface ContactBlockProps {
  image: string;
  title: string;
  highlight: string;
  items: ContactItem[];
  link: string;
  buttonText?: string;
}

export const ContactBlock = ({
  image,
  title,
  highlight,
  items,
  link,
  buttonText = 'Realizar Consulta',
}: ContactBlockProps) => {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-[auto_1fr] justify-start gap-6 lg:gap-9 xl:grid-cols-[0.9fr_1.1fr] xl:grid-rows-1 xl:items-center">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg xl:aspect-4/3">
        <AppImage src={image} alt={title} fill sizes="265px" />
      </div>

      <div className="w-full space-y-4 lg:space-y-6">
        <Heading as="h3" variant="subheading" className="leading-none md:text-[26px]">
          {title} <span className="font-black">{highlight}</span>
        </Heading>

        <ul className="list-disc space-y-1.5 pl-8 marker:text-xs">
          {items.map((item, index) => (
            <li key={index}>
              <Text variant="small">{item.text}</Text>
            </li>
          ))}
        </ul>

        <Button variant="darizaPrimary" asChild className="w-full max-w-[254px] text-center">
          <Link href={link}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};
