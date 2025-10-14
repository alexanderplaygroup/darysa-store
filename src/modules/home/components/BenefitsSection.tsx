import { Heading } from '@/common/components/custom-ui/Heading';
import { cn } from '@/lib/utils';
import { BenefitItems } from '../type';

type BenefitsSectionProps = {
  items: BenefitItems;
  className?: string;
};

export function BenefitsSection({ items, className }: BenefitsSectionProps) {
  return (
    <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-4', className)}>
      <div className="bg-darysa-verde-oscuro flex items-center justify-center gap-6 rounded-sm border p-6">
        <div className="text-start text-4xl text-white">{items.first.icon}</div>
        <Heading as="h5" className="leading-none text-white lg:text-2xl">
          {items.first.title}
        </Heading>
      </div>

      <div className="bg-darysa-gris-oscuro-alt-2 flex items-center justify-center gap-6 rounded-sm border p-6">
        <div className="text-start text-4xl text-white">{items.second.icon}</div>
        <Heading as="h5" className="leading-none text-white lg:text-2xl">
          {items.second.title}{' '}
        </Heading>
      </div>

      <div className="bg-darysa-verde-oscuro flex items-center justify-center gap-6 rounded-sm border p-6">
        <div className="text-start text-4xl text-white">{items.third.icon}</div>
        <Heading as="h5" className="leading-none text-white lg:text-2xl">
          {items.third.title}
        </Heading>
      </div>

      <div className="bg-darysa-gris-oscuro-alt-2 flex items-center justify-center gap-6 rounded-sm border p-6">
        <div className="text-start text-4xl text-white">{items.fourth.icon}</div>
        <Heading as="h5" className="leading-none text-white lg:text-2xl">
          {items.fourth.title}{' '}
        </Heading>
      </div>
    </div>
  );
}
