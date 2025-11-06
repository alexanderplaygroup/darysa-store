import { LucideProps } from 'lucide-react';
import * as React from 'react';

export const ProductCategoriesIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ color = 'currentColor', size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Línea superior */}
      <path d="M21 5H3" />
      {/* Línea media */}
      <path d="M17 12H7" />
      {/* Línea inferior */}
      <path d="M19 19H5" />
    </svg>
  )
);

ProductCategoriesIcon.displayName = 'ProductCategoriesIcon';
