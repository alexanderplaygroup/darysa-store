'use client';

import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { CardVisaIcons } from '@/common/components/icons/CardVisaIcons';
import { ShoppingCartCheck } from '@/common/components/icons/ShoppingCartCheck';
import { parseSoles } from '@/common/helpers/product';
import Address from './components/transfer-bank/address';
import CompanyAccounts from './components/transfer-bank/CompanyAccounts';
import FormImagePaid from './components/transfer-bank/FormImagePaid';
import { ProductItem } from './components/transfer-bank/ProductItem';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Transferencia Bancaria', isCurrent: true },
];

const TransferView = () => {
  const order = {
    purchaseOrderNumber: 'PED-2025-00123',
    createdAt: '07/11/2025',
    total: 256.9,
    subTotal: 230,
    shippingCost: 10,
    discount: 0,
    methodPaymentName: 'Transferencia Bancaria',
    paymentId: 'PAY-123456',
    contact: { email: 'cliente@correo.com', dni: '12345678', ruc: '' },
    address: { district: 'Miraflores' },
    items: [
      {
        id: 1,
        name: 'Detergente Multiusos 1L',
        price: 25.9,
        quantity: 2,
        total: 51.8,
        image: '/images/sample-product.png',
      },
      {
        id: 2,
        name: 'Paño Microfibra Premium',
        price: 9.9,
        quantity: 3,
        total: 29.7,
        image: '/images/sample-product.png',
      },
      {
        id: 3,
        name: 'Limpiador Antigrasa 500ml',
        price: 14.5,
        quantity: 5,
        total: 72.5,
        image: '/images/sample-product.png',
      },
    ],
  };

  return (
    <>
      <Container className="bg-darysa-gris-800/20 h-px" />

      <Container className="mb-6">
        <AppBreadcrumb items={breadcrumbItems} />
      </Container>

      <Container>
        <div className="mb-12">
          <div className="border-darysa-green-500 text-darysa-green-500 mb-6 flex h-[60px] items-center justify-center gap-3 rounded-xl border">
            <ShoppingCartCheck size={32} />
            <p className="text-sm font-bold sm:text-base md:text-lg">
              Muchas Gracias. Tu pedido ha sido recibido.
            </p>
          </div>

          <div className="text-darysa-gris-800 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 sm:gap-3 md:grid-cols-[1fr_1fr_0.4fr] md:gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-[auto_auto_auto_auto_auto] xl:gap-6">
            <span>Número de pedido: {order.purchaseOrderNumber}</span>
            <span>Fecha: {order.createdAt}</span>
            <span>Total: {parseSoles(order.total)}</span>
            <span>Correo electrónico: {order.contact.email}</span>
            <span>Método de pago: {order.methodPaymentName}</span>
          </div>
        </div>

        {/* 🏦 Detalles bancarios */}
        <section className="text-darysa-gris-800 mb-12">
          <h1 className="mb-8 flex items-center gap-4 text-xl font-semibold sm:gap-6 sm:text-2xl">
            <CardVisaIcons size={32} />
            Nuestros Detalles Bancarios
          </h1>

          <div>
            <h2 className="text-darysa-gris-800 mb-4 text-lg font-semibold sm:text-xl">
              Daryza SAC:
            </h2>
            <CompanyAccounts />
          </div>
        </section>

        {/* 🛒 Detalles del pedido */}
        <section className="mb-12">
          <h2 className="text-darysa-gris-800 mb-8 flex items-center gap-4 text-xl font-semibold sm:gap-6 sm:text-2xl">
            <ShoppingCartCheck />
            Detalles del pedido
          </h2>

          <div className="text-darysa-gris-800 mb-10 divide-y divide-black rounded-2xl border border-black p-6 sm:p-8">
            <div className="space-y-6 pb-8">
              <div className="grid grid-cols-[1.5fr_0.5fr] text-base font-semibold sm:text-xl">
                <span>Producto</span> <span className="max-sm:text-end">Total</span>
              </div>
              <div className="space-y-4">
                {order.items.map((product) => (
                  <ProductItem key={product.id} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-[1.5fr_0.5fr] py-4 text-sm font-semibold sm:py-6 sm:text-base">
              <span>Subtotal:</span>
              <span className="flex justify-end sm:justify-start">
                {parseSoles(order.subTotal)}
              </span>
            </div>

            <div className="grid grid-cols-[1.5fr_0.5fr] py-4 text-sm font-semibold sm:py-6 sm:text-base">
              <span>Envío:</span>
              <span className="flex justify-end sm:justify-start">
                {order.shippingCost === 0 ? 'Gratis' : parseSoles(order.shippingCost)}
              </span>
            </div>

            <div className="grid grid-cols-[1.5fr_0.5fr] py-4 text-sm font-semibold sm:py-6 sm:text-base">
              <span>Método de pago:</span>
              <span className="flex justify-end sm:justify-start">{order.methodPaymentName}</span>
            </div>

            <div className="grid grid-cols-[1.5fr_0.5fr] pt-4 text-sm font-semibold sm:pt-6 sm:text-base">
              <span>Total:</span>
              <span className="flex justify-end sm:justify-start">{parseSoles(order.total)}</span>
            </div>
          </div>

          <FormImagePaid paymentId={order.paymentId} />
        </section>

        {/* 📦 Dirección */}
        <div className="text-darysa-gris-800">
          <div className="mb-12 divide-y divide-black rounded-2xl border border-black p-6 sm:p-8">
            {!order.contact.ruc && (
              <div className="grid grid-cols-[1.5fr_0.5fr] pb-4 text-sm font-semibold sm:text-base">
                <span>DNI:</span>
                <span className="text-end sm:text-start">{order.contact.dni}</span>
              </div>
            )}

            <div className="grid grid-cols-[1.5fr_0.5fr] pt-4 text-sm font-semibold sm:pt-6 sm:text-base">
              <span>Distrito:</span>
              <span className="text-end sm:text-start">{order.address.district}</span>
            </div>
          </div>

          <Address />
        </div>
      </Container>
    </>
  );
};

export default TransferView;
