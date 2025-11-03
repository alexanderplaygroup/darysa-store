'use client';
import { AppImage } from '@/common/components/custom-ui/AppImage';
import { Heading } from '@/common/components/custom-ui/Heading';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { Text } from '@/common/components/custom-ui/Text';

const BrandProducts = () => {
  const products = [
    {
      id: 1,
      image: '/images/product1.jpg',
      name: 'Producto BIO A',
      sku: 'BIO-A-001',
      brand: 'Marca A',
      price: 29.99,
      discount: 10, // en porcentaje
    },
    {
      id: 2,
      image: '/images/product2.jpg',
      name: 'Producto BIO B',
      sku: 'BIO-B-002',
      brand: 'Marca B',
      price: 39.99,
      discount: 0,
    },
    {
      id: 3,
      image: '/images/product3.jpg',
      name: 'Producto BIO C',
      sku: 'BIO-C-003',
      brand: 'Marca C',
      price: 19.99,
      discount: 5,
    },
    {
      id: 4,
      image: '/images/product4.jpg',
      name: 'Producto BIO D',
      sku: 'BIO-D-004',
      brand: 'Marca D',
      price: 49.99,
      discount: 15,
    },
  ];

  return (
    <>
      <div className="mb-12 text-center">
        <Heading variant="heading" className="mb-2">
          Productos de la marca
        </Heading>
        <Text variant="small" className="text-darysa-gris-800 mx-auto max-w-[821px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada a justo, interdum
          condimentum massa ultrices tempor semper ridiculus facilisis diam phasellus, gravida
          venenatis nisl lacinia scelerisque.
        </Text>
      </div>
      <div className="mb-16 grid grid-cols-5 gap-28">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <AppImage src="" alt="" fill sizes="180px" />
          </div>
          <Heading as="h6" variant="cardTitle" className="md:text-2xl">
            Pasión
          </Heading>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <AppImage src="" alt="" fill sizes="180px" />
          </div>
          <Heading as="h6" variant="cardTitle" className="md:text-2xl">
            Pasión
          </Heading>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <AppImage src="" alt="" fill sizes="180px" />
          </div>
          <Heading as="h6" variant="cardTitle" className="md:text-2xl">
            Pasión
          </Heading>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <AppImage src="" alt="" fill sizes="180px" />
          </div>
          <Heading as="h6" variant="cardTitle" className="md:text-2xl">
            Pasión
          </Heading>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <AppImage src="" alt="" fill sizes="180px" />
          </div>
          <Heading as="h6" variant="cardTitle" className="md:text-2xl">
            Pasión
          </Heading>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            sku={product.sku}
            brand={product.brand}
            price={product.price}
            discount={product.discount}
            onAddToCart={() => console.log('Add to cart:', product.name)}
            onToggleFavorite={() => console.log('Toggle favorite:', product.name)}
          />
        ))}
      </div>
    </>
  );
};

export default BrandProducts;
