import { ProductCategoriesIcon } from '@/common/components/icons/MenuCategoriesIcon';
import { Button } from '@shadcnui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@shadcnui/sheet';
import { X } from 'lucide-react';
import { FiltersSection } from './FilterSection';

export function FilterSectionMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="'hover:bg-darysa-verde-oscuro text-darysa-verde-oscuro border-darysa-verde-oscuro hover:text-darysa-green-500 flex h-12 gap-3 rounded-lg bg-transparent px-3.5 text-xs font-semibold transition-colors duration-300 ease-in-out hover:bg-transparent sm:px-4.5! sm:text-sm"
        >
          <ProductCategoriesIcon className="size-4.5" />
          Categorías de Productos
        </Button>
      </SheetTrigger>
      <SheetContent className="border-0 [&_svg]:top-10 [&_svg]:text-white" showCloseButton={false}>
        <SheetHeader className="sr-only">
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="relative h-full">
          <SheetClose asChild>
            <Button
              variant="default"
              size="icon"
              className="absolute top-3 right-1 bg-transparent text-white hover:bg-transparent"
            >
              <X />
            </Button>
          </SheetClose>
          <FiltersSection />
        </div>
      </SheetContent>
    </Sheet>
  );
}
