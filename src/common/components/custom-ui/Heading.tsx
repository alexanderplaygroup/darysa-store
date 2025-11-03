import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const headingVariants = cva(
  'text-darysa-green-500  ', // estilos base
  {
    variants: {
      variant: {
        display: 'text-5xl sm:text-6xl md:text-7xl font-extrabold',
        heading: 'text-2xl sm:text-3xl md:text-4xl font-bold leading-tight',
        subheading: 'text-xl sm:text-2xl md:text-[32px] font-semibold leading-tight tracking-tight',
        cardTitle: 'text-base sm:text-lg md:text-xl font-bold leading-tight ',
      },
    },
    defaultVariants: {
      variant: 'heading',
    },
  }
);

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof HTMLElementTagNameMap;
  variant?: 'display' | 'heading' | 'subheading' | 'cardTitle';
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
