'use client';
import { Container } from '@/common/components/custom-ui/Container';
import { ProductCard } from '@/common/components/custom-ui/product/productCard';
import { PromotionalBanner } from '@/common/components/custom-ui/PromotionalBanner';
import { ProductCategoriesIcon } from '@/common/components/icons/MenuCategoriesIcon';
import { Button } from '@/common/components/shadcn-ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/shadcn-ui/select';
import { cn } from '@/lib/utils';
import { products } from '../home/data';
import { FiltersSection } from './components/FilterSection';
import { FilterSectionMobile } from './components/FIlterSectionMobile';
import { promoBanner } from './data';
import { useSidebarStore } from './store/useSidebarProducts';
import styles from './styles/products.module.css';
export const ProductsView = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <>
      <Container size="full" className="relative mb-9">
        <PromotionalBanner className="aspect-16/4 h-[250px] lg:aspect-16/2" banner={promoBanner} />
      </Container>
      <Container className="relative">
        <Container className="mb-9 flex items-center justify-between gap-4 px-0!">
          <Button
            variant="outline"
            className={cn(
              'hover:bg-darysa-verde-oscuro hidden h-12 gap-3 rounded-lg px-4.5! text-base font-semibold transition-colors duration-300 ease-in-out hover:text-white lg:flex',
              isOpen
                ? 'bg-darysa-verde-oscuro! border-darysa-verde-oscuro text-white!'
                : 'text-darysa-verde-oscuro border-darysa-verde-oscuro bg-transparent'
            )}
            onClick={toggleSidebar}
          >
            <ProductCategoriesIcon className="size-6" />
            Categorías de Productos
          </Button>
          <div className="block lg:hidden">
            <FilterSectionMobile />
          </div>
          <Select>
            <SelectTrigger className="border-darysa-gris-350-alt/50! text-darysa-gris-550-3/80! line-clamp-1 flex h-12! max-w-[250px] px-4.5 font-semibold max-sm:text-xs">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="price-high">Por: Precio de mayor a menor</SelectItem>
              <SelectItem value="price-low">Por: Precio de menor a mayor</SelectItem>
            </SelectContent>
          </Select>
        </Container>
        {/* Contenedor general (aside + productos) */}
        <div
          className={cn(
            'relative grid gap-2.5 transition-all duration-300 ease-in-out lg:grid-cols-4 lg:gap-4 xl:gap-10'
          )}
        >
          {/* ASIDE */}
          {isOpen && (
            <aside
              className={cn(
                'hidden lg:block',
                isOpen ? styles.slideIn : styles.slideOut,
                'col-span-1'
              )}
            >
              <FiltersSection />
            </aside>
          )}

          {/* PRODUCTOS */}
          <div
            className={cn(
              'grid gap-2.5 lg:gap-4 xl:gap-10',
              'grid-cols-2 md:grid-cols-3',
              isOpen ? 'lg:col-span-3 lg:grid-cols-3' : 'lg:col-span-4 lg:grid-cols-4'
            )}
          >
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
        </div>
      </Container>
    </>
  );
};
