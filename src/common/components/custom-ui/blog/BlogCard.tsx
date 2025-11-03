import { Avatar, AvatarFallback, AvatarImage } from '@shadcnui/avatar';
import { Badge } from '@shadcnui/badge';
import { Separator } from '../../shadcn-ui/separator';
import { AppImage } from '../AppImage';
import { Heading } from '../Heading';
import { Text } from '../Text';

interface BlogCardProps {
  imageUrl: string;
  category: string;
  title: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  date: string;
}

export function BlogCard({ imageUrl, category, title, author, date }: BlogCardProps) {
  return (
    <div className="border-darysa-gris-350-alt/60 overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
      <div className="relative h-60 w-full">
        <AppImage
          src={imageUrl}
          alt={title}
          fill
          sizes="
          (max-width: 639px) 100vw,   /* xs */                
          (max-width: 767px) 90vw,    /* sm */        
          (max-width: 1023px) 20vw,   /* md */       
          (max-width: 1279px) 20vw,   /* lg */
          460px                        /* xl+ */
          "
        />
      </div>
      <div className="p-6">
        <div className="mb-4.5 space-y-1">
          <Badge
            variant="outline"
            className="border-none p-0 text-sm font-semibold text-green-600 uppercase"
          >
            {category}
          </Badge>
          <Heading
            as="h4"
            variant="cardTitle"
            className="text-darysa-gris-800 line-clamp-2 min-h-10 lg:min-h-[50px]"
          >
            {title}
          </Heading>
        </div>
        <Separator className="bg-darysa-gris-350-alt/60 mb-4.5" />

        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatarUrl || '/placeholder.svg'} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Text variant="body" className="text-darysa-gris-800 font-semibold">
              {author.name}
            </Text>
            <Text variant="small" className="text-darysa-gray-600 font-barlow text-sm">
              {date}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
