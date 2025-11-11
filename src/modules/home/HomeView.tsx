'use client';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { PromotionalBanner } from '@/common/components/custom-ui/PromotionalBanner';
import { HeadsetIcon, Lock, Shield, Truck } from 'lucide-react';
import { BenefitsSection } from './components/BenefitsSection';
import { Banner } from './components/carousel-banner/Banner';
import CarouselBlogs from './components/CarouselBlogs';
import CarouselBrands from './components/CarouselBrands';
import CarouselPacks from './components/CarouselPacks';
import { PromotionalGrid } from './components/PromotionalGrid';
import { PromotionalModal } from './components/PromotionalModal';
import { products, promoBanner, promoItems } from './data';
import { BenefitItems } from './type';

export const HomeView = () => {
  const benefitsData: BenefitItems = {
    first: {
      title: 'Productos certificados con respaldo técnico garantizado',
      icon: <Shield className="size-8 lg:size-10" />,
    },
    second: {
      title: 'Envíos a toda Lima Metropolitana',
      icon: <Truck className="size-8 lg:size-10" />,
    },
    third: {
      title: 'Servicio postventa comprometido contigo',
      icon: <HeadsetIcon className="size-8 lg:size-10" />,
    },
    fourth: {
      title: 'Pagos 100% seguros y protegidos',
      icon: <Lock className="size-8 lg:size-10" />,
    },
  };
  return (
    <>
      <Container size="full">
        <Banner />
      </Container>

      <Container className="w-full space-y-8">
        <Heading as="h3" variant="heading" className="text-darysa-gris-800">
          Marcas Aliadas
        </Heading>
        <div className="aspect-16/3 h-[136px] w-full">
          <CarouselBrands />
        </div>
      </Container>

      <Container className="space-y-8">
        <Heading as="h3" variant="heading" className="text-darysa-gris-800">
          Los más vendidos
        </Heading>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:gap-14">
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
      </Container>

      <Container size="full" className="relative">
        <PromotionalBanner banner={promoBanner} />
      </Container>

      <Container>
        <PromotionalGrid items={promoItems} />
      </Container>

      <Container>
        <BenefitsSection items={benefitsData} />
      </Container>

      <Container className="space-y-8">
        <CarouselPacks />
      </Container>
      <Container className="space-y-8">
        <CarouselBlogs />
      </Container>
      <PromotionalModal modal="/home/modal.png" />
    </>
  );
};
