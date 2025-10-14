import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType } from 'react';

const containerVariants = cva('w-full mb-14', {
  variants: {
    size: {
      container: 'max-w-[1366px] px-6 2xl:px-0 mx-auto',
      full: 'max-w-screen',
    },
  },
  defaultVariants: {
    size: 'container',
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {
  as?: ElementType;
}

export function Container({ className, size, as: tag = 'div', ...props }: ContainerProps) {
  const Tag = tag;
  return <Tag className={cn(containerVariants({ size }), className)} {...props} />;
}
