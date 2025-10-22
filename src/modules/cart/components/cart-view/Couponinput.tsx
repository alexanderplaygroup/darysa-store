import { Button } from '@/common/components/shadcn-ui/button';
import { Input } from '@/common/components/shadcn-ui/input';
import { Ticket } from 'lucide-react';

export function CouponInput() {
  return (
    <div className="border-darysa-green-500 flex h-14 max-w-[420px] items-center gap-3 rounded-lg border">
      <Button className="bg-darysa-green-500 hover:bg-darysa-green-600 flex h-full! items-center gap-3.5 px-5! leading-none font-bold text-white">
        <Ticket className="size-6" />
        Agregar Cupón
      </Button>
      <Input
        placeholder="Escribe aquí"
        className="placeholder:text-darysa-gris-300 flex-1 border-none pl-0 text-center placeholder:font-semibold focus-visible:ring-0"
      />
    </div>
  );
}
