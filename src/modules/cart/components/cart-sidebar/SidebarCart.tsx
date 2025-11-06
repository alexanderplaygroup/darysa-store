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
      <SheetContent className="w-full gap-0 border-l-0 sm:max-w-[520px]">
        <SheetHeader className="flex min-h-20 flex-row items-center p-0">
          <div className="bg-darysa-gris-950 mr-4 h-full w-2.5 flex-none"></div>
          <SheetTitle className="mr-2">
            <ShoppingCart size={30} />
          </SheetTitle>
          <SheetDescription className="text-darysa-gris-950 text-xl">
            Carrito de Compras
          </SheetDescription>
        </SheetHeader>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <ScrollArea className="h-full max-h-[318px] w-full">
            <div className="flex w-full flex-1 flex-col">
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
                  image: '/product/product.png',
                }}
                handleRemoveProduct={(id) => console.log('Eliminar producto con id:', id)}
                handleUpdateAmount={(id, quantity) =>
                  console.log(`Actualizar producto ${id} a cantidad ${quantity}`)
                }
              />

              <ProductItemCart
                product={{
                  id: '1',
                  slug: 'zapatillas-nike-air-max',
                  name: 'Zapatillas Nike Air Max 270',
                  sku: 'NK-AM270-BLK-42',
                  quantity: 2,
                  price: 459.9,
                  originalPrice: 529.9,

                  color: 'Negro',
                  size: '42',
                  image: '/product/product.png',
                }}
                handleRemoveProduct={(id) => console.log('Eliminar producto con id:', id)}
                handleUpdateAmount={(id, quantity) =>
                  console.log(`Actualizar producto ${id} a cantidad ${quantity}`)
                }
              />
              <ProductItemCart
                product={{
                  id: '1',
                  slug: 'zapatillas-nike-air-max',
                  name: 'Zapatillas Nike Air Max 270',
                  sku: 'NK-AM270-BLK-42',
                  quantity: 2,
                  price: 459.9,
                  originalPrice: 529.9,

                  color: 'Negro',
                  size: '42',
                  image: '/product/product.png',
                }}
                handleRemoveProduct={(id) => console.log('Eliminar producto con id:', id)}
                handleUpdateAmount={(id, quantity) =>
                  console.log(`Actualizar producto ${id} a cantidad ${quantity}`)
                }
              />
            </div>
          </ScrollArea>

          <div className="pt-0 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] 2xl:pt-16">
            <div className="bg-darysa-amarillo text-darysa-gris-950 flex h-[62px] items-center justify-center gap-8 px-12 text-base font-black">
              <ExpressTruckIcon className="tex" />
              <span>Falta S/.74.50 para envió gratis</span>
              <ExpressTruckIcon className="tex" />
            </div>
          </div>
        </div>
        <SheetFooter className="bg-darysa-gris-950 rounded-t-2xl px-14 py-10">
          <div className="mb-6 w-full text-white">
            <p className="mb-8 flex w-full items-center justify-end text-base font-bold">
              Total del carrito
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">total</span>
              <span className="text-sm font-bold">S/1000</span>
            </div>
          </div>

          <Button
            className="bg-darysa-green-500 hover:bg-darysa-green-500/80 mx-auto w-full max-w-56 rounded-sm py-2.5 font-bold text-white"
            asChild
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
