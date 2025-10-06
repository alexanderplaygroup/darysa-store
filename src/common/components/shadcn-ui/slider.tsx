'use client';
//se personalizó
import { cn } from '@/lib/utils';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  showValues?: boolean;
  min?: number;
  max?: number;
}

export function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  showValues = false,
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      step={1}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      {/* Track */}
      <SliderPrimitive.Track className="relative h-2 w-full grow rounded-full bg-gray-200">
        <SliderPrimitive.Range className="absolute h-2 rounded-full bg-[#FFFFFF]" />
      </SliderPrimitive.Track>

      {/* Thumbs */}
      {_values.map((v, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="bg-darysa-verde-oscuro relative block h-5 w-5 rounded-full border-2 border-white shadow focus:outline-none"
        >
          {showValues && (
            <span className="bg-darysa-verde-oscuro absolute -bottom-8 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs font-medium text-white shadow">
              {v}
            </span>
          )}
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  );
}
