import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon; // cualquier ícono de lucide-react
  title: string;
  description: string;
  className?: string;
}

export function InfoCard({ icon: Icon, title, description, className }: InfoCardProps) {
  return (
    <div
      className={cn(
        'grid grid-rows-[auto_1fr] gap-4 rounded-3xl border p-8 text-center',
        className
      )}
    >
      <div className="flex flex-col items-center justify-between gap-4">
        <Icon className="h-[100px] w-[100px]" />
        <Heading as="h4" variant="subheading" className="leading-none! md:text-2xl!">
          {title}
        </Heading>
      </div>
      <Text variant="small" className="wrap-break-word">
        {description}
      </Text>
    </div>
  );
}
