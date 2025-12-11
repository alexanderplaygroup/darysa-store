import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const containerVariants = cva('w-full mb-10', {
  variants: {
    size: {
      container: 'max-w-[1366px] px-2.5 lg:px-4 2xl:px-0 mx-auto xl:max-w-6xl 2xl:max-w-7xl',
      full: 'max-w-screen',
    },
  },
  defaultVariants: {
    size: 'container',
  },
});

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof HTMLElementTagNameMap;
  size?: 'container' | 'full';
}

export function Container({ as: Tag = 'div', size, className, ...props }: ContainerProps) {
  return <Tag className={cn(containerVariants({ size }), className)} {...props} />;
}
