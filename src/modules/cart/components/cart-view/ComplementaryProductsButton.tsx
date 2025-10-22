import { AddBoxIcon } from '@/common/components/icons/AddBoxIcon';
import { Button } from '@/common/components/shadcn-ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/common/components/shadcn-ui/dialog';
import { X } from 'lucide-react';
import CarouselProductosInModal from './CarouselProductosInModal';

export const ComplementaryProductsButton = () => {
  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-darysa-gris-450 hover:text-darysa-gris-450 border-darysa-gris-350 flex h-12 items-center gap-3.5 border-2 px-6! font-semibold"
        >
          <AddBoxIcon className="size-7" />
          Productos Complementarios
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="gap-7! rounded-lg border-none p-0 sm:max-w-5xl"
      >
        <DialogClose className="bg-darysa-green-500 absolute -top-4.5 -right-4.5 z-20 flex size-11 cursor-pointer items-center justify-center rounded-full text-white drop-shadow-lg">
          <X strokeWidth={3.5} className="size-6" />
        </DialogClose>
        <DialogHeader className="px-10 pt-8">
          <DialogTitle className="text-2xl font-semibold">
            Complementa tu compra con estos accesorios.
          </DialogTitle>
          <DialogDescription className="sr-only">
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full overflow-hidden px-10 pb-8">
          <CarouselProductosInModal />
        </div>
      </DialogContent>
    </Dialog>
  );
};
