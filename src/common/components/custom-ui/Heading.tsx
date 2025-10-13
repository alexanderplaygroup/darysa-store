import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType, HTMLAttributes } from 'react';

const headingVariants = cva(
  'text-darysa-green-500 leading-tight tracking-tight ', // estilos base
  {
    variants: {
      variant: {
        display: 'text-5xl sm:text-6xl md:text-7xl font-extrabold',
        heading: 'text-3xl sm:text-4xl md:text-5xl font-semibold',
        subheading: 'text-xl sm:text-2xl md:text-[32px] font-semibold',
      },
    },
    defaultVariants: {
      variant: 'heading',
    },
  }
);

interface HeadingProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof headingVariants> {
  as?: ElementType;
}

/**
 * 🧱 Componente tipográfico escalable y consistente.
 * Usa variantes para diferentes jerarquías visuales.
 */
export const Heading = ({
  as: Tag = 'h2',
  variant,
  className,
  children,
  ...props
}: HeadingProps) => {
  return (
    <Tag className={cn(headingVariants({ variant, className }))} {...props}>
      {children}
    </Tag>
  );
};
