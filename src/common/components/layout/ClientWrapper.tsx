'use client';

import dynamic from 'next/dynamic';
import { Toaster } from 'sonner';

const MenuMobile = dynamic(() => import('@/common/components/layout/header/MenuMobile'), {
  ssr: false,
});

const SidebarCart = dynamic(() => import('@/modules/cart/components/cart-sidebar/SidebarCart'), {
  ssr: false,
});

export function ClientWrapper() {
  return (
    <>
      <SidebarCart />
      <MenuMobile />
      <Toaster
        richColors
        closeButton
        toastOptions={{
          classNames: {
            // 🔹 Asegura que el toast se centre horizontalmente y use su propio ancho
            toast: 'flex items-center justify-center min-[601px]:w-full! ',
          },
        }}
      />
    </>
  );
}
