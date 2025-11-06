import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Button } from '@/common/components/shadcn-ui/button';
import { Separator } from '@/common/components/shadcn-ui/separator';
import Link from 'next/link';

export function CartSummary() {
  return (
    <div className="sticky top-[125px] w-full max-w-full">
      <h4 className="text-darysa-gris-950 mb-5 text-xl font-semibold">Resumen</h4>

      <h5 className="text-darysa-gris-950 mb-4 text-base font-semibold">Mi Pedido</h5>
      <Separator className="bg-darysa-gris-800/20 mb-6" />

      <div className="space-y-3.5 text-sm">
        <div className="flex justify-between">
          <span className="text-darysa-gris-950 text-base font-semibold">Total</span>
          <span className="text-darysa-gris-950 font-semibold">S/13,047.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-darysa-gris-950 text-base font-semibold">Delivery</span>
          <span className="text-darysa-gris-950 font-semibold">S/21.00</span>
        </div>
        <p className="text-darysa-gris-350 text-xs font-normal">
          (Precio estándar de la dirección de envío)
        </p>

        <Separator className="bg-darysa-gris-800/20" />

        <div className="mb-8 flex justify-between text-base font-semibold">
          <span className="text-darysa-gris-950 text-base font-semibold">Precio Total</span>
          <span className="text-darysa-gris-950 font-semibold">S/13,068.00</span>
        </div>

        <Button
          className="bg-darysa-green-500 hover:bg-darysa-green-600 h-12 w-full text-base text-white"
          asChild
        >
          <Link href="/checkout">Finalizar pedido</Link>
        </Button>

        <div className="flex items-center justify-center gap-3 pt-2">
          <AppImage src="/paypal.svg" alt="PayPal" className="w-[50px]" width={50} height={20} />
          <AppImage src="/visa.svg" alt="Visa" className="w-[50px]" width={50} height={20} />
        </div>
      </div>
    </div>
  );
}
