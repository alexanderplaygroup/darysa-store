import type { LucideProps } from 'lucide-react';
import * as React from 'react';

export const YouTubeIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ color = 'currentColor', size = 24, className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      {...props}
    >
      <path d="M23.498 6.186a2.998 2.998 0 0 0-2.113-2.117C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.385.569A3.002 3.002 0 0 0 .502 6.186 31.538 31.538 0 0 0 0 12a31.538 31.538 0 0 0 .502 5.814 2.998 2.998 0 0 0 2.113 2.117C4.6 20.5 12 20.5 12 20.5s7.4 0 9.385-.569a2.998 2.998 0 0 0 2.113-2.117A31.538 31.538 0 0 0 24 12a31.538 31.538 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  )
);

YouTubeIcon.displayName = 'YouTubeIcon';
