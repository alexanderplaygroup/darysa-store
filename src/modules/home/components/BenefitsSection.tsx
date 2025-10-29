import { Heading } from '@/common/components/custom-ui/Heading';
import { cn } from '@/lib/utils';
import { BenefitItems } from '../type';

type BenefitsSectionProps = {
  items: BenefitItems;
  className?: string;
};

export function BenefitsSection({ items, className }: BenefitsSectionProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-2.5 md:gap-5 lg:grid-cols-4', className)}>
      <div className="bg-darysa-verde-oscuro grid grid-cols-1 grid-rows-[auto_1fr] items-center justify-center gap-3 rounded-sm border p-5 md:grid-cols-[0.2fr_1.8fr] md:grid-rows-1 md:gap-6">
        <div className="flex items-center justify-center text-start text-white lg:text-4xl">
          {items.first.icon}
        </div>
        <Heading
          as="h5"
          className="text-center text-base leading-none wrap-break-word text-white sm:text-start sm:text-xl md:text-xl"
        >
          {items.first.title}
        </Heading>
      </div>

      <div className="bg-darysa-gris-500 grid grid-cols-1 grid-rows-[auto_1fr] items-center justify-center gap-3 rounded-sm border p-5 md:grid-cols-[0.2fr_1.8fr] md:grid-rows-1 md:gap-6">
        <div className="flex items-center justify-center text-start text-white lg:text-4xl">
          {items.second.icon}
        </div>
        <Heading
          as="h5"
          className="text-center text-base leading-none wrap-break-word text-white sm:text-start sm:text-xl md:text-xl"
        >
          {items.second.title}
        </Heading>
      </div>

      <div className="bg-darysa-verde-oscuro grid grid-cols-1 grid-rows-[auto_1fr] items-center justify-center gap-3 rounded-sm border p-5 md:grid-cols-[0.2fr_1.8fr] md:grid-rows-1 md:gap-6">
        <div className="flex items-center justify-center text-start text-white lg:text-4xl">
          {items.third.icon}
        </div>
        <Heading
          as="h5"
          className="text-center text-base leading-none wrap-break-word text-white sm:text-start sm:text-xl md:text-xl"
        >
          {items.third.title}
        </Heading>
      </div>

      <div className="bg-darysa-gris-500 grid grid-cols-1 grid-rows-[auto_1fr] items-center justify-center gap-3 rounded-sm border p-5 md:grid-cols-[0.2fr_1.8fr] md:grid-rows-1 md:gap-6">
        <div className="flex items-center justify-center text-start text-white lg:text-4xl">
          {items.fourth.icon}
        </div>
        <Heading
          as="h5"
          className="text-center text-base leading-none wrap-break-word text-white sm:text-start sm:text-xl md:text-xl"
        >
          {items.fourth.title}
        </Heading>
      </div>
    </div>
  );
}
