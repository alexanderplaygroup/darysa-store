import type { LucideProps } from 'lucide-react';
import * as React from 'react';

export const TikTokIcon = React.forwardRef<SVGSVGElement, LucideProps>(
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
      <path d="M16.708 2H13.69V14.364C13.69 16.004 12.37 17.324 10.73 17.324C9.08998 17.324 7.76998 16.004 7.76998 14.364C7.76998 12.724 9.08998 11.404 10.73 11.404V8.364C7.30998 8.364 4.53998 11.134 4.53998 14.554C4.53998 17.974 7.30998 20.744 10.73 20.744C14.15 20.744 16.92 17.974 16.92 14.554V8.574C17.88 9.184 19.07 9.554 20.38 9.554V6.514C18.34 6.514 16.708 4.884 16.708 2Z" />
    </svg>
  )
);

TikTokIcon.displayName = 'TikTokIcon';
