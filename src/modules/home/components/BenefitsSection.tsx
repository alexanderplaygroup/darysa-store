import { Heading } from '@/common/components/custom-ui/Heading';
import { cn } from '@/lib/utils';
import { BenefitItems } from '../type';

type BenefitsSectionProps = {
  items: BenefitItems;
  className?: string;
};

export function BenefitsSection({ items, className }: BenefitsSectionProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-5 lg:grid-cols-4', className)}>
      <div className="bg-darysa-verde-oscuro flex flex-col items-center justify-center gap-3 rounded-sm border p-5 sm:flex-row sm:gap-6">
        <div className="text-start text-white lg:text-4xl">{items.first.icon}</div>
        <Heading
          as="h5"
          className="text-center text-base leading-none text-white sm:text-start sm:text-xl md:text-2xl"
        >
          {items.first.title}
        </Heading>
      </div>

      <div className="bg-darysa-gris-500 flex flex-col items-center justify-center gap-3 rounded-sm border p-5 sm:flex-row sm:gap-6">
        <div className="text-start text-4xl text-white">{items.second.icon}</div>
        <Heading
          as="h5"
          className="text-center text-base leading-none text-white sm:text-start sm:text-xl md:text-2xl"
        >
          {items.second.title}
        </Heading>
      </div>

      <div className="bg-darysa-verde-oscuro flex flex-col items-center justify-center gap-3 rounded-sm border p-5 sm:flex-row sm:gap-6">
        <div className="text-start text-4xl text-white">{items.third.icon}</div>
        <Heading
          as="h5"
          className="text-center text-base leading-none text-white sm:text-start sm:text-xl md:text-2xl"
        >
          {items.third.title}
        </Heading>
      </div>

      <div className="bg-darysa-gris-500 flex flex-col items-center justify-center gap-3 rounded-sm border p-5 sm:flex-row sm:gap-6">
        <div className="text-start text-4xl text-white">{items.fourth.icon}</div>
        <Heading
          as="h5"
          className="text-center text-base leading-none text-white sm:text-start sm:text-xl md:text-2xl"
        >
          {items.fourth.title}
        </Heading>
      </div>
    </div>
  );
}
