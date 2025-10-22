import type { LucideProps } from 'lucide-react';
import * as React from 'react';

export const EditCircleIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  ({ color = 'currentColor', size = 24, strokeWidth = 2, className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill="none"
      className={className}
      {...props}
    >
      {/* círculo exterior */}
      <circle cx="13.5" cy="13.5" r="12.5" fill="white" stroke={color} strokeWidth={strokeWidth} />

      {/* lápiz más delgado */}
      <path
        d="M8.16323 19.9034H8.23794L11.6997 19.5879C12.0789 19.5501 12.4335 19.3831 12.7041 19.1147L20.1755 11.6434C20.4655 11.337 20.6222 10.9282 20.6113 10.5065C20.6004 10.0848 20.4228 9.68467 20.1174 9.39369L17.8428 7.11909C17.5459 6.84024 17.1569 6.68023 16.7497 6.66952C16.3426 6.65881 15.9457 6.79812 15.6346 7.06098L8.16323 14.5323C7.89489 14.8029 7.72782 15.1576 7.69004 15.5368L7.33308 18.9985C7.3219 19.1201 7.33767 19.2427 7.37929 19.3575C7.4209 19.4722 7.48732 19.5764 7.57382 19.6626C7.65139 19.7396 7.74338 19.8004 7.84453 19.8418C7.94567 19.8831 8.05397 19.904 8.16323 19.9034ZM16.6889 8.28129L18.9552 10.5476L17.2949 12.1664L15.0701 9.94159L16.6889 8.28129ZM9.30053 15.6779L13.9743 11.0374L16.2157 13.2788L11.5668 17.9276L9.07639 18.1601L9.30053 15.6779Z"
        fill={color}
      />
    </svg>
  )
);

EditCircleIcon.displayName = 'EditCircleIcon';
