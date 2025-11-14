import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { PromotionalBanner } from '@/common/components/custom-ui/PromotionalBanner';
import CarouselBestSellers from './components/CarouselBestSellers';
import { CartItemDesktop } from './components/cart-view/CartItemDesktop';
import { CartItemMobile } from './components/cart-view/CartItemMobile';
import { ComplementaryProductsButton } from './components/cart-view/ComplementaryProductsButton';
import { CouponInput } from './components/cart-view/Couponinput';
import { CartSummary } from './components/cart-view/SummaryCart';
import { promoBanner } from './data';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Carrito', isCurrent: true },
];

const CartView = () => {
  return (
    <>
      <Container className="bg-darysa-gris-800/20 h-px" />
      <Container className="mb-4">
        {' '}
        <AppBreadcrumb items={breadcrumbItems} className="sm:gap-1.5" />
      </Container>
      <Container>
        <div className="flex w-full flex-col gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:gap-28">
          {/* Columna izquierda */}

          <div className="w-full">
            <div className="w-full">
              {/* Encabezado */}
              <div className="text-darysa-gris-800 border-darysa-gris-800/20 hidden grid-cols-[1fr_100px_150px_100px_50px] border-b pb-4 text-sm font-semibold md:grid">
                <span>Producto</span>
                <span className="text-start">Precio</span>
                <span className="text-start">Cant</span>
                <span className="text-start">Total</span>
                <span className="sr-only text-start">Acción</span>
              </div>
              <h4 className="text-darysa-gris-950 mb-5 block text-xl font-semibold md:hidden">
                Carrito de Compra
              </h4>

              {/* Items */}
              <CartItemDesktop />

              <CartItemMobile />
            </div>

            <div className="mt-14 space-y-11">
              <ComplementaryProductsButton />
              <CouponInput />
            </div>
          </div>

          {/* Columna derecha */}
          <div className="w-full lg:max-w-sm">
            <CartSummary />
          </div>
        </div>
      </Container>

      <Container size="full" className="relative">
        <PromotionalBanner banner={promoBanner} />
      </Container>
      <Container className="space-y-8">
        <CarouselBestSellers />
      </Container>
    </>
  );
};

export default CartView;
