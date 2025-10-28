import { LucideProps } from 'lucide-react';
import * as React from 'react';

export const SearchCustomIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ color = 'currentColor', size = 24, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.3914 12.1042C14.2263 10.9868 14.7212 9.59743 14.7212 8.09361C14.7212 4.40436 11.7447 1.40625 8.06373 1.40625C4.38283 1.40625 1.40625 4.40436 1.40625 8.09361C1.40625 11.7829 4.38283 14.7809 8.06373 14.7809C9.63566 14.7809 11.0806 14.233 12.2187 13.3189L15.1441 16.3373C15.4684 16.6718 16.0026 16.6801 16.3373 16.3559C16.6718 16.0316 16.6801 15.4974 16.3559 15.1627L13.3914 12.1042Z" />
    </svg>
  )
);

SearchCustomIcon.displayName = 'SearchCustomIcon';
