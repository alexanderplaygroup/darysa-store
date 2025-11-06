'use client';

import { ExpressTruckIcon } from '@/common/components/icons/ExpressTruckIcon';
import { Button } from '@/common/components/shadcn-ui/button';
import { ScrollArea } from '@/common/components/shadcn-ui/scroll-area';
import { useUIStore } from '@/common/store/useUIStore';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@shadcnui/sheet';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { ProductItemCart } from './ProductItemCart';

export default function SidebarCart() {
  const { open, openUI, closeUI } = useUIStore();
  const isOpen = open.cart;

  return (
    <Sheet open={isOpen} onOpenChange={(val) => (val ? openUI('cart') : closeUI('cart'))}>
      <SheetContent className="w-full gap-0 border-0 sm:max-w-[520px]">
        <SheetHeader className="flex min-h-20 flex-row items-center p-0 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <div className="bg-darysa-gris-950 mr-4 h-full w-2.5 flex-none" />
          <SheetTitle className="mr-2">
            <ShoppingCart size={30} />
          </SheetTitle>
          <SheetDescription className="text-darysa-gris-950 text-xl">
            Carrito de Compras
          </SheetDescription>
        </SheetHeader>

        <div className="min-h-0 flex-1">
          <ScrollArea className="h-full w-full">
            {[1, 2].map((i) => (
              <ProductItemCart
                key={i}
                product={{
                  id: `${i}`,
                  slug: 'zapatillas-nike-air-max',
                  name: 'Zapatillas Nike Air Max 270',
                  sku: 'NK-AM270-BLK-42',
                  quantity: 2,
                  price: 459.9,
                  originalPrice: 529.9,
                  discount: 13,
                  inPromotion: true,
                  color: 'Negro',
                  size: '42',
                  image: '/product/product.png',
                }}
                handleRemoveProduct={(id) => console.log('Eliminar producto con id:', id)}
                handleUpdateAmount={(id, quantity) =>
                  console.log(`Actualizar producto ${id} a cantidad ${quantity}`)
                }
              />
            ))}
          </ScrollArea>
          {/* <div className="flex h-full min-h-0 flex-col items-center justify-center overflow-y-auto">
            <ShoppingCartIcon className="text-darysa-gris-800 mb-2 size-16 flex-none" />
            <p className="text-darysa-gris-800 mb-6 text-lg">Tu carrito está vacío</p>
            <Button variant="darizaPrimary" className="px-10!">
              Comenzar a comprar
            </Button>
          </div> */}
        </div>
        <div className="shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
          <div className="bg-darysa-amarillo text-darysa-gris-950 flex h-[62px] items-center justify-center gap-8 text-base font-black sm:px-12">
            <ExpressTruckIcon />
            <p className="leading-tight">Falta S/.74.50 para envío gratis</p>
            <ExpressTruckIcon className="hidden sm:block" />
          </div>
        </div>
        <SheetFooter className="bg-darysa-gris-950 px-14 py-10">
          <div className="mb-6 w-full text-white">
            <p className="mb-8 flex w-full items-center justify-end text-base font-bold">
              Total del carrito
            </p>
            <dl className="flex items-center justify-between">
              <dt className="text-xl font-bold">Total</dt>
              <dd className="text-sm font-bold">S/1000</dd>
            </dl>
          </div>

          <Button
            asChild
            className="bg-darysa-green-500 hover:bg-darysa-green-500/80 mx-auto w-full max-w-56 rounded-sm py-2.5 font-bold text-white"
          >
            <Link href="/carrito" onClick={() => closeUI('cart')}>
              Ir a pagar
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
