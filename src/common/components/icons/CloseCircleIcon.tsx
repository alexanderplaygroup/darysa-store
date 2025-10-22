import type { LucideProps } from 'lucide-react';
import * as React from 'react';

export const CloseCircleIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ color = 'currentColor', size = 24, strokeWidth = 2, className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="13.4882" cy="13.4882" r="12.4882" fill="white" />
      <path d="M9.44141 9.44141L18.2088 18.2088" />
      <path d="M18.209 9.44141L9.44162 18.2088" />
    </svg>
  )
);

CloseCircleIcon.displayName = 'CloseCircleIcon';
