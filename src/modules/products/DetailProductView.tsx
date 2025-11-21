import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { PromotionalBanner } from '@/common/components/custom-ui/PromotionalBanner';
import CarouselRelatedProducts from './components/CarouselRelatedProducts';
import { ProductDetailsAccordion } from './components/ProductDetailsAccordion';
import ProductDetailsPanel from './components/ProductDetailsPanel';
import { ProductDetailsTabs } from './components/ProductDetailTabs';
import { ProductImageCarousel } from './components/ProductImageCarousel';
import { promoBanner } from './data';

const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Producto', isCurrent: true },
];
export default function DetailProductView() {
  const images = [
    '/product/productoRosado.png',
    '/product/productoRosado.png',
    '/product/productoRosado.png',
    '/product/productoRosado.png',
    '/product/productoRosado.png',
    '/product/productoRosado.png',
    '/product/productoRosado.png',
    '/product/productoRosado.png',
  ];

  return (
    <>
      {/* <Container className="bg-darysa-gris-800/20 h-px" /> */}
      <Container className="mt-8 mb-7">
        <AppBreadcrumb items={breadcrumbItems} />
      </Container>
      <Container className="grid grid-cols-1 items-start gap-8 md:gap-16 lg:mb-16 lg:grid-cols-2">
        <ProductImageCarousel images={images} />
        <ProductDetailsPanel />
      </Container>
      <Container className="mb-16">
        <ProductDetailsAccordion />

        <div className="hidden lg:block">
          <ProductDetailsTabs />
        </div>
      </Container>

      <Container size="full" className="relative mb-16">
        <PromotionalBanner banner={promoBanner} />
      </Container>
      <Container className="space-y-8">
        <CarouselRelatedProducts />
      </Container>
    </>
  );
}
