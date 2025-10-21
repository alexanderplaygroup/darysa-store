'use client';
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
import { ProductItemCart } from './ProductItemCart';

export function SidebarCart() {
  const { open, openUI, closeUI } = useUIStore();
  const isOpen = open.cart;
  return (
    <Sheet open={isOpen} onOpenChange={(val) => (val ? openUI('cart') : closeUI('cart'))}>
      <SheetContent className="gap-0 border-l-0 sm:max-w-[520px]">
        <SheetHeader className="border-darysa-gris-350 flex h-20 flex-row items-center border-b p-0">
          <div className="bg-darysa-gris-950 mr-4 h-full w-2.5 flex-none"></div>
          <SheetTitle className="mr-2">
            <ShoppingCart size={30} />
          </SheetTitle>
          <SheetDescription className="text-darysa-gris-950 text-xl">
            Carrito de Compras
          </SheetDescription>
        </SheetHeader>
        <div className="grid h-20 flex-1 auto-rows-min gap-6">
          <ProductItemCart
            product={{
              id: '1',
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
              image: '/images/product-item.png',
            }}
            handleRemoveProduct={(id) => console.log('Eliminar producto con id:', id)}
            handleUpdateAmount={(id, quantity) =>
              console.log(`Actualizar producto ${id} a cantidad ${quantity}`)
            }
          />
        </div>
        <SheetFooter className="bg-darysa-gris-950 rounded-t-2xl px-14 py-10">
          <div className="mb-11 w-full text-white">
            <p className="mb-10 flex w-full items-center justify-end text-sm font-bold">
              Total del carrito
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold">total</span>
              <span className="text-sm font-bold">S/1000</span>
            </div>
          </div>

          <button className="bg-darysa-green-500 mx-auto w-full max-w-[224px] rounded-lg py-2.5 font-bold text-white">
            Ir a pagar
          </button>
          {/* <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
