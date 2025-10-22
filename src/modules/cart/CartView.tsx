import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { CartItem } from './components/cart-view/CartItem';
import { ComplementaryProductsButton } from './components/cart-view/ComplementaryProductsButton';
import { CouponInput } from './components/cart-view/Couponinput';
import { CartSummary } from './components/cart-view/SummaryCart';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Carrito', isCurrent: true },
];

const CartView = () => {
  return (
    <>
      <Container className="bg-darysa-gris-800/20 h-px" />

      <Container>
        <div className="flex w-full flex-col gap-28 md:flex-row md:items-start md:justify-between">
          {/* Columna izquierda */}
          <div className="w-full space-y-6">
            <AppBreadcrumb items={breadcrumbItems} className="sm:gap-1.5" />

            <div className="w-full">
              <div className="w-full">
                {/* Encabezado */}
                <div className="text-darysa-gris-800 border-darysa-gris-800/20 grid grid-cols-[1fr_100px_150px_100px_50px] border-b pb-4 text-sm font-semibold">
                  <span>Producto</span>
                  <span className="text-start">Precio</span>
                  <span className="text-start">Cant</span>
                  <span className="text-start">Total</span>
                  <span className="sr-only text-start">Acción</span>
                </div>

                {/* Items */}
                <CartItem />
              </div>

              <div className="mt-14 space-y-11">
                <ComplementaryProductsButton />
                <CouponInput />
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="w-full md:max-w-sm">
            <CartSummary />
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartView;
