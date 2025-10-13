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
    <div className="flex w-full items-center gap-9">
      <div className="relative h-full min-h-[282px] w-full max-w-[265px] overflow-hidden rounded-lg">
        <AppImage src={image} alt={title} fill sizes="265px" />
      </div>

      <div className="w-full space-y-6">
        <Heading as="h3" variant="subheading" className="leading-none">
          {title} <span className="font-black">{highlight}</span>
        </Heading>

        <ul className="list-disc space-y-1.5 pl-8 marker:text-xs">
          {items.map((item, index) => (
            <li key={index}>
              <Text variant="small">{item.text}</Text>
            </li>
          ))}
        </ul>

        <Button asChild className="h-12 w-full max-w-[254px] text-center">
          <Link href={link}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};
