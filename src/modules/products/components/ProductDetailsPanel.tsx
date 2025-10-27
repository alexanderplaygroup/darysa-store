'use client';

import { Heading } from '@/common/components/custom-ui/Heading';
import { Text } from '@/common/components/custom-ui/Text';
import { Button } from '@/common/components/shadcn-ui/button';
import { formatDiscount, getDiscountedPrice, parseSoles } from '@/common/helpers/product';
import { Heart, MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetailsPanel() {
  const [selectedColor, setSelectedColor] = useState('green');

  const colors = [
    { id: 'green', name: 'Verde', hex: '#22c55e' },
    { id: 'orange', name: 'Naranja', hex: '#f97316' },
    { id: 'yellow', name: 'Amarillo', hex: '#eab308' },
  ];

  // Datos del producto (pueden venir de props o fetch)
  const product = {
    name: 'Jabón Líquido de Manos Caricias Frutales Daryza x 3.8 L',
    sku: '0000000',
    price: 60.5,
    discount: 12, // porcentaje
  };

  const discountedPrice = getDiscountedPrice(product.price, product.discount);
  const discountLabel = formatDiscount(product.discount);
  const paymentMethods = [
    { id: 'mastercard', icon: '💳', label: 'Mastercard' },
    { id: 'visa', icon: '💳', label: 'Visa' },
    { id: 'amex', icon: '💳', label: 'Amex' },
    { id: 'paypal', icon: '🅿️', label: 'PayPal' },
    { id: 'crypto', icon: '₿', label: 'Crypto' },
  ];

  const handleAddToCart = () => {
    console.log(`Agregado al carrito: 1 unidades`);
  };

  const handleBuyNow = () => {
    console.log(`Comprar ahora: 1 unidades`);
  };

  return (
    <div className="w-full">
      {/* Nombre del producto */}
      <Heading
        as="h1"
        variant="subheading"
        className="text-darysa-gris-800 mb-4 font-bold text-balance"
      >
        Jabón Líquido de Manos Caricías Frutales Daryza x 3.8 L
      </Heading>

      {/* SKU */}
      <Text variant="small" className="text-darysa-green-500 mb-10 font-medium">
        SKU: 0000000
      </Text>

      {/* Precios */}
      <div className="mb-13 flex items-center gap-6">
        <span className="text-4xl font-bold text-green-600">{parseSoles(discountedPrice)}</span>
        {discountLabel && (
          <span className="inline-block rounded-full bg-yellow-400 px-3.5 py-1 text-base font-semibold text-white">
            -{discountLabel} %
          </span>
        )}
        {discountLabel && (
          <span className="text-darysa-gris-oscuro text-2xl line-through">
            {parseSoles(product.price)}
          </span>
        )}
      </div>

      {/* Selector de colores */}
      <div className="mb-8">
        <p className="text-darysa-gris-800 mb-6 text-xl font-medium">Colores</p>
        <div className="flex gap-10">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`h-8 w-8 rounded-full transition-all ${
                selectedColor === color.id
                  ? 'ring-2 ring-gray-400 ring-offset-2'
                  : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Selector de cantidad */}
      <div className="mb-8">
        <p className="text-darysa-gris-800 mb-6 text-xl font-medium">Cantidad</p>
        {/* Controles de cantidad */}
        <div className="flex max-w-[360px] items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="icon"
              className="bg-darysa-green-500 hover:bg-darysa-green-500 size-14 rounded"
            >
              <MinusIcon strokeWidth={4} />
            </Button>

            <span className="border-darysa-green-500 text-darysa-green-500 flex size-14 items-center justify-center rounded border px-10 text-center text-sm font-bold lg:text-lg">
              1
            </span>

            <Button
              variant="default"
              size="icon"
              className="hover:bg-darysa-green-500 bg-darysa-green-500 mr-6 size-14 rounded"
            >
              <PlusIcon strokeWidth={4} />
            </Button>
          </div>
          <span className="text-darysa-green-500 border-darysa-green-500 flex size-14 items-center justify-center rounded-full border">
            <Heart />
          </span>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="mb-8 max-w-[360px] space-y-7">
        <button
          onClick={handleAddToCart}
          className="border-darysa-green-500 text-darysa-green-500 flex h-12 w-full items-center justify-center gap-4 rounded-lg border bg-white py-3 leading-none font-bold transition-colors hover:bg-green-50"
        >
          <ShoppingCart size={20} strokeWidth={3} />
          Agregar a Carrito
        </button>
        <button
          onClick={handleBuyNow}
          className="bg-darysa-gris-800 flex h-12 w-full items-center justify-center gap-4 rounded-lg border py-3 leading-none font-bold text-white transition-colors"
        >
          <ShoppingCart size={20} strokeWidth={3} />
          Comprar Ahora
        </button>
      </div>

      <div className="flex justify-start gap-2">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-gray-100 text-lg transition-colors hover:bg-gray-200"
            title={method.label}
          >
            {method.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
